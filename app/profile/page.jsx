"use client";

import Image from "next/image";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0214] to-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-semibold mb-6">My Profile</h1>

        <div className="rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-8 flex gap-6">
          <div className="h-24 w-24 rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
              alt="Profile"
              width={96}
              height={96}
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold">John Doe</h2>
            <p className="text-white/60 text-sm mt-1">
              Professional service provider
            </p>

            <div className="mt-4 flex gap-3">
              <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 font-semibold">
                Edit Profile
              </button>
              <button className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition">
                View Public Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
