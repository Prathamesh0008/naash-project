// components/HowItWorks.jsx
import { UserPlus, Camera, CreditCard, MessageCircle, Video, Star } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: <UserPlus className="h-8 w-8" />,
      title: "Create Profile",
      description: "Models pay €50 to create a verified profile with ID verification",
      color: "bg-purple-500"
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Upload Content",
      description: "Add photos, videos, and set your preferences",
      color: "bg-blue-500"
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Choose Rank",
      description: "Select your preferred ranking package for better visibility",
      color: "bg-green-500"
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Start Chatting",
      description: "Connect with users through private messaging",
      color: "bg-pink-500"
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Video Calls",
      description: "Offer premium video call services",
      color: "bg-red-500"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Earn Money",
      description: "Get paid for your time and content",
      color: "bg-yellow-500"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A simple process for both models and users to connect and enjoy premium adult entertainment
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="glass-effect rounded-xl p-6">
            <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
              <div className="text-white">
                {step.icon}
              </div>
            </div>
            
            <div className="flex items-center mb-4">
              <div className={`${step.color} text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3`}>
                {index + 1}
              </div>
              <h3 className="text-xl font-bold">{step.title}</h3>
            </div>
            
            <p className="text-gray-400">{step.description}</p>
          </div>
        ))}
      </div>

      {/* For Users Section */}
      <div className="glass-effect rounded-xl p-8 mt-12">
        <h3 className="text-2xl font-bold mb-6">For Users</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-400 mb-2">1.</div>
            <h4 className="font-bold mb-2">Browse Models</h4>
            <p className="text-gray-400">Filter by category, rating, or online status</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-400 mb-2">2.</div>
            <h4 className="font-bold mb-2">Add Credits</h4>
            <p className="text-gray-400">Purchase credits securely with multiple payment options</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-400 mb-2">3.</div>
            <h4 className="font-bold mb-2">Start Connection</h4>
            <p className="text-gray-400">Chat or video call with your chosen model</p>
          </div>
        </div>
      </div>
    </div>
  )
}