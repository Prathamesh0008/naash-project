import PageShell from "@/components/PageShell";

export const metadata = {
  title: "Couple Companions | Valentina's",
};

export default function CouplePage() {
  return (
    <PageShell>
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-3">Couple Companions</h1>
          <p className="text-white/60 max-w-2xl">
            Discover verified couples offering exclusive private and social experiences.
          </p>
        </div>

        {/* COUPLE GRID WILL GO HERE */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center text-white/50">
          Couple listings coming next
        </div>
      </section>
    </PageShell>
  );
}
