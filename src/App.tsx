import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WahanaDetail from "./pages/WahanaDetail";
import Reservasi from "./pages/Reservasi";
import SpotDetail from "./pages/SpotDetail";
import Konfirmasi from "./pages/Konfirmasi";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wahana/:wahanaId" element={<WahanaDetail />} />
          <Route path="/reservasi/:wahanaId" element={<Reservasi />} />
          <Route path="/spot/:spotId" element={<SpotDetail />} />
          <Route path="/konfirmasi" element={<Konfirmasi />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
