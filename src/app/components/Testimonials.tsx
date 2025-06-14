'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: 'Anny Johnson',
      role: 'Spice Importer, Dubai',
      image: '/api/placeholder/100/100',
      rating: 5,
      content: 'We sourced Roasted Cashew Nuts and Shea Butter from Natureore logistics, and the quality was excellent! The products were fresh, well-packaged, and met all export standards. Their team guided us through the entire process, making our first international trade experience seamless. Highly recommended for anyone looking for premium-quality Nigerian exports!'
    },
    {
      name: 'Ravi Menon',
      role: 'Food Distributor, India',
      image: '/api/placeholder/100/100',
      rating: 4,
      content: 'Natureore logistics provided us with top-quality Garri and Processed Yam Flour for our food business. The products were rich in taste, and the packaging was secure for export. Their expert trade advisory services helped us expand our business overseas. We are extremely satisfied with their professionalism and efficiency!'
    },
    {
      name: 'Li Wei',
      role: 'Organic Food Supplier, China',
      image: '/api/placeholder/100/100',
      rating: 5,
      content: 'We ordered Black Soap and African Children\'s Clothing in bulk, and the transaction was smooth from start to finish. The quality of the clothing was outstanding, and the Black Soap was 100% natural and well-packaged. Natureore logistics is a reliable trade partner with a commitment to excellence!'
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-green-600 font-semibold mb-2">Natureore Logistics</p>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Client Reviews</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what our satisfied clients say about our products and services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <div className="mb-6">
                <Image
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  width={80}
                  height={80}
                  className="rounded-full mx-auto mb-4"
                />
                
                <div className="flex justify-center mb-4">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonials[currentTestimonial].rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <blockquote className="text-lg text-gray-700 mb-8 italic leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              <div>
                <h4 className="font-semibold text-gray-800 text-lg">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-green-600">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial ? 'bg-green-900' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}