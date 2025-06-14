'use client'

import { useState, useEffect } from 'react'
// import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      title: "Bridging Continents, Cultivating Prosperity",
      subtitle: "Natureore Logistics",
      image: "5.jpg"
    },
    {
      title: "Premium Exports, Trusted Consulting",
      subtitle: "Global Trade Excellence",
      image: "1.jpg"
    },
    {
      title: "Quality Nigerian Products for Export",
      subtitle: "Sustainable Growth",
      image: "4.jpg"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[70vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
          <div 
            className="w-full h-full bg-cover bg-center gradient-bg"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <p className="text-green-300 text-lg mb-4 font-medium animate-fade-in-up">
                {slide.subtitle}
              </p>
              <h1 className="text-4xl md:text-6xl font-bold mb-8 animate-fade-in-up animation-delay-200">
                {slide.title}
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
                <Link href="/contact" className="btn-primary">
                  Contact Now
                </Link>
                <Link href="/about" className="btn-secondary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/20 hover:bg-white/30 rounded-full transition-all"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/20 hover:bg-white/30 rounded-full transition-all"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}