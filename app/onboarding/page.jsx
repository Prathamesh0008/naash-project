"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Upload, Plus, Trash } from "lucide-react";

const PLANS = [
  {
    id: "free",
    name: "Free",
    price: "€0",
    perks: ["Basic profile", "Limited visibility"],
  },
  {
    id: "pro",
    name: "Pro",
    price: "€29 / month",
    perks: ["Higher visibility", "Priority listing", "Chat access"],
  },
  {
    id: "featured",
    name: "Featured",
    price: "€79 / month",
    perks: ["Top placement", "Featured badge", "Maximum reach"],
  },
];

export default function OnboardingPage() {
  const [step, setStep] = useState(1);

  const [profile, setProfile] = useState({
    name: "",
    category: "",
    bio: "",
    location: "",
    experience: "",
    images: [],
    services: [{ name: "", price: "" }],
    plan: "free",
  });

  const next = () => setStep((s) => Math.min(s + 1, 5));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0214] via-[#12051f] to-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Create Your Service Profile
          </h1>
          <p className="text-white/60 mt-2">
            Set up your professional profile and start getting bookings
          </p>
        </div>

        {/* STEP INDICATOR */}
        <div className="flex gap-2 mb-8">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`h-2 flex-1 rounded-full ${
                step >= s
                  ? "bg-gradient-to-r from-pink-600 to-purple-600"
                  : "bg-white/10"
              }`}
            />
          ))}
        </div>

        {/* CARD */}
        <div className="rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-8">

          {/* STEP 1 — BASIC INFO */}
          {step === 1 && (
            <div className="space-y-5">
              <h2 className="text-xl font-semibold">Basic Information</h2>

              <input
                placeholder="Full Name / Business Name"
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none"
                value={profile.name}
                onChange={(e) =>
                  setProfile({ ...profile, name: e.target.value })
                }
              />

              <input
                placeholder="Category (Salon, Grooming, Spa...)"
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none"
                value={profile.category}
                onChange={(e) =>
                  setProfile({ ...profile, category: e.target.value })
                }
              />

              <textarea
                placeholder="Short bio about your services"
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none h-32"
                value={profile.bio}
                onChange={(e) =>
                  setProfile({ ...profile, bio: e.target.value })
                }
              />
            </div>
          )}

          {/* STEP 2 — IMAGES */}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Upload Images (Demo)
              </h2>

              <div className="grid grid-cols-3 gap-4">
                {profile.images.map((img, i) => (
                  <div
                    key={i}
                    className="relative h-32 rounded-xl overflow-hidden border border-white/10"
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                    <button
                      onClick={() =>
                        setProfile({
                          ...profile,
                          images: profile.images.filter((_, x) => x !== i),
                        })
                      }
                      className="absolute top-2 right-2 bg-black/60 rounded-full p-1"
                    >
                      <Trash size={14} />
                    </button>
                  </div>
                ))}

                <button
                  onClick={() =>
                    setProfile({
                      ...profile,
                      images: [
                        ...profile.images,
                        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
                      ],
                    })
                  }
                  className="h-32 rounded-xl border border-dashed border-white/20 flex items-center justify-center hover:bg-white/5 transition"
                >
                  <Upload />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 — SERVICES */}
          {step === 3 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Services & Pricing
              </h2>

              <div className="space-y-4">
                {profile.services.map((s, i) => (
                  <div key={i} className="flex gap-3">
                    <input
                      placeholder="Service name"
                      className="flex-1 bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none"
                      value={s.name}
                      onChange={(e) => {
                        const services = [...profile.services];
                        services[i].name = e.target.value;
                        setProfile({ ...profile, services });
                      }}
                    />
                    <input
                      placeholder="€ Price"
                      className="w-32 bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none"
                      value={s.price}
                      onChange={(e) => {
                        const services = [...profile.services];
                        services[i].price = e.target.value;
                        setProfile({ ...profile, services });
                      }}
                    />
                  </div>
                ))}

                <button
                  onClick={() =>
                    setProfile({
                      ...profile,
                      services: [...profile.services, { name: "", price: "" }],
                    })
                  }
                  className="flex items-center gap-2 text-pink-400"
                >
                  <Plus size={16} /> Add another service
                </button>
              </div>
            </div>
          )}

          {/* STEP 4 — PLAN */}
          {step === 4 && (
            <div>
              <h2 className="text-xl font-semibold mb-6">
                Choose Your Plan
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {PLANS.map((p) => (
                  <div
                    key={p.id}
                    onClick={() =>
                      setProfile({ ...profile, plan: p.id })
                    }
                    className={`rounded-2xl border p-6 cursor-pointer transition ${
                      profile.plan === p.id
                        ? "border-pink-500 bg-pink-500/10"
                        : "border-white/10 bg-white/5"
                    }`}
                  >
                    <h3 className="font-semibold text-lg">{p.name}</h3>
                    <div className="text-2xl font-bold mt-2">{p.price}</div>
                    <ul className="mt-4 space-y-2 text-sm text-white/70">
                      {p.perks.map((x) => (
                        <li key={x} className="flex items-center gap-2">
                          <Check size={14} /> {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ACTIONS */}
          <div className="mt-10 flex justify-between">
            <button
              onClick={back}
              disabled={step === 1}
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition disabled:opacity-40"
            >
              Back
            </button>

            {step < 4 ? (
              <button
                onClick={next}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 font-semibold"
              >
                Continue
              </button>
            ) : (
              <button
                onClick={() => alert("Profile created (demo)!")}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 font-semibold"
              >
                Create Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
