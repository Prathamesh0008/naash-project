import PageShell from "@/components/PageShell";

export const metadata = {
  title: "Favorites | Valentina's",
};

export default function FavoritesPage() {
  return (
    <PageShell>
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Favorites</h1>
        <p className="text-white/60 mb-10">
          Providers you’ve saved will appear here.
        </p>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center text-white/50">
          No favorites yet.
        </div>
      </section>
    </PageShell>
  );
}
