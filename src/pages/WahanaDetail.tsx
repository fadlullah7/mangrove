import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { wahanas } from "../data";
import { useReservation } from "../context/ReservationContext";
import { ArrowLeft, Check } from "lucide-react";

import c11 from "../assets/carousel 11.png";
import c5 from "../assets/carousel 5.png";
import imgEdukasi from "../assets/imgEdukasi.png";

const wahanaImages: Record<string, string> = {
  "perahu": c11,
  "jogging": c5,
  "edukasi": imgEdukasi,
};

export default function WahanaDetail() {
  const { wahanaId } = useParams();
  const wahana = wahanas.find((w) => w.id === wahanaId);
  const { setWahana } = useReservation();
  const navigate = useNavigate();

  if (!wahana) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl">Wahana tidak ditemukan</h1>
        <Link to="/" className="stamp-btn text-teal mt-6 inline-block">
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  const onReserve = () => {
    setWahana(wahana.id);
    navigate(`/reservasi/${wahana.id}`);
  };

  const onBack = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("wahana")?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return (
    <div className="paper grain py-12">
      <div className="max-w-5xl mx-auto px-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-teal font-stamp text-xs font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Kembali
        </button>
        <div className="mt-6 grid gap-10 md:grid-cols-2 items-center">
          <div className="flex justify-center">
          <div className="rotate-[-1deg] border-4 border-ink bg-cream p-3 shadow-[6px_6px_0_#3B2A20] mx-auto max-w-sm md:max-w-none">
            <img
              src={wahanaImages[wahana.id] ?? c11}
              alt={wahana.name}
              className="w-full h-auto object-cover"
            />
          </div>
          </div>
          <div>
            <div className="font-stamp text-xs font-medium text-rust">
              Wahana
            </div>
            <h1 className="mt-2 text-5xl">{wahana.name}</h1>
            <p className="mt-3 text-ink/80">{wahana.description}</p>
            <div className="mt-6 flex flex-wrap gap-3 font-stamp text-xs font-medium">
              <span className="border-2 border-teal text-teal px-3 py-1 rounded-full">
                {wahana.price}
              </span>
            </div>
            <div className="mt-6 ticket">
              <h2 className="text-xl">Termasuk</h2>
              <ul className="mt-3 space-y-2">
                {wahana.includes.map((i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <Check className="w-4 h-4 mt-1 text-teal" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <button onClick={onReserve} className="stamp-btn text-rust mt-8">
              Reservasi Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

