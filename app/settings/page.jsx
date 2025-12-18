"use client";

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0214] to-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-semibold mb-8">Settings</h1>

        <div className="space-y-6">
          <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
            <h3 className="font-semibold mb-2">Account</h3>
            <p className="text-white/60 text-sm mb-4">
              Manage your account details
            </p>
            <button className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20">
              Change Password
            </button>
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
            <h3 className="font-semibold mb-2">Notifications</h3>
            <p className="text-white/60 text-sm mb-4">
              Control email and system notifications
            </p>
            <button className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20">
              Manage Notifications
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
