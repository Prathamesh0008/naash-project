"use client";

export default function ProviderFilters({ filters, setFilters }) {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {/* TIER */}
      <select
        value={filters.tier}
        onChange={(e) =>
          setFilters({ ...filters, tier: e.target.value })
        }
        className="bg-white/10 border border-white/10 rounded-xl px-4 py-2"
      >
        <option value="all">All tiers</option>
        <option value="Gold">Gold</option>
        <option value="Platinum">Platinum</option>
        <option value="Diamond">Diamond</option>
      </select>

      {/* SORT */}
      <select
        value={filters.sort}
        onChange={(e) =>
          setFilters({ ...filters, sort: e.target.value })
        }
        className="bg-white/10 border border-white/10 rounded-xl px-4 py-2"
      >
        <option value="rank">Top ranked</option>
        <option value="price-low">Price: Low → High</option>
        <option value="price-high">Price: High → Low</option>
      </select>

      {/* VERIFIED */}
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={filters.verified}
          onChange={(e) =>
            setFilters({ ...filters, verified: e.target.checked })
          }
        />
        Verified only
      </label>
    </div>
  );
}
