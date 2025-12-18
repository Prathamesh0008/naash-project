"use client";

export default function CreatorSort({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-white/5 border border-white/10 text-white/80 rounded-xl px-4 py-2 text-sm outline-none"
    >
      <option value="rating">Sort by Rating</option>
      <option value="price">Price: Low → High</option>
      <option value="experience">Experience</option>
    </select>
  );
}
