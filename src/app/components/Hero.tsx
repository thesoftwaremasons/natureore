'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Play, Sparkles } from 'lucide-react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      title: "Bridging Continents, Cultivating Prosperity",
      subtitle: "Premium Global Trade Excellence",
      description: "Experience world-class agricultural exports and mining solutions from Africa's finest producers",
      image: "5.jpg",
      accent: "Natureore Logistics"
    },
    {
      title: "Premium Exports, Trusted Consulting",
      subtitle: "Your Gateway to African Excellence",
      description: "Discover authentic, premium-quality products sourced sustainably from Nigeria's richest lands",
      image: "1.jpg",
      accent: "Global Trade Excellence"
    },
    {
      title: "Quality Nigerian Products for Export",
      subtitle: "Sustainable Growth Partnership",
      description: "Join hundreds of satisfied clients worldwide in building sustainable trade relationships",
      image: "4.jpg",
      accent: "Sustainable Growth"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background with enhanced overlay */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 via-emerald-800/60 to-emerald-700/40 z-10" />
          <div className="absolute inset-0 bg-black/20 z-10" />
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-1000"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide ? 'scale(1)' : 'scale(1.1)'
            }}
          />
          
          {/* Floating decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-300/30 rounded-full floating-element" />
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-emerald-200/20 rounded-full floating-element animation-delay-200" />
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-emerald-400/40 rounded-full floating-element animation-delay-400" />
          
          {/* Content */}
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="text-center text-white max-w-6xl px-6">
              <div className="mb-6 animate-fade-in-up">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                  <Sparkles className="w-4 h-4 text-emerald-300" />
                  <span className="text-emerald-200 text-lg font-medium">{slide.accent}</span>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in-up animation-delay-200 text-shadow-lg leading-tight">
                <span className="bg-gradient-to-r from-white via-emerald-100 to-emerald-200 bg-clip-text text-transparent">
                  {slide.title}
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-semibold text-emerald-200 mb-6 animate-fade-in-up animation-delay-400">
                {slide.subtitle}
              </h2>
              
              <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-600">
                {slide.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-600">
                <Link href="/contact" className="btn-primary group">
                  <span>Start Trading</span>
                  <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/about" className="btn-secondary group">
                  <span>Discover More</span>
                  <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Premium Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-30 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40 group"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-30 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40 group"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative transition-all duration-300 ${
              index === currentSlide ? 'w-12 h-3' : 'w-3 h-3'
            }`}
          >
            <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white shadow-lg' 
                : 'bg-white/50 hover:bg-white/70'
            }`} />
          </button>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 text-white/60 text-sm animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs">Scroll to explore</span>
          <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}