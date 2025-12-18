import CreatorCard from "./CreatorCard";

export default function CreatorGrid({ creators }) {
  return (
    <section className="max-w-7xl mx-auto px-4 pb-20">
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="text-white text-2xl md:text-3xl font-semibold tracking-tight">
            Explore Creators
          </h2>
          <p className="text-white/60 text-sm mt-1">
            Premium profiles, ranked by performance and boosts (demo).
          </p>
        </div>

        <div className="hidden md:flex items-center gap-2 text-xs text-white/60">
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
            {creators.length} profiles
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {creators.map((c) => (
          <CreatorCard key={c.id} creator={c} />
        ))}
      </div>
    </section>
  );
}
