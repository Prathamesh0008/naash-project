import Image from "next/image";
import Link from "next/link";
import { Star, CheckCircle } from "lucide-react";

export default function ProviderCard({ provider }) {
  return (
    <Link
      href={`/creators/${provider.slug}`}
      className="rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition overflow-hidden"
    >
      <div className="relative h-56">
        <Image
          src={provider.images?.[0]}
          alt={provider.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            {provider.name}, {provider.age}
          </h3>
          <span className="text-pink-400 font-bold">
            €{provider.ratePerHour}/hr
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm text-white/70">
          <Star className="h-4 w-4 text-yellow-400" />
          {provider.rating}
          {provider.verified && (
            <CheckCircle className="h-4 w-4 text-emerald-400" />
          )}
        </div>

        <p className="text-sm text-white/60 line-clamp-2">
          {provider.bio}
        </p>
      </div>
    </Link>
  );
}
