'use client'

import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronRight, Package, Leaf, Gem, Star } from 'lucide-react'

interface NavigationProps {
  mobile?: boolean
  isScrolled?: boolean
  onClose?: () => void // Added prop to handle closing from parent
}

const productCategories = {
  'staples': {
    title: 'Staples & Processed Foods',
    icon: Package,
    color: 'from-blue-500 to-blue-600',
    items: [
      { name: 'PAP (Custard)', href: '/products/1' },
      { name: 'GARRI (Cassava Flakes)', href: '/products/2' },
      { name: 'Indomie Noodles', href: '/products/3' },
      { name: 'Process Foods', href: '/products/4' },
    ]
  },
  'cash-crops': {
    title: 'Cash Crops & Natural Extracts',
    icon: Leaf,
    color: 'from-emerald-500 to-emerald-600',
    items: [
      { name: 'Roasted Cashew Nuts', href: '/products/5' },
      { name: 'Cashew Kernels', href: '/products/6' },
      { name: 'Raw Cashew Nuts', href: '/products/7' },
      { name: 'Shea Butter', href: '/products/8' },
      { name: 'Soybean Oil', href: '/products/9' },
      { name: 'Roasted Peanuts', href: '/products/10' },
      { name: 'Herbal Teas', href: '/products/11' },
      { name: 'Spices Powder', href: '/products/12' },
      { name: 'Sesame Seeds', href: '/products/13' },
      { name: 'Ginger', href: '/products/14' },
      { name: 'Cassia Tora', href: '/products/15' },
    ]
  },
  'minerals': {
    title: 'Solid-State Minerals',
    icon: Gem,
    color: 'from-purple-500 to-purple-600',
    items: [
      { name: 'Gold', href: '/products/16' },
      { name: 'Lithium', href: '/products/17' },
      { name: 'Gypsum', href: '/products/18' },
      { name: 'Iron Ore', href: '/products/19' },
    ]
  },
  'specialty': {
    title: 'Specialty Products',
    icon: Star,
    color: 'from-orange-500 to-orange-600',
    items: [
      { name: 'Plastic Scraps', href: '/products/20' },
      { name: 'Black Soap', href: '/products/21' },
      { name: 'Animal Feeds', href: '/products/22' },
      { name: 'Children Clothing (African Fabrics)', href: '/products/23' },
    ]
  }
}

export default function Navigation({ mobile = false, isScrolled = false, onClose }: NavigationProps) {
  const [active, setActive] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const mobileNavRef = useRef<HTMLDivElement>(null)

  // Handle outside clicks for mobile navigation
  useEffect(() => {
    if (!mobile) return

    const handleClickOutside = (event: MouseEvent) => {
      if (mobileNavRef.current && !mobileNavRef.current.contains(event.target as Node)) {
        // Close all expanded menus
        setActive(null)
        // Call parent's onClose if provided
        onClose?.()
      }
    }

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside)
    
    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [mobile, onClose])

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 200)
  }

  const toggle = (key: string) => {
    setActive(prev => (prev === key ? null : key))
  }

  // Handle link clicks in mobile to close menu
  const handleLinkClick = () => {
    if (mobile) {
      setActive(null)
      onClose?.()
    }
  }

  const linkStyle = mobile || isScrolled 
    ? "text-gray-800 hover:text-emerald-600" 
    : "text-white hover:text-emerald-200"

  if (mobile) {
    return (
      <nav ref={mobileNavRef} className="space-y-1 px-4">
        {['About'].map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase().replace(/\s/g, '')}`}
            onClick={handleLinkClick}
            className="block py-3 px-4 text-gray-800 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all duration-300 font-medium"
          >
           About Us
          </Link>
        ))}

        <div className="border-t border-gray-200 pt-4 mt-4">
          <button
            onClick={() => toggle('products')}
            className="flex justify-between w-full py-3 px-4 text-gray-800 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all duration-300 font-medium"
          >
            Products
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${active === 'products' ? 'rotate-180' : ''}`} />
          </button>

          {active === 'products' && (
            <div className="mt-2 ml-4 space-y-1">
              {Object.entries(productCategories).map(([key, cat]) => (
                <div key={key}>
                  <button
                    onClick={() => toggle(key)}
                    className="flex justify-between w-full py-2 px-4 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-300 text-sm"
                  >
                    <div className="flex items-center space-x-2">
                      <cat.icon className="w-4 h-4" />
                      <span>{cat.title}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${active === key ? 'rotate-90' : ''}`} />
                  </button>
                  {active === key && (
                    <div className="ml-6 mt-1 space-y-1">
                      {cat.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={handleLinkClick}
                          className="block py-2 px-3 text-xs text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded transition-all duration-300"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>
    )
  }

  return (
    <nav className="flex space-x-8 items-center">
      <Link href="/about" className={`${linkStyle} font-medium transition-all duration-300 hover:scale-105`}>
        About
      </Link>

      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className={`flex items-center gap-2 ${linkStyle} font-medium transition-all duration-300 hover:scale-105`}>
          Products
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 mt-4 bg-white/95 backdrop-blur-xl premium-shadow border border-white/20 rounded-2xl w-[700px] z-50 overflow-hidden">
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6">
                {Object.entries(productCategories).map(([key, cat]) => (
                  <div key={key} className="relative group">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${cat.color}`}>
                        <cat.icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="font-semibold text-emerald-700 text-sm">{cat.title}</div>
                    </div>
                    <div className="space-y-2 ml-2">
                      {cat.items.slice(0, 5).map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block text-sm text-gray-600 hover:text-emerald-600 transition-colors duration-300 py-1 px-2 hover:bg-emerald-50 rounded-lg"
                        >
                          {item.name}
                        </Link>
                      ))}
                      {cat.items.length > 5 && (
                        <Link 
                          href={`/products?category=${key}`}
                          className="inline-flex items-center text-xs text-emerald-500 hover:text-emerald-600 font-medium mt-2"
                        >
                          View all ({cat.items.length})
                          <ChevronRight className="w-3 h-3 ml-1" />
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Footer in dropdown */}
              <div className="mt-6 pt-4 border-t border-gray-200/50">
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-2">Discover premium products from Africa</p>
                  <Link 
                    href="/products" 
                    className="inline-flex items-center text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    Browse All Products
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}