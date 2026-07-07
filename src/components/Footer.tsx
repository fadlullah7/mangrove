import { Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t-2 border-ink bg-ink text-cream">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-display text-2xl">
            <Leaf className="w-5 h-5 text-mustard" /> Mangrove Wonorejo
          </div>
          <p className="mt-3 text-sm opacity-80">
            Ekowisata mangrove ±200 hektar di sabuk hijau Pantai Timur Surabaya (PAMURBAYA).
          </p>
        </div>
        <div className="text-sm">
          <div className="font-stamp font-semibold text-sm text-mustard mb-2">
            Alamat
          </div>
          Jl. Raya Wonorejo No. 1,<br />
          Kel. Wonorejo, Kec. Rungkut,<br />
          Surabaya Timur, Jawa Timur.
        </div>
        <div className="text-sm">
          <div className="font-stamp font-semibold text-sm text-mustard mb-2">
            Tautan
          </div>
          <ul className="space-y-1">
            <li><a href="/#kenapa">Kenapa Penting</a></li>
            <li><a href="/#fasilitas">Fasilitas</a></li>
            <li><a href="/#wahana">Wahana</a></li>
            <li><a href="/#panduan">Panduan Bertanggung Jawab</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/20 py-4 text-center text-xs font-stamp opacity-70">
        © {new Date().getFullYear()} Mangrove Wonorejo — Proyek Edukasi
      </div>
    </footer>
  );
}
