import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="paper grain py-24 text-center">
      <div className="max-w-md mx-auto px-4">
        <h1 className="text-7xl font-display text-rust">404</h1>
        <p className="mt-3 text-ink/75">Halaman tidak ditemukan.</p>
        <Link to="/" className="stamp-btn text-teal mt-6 inline-block">
          Ke Beranda
        </Link>
      </div>
    </div>
  );
}
