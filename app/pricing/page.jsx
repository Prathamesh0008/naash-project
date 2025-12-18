"use client";

import { Check } from "lucide-react";

const PLANS = [
  {
    name: "Free",
    price: "€0",
    perks: ["Basic profile", "Limited visibility"],
  },
  {
    name: "Pro",
    price: "€29 / month",
    perks: ["Higher visibility", "Priority listing", "Chat access"],
  },
  {
    name: "Featured",
    price: "€79 / month",
    perks: ["Top placement", "Featured badge", "Max exposure"],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0214] to-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <h1 className="text-4xl font-semibold text-center mb-4">
          Pricing Plans
        </h1>
        <p className="text-center text-white/60 mb-10">
          Choose a plan that fits your growth
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className="rounded-3xl bg-white/5 border border-white/10 p-8 hover:border-pink-500 transition"
            >
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <div className="text-3xl font-bold mt-2">{p.price}</div>

              <ul className="mt-6 space-y-2 text-white/70">
                {p.perks.map((x) => (
                  <li key={x} className="flex items-center gap-2">
                    <Check size={16} /> {x}
                  </li>
                ))}
              </ul>

              <button className="w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 font-semibold">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
