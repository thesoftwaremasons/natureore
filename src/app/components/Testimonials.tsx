'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Star, Quote, Sparkles } from 'lucide-react'

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      name: 'Anny Johnson',
      role: 'Spice Importer',
      company: 'Global Spices Ltd.',
      location: 'Dubai, UAE',
      image: '/api/placeholder/120/120',
      rating: 5,
      content: 'We sourced Roasted Cashew Nuts and Shea Butter from Natureore logistics, and the quality was excellent! The products were fresh, well-packaged, and met all export standards. Their team guided us through the entire process, making our first international trade experience seamless.',
      highlight: 'Exceptional quality and seamless process'
    },
    {
      name: 'Ravi Menon',
      role: 'Food Distributor',
      company: 'Fresh Foods Distribution',
      location: 'Mumbai, India',
      image: '/api/placeholder/120/120',
      rating: 5,
      content: 'Natureore logistics provided us with top-quality Garri and Processed Yam Flour for our food business. The products were rich in taste, and the packaging was secure for export. Their expert trade advisory services helped us expand our business overseas.',
      highlight: 'Rich taste and secure packaging'
    },
    {
      name: 'Li Wei',
      role: 'Organic Food Supplier',
      company: 'Pure Nature Co.',
      location: 'Shanghai, China',
      image: '/api/placeholder/120/120',
      rating: 5,
      content: 'We ordered Black Soap and African Children\'s Clothing in bulk, and the transaction was smooth from start to finish. The quality of the clothing was outstanding, and the Black Soap was 100% natural and well-packaged. Natureore logistics is a reliable trade partner.',
      highlight: '100% natural products and reliability'
    }
  ]

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    
    return () => clearInterval(timer)
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setIsAutoPlaying(false)
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setIsAutoPlaying(false)
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-32 gradient-bg relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-400/10 rounded-full -translate-x-1/2 -translate-y-1/2 floating-element" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-300/10 rounded-full translate-x-1/2 translate-y-1/2 floating-element animation-delay-200" />
        <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-emerald-500/5 rounded-full floating-element animation-delay-400" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full border border-white/20 mb-8">
            <Sparkles className="w-5 h-5 text-emerald-300" />
            <span className="text-emerald-200 font-semibold text-xl">Client Testimonials</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 text-shadow-lg">
            What Our Clients 
            <span className="bg-gradient-to-r from-emerald-200 to-emerald-400 bg-clip-text text-transparent"> Say</span>
          </h2>
          
          <p className="text-emerald-100 text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Discover why businesses worldwide trust Natureore Logistics for their premium export needs.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Main testimonial card */}
            <div className="glass-card bg-white/95 backdrop-blur-xl rounded-3xl p-12 md:p-16 premium-shadow">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Testimonial content */}
                <div className="space-y-8">
                  <div className="relative">
                    <Quote className="absolute -top-6 -left-6 w-16 h-16 text-emerald-100 opacity-50" />
                    <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light relative z-10">
                      {testimonials[currentTestimonial].content}
                    </blockquote>
                  </div>
                  
                  <div className="inline-flex items-center space-x-2 bg-emerald-50 px-4 py-2 rounded-full">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-medium text-sm">
                      {testimonials[currentTestimonial].highlight}
                    </span>
                  </div>
                </div>

                {/* Client info */}
                <div className="text-center lg:text-left">
                  <div className="relative inline-block mb-6">
                    <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full blur-2xl opacity-20" />
                    <Image
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      width={120}
                      height={120}
                      className="relative rounded-full premium-shadow"
                    />
                  </div>
                  
                  <div className="flex justify-center lg:justify-start mb-6">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${
                          i < testimonials[currentTestimonial].rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-bold text-gray-900 text-2xl">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-emerald-600 font-semibold">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-gray-600 font-medium">
                      {testimonials[currentTestimonial].company}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {testimonials[currentTestimonial].location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-white/90 hover:bg-white backdrop-blur-sm rounded-2xl premium-shadow hover:scale-110 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-emerald-600 group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-white/90 hover:bg-white backdrop-blur-sm rounded-2xl premium-shadow hover:scale-110 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-emerald-600 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Enhanced indicators */}
          <div className="flex justify-center mt-12 space-x-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentTestimonial(index)
                  setIsAutoPlaying(false)
                }}
                className={`relative transition-all duration-300 ${
                  index === currentTestimonial ? 'w-12 h-3' : 'w-3 h-3'
                }`}
              >
                <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-white shadow-lg' 
                    : 'bg-white/50 hover:bg-white/70'
                }`} />
                {index === currentTestimonial && (
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </div>
          
          {/* Auto-play indicator */}
          <div className="text-center mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-white/60 hover:text-white text-sm transition-colors duration-300"
            >
              {isAutoPlaying ? 'Pause auto-play' : 'Resume auto-play'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}