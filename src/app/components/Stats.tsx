'use client'

import { useEffect, useState } from 'react'

export default function Stats() {
  const [counts, setCounts] = useState({ partnerships: 0, satisfaction: 0, products: 0, countries: 0 })

  const stats = [
    { label: 'Long-term Partnerships', value: 456, key: 'partnerships' },
    { label: 'Customer Satisfaction', value: 513, key: 'satisfaction' },
    { label: 'Qualified Products', value: 53, key: 'products' },
    { label: 'Countries Served', value: 25, key: 'countries' }
  ]

  useEffect(() => {
    const timers = stats.map((stat) => {
      const increment = stat.value / 100
      let current = 0
      
      const timer = setInterval(() => {
        current += increment
        if (current >= stat.value) {
          setCounts(prev => ({ ...prev, [stat.key]: stat.value }))
          clearInterval(timer)
        } else {
          setCounts(prev => ({ ...prev, [stat.key]: Math.floor(current) }))
        }
      }, 20)
      
      return timer
    })

    return () => timers.forEach(timer => clearInterval(timer))
  }, [])
  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/30 transition-all">
                <div className="text-4xl font-bold mb-2">
                  {counts[stat.key as keyof typeof counts]}+
                </div>
                <div className="text-lg font-medium opacity-90">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}