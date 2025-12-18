export default function RankBadge({ tier }) {
  const map = {
    Diamond: "from-cyan-300 via-fuchsia-400 to-amber-300 text-black",
    Platinum: "from-white via-zinc-200 to-zinc-400 text-black",
    Gold: "from-amber-300 via-amber-400 to-yellow-200 text-black",
    Silver: "from-zinc-200 via-zinc-300 to-zinc-400 text-black",
    Bronze: "from-orange-200 via-orange-300 to-amber-200 text-black",
  };

  const cls = map[tier] || "from-white/30 to-white/10 text-white";

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${cls}`}>
      {tier}
    </span>
  );
}
