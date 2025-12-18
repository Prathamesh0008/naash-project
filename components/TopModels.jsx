'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, MessageCircle, Video, Crown, Euro } from 'lucide-react'

// 10 Demo Models Data
const demoModels = [
  {
    id: 1,
    name: 'Sophia L.',
    age: 24,
    location: 'Berlin',
    rank: 'DIAMOND',
    price: 5.99,
    rating: 4.9,
    reviews: 1278,
    online: true,
    tags: ['Blonde', 'Fitness', 'Roleplay'],
    image: '/models/model-1.jpg'
  },
  {
    id: 2,
    name: 'Isabella R.',
    age: 26,
    location: 'Amsterdam',
    rank: 'PLATINUM',
    price: 6.99,
    rating: 4.8,
    reviews: 985,
    online: true,
    tags: ['Brunette', 'Exotic', 'Massage'],
    image: '/models/model-2.jpg'
  },
  {
    id: 3,
    name: 'Emma S.',
    age: 22,
    location: 'Munich',
    rank: 'GOLD',
    price: 4.99,
    rating: 4.95,
    reviews: 1562,
    online: false,
    tags: ['Redhead', 'Student', 'Sweet'],
    image: '/models/model-3.jpg'
  },
  {
    id: 4,
    name: 'Olivia M.',
    age: 28,
    location: 'Paris',
    rank: 'DIAMOND',
    price: 7.99,
    rating: 4.92,
    reviews: 2034,
    online: true,
    tags: ['Curvy', 'French', 'Luxury'],
    image: '/models/model-4.jpg'
  },
  {
    id: 5,
    name: 'Ava K.',
    age: 25,
    location: 'London',
    rank: 'PLATINUM',
    price: 5.49,
    rating: 4.87,
    reviews: 892,
    online: true,
    tags: ['Petite', 'Asian', 'Kinky'],
    image: '/models/model-5.jpg'
  },
  {
    id: 6,
    name: 'Mia W.',
    age: 23,
    location: 'Madrid',
    rank: 'GOLD',
    price: 4.79,
    rating: 4.91,
    reviews: 734,
    online: false,
    tags: ['Latina', 'Dancer', 'Party'],
    image: '/models/model-6.jpg'
  },
  {
    id: 7,
    name: 'Charlotte B.',
    age: 27,
    location: 'Vienna',
    rank: 'DIAMOND',
    price: 8.99,
    rating: 4.96,
    reviews: 2891,
    online: true,
    tags: ['MILF', 'Busty', 'Dom'],
    image: '/models/model-7.jpg'
  },
  {
    id: 8,
    name: 'Amelia T.',
    age: 21,
    location: 'Zurich',
    rank: 'SILVER',
    price: 3.99,
    rating: 4.85,
    reviews: 456,
    online: true,
    tags: ['Teen', 'Natural', 'Shy'],
    image: '/models/model-8.jpg'
  },
  {
    id: 9,
    name: 'Harper J.',
    age: 29,
    location: 'Rome',
    rank: 'PLATINUM',
    price: 6.49,
    rating: 4.88,
    reviews: 1345,
    online: false,
    tags: ['Italian', 'Tattoo', 'Fetish'],
    image: '/models/model-9.jpg'
  },
  {
    id: 10,
    name: 'Evelyn P.',
    age: 24,
    location: 'Stockholm',
    rank: 'GOLD',
    price: 5.29,
    rating: 4.93,
    reviews: 987,
    online: true,
    tags: ['Nordic', 'Slim', 'Intellectual'],
    image: '/models/model-10.jpg'
  }
]

export default function TopModels() {
  return (
    <section className="py-24 bg-moody-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6 gradient-gold bg-clip-text text-transparent">
            Featured Elite Models
          </h2>
          <p className="text-xl text-moody-300 max-w-2xl mx-auto">
            Verified profiles ranked by popularity. All models pay €50 activation + ranking fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
          {demoModels.map((model) => (
            <Link href={`/chat/${model.id}`} key={model.id} className="group">
              <div className="glass rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-3xl hover:shadow-moody-500/25">
                {/* Model Image */}
                <div className="relative h-80 bg-gradient-to-br from-moody-700 to-moody-900 overflow-hidden">
                  <Image
                    src={model.image}
                    alt={model.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Online Status */}
                  <div className={`absolute top-4 right-4 w-5 h-5 rounded-full border-3 ${
                    model.online 
                      ? 'bg-emerald-400 border-emerald-500' 
                      : 'bg-red-500/50 border-red-600/50'
                  }`} />
                  
                  {/* Rank Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full shadow-lg">
                    {model.rank}
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="absolute bottom-4 left-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="w-full flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm py-2 px-4 rounded-xl border border-white/30 hover:bg-white/30 transition">
                      <Video className="w-5 h-5" />
                      <span className="text-sm font-semibold">Video Call</span>
                    </button>
                    <button className="w-full flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm py-2 px-4 rounded-xl border border-white/30 hover:bg-white/30 transition">
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-sm font-semibold">Chat Now</span>
                    </button>
                  </div>
                </div>

                {/* Model Info */}
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 group-hover:text-moody-200 transition">{model.name}</h3>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-moody-300 text-sm">
                      <span>{model.age}y</span>
                      <span className="mx-2">•</span>
                      <span>{model.location}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-xs text-moody-400 ml-1">({model.reviews})</span>
                    </div>
                  </div>

                  {/* Price & Tags */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold gradient-gold bg-clip-text text-transparent">
                      €{model.price}/min
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {model.tags.slice(0, 2).map((tag, i) => (
                        <span key={i} className="px-2 py-1 bg-white/10 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Payment Info */}
                  <div className="flex items-center justify-between text-xs text-moody-400">
                    <span>€50 Profile + €99/mo Diamond Rank</span>
                    <Euro className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
