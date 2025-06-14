'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Menu, X } from 'lucide-react'
import Navigation from './Navigation'


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
          <img src="natureore.png" style={{width:"70px",height:"70px",borderRadius:"1-px"}} />
            {/* <div className="w-12 h-12 bg-green-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">Natureore</span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <Navigation />
          </div>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Link href="/contact" className="btn-primary">
              Contact Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <Navigation mobile />
            <div className="mt-4">
              <Link href="/contact" className="btn-primary block text-center">
                Contact Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
