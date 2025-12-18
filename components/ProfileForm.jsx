'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Upload, Camera, Crown, Euro, CheckCircle } from 'lucide-react'

export default function ProfileForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    location: '',
    description: '',
    pricePerMin: '',
    tags: '',
    photos: [],
    agreeTerms: false
  })

  const handlePayment = () => {
    // Demo payment flow
    alert('€50 Profile Fee - Payment Integration Coming Soon!\n\nNext: Diamond Rank €99/month\nPlatinum €79/month\nGold €49/month')
  }

  return (
    <section className="py-24 bg-gradient-to-b from-moody-900 to-moody-800 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 gradient-gold bg-clip-text text-transparent">
            Become Elite Model
          </h1>
          <div className="flex items-center justify-center space-x-2 text-moody-400 mb-8">
            <Euro className="w-6 h-6" />
            <span className="text-xl">€50 Profile Activation</span>
            <Crown className="w-6 h-6" />
          </div>
          <p className="text-xl text-moody-300 max-w-2xl mx-auto">
            Verified models earn 70% commission. Diamond rank featured in banner.
          </p>
        </div>

        <div className="glass p-12 rounded-4xl shadow-2xl">
          <div className="flex items-center justify-center mb-12 text-sm">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold ${
              step >= 1 ? 'bg-gradient-to-r from-moody-400 to-moody-300 text-white shadow-lg' : 'bg-white/10'
            }`}>
              1
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-moody-400 to-moody-300 mx-4" />
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold ${
              step >= 2 ? 'bg-gradient-to-r from-moody-400 to-moody-300 text-white shadow-lg' : 'bg-white/10'
            }`}>
              2
            </div>
            <div className="flex-1 h-px bg-white/20 mx-4" />
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold ${
              step >= 3 ? 'bg-emerald-500 text-white shadow-lg' : 'bg-white/10'
            }`}>
              💎
            </div>
          </div>

          {step === 1 && (
            <div>
              <h3 className="text-3xl font-bold mb-8 text-center">Basic Information</h3>
              <form className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-semibold mb-3 text-moody-200">Full Name</label>
                  <input
                    type="text"
                    className="w-full glass p-4 rounded-2xl border-2 border-white/20 focus:border-moody-300 focus:outline-none transition text-lg"
                    placeholder="Sophia Laurent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-3 text-moody-200">Age</label>
                  <input
                    type="number"
                    className="w-full glass p-4 rounded-2xl border-2 border-white/20 focus:border-moody-300 focus:outline-none transition text-lg"
                    placeholder="24"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-3 text-moody-200">Location</label>
                  <input
                    type="text"
                    className="w-full glass p-4 rounded-2xl border-2 border-white/20 focus:border-moody-300 focus:outline-none transition text-lg"
                    placeholder="Berlin, Germany"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-3 text-moody-200">Price per Minute (€)</label>
                  <input
                    type="number"
                    step="0.01"
                    className="w-full glass p-4 rounded-2xl border-2 border-white/20 focus:border-moody-300 focus:outline-none transition text-lg"
                    placeholder="5.99"
                  />
                </div>
              </form>
              <button
                onClick={() => setStep(2)}
                className="mt-12 w-full bg-gradient-to-r from-moody-400 to-moody-300 text-moody-900 font-bold py-6 px-8 rounded-3xl text-xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 mx-auto"
              >
                <CheckCircle className="w-7 h-7" />
                <span>Next: Profile Photos</span>
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="text-3xl font-bold mb-8 text-center">Upload Photos</h3>
              <p className="text-moody-300 text-lg mb-12 text-center max-w-2xl mx-auto">
                Upload 5-15 high quality photos. Professional lighting recommended.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-12">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="group relative h-32 bg-moody-700/50 rounded-2xl border-2 border-dashed border-white/30 hover:border-moody-400 transition cursor-pointer overflow-hidden">
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 opacity-0 group-hover:opacity-100 transition">
                      <Upload className="w-12 h-12 text-moody-400 mb-2" />
                      <p className="text-sm text-moody-400">Upload Photo</p>
                    </div>
                    <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 glass py-4 px-8 rounded-2xl border border-white/20 hover:bg-white/10 transition"
                >
                  Previous
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-400 text-black font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
                >
                  Complete Profile €50 →
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full flex items-center justify-center shadow-2xl">
                <Crown className="w-16 h-16 text-black" />
              </div>
              <h2 className="text-4xl font-playfair font-bold mb-6 gradient-gold bg-clip-text text-transparent">
                Profile Ready!
              </h2>
              <p className="text-xl text-moody-300 mb-12 max-w-lg mx-auto">
                Pay €50 activation fee to go live. Choose Diamond rank for banner placement.
              </p>

              <div className="glass p-8 rounded-3xl mb-12 max-w-md mx-auto">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold">Profile Activation</span>
                  <span className="text-2xl font-bold gradient-gold bg-clip-text text-transparent">€50</span>
                </div>
                <div className="space-y-2 text-sm text-moody-400">
                  <div className="flex justify-between">
                    <span>Basic Profile</span>
                    <span>€50</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-white/20">
                    <span>70% Commission</span>
                    <span>✅</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
                <div className="glass p-6 rounded-2xl text-center group hover:scale-105 transition">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-black">🥉</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2">Gold €49/mo</h4>
                  <p className="text-moody-400 text-sm mb-4">Top 50 placement</p>
                  <button className="w-full py-3 rounded-xl bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition">Select</button>
                </div>

                <div className="glass p-6 rounded-2xl text-center group hover:scale-105 transition relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-xs font-bold">POPULAR</div>
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">🥈</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2">Platinum €79/mo</h4>
                  <p className="text-moody-400 text-sm mb-4">Top 20 + featured</p>
                  <button className="w-full py-3 rounded-xl bg-blue-500 text-white font-bold hover:bg-blue-400 transition">Select</button>
                </div>

                <div className="glass p-6 rounded-2xl text-center group hover:scale-105 transition">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-black">🥇</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2">Diamond €99/mo</h4>
                  <p className="text-moody-400 text-sm mb-4">Banner + #1 spot</p>
                  <button className="w-full py-3 rounded-xl bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition">Select</button>
                </div>
              </div>

              <button
                onClick={handlePayment}
                className="w-full bg-gradient-to-r from-moody-400 via-moody-300 to-moody-200 text-moody-900 font-bold py-6 px-8 rounded-3xl text-xl shadow-3xl hover:shadow-4xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 mx-auto"
              >
                <Euro className="w-8 h-8" />
                <span>Pay €50 & Go Live</span>
                <CheckCircle className="w-8 h-8" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
