'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import Navigation from './Navigation'
import clsx from 'clsx'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={clsx(
        'fixed top-0 z-50 w-full transition-all duration-500',
        isScrolled
          ? 'bg-white/95 shadow-md backdrop-blur-lg border-b border-emerald-100'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between py-5 md:py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center group space-x-4 relative">
            <Logo isScrolled={isScrolled} />
            {/* Optional Company Name or Tagline */}
            {/* <span className={clsx(
              'font-bold tracking-tight text-xl md:text-2xl transition-colors',
              isScrolled ? 'text-emerald-800' : 'text-white'
            )}>
              Natureore
            </span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <Navigation isScrolled={isScrolled} />
          </div>

          {/* Contact & CTA */}
          <DesktopContact isScrolled={isScrolled} />

          {/* Mobile Menu Button */}
          <button
            className={clsx(
              'lg:hidden p-3 rounded-xl border-2 transition-all',
              isScrolled
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100'
                : 'bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm'
            )}
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && <MobileNav close={() => setIsMenuOpen(false)} />}
      </div>
    </header>
  )
}

function Logo({ isScrolled }: { isScrolled: boolean }) {
  return (
    <div className="relative flex-shrink-0 group">
      <div className="absolute -inset-3 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500" />
      <div className={clsx(
        'relative p-2 rounded-2xl transition-all',
        isScrolled
          ? 'bg-white shadow-lg border border-emerald-100'
          : 'bg-white/10 backdrop-blur-md border border-white/20'
      )}>
        <Image
          src="/logo.png"
          width={72}
          height={72}
          alt="Natureore Nigeria Limited"
          className="rounded-xl transition-transform group-hover:scale-110"
        />
      </div>
    </div>
  )
}

function DesktopContact({ isScrolled }: { isScrolled: boolean }) {
  return (
    <div className="hidden lg:flex items-center space-x-6">
      <Link
        href="/contact"
        className={clsx(
          'relative group px-5 py-2 rounded-xl font-semibold transition-all',
          isScrolled
            ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-md'
            : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm'
        )}
      >
        <span className="relative z-10">Contact Now</span>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-xl" />
      </Link>
    </div>
  )
}

function MobileNav({ close }: { close: () => void }) {
  return (
    <div className="lg:hidden py-6 mt-2 rounded-b-2xl bg-white/95 shadow-xl backdrop-blur-xl border-t border-gray-200">
      <Navigation mobile isScrolled onClose={close} />
      <div className="mt-6 px-4 space-y-4">
        <Link
          href="/contact"
          onClick={close}
          className="block text-center w-full font-semibold py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-xl hover:shadow-lg transition-all"
        >
          Contact Now
        </Link>
      </div>
    </div>
  )
}
