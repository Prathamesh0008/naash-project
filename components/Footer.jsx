// components/Footer.jsx
import { Shield, Lock, CreditCard, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-100 border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Elite Companions
            </div>
            <p className="text-gray-400 mb-6">
              Premium adult entertainment platform connecting verified models with users worldwide.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-green-400">
                <Shield className="h-5 w-5" />
                <span className="text-sm">Secure</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-400">
                <Lock className="h-5 w-5" />
                <span className="text-sm">Private</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-400">
                <CreditCard className="h-5 w-5" />
                <span className="text-sm">Safe Payments</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Models Directory</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Top Ranking</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">New Models</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Online Now</a></li>
            </ul>
          </div>

          {/* For Models */}
          <div>
            <h3 className="font-bold text-lg mb-4">For Models</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Join Our Platform</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Ranking System</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Earning Calculator</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Safety Guidelines</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4">Legal & Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Payment Methods</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Contact Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">DMCA</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Elite Companions. All rights reserved. 
              <span className="mx-2">•</span>
              <span className="text-red-400 flex items-center">
                <Heart className="h-3 w-3 mr-1" /> 18+
              </span>
            </div>
            <div className="text-sm text-gray-400">
              Strictly for adults 18+. All models are 18+ and verified.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}