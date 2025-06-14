'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronRight } from 'lucide-react'

interface NavigationProps {
  mobile?: boolean
}

const productCategories = {
  'staples': {
    title: 'Staples & Processed Foods',
    items: [
      { name: 'PAP (Custard)', href: '/products/1' },
      { name: 'GARRI (Cassava Flakes)', href: '/products/2' },
      { name: 'Indomie Noodles', href: '/products/3' },
      { name: 'Process Foods', href: '/products/4' },
    ]
  },
  'cash-crops': {
    title: 'Cash Crops & Natural Extracts',
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
    items: [
      { name: 'Gold', href: '/products/16' },
      { name: 'Lithium', href: '/products/17' },
      { name: 'Gypsum', href: '/products/18' },
      { name: 'Iron Ore', href: '/products/iron-ore' },
    ]
  },
  'specialty': {
    title: 'Specialty Products',
    items: [
      { name: 'Plastic Scraps', href: '/products/plastic-scraps' },
      { name: 'Black Soap', href: '/products/black-soap' },
      { name: 'Animal Feeds', href: '/products/animal-feeds' },
      { name: 'Children Clothing (African Fabrics)', href: '/products/african-fabrics' },
    ]
  }
}

export default function Navigation({ mobile = false }: NavigationProps) {
  const [active, setActive] = useState<string | null>(null)

  const [isOpen, setIsOpen] = useState(false)
const timeoutRef = useRef<NodeJS.Timeout | null>(null)

const handleMouseEnter = () => {
  if (timeoutRef.current) clearTimeout(timeoutRef.current)
  setIsOpen(true)
}

const handleMouseLeave = () => {
  timeoutRef.current = setTimeout(() => {
    setIsOpen(false)
  }, 200) // small delay to allow cursor travel
}


  const toggle = (key: string) => {
    setActive(prev => (prev === key ? null : key))
  }

  if (mobile) {
    return (
      <nav className="space-y-2">
        {['Home', 'About', 'Contact'].map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase().replace(/\s/g, '')}`}
            className="block py-2 text-gray-800 hover:text-green-600"
          >
            {item}
          </Link>
        ))}

        <div className="border-t pt-2">
          <button
            onClick={() => toggle('products')}
            className="flex justify-between w-full py-2 text-gray-800 hover:text-green-600"
          >
            Products
            <ChevronDown className={`w-4 h-4 transition-transform ${active === 'products' ? 'rotate-180' : ''}`} />
          </button>

          {active === 'products' && (
            <div className="mt-2 pl-2 space-y-2">
              {Object.entries(productCategories).map(([key, cat]) => (
                <div key={key}>
                  <button
                    onClick={() => toggle(key)}
                    className="flex justify-between w-full py-1 text-sm text-gray-700 hover:text-green-600"
                  >
                    {cat.title}
                    <ChevronRight className={`w-4 h-4 transition-transform ${active === key ? 'rotate-90' : ''}`} />
                  </button>
                  {active === key && (
                    <div className="ml-4 mt-1 space-y-1">
                      {cat.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block text-xs text-gray-600 hover:text-green-600"
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
    <nav className="flex space-x-6 items-center">
      <Link href="/" className="text-gray-800 hover:text-green-600 font-medium transition-colors">Home</Link>
      <Link href="/about" className="text-gray-800 hover:text-green-600 font-medium transition-colors">About</Link>

      <div
  className="relative"
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
  <button className="flex items-center gap-1 text-gray-800 hover:text-green-600 font-medium transition-colors">
    Products
    <ChevronDown className="w-4 h-4" />
  </button>

  {isOpen && (
    <div className="absolute top-full left-0 mt-2 bg-white shadow-xl border rounded-lg w-[650px] z-50">
      <div className="grid grid-cols-2 gap-4 p-4">
        {Object.entries(productCategories).map(([key, cat]) => (
          <div key={key} className="relative">
            <div className="font-semibold text-green-700 mb-1">{cat.title}</div>
            <div className="space-y-1">
              {cat.items.slice(0, 5).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-gray-600 hover:text-green-600 transition"
                >
                  {item.name}
                </Link>
              ))}
              {cat.items.length > 5 && (
                <Link href={cat.items[0].href.split('/')[0] + '/' + key}>
                  <span className="text-xs text-green-500 hover:underline">View all</span>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )}
</div>

      <Link href="/contact" className="text-gray-800 hover:text-green-600 font-medium transition-colors">Contact</Link>
    </nav>
  )
}
