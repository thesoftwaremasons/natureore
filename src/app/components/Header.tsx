'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'
import Navigation from './Navigation'
import clsx from 'clsx'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={clsx(
        'fixed top-0 z-50 w-full transition-all duration-500',
        isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-emerald-900/10' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center group space-x-4 relative">
            <Logo isScrolled={isScrolled} />

            <div className="flex flex-col">
              <span
                className={clsx(
                  'text-2xl font-bold tracking-tight transition-colors',
                  isScrolled ? 'text-gray-900' : 'text-white'
                )}
              >
                Natureore
              </span>
              <div className="flex items-center space-x-2">
                <span
                  className={clsx(
                    'text-sm font-medium',
                    isScrolled ? 'text-emerald-600' : 'text-emerald-200'
                  )}
                >
                  Nigeria limited Limited
                </span>
                <div className={clsx('h-3 w-px', isScrolled ? 'bg-emerald-300' : 'bg-emerald-300/50')} />
                <span
                  className={clsx(
                    'text-xs font-medium tracking-wide',
                    isScrolled ? 'text-gray-500' : 'text-white/70'
                  )}
                >
                  AFRICA TO THE WORLD
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <Navigation isScrolled={isScrolled} />
          </div>

          {/* Desktop Contact */}
          <DesktopContact isScrolled={isScrolled} />

          {/* Mobile Toggle */}
          <button
            className={clsx(
              'lg:hidden p-3 rounded-xl border-2 relative overflow-hidden',
              isScrolled
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100'
                : 'bg-white/10 text-white border-white/20 backdrop-blur-sm hover:bg-white/20'
            )}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <MobileNav close={() => setIsMenuOpen(false)} />
        )}
      </div>
    </header>
  )
}

// Logo component
function Logo({ isScrolled }: { isScrolled: boolean }) {
  return (
    <div className="relative flex-shrink-0">
      <div className="absolute -inset-3 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500" />
      <div
        className={clsx(
          'relative p-2 rounded-2xl transition-all',
          isScrolled
            ? 'bg-white shadow-lg border-2 border-emerald-100'
            : 'bg-white/10 backdrop-blur-sm border-2 border-white/20'
        )}
      >
        <Image
          src="/natureore.png"
          width={50}
          height={50}
          alt="Natureore Nigeria limited"
          className="rounded-xl transition-transform group-hover:scale-110"
        />
      </div>
      <div
        className={clsx(
          'absolute -top-1 -right-1 w-3 h-3 rounded-full transition-transform',
          isScrolled ? 'bg-emerald-500' : 'bg-emerald-400',
          'group-hover:scale-125'
        )}
      />
    </div>
  )
}

// Desktop contact section
function DesktopContact({ isScrolled }: { isScrolled: boolean }) {
  return (
    <div className="hidden lg:flex items-center space-x-6">
      <div className="flex items-center space-x-2">
        <div
          className={clsx(
            'p-2 rounded-lg',
            isScrolled ? 'bg-emerald-100 text-emerald-600' : 'bg-emerald-500/20 text-emerald-200'
          )}
        >
          {/* <Phone className="w-4 h-4" /> */}
        </div>
        {/* <div className="flex flex-col">
          <span className={clsx('text-xs font-medium', isScrolled ? 'text-gray-500' : 'text-white/70')}>
            Call Us Now
          </span>
          <span className={clsx('text-sm font-bold', isScrolled ? 'text-gray-900' : 'text-white')}>
            +234 (0) 81 873 577 92
          </span>
        </div> */}
      </div>
      <Link href="/contact" className="btn-primary relative overflow-hidden group">
        <span className="relative z-10">Contact Now</span>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
      </Link>
    </div>
  )
}

// Mobile Nav
function MobileNav({ close }: { close: () => void }) {
  return (
    <div className="lg:hidden py-6 border-t border-gray-200/20 bg-white/95 backdrop-blur-xl shadow-2xl rounded-b-2xl mt-2">
      <Navigation mobile isScrolled onClose={close} />
      <div className="mt-6 px-4 space-y-4">
        <div className="flex items-center space-x-3">
          {/* <div className="p-2 rounded-lg bg-emerald-100 text-emerald-600">
            <Phone className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 font-medium">Call Us Now</span>
            <span className="text-sm font-bold text-gray-900">+234 (0) 81 873 577 92</span>
          </div> */}
        </div>
        <Link href="/contact" className="btn-primary block text-center w-full relative overflow-hidden group" onClick={close}>
          <span className="relative z-10">Contact Now</span>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
        </Link>
      </div>
    </div>
  )
}
