"use client";

const TABS = [
  { key: "all", label: "All" },
  { key: "featured", label: "Featured" },
  { key: "available", label: "Available Now" },
  { key: "verified", label: "Verified" },
];

export default function CreatorFilters({ active, onChange }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {TABS.map((t) => (
        <button
          key={t.key}
          onClick={() => onChange(t.key)}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition
            ${
              active === t.key
                ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow"
                : "bg-white/5 text-white/70 hover:bg-white/10"
            }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
