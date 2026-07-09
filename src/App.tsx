import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import WahanaDetail from "./pages/WahanaDetail";
import Reservasi from "./pages/Reservasi";
import SpotDetail from "./pages/SpotDetail";
import Konfirmasi from "./pages/Konfirmasi";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // Wait for DOM render then scroll to target element
      const id = hash.replace("#", "");
      const tryScroll = (attempts = 0) => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else if (attempts < 10) {
          setTimeout(() => tryScroll(attempts + 1), 80);
        }
      };
      tryScroll();
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
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
