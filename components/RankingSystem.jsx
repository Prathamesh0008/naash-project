// components/RankingSystem.jsx
import { Crown, Trophy, Award, Star, TrendingUp } from 'lucide-react'

export default function RankingSystem() {
  const ranks = [
    { 
      name: "Bronze", 
      price: "€50", 
      features: ["Basic Profile", "Standard Listing", "10 Photo Uploads", "Basic Support"],
      color: "from-amber-900 to-amber-700",
      icon: <Award className="h-8 w-8" />
    },
    { 
      name: "Silver", 
      price: "€100", 
      features: ["Priority Listing", "50 Photo Uploads", "Video Uploads", "Priority Support", "Analytics Dashboard"],
      color: "from-gray-400 to-gray-600",
      icon: <Trophy className="h-8 w-8" />
    },
    { 
      name: "Gold", 
      price: "€200", 
      features: ["Top Placement", "Unlimited Uploads", "Featured Banner", "24/7 VIP Support", "Advanced Analytics", "Custom Badge"],
      color: "from-yellow-500 to-yellow-700",
      icon: <Crown className="h-8 w-8" />
    },
    { 
      name: "Diamond", 
      price: "€500", 
      features: ["Homepage Feature", "Exclusive Promotion", "Personal Manager", "Revenue Share Boost", "All Gold Features + More"],
      color: "from-blue-400 to-purple-600",
      icon: <Star className="h-8 w-8" />
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Model Ranking System</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Boost your visibility and earnings with our premium ranking system. 
          Higher ranks mean more exposure and better placement.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {ranks.map((rank, index) => (
          <div key={index} className="glass-effect rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${rank.color} flex items-center justify-center mb-4 mx-auto`}>
              <div className="text-white">
                {rank.icon}
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-center mb-2">{rank.name}</h3>
            <div className="text-3xl font-bold text-center mb-6 text-primary-400">{rank.price}</div>
            
            <ul className="space-y-3 mb-6">
              {rank.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full bg-dark-200 hover:bg-dark-300 py-3 rounded-lg font-semibold transition-colors">
              Upgrade to {rank.name}
            </button>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="glass-effect rounded-xl p-8">
        <h3 className="text-2xl font-bold mb-6 flex items-center">
          <TrendingUp className="h-6 w-6 mr-2 text-green-400" />
          Rank Benefits Statistics
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-400 mb-2">5x</div>
            <div className="text-gray-400">More Profile Views</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-400 mb-2">3x</div>
            <div className="text-gray-400">Higher Earnings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-400 mb-2">70%</div>
            <div className="text-gray-400">More Messages</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-400 mb-2">24/7</div>
            <div className="text-gray-400">Priority Support</div>
          </div>
        </div>
      </div>
    </div>
  )
}