import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/#kenapa", label: "Kenapa Penting" },
    { href: "/#fasilitas", label: "Fasilitas" },
    { href: "/#wahana", label: "Eksplorasi" },
    { href: "/#panduan", label: "Panduan" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b-2 border-ink">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo Mangrove Wonorejo" className="w-12 h-12 object-contain" />
          <span className="font-display text-2xl leading-none text-ink">
            Mangrove Wonorejo
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 font-stamp text-sm font-medium">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-rust">
              {l.label}
            </a>
          ))}
          <NavLink to="/wahana/perahu" className="stamp-btn text-rust">
            Rencanakan Kunjungan
          </NavLink>
        </nav>
        <button
          className="md:hidden text-ink"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t-2 border-ink bg-cream px-4 py-3 flex flex-col gap-3 font-stamp text-sm font-medium">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <Link
            to="/wahana/perahu"
            onClick={() => setOpen(false)}
            className="stamp-btn text-rust w-fit"
          >
            Rencanakan Kunjungan
          </Link>
        </div>
      )}
    </header>
  );
}
