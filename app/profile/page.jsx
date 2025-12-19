"use client";

import { useState } from "react";
import Image from "next/image";
import BookingModal from "../../components/BookingModal";

export default function ProfilePage() {
  // ✅ REQUIRED STATE
  const [bookingOpen, setBookingOpen] = useState(false);

  // ✅ DEMO PROVIDER DATA (later replace with real user)
  const creator = {
    name: "John Doe",
    rate: 50,
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0214] to-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-semibold mb-6">My Profile</h1>

        <div className="rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-8 flex flex-col md:flex-row gap-6">
          {/* AVATAR */}
          <div className="h-24 w-24 rounded-2xl overflow-hidden border border-white/10 shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80"
              alt="Profile"
              width={96}
              height={96}
              className="object-cover"
            />
          </div>

          {/* INFO */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold">{creator.name}</h2>
            <p className="text-white/60 text-sm mt-1">
              Professional service provider
            </p>

            {/* ACTIONS */}
            <div className="mt-4 flex flex-wrap gap-3">
              <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 font-semibold">
                Edit Profile
              </button>

              <button className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition">
                View Public Profile
              </button>

              <button
                onClick={() => setBookingOpen(true)}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-semibold"
              >
                Book Service
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ BOOKING MODAL */}
      <BookingModal
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        provider={creator}
      />
    </main>
  );
}
