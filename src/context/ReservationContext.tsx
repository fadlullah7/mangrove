import { createContext, useContext, useState, ReactNode } from "react";

export type Reservation = {
  wahanaId?: string;
  name: string;
  email: string;
  phone: string;
  participants: number;
  date: string;
  notes: string;
  ref?: string;
};

const empty: Reservation = {
  wahanaId: undefined,
  name: "",
  email: "",
  phone: "",
  participants: 1,
  date: "",
  notes: "",
  ref: undefined,
};

type Ctx = {
  reservation: Reservation;
  setWahana: (id: string) => void;
  updateReservation: (r: Partial<Reservation>) => void;
  finalize: () => string;
  reset: () => void;
};

const ReservationContext = createContext<Ctx | undefined>(undefined);

export function ReservationProvider({ children }: { children: ReactNode }) {
  const [reservation, setReservation] = useState<Reservation>(empty);

  const setWahana = (id: string) =>
    setReservation((r) => ({ ...r, wahanaId: id }));
  const updateReservation = (r: Partial<Reservation>) =>
    setReservation((prev) => ({ ...prev, ...r }));
  const finalize = () => {
    const ref =
      "MGV-" +
      Math.random().toString(36).slice(2, 7).toUpperCase();
    setReservation((r) => ({ ...r, ref }));
    return ref;
  };
  const reset = () => setReservation(empty);

  return (
    <ReservationContext.Provider
      value={{ reservation, setWahana, updateReservation, finalize, reset }}
    >
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservation() {
  const ctx = useContext(ReservationContext);
  if (!ctx) throw new Error("useReservation must be used within ReservationProvider");
  return ctx;
}
