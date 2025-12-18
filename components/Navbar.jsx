"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Menu,
  X,
  User,
  LogOut,
  Settings,
} from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  // DEMO USER (replace with auth later)
  const user = {
    name: "John Doe",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
  };

  // Close profile dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* BACKDROP */}
     <div className="absolute inset-0 bg-black/70 backdrop-blur-md border-b border-white/10 pointer-events-none" />


      <div className="relative max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0"
          onClick={() => setMenuOpen(false)}
        >
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-amber-400 via-fuchsia-500 to-cyan-400 flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-black" />
          </div>
          <div className="leading-tight">
            <div className="text-white font-semibold tracking-wide">
              Naash Platform
            </div>
            <div className="text-[11px] text-white/60 -mt-0.5">
              Premium service marketplace
            </div>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link href="/creators" className="hover:text-white transition">
            Providers
          </Link>
          <Link href="/pricing" className="hover:text-white transition">
            Pricing
          </Link>

          <Link
            href="/onboarding"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold hover:opacity-90 transition"
          >
            Become a Provider
          </Link>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          {/* PROFILE DESKTOP */}
          <div ref={profileRef} className="relative hidden md:block">
            <button
              onClick={() => {
                setProfileOpen(!profileOpen);
                setMenuOpen(false);
              }}
              className="h-10 w-10 rounded-full overflow-hidden border border-white/20 hover:border-white/40 transition"
            >
              <Image
                src={user.image}
                alt={user.name}
                width={40}
                height={40}
                className="object-cover"
              />
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-3 w-52 rounded-2xl bg-[#12051f] border border-white/10 shadow-2xl overflow-hidden">
                <div className="px-4 py-3 border-b border-white/10">
                  <div className="text-xs text-white/50">Signed in as</div>
                  <div className="font-semibold text-white">
                    {user.name}
                  </div>
                </div>

                <Link
                  href="/profile"
                  onClick={() => setProfileOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 hover:bg-white/5 text-sm"
                >
                  <User size={16} /> My Profile
                </Link>

                <Link
                  href="/settings"
                  onClick={() => setProfileOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 hover:bg-white/5 text-sm"
                >
                  <Settings size={16} /> Settings
                </Link>

                <button className="w-full flex items-center gap-2 px-4 py-3 hover:bg-white/5 text-sm text-red-400">
                  <LogOut size={16} /> Logout
                </button>
              </div>
            )}
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => {
              setMenuOpen(!menuOpen);
              setProfileOpen(false);
            }}
            className="md:hidden text-white"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
  <div className="md:hidden relative z-50 bg-[#0b0214] border-t border-white/10 px-6 py-6 space-y-5">

          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="block text-white/80 hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/creators"
            onClick={() => setMenuOpen(false)}
            className="block text-white/80 hover:text-white"
          >
            Providers
          </Link>
          <Link
            href="/pricing"
            onClick={() => setMenuOpen(false)}
            className="block text-white/80 hover:text-white"
          >
            Pricing
          </Link>

          <Link
            href="/onboarding"
            onClick={() => setMenuOpen(false)}
            className="block text-center px-5 py-3 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold"
          >
            Become a Provider
          </Link>

          {/* MOBILE PROFILE */}
          <div className="pt-5 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full overflow-hidden border border-white/20">
                <Image
                  src={user.image}
                  alt={user.name}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">
                  {user.name}
                </div>
                <div className="text-white/50 text-xs">
                  Account
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <Link
                href="/profile"
                onClick={() => setMenuOpen(false)}
                className="block text-white/70"
              >
                My Profile
              </Link>
              <Link
                href="/settings"
                onClick={() => setMenuOpen(false)}
                className="block text-white/70"
              >
                Settings
              </Link>
              <button className="block text-red-400">
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
