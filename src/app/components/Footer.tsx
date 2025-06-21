import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone, ArrowRight, Leaf, Award, Globe } from 'lucide-react'

export default function Footer() {
  const productCategories = [
    { name: 'Staples & Processed Foods', href: '/products?category=staples' },
    { name: 'Cash Crops & Natural Extracts', href: '/products?category=cash-crops' },
    { name: 'Solid-State Minerals', href: '/products?category=minerals' },
    { name: 'Specialty Products', href: '/products?category=specialty' },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  const features = [
    { icon: Leaf, text: 'Sustainable Sourcing' },
    { icon: Award, text: 'Premium Quality' },
    { icon: Globe, text: 'Global Reach' },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-400 rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-8">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl flex items-center justify-center shadow-2xl">
                  <span className="text-white font-bold text-2xl">N</span>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-400 rounded-full animate-pulse" />
              </div>
              <div>
                <span className="text-2xl font-bold">Natureore</span>
                <div className="text-emerald-300 text-sm font-medium">Nigeria limited Limited</div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-8 leading-relaxed font-light">
              Bridging Continents, Cultivating Prosperity. Your trusted partner in premium African exports and sustainable global trade.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="p-2 bg-emerald-500/20 rounded-lg">
                    <feature.icon className="w-4 h-4 text-emerald-300" />
                  </div>
                  <span className="text-sm text-gray-300 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link 
                  key={index}
                  href={social.href} 
                  className="p-3 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl hover:from-emerald-500 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 hover:scale-110 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded mr-3" />
              Quick Links
            </h4>
            <div className="space-y-4">
              {['Home', 'About Us', 'Products', 'Contact Us'].map((item) => (
                <Link 
                  key={item}
                  href={`/${item.toLowerCase().replace(/\s/g, '')}`} 
                  className="block text-gray-300 hover:text-emerald-300 transition-all duration-300 group flex items-center"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">{item}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-xl font-bold mb-8 flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded mr-3" />
              Our Products
            </h4>
            <div className="space-y-4">
              {productCategories.map((category) => (
                <Link 
                  key={category.name}
                  href={category.href} 
                  className="block text-gray-300 hover:text-emerald-300 transition-all duration-300 group text-sm"
                >
                  <div className="flex items-start space-x-2">
                    <ArrowRight className="w-4 h-4 mt-0.5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300 leading-relaxed">{category.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-8 flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded mr-3" />
              Get In Touch
            </h4>
            <div className="space-y-6">
              <div className="group">
                <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-medium text-emerald-300 mb-1">Address</div>
                    <span className="text-gray-300 text-sm leading-relaxed">
                      Plot D463 Royal Gardens Estate, Ajah, Lekki, Lagos, Nigeria
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <Mail className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-medium text-emerald-300 mb-1">Email</div>
                    <span className="text-gray-300 text-sm">ayolanre@natureore.com</span>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <Phone className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-medium text-emerald-300 mb-1">Phone</div>
                    <span className="text-gray-300 text-sm">+234 (0) 81 873 577 92</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-700/50 py-8 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-400">
              <p className="text-sm">
                Copyright © 2025 Natureore Nigeria limited Limited. All rights reserved.
              </p>
              <div className="flex items-center space-x-2 text-emerald-300">
                <Leaf className="w-4 h-4" />
                <span className="text-xs font-medium">Sustainably Sourced • Globally Trusted</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
                <Link 
                  key={item}
                  href={`/${item.toLowerCase().replace(/\s/g, '')}`} 
                  className="text-gray-400 hover:text-emerald-300 transition-colors duration-300 text-sm font-medium"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}