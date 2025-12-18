import Link from "next/link";
import Image from "next/image";
import { Star, MapPin, MessageCircle } from "lucide-react";

export default function CreatorCard({ creator }) {
  const img = creator.images?.[0];

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden border border-gray-200">
      
      {/* IMAGE */}
      <div className="relative h-56 bg-gray-100">
        {img ? (
          <Image
            src={img}
            alt={creator.name}
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500" />
        )}

        {/* STATUS */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
  <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-white text-xs font-semibold shadow">
    {/* green dot */}
    <span className="h-2 w-2 rounded-full bg-green-500" />

    {/* green text */}
    <span className="text-green-600">
      Online
    </span>
  </span>
</div>


        {/* PREMIUM */}
        {creator.tier && (
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-amber-400 text-black text-xs font-bold shadow">
            PREMIUM
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg text-red-600">
            {creator.name}, {creator.age}
          </h3>
          <div className="text-purple-600 font-bold">
            €{creator.ratePerHour}
            <span className="text-xs text-gray-500">/hr</span>
          </div>
        </div>

        {/* RATING */}
        <div className="flex items-center gap-2 mt-1 text-sm">
          <Star className="h-4 w-4 text-yellow-400" />
          <span className="font-medium">{creator.rating}</span>
          <span className="text-gray-500">
            ({creator.reviewsCount})
          </span>
          <span className="text-green-600 flex items-center gap-1 ml-2">
            ● Verified
          </span>
        </div>

        {/* LOCATION */}
        <div className="flex items-center gap-1 text-sm text-gray-500 mt-2">
          <MapPin className="h-4 w-4" />
          {creator.location}
        </div>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2 mt-3">
          {creator.specialties.slice(0, 2).map((s) => (
            <span
              key={s}
              className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs"
            >
              {s}
            </span>
          ))}
          {creator.specialties.length > 2 && (
            <span className="text-xs text-gray-400">
              +{creator.specialties.length - 2} more
            </span>
          )}
        </div>

        {/* BIO */}
        <p className="text-sm text-gray-600 mt-3 line-clamp-2">
          {creator.bio}
        </p>

        {/* ACTIONS */}
        <div className="flex gap-3 mt-4">
          <Link
            href={`/creators/${creator.slug}`}
            className="flex-1 text-center px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:opacity-90 transition"
          >
            View Profile
          </Link>

          <button className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition flex items-center gap-1 text-gray-700">
            <MessageCircle className="h-4 w-4" />
            Message
          </button>
        </div>
      </div>
    </div>
  );
}
