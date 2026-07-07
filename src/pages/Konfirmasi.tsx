import { Link, useNavigate } from "react-router-dom";
import { useReservation } from "../context/ReservationContext";
import { wahanas, wahanaTips } from "../data";
import { CheckCircle2, Printer, Home as HomeIcon, Leaf } from "lucide-react";

export default function Konfirmasi() {
  const { reservation, reset } = useReservation();
  const navigate = useNavigate();
  const wahana = wahanas.find((w) => w.id === reservation.wahanaId);

  if (!reservation.ref || !wahana) {
    return (
      <div className="paper grain py-20 text-center">
        <div className="max-w-lg mx-auto px-4 ticket">
          <h1 className="text-3xl">Belum ada reservasi</h1>
          <p className="mt-3 text-ink/75">
            Sepertinya kamu belum menyelesaikan reservasi kunjungan.
            Mulai dari beranda untuk memilih wahana.
          </p>
          <Link to="/" className="stamp-btn text-teal mt-6 inline-block">
            Ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  const back = () => {
    reset();
    navigate("/");
  };

  return (
    <div className="paper grain py-16 print:bg-white">
      <div className="max-w-2xl mx-auto px-4">
        <div className="ticket text-center">
          <CheckCircle2 className="w-14 h-14 text-teal mx-auto" />
          <h1 className="mt-3 text-4xl">Reservasi Terkirim</h1>
          <p className="mt-2 text-ink/75">
            Terima kasih! Simpan kode referensi ini untuk konfirmasi di lokasi.
          </p>
          <div className="mt-6 inline-block border-2 border-dashed border-ink px-6 py-3 font-stamp font-bold tracking-[0.2em] text-xl">
            {reservation.ref}
          </div>
          <div className="mt-8 text-left border-t-2 border-dashed border-ink pt-6 space-y-2 text-sm">
            <Row k="Wahana" v={wahana.name} />
            <Row k="Nama" v={reservation.name} />
            <Row k="Email" v={reservation.email} />
            <Row k="Telepon" v={reservation.phone} />
            <Row k="Peserta" v={String(reservation.participants)} />
            <Row k="Tanggal" v={reservation.date} />
            {reservation.notes && <Row k="Catatan" v={reservation.notes} />}
          </div>
          <div className="mt-6 text-left text-sm text-ink/75">
            <b>Langkah selanjutnya:</b> tunjukkan kode referensi ini di loket
            saat tiba. Untuk perubahan jadwal, hubungi pengelola kawasan
            paling lambat H-1 kunjungan.
          </div>

          {/* Tips bertanggung jawab per wahana — SDG 15 */}
          {wahanaTips[reservation.wahanaId ?? ""] && (
            <div className="mt-6 text-left border-t-2 border-dashed border-ink pt-5">
              <div className="flex items-center gap-2 font-stamp text-xs font-medium text-teal">
                <Leaf className="w-4 h-4" /> Tips Wisata Bertanggung Jawab
              </div>
              <ul className="mt-3 space-y-2">
                {wahanaTips[reservation.wahanaId!].map((tip) => (
                  <li key={tip} className="flex gap-2 text-sm text-ink/80">
                    <span className="text-teal mt-0.5 shrink-0">✦</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="mt-8 flex flex-wrap gap-3 justify-center print:hidden">
            <button onClick={back} className="stamp-btn text-teal">
              <HomeIcon className="w-4 h-4 inline mr-1" /> Kembali ke Beranda
            </button>
            <button
              onClick={() => window.print()}
              className="stamp-btn text-rust"
            >
              <Printer className="w-4 h-4 inline mr-1" /> Unduh Konfirmasi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="font-stamp text-xs font-medium text-ink/60">
        {k}
      </span>
      <span className="text-right">{v}</span>
    </div>
  );
}

