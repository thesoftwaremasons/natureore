import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-green-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">N</span>
              </div>
              <span className="text-xl font-bold">Natureore</span>
            </div>
            <p className="text-gray-400 mb-6">
              "Natureore Logistics Limited – Bridging Continents, Cultivating Prosperity"
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="p-2 bg-green-900 rounded-md hover:bg-green-700 transition-colors">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="p-2 bg-green-900 rounded-md hover:bg-green-700 transition-colors">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="p-2 bg-green-900 rounded-md hover:bg-green-700 transition-colors">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="p-2 bg-green-900 rounded-md hover:bg-green-700 transition-colors">
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <div className="space-y-3">
              <Link href="/" className="block text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/products" className="block text-gray-400 hover:text-white transition-colors">
                Products
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact Us
              </Link>
              <Link href="/blog" className="block text-gray-400 hover:text-white transition-colors">
                Blog
              </Link>
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Product Categories</h4>
            <div className="space-y-3 text-sm">
              <Link href="/products?category=staples" className="block text-gray-400 hover:text-white transition-colors">
                Staples & Processed Foods
              </Link>
              <Link href="/products?category=cash-crops" className="block text-gray-400 hover:text-white transition-colors">
                Cash Crops & Natural Extracts
              </Link>
              <Link href="/products?category=minerals" className="block text-gray-400 hover:text-white transition-colors">
                Solid-State Minerals
              </Link>
              <Link href="/products?category=specialty" className="block text-gray-400 hover:text-white transition-colors">
                Specialty Products
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span>Plot D463 Royal Gardens Estate, Ajah, Lekki, Lagos, Nigeria</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-green-500" />
                <span>ayolanre@natureore.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-green-500" />
                <span>+234 (0) 123 456 7890</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
            <p>Copyright © 2025 Natureore Logistics. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}