"use client";

import { X } from "lucide-react";
import { useState } from "react";

export default function BookingModal({ open, onClose, provider }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [done, setDone] = useState(false);

  if (!open) return null;

  if (done) {
    return (
      <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
        <div className="bg-[#12051f] rounded-3xl p-8 text-white text-center max-w-md w-full">
          <h2 className="text-2xl font-semibold">Booking Confirmed 🎉</h2>
          <p className="text-white/60 mt-2">
            Your request has been sent to {provider.name}.
          </p>
          <button
            onClick={onClose}
            className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
      <div className="bg-[#12051f] rounded-3xl p-6 w-full max-w-md text-white relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white"
        >
          <X />
        </button>

        <h2 className="text-xl font-semibold mb-4">
          Book {provider.name}
        </h2>

        <label className="block text-sm mb-2">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full mb-4 bg-black/40 border border-white/10 rounded-xl px-4 py-3"
        />

        <label className="block text-sm mb-2">Time</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full mb-6 bg-black/40 border border-white/10 rounded-xl px-4 py-3"
        />

        <button
          disabled={!date || !time}
          onClick={() => setDone(true)}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 disabled:opacity-40"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}
