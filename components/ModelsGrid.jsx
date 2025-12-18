// components/ModelsGrid.jsx
import { Star, Video, MessageCircle, Globe, Clock } from 'lucide-react'

export default function ModelsGrid() {
  const models = [
    { id: 1, name: "Isabella Moon", age: 23, country: "Italy", rating: 4.9, price: "$8/min", isOnline: true, isNew: true, category: "Premium" },
    { id: 2, name: "Chloe Sky", age: 21, country: "France", rating: 4.8, price: "$7/min", isOnline: true, isNew: false, category: "Featured" },
    { id: 3, name: "Ava Night", age: 25, country: "Spain", rating: 4.7, price: "$9/min", isOnline: false, isNew: true, category: "New" },
    { id: 4, name: "Mia Storm", age: 22, country: "Germany", rating: 4.9, price: "$11/min", isOnline: true, isNew: false, category: "Premium" },
    { id: 5, name: "Zoe Blaze", age: 24, country: "Canada", rating: 4.6, price: "$6/min", isOnline: true, isNew: false, category: "Featured" },
    { id: 6, name: "Emma Rose", age: 26, country: "USA", rating: 4.8, price: "$10/min", isOnline: true, isNew: true, category: "New" },
    { id: 7, name: "Olivia Pearl", age: 23, country: "UK", rating: 4.7, price: "$8/min", isOnline: false, isNew: false, category: "Featured" },
    { id: 8, name: "Charlotte Sky", age: 22, country: "Australia", rating: 4.9, price: "$12/min", isOnline: true, isNew: false, category: "Premium" },
    { id: 9, name: "Amelia Star", age: 24, country: "Brazil", rating: 4.5, price: "$5/min", isOnline: true, isNew: true, category: "New" },
    { id: 10, name: "Harper Moon", age: 25, country: "Mexico", rating: 4.8, price: "$7/min", isOnline: true, isNew: false, category: "Featured" },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">Explore Our Models</h2>
          <p className="text-gray-400">Choose from our verified and professional companions</p>
        </div>
        <div className="flex space-x-4">
          <select className="bg-dark-200 border border-primary-500 rounded-lg px-4 py-2">
            <option>All Categories</option>
            <option>Premium</option>
            <option>New</option>
            <option>Online Now</option>
          </select>
          <select className="bg-dark-200 border border-primary-500 rounded-lg px-4 py-2">
            <option>Sort by: Rating</option>
            <option>Sort by: Price</option>
            <option>Sort by: Newest</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {models.map((model) => (
          <div key={model.id} className="glass-effect rounded-xl overflow-hidden card-hover">
            {/* Model Image */}
            <div className="relative aspect-[3/4] bg-gradient-to-b from-primary-400 to-primary-600">
              {/* Category Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  model.category === 'Premium' ? 'bg-gradient-premium text-black' :
                  model.category === 'New' ? 'bg-green-500 text-white' :
                  'bg-blue-500 text-white'
                }`}>
                  {model.category}
                </span>
              </div>
              
              {/* New Badge */}
              {model.isNew && (
                <div className="absolute top-3 right-3 z-10">
                  <span className="px-3 py-1 rounded-full bg-red-500 text-white text-xs font-bold">
                    NEW
                  </span>
                </div>
              )}

              {/* Online Status */}
              <div className="absolute top-12 right-3 z-10 flex items-center space-x-1">
                <div className={`w-2 h-2 rounded-full ${model.isOnline ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`}></div>
                <span className="text-xs">{model.isOnline ? 'Online' : 'Offline'}</span>
              </div>

              {/* Action Buttons Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between opacity-0 hover:opacity-100 transition-opacity">
                <button className="bg-primary-600 hover:bg-primary-700 p-3 rounded-full">
                  <MessageCircle className="h-5 w-5" />
                </button>
                <button className="bg-gradient-primary hover:opacity-90 p-3 rounded-full">
                  <Video className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Model Info */}
            <div className="p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-lg">{model.name}</h3>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Globe className="h-3 w-3 mr-1" />
                    {model.age} • {model.country}
                  </div>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="ml-1 font-bold">{model.rating}</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center text-primary-300 font-bold">
                  <Video className="h-4 w-4 mr-1" />
                  {model.price}
                </div>
                <div className="flex space-x-2">
                  <button className="bg-dark-200 hover:bg-dark-300 px-4 py-2 rounded-lg text-sm transition-colors">
                    Profile
                  </button>
                  <button className="bg-gradient-primary hover:opacity-90 px-4 py-2 rounded-lg text-sm transition-all">
                    Chat Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="btn-primary">
          Load More Models
        </button>
      </div>
    </div>
  )
}