"use client";

import { use, useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  CheckCircle,
  Video,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
} from "lucide-react";
import { creators } from "../../../data/creators";
import { useRouter } from "next/navigation";
export default function CreatorProfile({ params }) {
  const { slug } = use(params);
  const creator = creators.find((c) => c.slug === slug);
  const [index, setIndex] = useState(0);
  const router = useRouter();

  if (!creator) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Creator not found
      </div>
    );
  }

  const images = creator.images || [];

  const prev = () =>
    setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () =>
    setIndex((i) => (i + 1) % images.length);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0214] via-[#12051f] to-black text-white">

      {/* BACK */}
      <div
  onClick={() => router.back()}
  className="max-w-7xl mx-auto px-6 pt-6 text-white/70 cursor-pointer hover:text-white transition flex items-center gap-2"
>
  ← Back
</div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10 py-10">

        {/* LEFT */}
        <div className="lg:col-span-2 space-y-10">

          {/* GALLERY */}
          <div>
            <div className="relative h-[520px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={images[index]}
                alt={creator.name}
                fill
                className="object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/50 backdrop-blur text-white hover:bg-black/70 transition"
              >
                <ChevronLeft className="mx-auto" />
              </button>

              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/50 backdrop-blur text-white hover:bg-black/70 transition"
              >
                <ChevronRight className="mx-auto" />
              </button>
            </div>

            {/* THUMBNAILS */}
            <div className="mt-4 flex gap-3">
              {images.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`relative h-20 w-20 rounded-xl overflow-hidden cursor-pointer border ${
                    i === index
                      ? "border-pink-500"
                      : "border-white/10"
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* ABOUT */}
          <div className="rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-8">
            <h3 className="text-xl font-semibold mb-3">
              About {creator.name}
            </h3>
            <p className="text-white/70 leading-relaxed">
              {creator.bio}
            </p>
          </div>

          {/* SPECIALITIES */}
          <div className="rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-8">
            <h3 className="text-xl font-semibold mb-4">Specialities</h3>
            <div className="flex flex-wrap gap-3">
              {creator.specialties.map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-white/10 text-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* REVIEWS */}
          <div className="rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-8">
            <h3 className="text-xl font-semibold mb-5">Reviews</h3>
            {[1, 2].map((r) => (
              <div
                key={r}
                className="pb-5 mb-5 border-b border-white/10 last:border-none last:mb-0"
              >
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-4 w-4 text-amber-400" />
                  ))}
                </div>
                <p className="text-white/70 text-sm">
                  Amazing experience, very professional and respectful.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="space-y-6 sticky top-24">

          {/* PROFILE CARD */}
          <div className="rounded-3xl bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur border border-white/10 p-7">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-2xl font-semibold">
                {creator.name}, {creator.age}
              </h2>
              <span className="px-3 py-1 rounded-full bg-amber-400 text-black text-xs font-bold">
                PREMIUM
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm text-white/80 mb-2">
              <Star className="h-4 w-4 text-amber-400" />
              {creator.rating} ({creator.reviewsCount} reviews)
            </div>

            <div className="flex items-center gap-2 text-sm text-emerald-400 mb-2">
              <CheckCircle className="h-4 w-4" />
              Verified
            </div>

            <div className="flex items-center gap-2 text-sm text-white/70 mb-1">
              <MapPin className="h-4 w-4" />
              {creator.location}
            </div>

            <div className="flex items-center gap-2 text-sm text-white/70">
              <Clock className="h-4 w-4" />
              {creator.experience}
            </div>
          </div>

          {/* PRICING */}
          <div className="rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-6 grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-pink-400">
                €{creator.ratePerHour}
              </div>
              <div className="text-xs text-white/60">Per hour</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">
                €{creator.overnightRate}
              </div>
              <div className="text-xs text-white/60">Overnight</div>
            </div>
          </div>

          {/* ACTIONS */}
          <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 hover:opacity-90 transition font-semibold flex items-center justify-center gap-2 text-lg">
            <Video className="h-5 w-5" />
            Start Video Call
          </button>

          <button className="w-full py-3 rounded-2xl border border-pink-500/50 text-pink-400 hover:bg-pink-500/10 transition font-semibold flex items-center justify-center gap-2">
            <Phone className="h-5 w-5" />
            Request Phone Call
          </button>

          <button className="w-full py-3 rounded-2xl bg-white/10 hover:bg-white/20 transition flex items-center justify-center gap-2">
            <MessageCircle className="h-5 w-5" />
            Send Message
          </button>
        </aside>
      </div>
    </main>
  );
}
