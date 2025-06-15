'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'
import Navigation from './Navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-emerald-900/10' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity" />
              <Image 
                src="/natureore.png" 
                alt="Natureore Logistics" 
                width={60} 
                height={60}
                className="relative rounded-xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="hidden sm:block">
              <span className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Natureore
              </span>
              <div className={`text-sm transition-colors duration-300 ${
                isScrolled ? 'text-emerald-600' : 'text-emerald-200'
              }`}>
                Logistics Limited
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <Navigation isScrolled={isScrolled} />
          </div>

          {/* Contact Info & Button */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className={`w-4 h-4 ${isScrolled ? 'text-emerald-600' : 'text-emerald-200'}`} />
                <span className={`text-sm font-medium ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                  +234 (0) 123 456 7890
                </span>
              </div>
            </div>
            
            <Link href="/contact" className="btn-primary">
              Contact Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
              isScrolled 
                ? 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700' 
                : 'bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-200/20 bg-white/95 backdrop-blur-xl rounded-b-2xl mt-2 shadow-2xl">
            <Navigation mobile isScrolled={true} />
            <div className="mt-6 px-4">
              <div className="flex items-center space-x-2 mb-4 text-emerald-600">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">+234 (0) 123 456 7890</span>
              </div>
              <Link href="/contact" className="btn-primary block text-center w-full">
                Contact Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}