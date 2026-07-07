import { Link, useNavigate, useParams } from "react-router-dom";
import { spots } from "../data";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";

import c5 from "../assets/carousel 5.png";
import c7 from "../assets/carousel 7.png";
import c9 from "../assets/carousel 9.png";
import c10 from "../assets/carousel10.png";

const spotImages: Record<string, string> = {
  "mic": c7,
  "jogging-track": c5,
  "dermaga": c9,
  "gazebo": c10,
};

export default function SpotDetail() {
  const { spotId } = useParams();
  const idx = spots.findIndex((s) => s.id === spotId);
  const navigate = useNavigate();

  if (idx === -1) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl">Fasilitas tidak ditemukan</h1>
        <Link to="/#fasilitas" className="stamp-btn text-teal mt-6 inline-block">
          Ke Daftar Fasilitas
        </Link>
      </div>
    );
  }

  const spot = spots[idx];
  const prev = spots[(idx - 1 + spots.length) % spots.length];
  const next = spots[(idx + 1) % spots.length];

  return (
    <div className="paper grain py-12">
      <div className="max-w-5xl mx-auto px-4">
        <Link to="/#fasilitas" className="inline-flex items-center gap-2 text-teal font-stamp text-xs font-medium">
          <ArrowLeft className="w-4 h-4" /> Kembali ke Fasilitas
        </Link>
        <div className="mt-6 grid gap-10 md:grid-cols-2 items-center">
          <div className="rotate-1 border-4 border-ink bg-cream p-3 shadow-[6px_6px_0_#3B2A20]">
            <img
              src={spotImages[spot.id] ?? c9}
              alt={spot.name}
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <div className="font-stamp text-xs font-medium text-rust">
              Fasilitas
            </div>
            <h1 className="mt-2 text-5xl flex items-start gap-2">
              <MapPin className="w-8 h-8 text-teal mt-2" />
              {spot.name}
            </h1>
            <p className="mt-4 text-ink/80">{spot.short}</p>
            <div className="mt-6 ticket">
              <div className="font-stamp text-xs font-medium text-teal">
                Fun Fact
              </div>
              <p className="mt-2 text-lg">{spot.fact}</p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-3 justify-between">
          <button
            onClick={() => navigate(`/spot/${prev.id}`)}
            className="stamp-btn text-teal"
          >
            <ArrowLeft className="w-4 h-4 inline mr-1" /> {prev.name}
          </button>
          <button
            onClick={() => navigate(`/spot/${next.id}`)}
            className="stamp-btn text-rust"
          >
            {next.name} <ArrowRight className="w-4 h-4 inline ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

