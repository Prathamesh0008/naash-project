"use client";

import { useMemo, useState } from "react";
import { creators } from "../../data/creators";
import CreatorCard from "../../components/CreatorCard";
import CreatorFilters from "../../components/CreatorFilters";
import CreatorSort from "../../components/CreatorSort";

export default function CreatorsPage() {
  const [tab, setTab] = useState("all");
  const [sort, setSort] = useState("rating");

  const filtered = useMemo(() => {
    let list = [...creators];

    // FILTERS
    if (tab === "featured") list = list.filter((c) => c.tier === "Diamond" || c.tier === "Platinum");
    if (tab === "available") list = list.filter((c) => c.available !== false);
    if (tab === "verified") list = list.filter((c) => c.verified);

    // SORT
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    if (sort === "price") list.sort((a, b) => a.ratePerHour - b.ratePerHour);
    if (sort === "experience")
      list.sort((a, b) => parseInt(b.experience) - parseInt(a.experience));

    return list;
  }, [tab, sort]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0214] via-[#12051f] to-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold">
              Service Providers
            </h1>
            <p className="text-white/60 mt-1">
              Discover trusted professionals and book instantly
            </p>
          </div>

          <CreatorSort value={sort} onChange={setSort} />
        </div>

        {/* FILTERS */}
        <CreatorFilters active={tab} onChange={setTab} />

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filtered.map((c) => (
            <CreatorCard key={c.id} creator={c} />
          ))}
        </div>
      </div>
    </main>
  );
}
