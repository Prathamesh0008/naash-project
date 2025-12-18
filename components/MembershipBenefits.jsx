import React from 'react';
import { CheckCircle, Shield, Star, Eye, Lock, Users, Bell, TrendingUp, MessageSquare, BarChart, Headphones, Crown } from 'lucide-react';

const MembershipBenefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Advanced protection for your privacy and data'
    },
    {
      icon: Eye,
      title: 'Better Visibility',
      description: 'Stand out in search results and get noticed'
    },
    {
      icon: Star,
      title: 'Exclusive Access',
      description: 'Access premium clients and exclusive events'
    },
    {
      icon: CheckCircle,
      title: 'Priority Verification',
      description: 'Fast-track verification process'
    },
    {
      icon: TrendingUp,
      title: 'Top Search Results',
      description: 'Appear first in relevant searches'
    },
    {
      icon: Users,
      title: 'VIP Clients',
      description: 'Connect with high-profile, verified clients'
    },
    {
      icon: MessageSquare,
      title: 'Encrypted Chat',
      description: 'Secure, private messaging system'
    },
    {
      icon: Bell,
      title: 'Featured Listing',
      description: 'Premium placement on the platform'
    },
    {
      icon: Star,
      title: 'Premium Events',
      description: 'Invitations to exclusive gatherings'
    },
    {
      icon: Lock,
      title: 'Discretion Mode',
      description: 'Control your visibility and privacy'
    },
    {
      icon: BarChart,
      title: 'Profile Analytics',
      description: 'Detailed insights into your profile performance'
    },
    {
      icon: Headphones,
      title: 'Priority Support',
      description: '24/7 dedicated customer support'
    }
  ];

  const tiers = [
    {
      name: 'Basic',
      price: 'Free',
      features: ['Standard Security', 'Basic Visibility', 'Regular Support'],
      highlighted: false
    },
    {
      name: 'Pro',
      price: '$99/month',
      features: ['Enhanced Security', 'Better Visibility', 'Priority Verification', 'Profile Analytics'],
      highlighted: false
    },
    {
      name: 'Elite Membership',
      price: '$199/month',
      features: ['All Premium Features', 'VIP Client Access', '24/7 Priority Support', 'Exclusive Events'],
      highlighted: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Crown className="w-12 h-12 text-yellow-500" />
            <h1 className="text-4xl md:text-5xl font-bold">
              ELITE <span className="text-yellow-500">MEMBERSHIP</span> BENEFITS
            </h1>
          </div>
          <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
            Unlock exclusive features and premium access designed for top-tier creators
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Unlock <span className="text-yellow-500">Premium</span> Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-yellow-500/10 rounded-lg">
                      <Icon className="w-6 h-6 text-yellow-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-gray-400">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-12">
            Choose Your <span className="text-yellow-500">Membership</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${tier.highlighted ? 'bg-gradient-to-b from-yellow-500/20 to-yellow-600/10 border-2 border-yellow-500' : 'bg-gray-800/50 border border-gray-700'}`}
              >
                {tier.highlighted && (
                  <div className="flex justify-center mb-4">
                    <span className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                      RECOMMENDED
                    </span>
                  </div>
                )}
                
                <h3 className={`text-2xl font-bold text-center mb-4 ${tier.highlighted ? 'text-yellow-500' : 'text-white'}`}>
                  {tier.name}
                </h3>
                
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.price !== 'Free' && <span className="text-gray-400 ml-2">/month</span>}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 ${tier.highlighted ? 'text-yellow-500' : 'text-green-500'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${tier.highlighted 
                    ? 'bg-yellow-500 text-black hover:bg-yellow-600 hover:scale-[1.02]' 
                    : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                >
                  {tier.highlighted ? 'Upgrade to Elite - $199/mo' : `Choose ${tier.name}`}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-2xl p-8 text-center">
          <Crown className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">
            Ready to Elevate Your Experience?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of elite creators who have transformed their success with our premium membership
          </p>
          <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold py-3 px-8 rounded-lg text-lg hover:scale-105 transition-transform duration-300">
            Start Your Elite Journey Today
          </button>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-yellow-500">99%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-500">24/7</div>
            <div className="text-gray-400">Support Available</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-500">5K+</div>
            <div className="text-gray-400">Elite Members</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-500">30d</div>
            <div className="text-gray-400">Money-Back Guarantee</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipBenefits;