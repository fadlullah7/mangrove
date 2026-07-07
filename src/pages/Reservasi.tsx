import { Link, useNavigate, useParams } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";
import { wahanas } from "../data";
import { useReservation } from "../context/ReservationContext";
import { ArrowLeft, Ticket } from "lucide-react";

export default function Reservasi() {
  const { wahanaId } = useParams();
  const wahana = wahanas.find((w) => w.id === wahanaId);
  const { reservation, setWahana, updateReservation, finalize } = useReservation();
  const navigate = useNavigate();
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (wahana) setWahana(wahana.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wahanaId]);

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

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!reservation.name.trim()) errs.name = "Nama wajib diisi";
    if (!/^\S+@\S+\.\S+$/.test(reservation.email)) errs.email = "Email tidak valid";
    if (!/^\+?\d[\d\s-]{6,}$/.test(reservation.phone)) errs.phone = "Nomor telepon tidak valid";
    if (reservation.participants < 1) errs.participants = "Minimal 1 peserta";
    if (!reservation.date) errs.date = "Tanggal wajib diisi";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    finalize();
    navigate("/konfirmasi");
  };

  return (
    <div className="paper grain py-12">
      <div className="max-w-5xl mx-auto px-4">
        <Link to={`/wahana/${wahana.id}`} className="inline-flex items-center gap-2 text-teal font-stamp text-xs font-medium">
          <ArrowLeft className="w-4 h-4" /> Kembali
        </Link>
        <h1 className="mt-4 text-4xl md:text-5xl">Reservasi Kunjungan</h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-[350px_1fr] items-start">
          {/* Summary ticket */}
          <aside className="ticket rotate-[-1deg]">
            <div className="flex items-center gap-2 font-stamp text-xs font-medium text-rust">
              <Ticket className="w-4 h-4" /> Tiket Kunjungan
            </div>
            <h2 className="mt-3 text-2xl">{wahana.name}</h2>
            <p className="text-sm text-ink/75 mt-1">{wahana.tagline}</p>
            <div className="mt-4 border-t-2 border-dashed border-ink pt-4 text-sm space-y-2">
              <div><b>Harga:</b> {wahana.price}</div>
              <div><b>Durasi:</b> {wahana.duration}</div>
              <div><b>Lokasi:</b> Mangrove Wonorejo, Rungkut, Surabaya</div>
            </div>
          </aside>

          {/* Form */}
          <form onSubmit={onSubmit} className="ticket space-y-4">
            <Field label="Nama Lengkap" error={errors.name}>
              <input
                required
                value={reservation.name}
                onChange={(e) => updateReservation({ name: e.target.value })}
                className="input"
              />
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Email" error={errors.email}>
                <input
                  type="email"
                  required
                  value={reservation.email}
                  onChange={(e) => updateReservation({ email: e.target.value })}
                  className="input"
                />
              </Field>
              <Field label="Nomor Telepon" error={errors.phone}>
                <input
                  required
                  value={reservation.phone}
                  onChange={(e) => updateReservation({ phone: e.target.value })}
                  className="input"
                />
              </Field>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Jumlah Peserta" error={errors.participants}>
                <input
                  type="number"
                  min={1}
                  value={reservation.participants}
                  onChange={(e) =>
                    updateReservation({ participants: Number(e.target.value) })
                  }
                  className="input"
                />
              </Field>
              <Field label="Tanggal Kunjungan" error={errors.date}>
                <input
                  type="date"
                  required
                  value={reservation.date}
                  onChange={(e) => updateReservation({ date: e.target.value })}
                  className="input"
                />
              </Field>
            </div>
            <Field label="Catatan (opsional)">
              <textarea
                rows={4}
                value={reservation.notes}
                onChange={(e) => updateReservation({ notes: e.target.value })}
                className="input"
              />
            </Field>
            <button className="stamp-btn text-rust mt-2">Kirim Reservasi</button>
          </form>
        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          background: #F2E8D5;
          border: 2px solid #3B2A20;
          padding: 0.6rem 0.75rem;
          font-family: inherit;
          color: #3B2A20;
        }
        .input:focus { outline: 2px dashed #1F6F6F; outline-offset: 2px; }
      `}</style>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="font-stamp text-xs font-medium text-ink/80">
        {label}
      </span>
      <div className="mt-1">{children}</div>
      {error && <span className="text-rust text-xs mt-1 block">{error}</span>}
    </label>
  );
}

