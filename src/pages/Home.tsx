import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import {
  Bird, Waves, TreePine, Users, MapPin, Sailboat, Footprints, GraduationCap,
  Check, X, Quote, Sprout, Share2, ChevronLeft, ChevronRight,
} from "lucide-react";
import {
  wahanas, spots, whyMangroveMatters, communityProfiles,
  testimonials, doList, dontList, communityStats,
  carbonStats, conservationTimeline,
} from "../data";
import { Sunburst, Postage, Divider } from "../components/Poster";
import VelocityScroll from "../components/VelocityScroll";
import { useReveal } from "../hooks/useReveal";

import c1 from "../assets/carousel 1.png";
import c2 from "../assets/carousel 2.png";
import c9 from "../assets/carousel 9.png";
import c10 from "../assets/carousel 10.png";
import c6 from "../assets/carousel 6.png";
import c11 from "../assets/carousel 11.png";
import c12 from "../assets/carousel 12.png";

const carouselImages = [c1, c2, c9, c10, c6, c11, c12];
const carouselCaptions = [
  "Wonorejo · Rungkut · Surabaya",
  "Boardwalk Kayu · Susur Hutan Bakau",
  "Mangrove Wonorejo · Ekowisata",
  "Gazebo Tepi Laut · Sunrise & Birdwatching",
  "Hutan Bakau · Kawasan Konservasi",
  "Mangrove Wonorejo · Ekowisata",
  "Kunjungan Edukasi · Mangrove Wonorejo",
];

const whyIcons = [Waves, Bird, TreePine, Users];
const wahanaIcons = [Footprints, Sailboat, GraduationCap];

const tickerItems = [
  "Mangrove Wonorejo",
  "±200 Hektar",
  "143 Spesies Burung",
  "Ekowisata Surabaya",
  "PAMURBAYA",
  "Konservasi",
  "Boardwalk Kayu",
  "Wisata Perahu",
];

const tickerItemsAlt = [
  "Avicennia Alba",
  "Nypa Fruticans",
  "Kera Ekor Panjang",
  "Sabuk Hijau",
  "Pantai Timur",
  "Ekosistem Bakau",
  "Green Belt",
  "Wonorejo · Rungkut",
];

export default function Home() {
  const [supportOpen, setSupportOpen] = useState(false);
  const [whyOpen, setWhyOpen] = useState<typeof whyMangroveMatters[number] | null>(null);
  const [carbonOpen, setCarbonOpen] = useState<typeof carbonStats[number] | null>(null);
  const [slide, setSlide] = useState(0);

  const prev = useCallback(() => setSlide((s) => (s - 1 + carouselImages.length) % carouselImages.length), []);
  const next = useCallback(() => setSlide((s) => (s + 1) % carouselImages.length), []);

  useEffect(() => {
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [next]);

  const refKenapa    = useReveal();
  const refCerita    = useReveal();
  const refFasilitas = useReveal();
  const refWahana    = useReveal();
  const refPanduan   = useReveal();
  const refTestimoni = useReveal();
  const refCta       = useReveal();

  return (
    <div className="paper grain">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        <Sunburst className="absolute -top-20 left-1/2 -translate-x-1/2 w-[900px] text-mustard" />
        <div className="relative max-w-6xl mx-auto px-4 pt-14 pb-28 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <div className="font-stamp text-xs font-medium text-teal">
              Surabaya Timur · Est. Konservasi
            </div>
            {/* SDG badges */}
            <div className="mt-3 flex flex-wrap gap-2 items-center">
              <span className="inline-flex items-center gap-1.5 bg-[#E5243B] text-white font-stamp text-[10px] font-medium px-2.5 py-1 rounded">
                <span className="font-bold text-sm leading-none">8</span>
                SDG · Pekerjaan Layak
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#56C02B] text-white font-stamp text-[10px] font-medium px-2.5 py-1 rounded">
                <span className="font-bold text-sm leading-none">15</span>
                SDG · Kehidupan Darat
              </span>
            </div>
            <h1 className="mt-4 text-5xl md:text-6xl leading-[1.05] text-ink">
              Jelajahi Paru-Paru Hijau <span className="text-rust">Surabaya Timur</span>
            </h1>
            <p className="mt-5 text-lg text-ink/80 max-w-xl">
              Ekowisata Mangrove Wonorejo sekitar 200 hektar hutan bakau di sabuk
              hijau Pantai Timur Surabaya (PAMURBAYA). Berjalan di boardwalk kayu,
              menyusuri muara dengan perahu, dan mengenal ratusan spesies burung
              serta kera ekor panjang yang hidup di bawah kanopi bakau.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/wahana/perahu" className="stamp-btn text-rust">
                Rencanakan Kunjungan
              </Link>
              <a href="#kenapa" className="stamp-btn text-teal">
                Kenapa Mangrove?
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="rotate-1 border-4 border-ink bg-cream p-3 shadow-[6px_6px_0_#3B2A20]">
              {/* Carousel */}
              <div className="relative overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${slide * 100}%)` }}
                >
                  {carouselImages.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={carouselCaptions[i]}
                      className="w-full h-auto shrink-0 object-cover"
                      style={{ minWidth: "100%" }}
                    />
                  ))}
                </div>
                {/* Prev / Next */}
                <button
                  onClick={prev}
                  aria-label="Sebelumnya"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-cream/80 border-2 border-ink w-8 h-8 flex items-center justify-center hover:bg-cream"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  aria-label="Berikutnya"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-cream/80 border-2 border-ink w-8 h-8 flex items-center justify-center hover:bg-cream"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              {/* Caption + dots */}
              <div className="mt-3 flex items-center justify-between gap-2">
                <div className="font-stamp text-xs font-medium text-ink/70 truncate">
                  {carouselCaptions[slide]}
                </div>
                <div className="flex gap-1 shrink-0">
                  {carouselImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSlide(i)}
                      aria-label={`Slide ${i + 1}`}
                      className={`w-2 h-2 rounded-full border border-ink transition-colors ${i === slide ? "bg-ink" : "bg-transparent"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VELOCITY SCROLL #1 — rust strip ── */}
      <div className="bg-rust text-cream py-3 border-y-2 border-ink overflow-hidden">
        <VelocityScroll items={tickerItems} separator="✦" />
      </div>

      {/* ── KENAPA — overlaps hero with negative top margin ── */}
      <section
        id="kenapa"
        ref={refKenapa}
        className="relative z-10 -mt-10 bg-cream border-y-2 border-ink py-16
                   shadow-[0_-8px_0_2px_#3B2A20]"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto reveal">
            <div className="font-stamp text-xs font-medium text-rust">
              Edukasi Ekologi
            </div>
            <h2 className="mt-2 text-4xl md:text-5xl">Kenapa Mangrove Penting</h2>
            <p className="mt-3 text-ink/75">
              Empat alasan mengapa hutan bakau Wonorejo bukan sekadar destinasi wisata
              tapi juga penjaga kota.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyMangroveMatters.map((w, i) => {
              const Icon = whyIcons[i];
              return (
                <button
                  key={w.title}
                  onClick={() => setWhyOpen(w)}
                  className="ticket rotate-[-1deg] hover:rotate-0 transition-transform reveal text-left cursor-pointer hover:-translate-y-1 group"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-12 h-12 rounded-full border-2 border-teal text-teal flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl">{w.title}</h3>
                  <p className="mt-2 text-sm text-ink/75">{w.body}</p>
                  <div className="mt-3 font-stamp text-xs font-medium text-teal opacity-0 group-hover:opacity-100 transition-opacity">
                    Baca lebih →
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── VELOCITY SCROLL #2 — teal strip, reversed ── */}
      <div className="bg-teal text-cream py-3 border-y-2 border-ink overflow-hidden">
        <VelocityScroll items={tickerItemsAlt} separator="❧" reverse />
      </div>

      {/* ── KARBON — SDG 15 callout ── */}
      <section className="bg-ink text-cream pt-20 pb-20 border-b-2 border-ink">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="mt-0 text-cream/70 text-base max-w-xl mx-auto leading-relaxed">
              Kawasan Wonorejo bukan sekadar tujuan wisata. Setiap kunjungan mendukung
              pelestarian ekosistem yang secara aktif melindungi daratan dan menyimpan karbon.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {carbonStats.map((c) => (
              <button
                key={c.label}
                onClick={() => setCarbonOpen(c)}
                className="border-2 border-cream/30 p-10 text-center hover:border-mustard hover:bg-white/5 transition-colors group cursor-pointer rounded-[45px]"
              >
                <div className="font-display text-5xl text-mustard">{c.value}</div>
                <div className="font-stamp text-xs font-medium text-mustard/70 mt-2">{c.unit}</div>
                <div className="mt-4 text-sm text-cream/80 leading-relaxed">{c.label}</div>
                <div className="mt-5 font-stamp text-xs font-medium text-cream/40 group-hover:text-mustard transition-colors">
                  Pelajari →
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERITA — overlaps kenapa ── */}
      <section
        ref={refCerita}
        className="relative z-20 -mt-10 py-20 bg-[#F2E8D5]
                   shadow-[0_-8px_0_2px_#3B2A20]"
      >
        <div className="max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-2 md:items-stretch">
          {/* 3 frame foto — mengisi tinggi kolom kanan */}
          <div className="flex flex-col gap-5 reveal-left">
            <div className="flex-1 border-4 border-ink bg-cream p-3 shadow-[4px_4px_0_#3B2A20] rotate-[-1deg] flex flex-col">
              <img src={c1} alt="Kawasan Mangrove Wonorejo" className="w-full flex-1 object-cover min-h-0" />
              <div className="mt-2 font-stamp text-xs font-medium text-ink/70 text-center shrink-0">
                Sejak 2015 · Pemulihan Kawasan
              </div>
            </div>
            <div className="flex-1 border-4 border-ink bg-cream p-3 shadow-[4px_4px_0_#3B2A20] rotate-[1deg] flex flex-col">
              <img src={c2} alt="Boardwalk Kayu Mangrove" className="w-full flex-1 object-cover min-h-0" />
              <div className="mt-2 font-stamp text-xs font-medium text-ink/70 text-center shrink-0">
                Boardwalk Kayu · Susur Hutan Bakau
              </div>
            </div>
            <div className="flex-1 border-4 border-ink bg-cream p-3 shadow-[4px_4px_0_#3B2A20] rotate-[-0.5deg] flex flex-col">
              <img src={c9} alt="Wisata Perahu Mangrove" className="w-full flex-1 object-cover min-h-0" />
              <div className="mt-2 font-stamp text-xs font-medium text-ink/70 text-center shrink-0">
                Wisata Perahu · Susur Muara
              </div>
            </div>
          </div>
          <div className="reveal-right">
            <div className="font-stamp text-xs font-medium text-teal">
              Cerita Kawasan
            </div>
            <h2 className="mt-2 text-4xl">Dari Vegetasi Menipis, Kembali Rimbun</h2>
            <p className="mt-4 text-ink/80">
              Sekitar tahun 2010, vegetasi mangrove di Wonorejo sempat menipis. Sejak
              2015, kolaborasi pemerintah kota, komunitas, dan sektor swasta terus
              menanam dan memperbaiki akses. Kini kawasannya menjadi salah satu ikon
              konservasi Surabaya.
            </p>
            {/* Angka dampak ekonomi — SDG 8 */}
            <div className="mt-5 grid grid-cols-3 gap-3 border-2 border-ink p-4 bg-cream">
              {communityStats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-3xl text-rust">{s.value}</div>
                  <div className="mt-1 font-stamp text-[10px] font-medium text-ink/70 leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline konservasi */}
            <div className="mt-6">
              <div className="font-stamp text-xs font-medium text-rust mb-4">
                Perjalanan Konservasi
              </div>
              <ol className="relative space-y-4">
                {/* garis vertikal */}
                <div className="absolute left-[9px] top-2 bottom-2 w-0.5 bg-ink" />
                {conservationTimeline.map((t) => (
                  <li key={t.year} className="relative flex items-start gap-4">
                    <span className="shrink-0 mt-[3px] w-5 h-5 rounded-full bg-teal border-2 border-ink" />
                    <div>
                      <div className="font-stamp text-xs font-medium text-teal">{t.year}</div>
                      <p className="text-sm text-ink/80 mt-0.5">{t.event}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-6 space-y-4">
              {communityProfiles.map((p, i) => (
                <blockquote
                  key={p.name}
                  className="ticket reveal"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <Quote className="w-5 h-5 text-rust mb-2" />
                  <p className="italic">"{p.quote}"</p>
                  <footer className="mt-3 text-sm font-stamp font-medium">
                    {p.name} — <span className="opacity-70">{p.role}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FASILITAS — overlaps cerita ── */}
      <section
        id="fasilitas"
        ref={refFasilitas}
        className="relative z-30 -mt-10 bg-teal text-cream py-20 overflow-hidden
                   shadow-[0_-8px_0_2px_#3B2A20]"
      >
        <Sunburst className="absolute -right-40 -top-40 w-[600px] text-mustard opacity-40" />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto reveal">
            <div className="font-stamp text-xs font-medium text-mustard">
              Fasilitas Utama
            </div>
            <h2 className="mt-2 text-4xl md:text-5xl">Empat Titik Wajib Singgah</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {spots.map((s, i) => (
              <Link
                key={s.id}
                to={`/spot/${s.id}`}
                className="ticket text-ink hover:-translate-y-1 transition-transform block reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <MapPin className="w-6 h-6 text-rust mb-2" />
                <h3 className="text-xl">{s.name}</h3>
                <p className="mt-2 text-sm">{s.short}</p>
                <div className="mt-3 font-stamp text-xs font-medium text-teal">
                  Lihat Detail →
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 mx-auto max-w-2xl border-2 border-mustard rounded-full p-6 text-center bg-teal reveal">
            <div className="font-stamp text-xs font-medium text-mustard">
              Tahukah Kamu?
            </div>
            <p className="mt-2 text-lg">
              Sekitar <b>143 spesies burung</b> tercatat di kawasan ini, 12 di
              antaranya berstatus dilindungi.
            </p>
          </div>
        </div>
      </section>

      {/* ── VELOCITY SCROLL #3 — mustard strip ── */}
      <div className="relative z-40 bg-mustard text-ink py-3 border-y-2 border-ink overflow-hidden">
        <VelocityScroll items={tickerItems} separator="★" />
      </div>

      {/* ── WAHANA ── */}
      <section
        id="wahana"
        ref={refWahana}
        className="relative z-30 py-20 bg-[#F2E8D5]"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto reveal">
            <div className="font-stamp text-xs font-medium text-rust">
              Eksplorasi
            </div>
            <h2 className="mt-2 text-4xl md:text-5xl">Pilih Cara Menjelajahinya</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {wahanas.map((w, i) => {
              const Icon = wahanaIcons[i];
              return (
                <div
                  key={w.id}
                  className="ticket rotate-[1deg] hover:rotate-0 transition-transform flex flex-col reveal"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-full border-2 border-rust text-rust flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl">{w.name}</h3>
                  <p className="mt-2 text-sm text-ink/75 flex-1">{w.tagline}</p>
                  <div className="mt-4 font-stamp text-xs font-medium text-teal">
                    {w.price} · {w.duration}
                  </div>
                  <Link
                    to={`/wahana/${w.id}`}
                    className="stamp-btn text-rust mt-4 w-fit"
                  >
                    Pilih
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PANDUAN — overlaps wahana ── */}
      <section
        id="panduan"
        ref={refPanduan}
        className="relative z-40 -mt-10 bg-cream border-y-2 border-ink py-20
                   shadow-[0_-8px_0_2px_#3B2A20]"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto reveal">
            <div className="font-stamp text-xs font-medium text-teal">
              Panduan
            </div>
            <h2 className="mt-2 text-4xl md:text-5xl">Wisata Bertanggung Jawab</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="ticket reveal-left">
              <h3 className="text-2xl text-teal flex items-center gap-2">
                <Check className="w-5 h-5" /> Lakukan
              </h3>
              <ul className="mt-4 space-y-2 text-ink/80">
                {doList.map((d) => (
                  <li key={d} className="flex gap-2">
                    <Check className="w-4 h-4 mt-1 text-teal shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="ticket reveal-right">
              <h3 className="text-2xl text-rust flex items-center gap-2">
                <X className="w-5 h-5" /> Hindari
              </h3>
              <ul className="mt-4 space-y-2 text-ink/80">
                {dontList.map((d) => (
                  <li key={d} className="flex gap-2">
                    <X className="w-4 h-4 mt-1 text-rust shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── VELOCITY SCROLL #4 — ink strip, reversed ── */}
      <div className="relative z-50 bg-ink text-cream py-3 border-y-2 border-ink overflow-hidden">
        <VelocityScroll items={tickerItemsAlt} separator="◆" reverse />
      </div>

      {/* ── TESTIMONI ── */}
      <section
        ref={refTestimoni}
        className="relative z-40 py-20 bg-[#F2E8D5]"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto reveal">
            <div className="font-stamp text-xs font-medium text-rust">
              Kata Pengunjung
            </div>
            <h2 className="mt-2 text-4xl">Kartu Pos Dari Wonorejo</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`ticket ${i % 2 ? "rotate-1" : "-rotate-1"} reveal`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <p className="italic">"{t.text}"</p>
                <div className="mt-4 font-stamp text-xs font-medium">
                  {t.name} · <span className="opacity-70">{t.from}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── CTA ── */}
      <section ref={refCta} className="pb-20">
        <div className="max-w-3xl mx-auto px-4 text-center reveal">
          <h2 className="text-4xl md:text-5xl">Datanglah, Lalu Ceritakan Kembali.</h2>
          <p className="mt-4 text-ink/80">
            Kunjunganmu bukan cuma jalan-jalan tetapi bagian dari cerita
            konservasi Surabaya.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Link to="/wahana/perahu" className="stamp-btn text-rust">
              Reservasi Wisata Perahu
            </Link>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: "Ekowisata Mangrove Wonorejo",
                    text: "±200 hektar hutan bakau di Surabaya — wisata bertanggung jawab, SDG 8 & 15.",
                    url: window.location.href,
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link disalin!");
                }
              }}
              className="stamp-btn text-teal"
            >
              <Share2 className="w-4 h-4" /> Bagikan
            </button>
          </div>

          <div className="mt-10 ticket text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 reveal">
            <div>
              <div className="font-stamp text-xs font-medium text-teal">
                Belum sempat berkunjung langsung?
              </div>
              <div className="mt-1 text-lg">
                Dukung inisiatif penanaman mangrove bersama warga.
              </div>
            </div>
            <button
              onClick={() => setSupportOpen(true)}
              className="stamp-btn text-teal"
            >
              Dukung Pelestarian
            </button>
          </div>
        </div>
      </section>

      {carbonOpen && (
        <div
          className="fixed inset-0 bg-ink/70 z-50 flex items-center justify-center p-4"
          onClick={() => setCarbonOpen(null)}
        >
          <div
            className="ticket max-w-lg w-full border-4 border-ink"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="font-display text-3xl text-rust">{carbonOpen.value}</div>
                <div className="font-stamp text-xs font-medium text-ink/60">{carbonOpen.unit}</div>
              </div>
              <button onClick={() => setCarbonOpen(null)} aria-label="Tutup">
                <X className="w-5 h-5 shrink-0" />
              </button>
            </div>
            <h3 className="mt-3 text-2xl">{carbonOpen.label}</h3>
            <p className="mt-3 text-sm text-ink/80 leading-relaxed">{carbonOpen.detail}</p>
          </div>
        </div>
      )}

      {whyOpen && (
        <div
          className="fixed inset-0 bg-ink/70 z-50 flex items-center justify-center p-4"
          onClick={() => setWhyOpen(null)}
        >
          <div
            className="ticket max-w-lg w-full border-4 border-ink"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-2xl">{whyOpen.title}</h3>
              <button onClick={() => setWhyOpen(null)} aria-label="Tutup">
                <X className="w-5 h-5 shrink-0" />
              </button>
            </div>
            <p className="mt-4 text-sm text-ink/80 leading-relaxed">{whyOpen.detail}</p>
          </div>
        </div>
      )}

      {supportOpen && (
        <div
          className="fixed inset-0 bg-ink/70 z-50 flex items-center justify-center p-4"
          onClick={() => setSupportOpen(false)}
        >
          <div
            className="ticket max-w-md w-full border-4 border-ink"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl flex items-center gap-2">
                <Sprout className="w-5 h-5 text-teal" /> Dukung Pelestarian
              </h3>
              <button onClick={() => setSupportOpen(false)} aria-label="Tutup">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="mt-3 text-sm text-ink/80">
              Kegiatan penanaman mangrove di Wonorejo umumnya digagas melalui
              kolaborasi pemerintah kota, komunitas warga, dan sektor swasta.
              Kamu bisa ikut serta dengan mengontak langsung pengelola kawasan
              untuk jadwal penanaman kolektif, atau bergabung dengan komunitas
              konservasi lokal.
            </p>
            <p className="mt-3 text-xs text-ink/60">
              Informasi ini bersifat edukatif — tidak ada transaksi pembayaran
              yang diproses di halaman ini.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

