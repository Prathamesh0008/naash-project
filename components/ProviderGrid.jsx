import ProviderCard from "./ProviderCard";

export default function ProviderGrid({ providers }) {
  if (!providers.length) {
    return (
      <p className="text-white/60">No providers found.</p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {providers.map(p => (
        <ProviderCard key={p.id} provider={p} />
      ))}
    </div>
  );
}
