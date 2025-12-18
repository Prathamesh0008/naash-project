"use client";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0214] to-black text-white flex items-center justify-center">
      <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-8">
        <h1 className="text-2xl font-semibold mb-4">Welcome Back</h1>

        <input
          placeholder="Email"
          className="w-full mb-4 bg-black/40 border border-white/10 rounded-xl px-4 py-3"
        />

        <input
          placeholder="Password"
          type="password"
          className="w-full mb-6 bg-black/40 border border-white/10 rounded-xl px-4 py-3"
        />

        <button className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 font-semibold">
          Login
        </button>
      </div>
    </main>
  );
}
