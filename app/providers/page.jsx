"use client";

import { useState, useMemo } from "react";
import ProviderFilters from "../../components/ProviderFilters";
import ProviderGrid from "../../components/ProviderGrid";
import { creators } from "../../data/creators";

export default function ProvidersPage() {
  const [filters, setFilters] = useState({
    tier: "all",
    verified: false,
    sort: "rank",
  });

  const filteredProviders = useMemo(() => {
    let list = [...creators];

    if (filters.tier !== "all") {
      list = list.filter(p => p.tier === filters.tier);
    }

    if (filters.verified) {
      list = list.filter(p => p.verified);
    }

    if (filters.sort === "price-low") {
      list.sort((a, b) => a.ratePerHour - b.ratePerHour);
    }

    if (filters.sort === "price-high") {
      list.sort((a, b) => b.ratePerHour - a.ratePerHour);
    }

    if (filters.sort === "rank") {
      list.sort((a, b) => a.rank - b.rank);
    }

    return list;
  }, [filters]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0214] to-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-semibold mb-6">Providers</h1>

        <ProviderFilters filters={filters} setFilters={setFilters} />

        <ProviderGrid providers={filteredProviders} />
      </div>
    </main>
  );
}
