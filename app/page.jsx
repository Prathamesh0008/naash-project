import HeroBanner from "../components/HeroBanner";
import TopRanked from "../components/TopRanked";
import CreatorGrid from "../components/CreatorGrid";
import { creators } from "../data/creators";
import MembershipBenefits from "../components/MembershipBenefits";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroBanner />
      <TopRanked creators={creators} />
      <div className="pt-12">
        <CreatorGrid creators={creators} />
      </div>
      <MembershipBenefits/>
    </main>
  );
}
