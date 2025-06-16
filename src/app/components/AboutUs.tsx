// components/About.tsx
import Image from 'next/image'
import Link from 'next/link'
// import { ArrowRight, Globe, Leaf, Award, TrendingUp } from 'lucide-react'
import { ArrowRight} from 'lucide-react'

export default function AboutUs() {
  // const stats = [
  //   { number: "500+", label: "Global Clients", icon: Globe },
  //   { number: "25+", label: "Countries Served", icon: TrendingUp },
  //   { number: "100%", label: "Sustainable", icon: Leaf },
  //   { number: "10+", label: "Years Experience", icon: Award },
  // ]

  return (
    <section className="py-32 gradient-bg-alt relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-100/30 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-200/20 rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative animate-slide-in-left">
            {/* Premium image container with multiple layers */}
            <div className="relative">
              <div className="relative z-10 group">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
                <Image
                  src="/7.jpg"
                  alt="Natureore Logistics Team"
                  width={600}
                  height={400}
                  className="relative rounded-3xl premium-shadow hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-emerald-200 to-emerald-300 rounded-full opacity-60 floating-element" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-emerald-300 to-emerald-400 rounded-full opacity-40 floating-element animation-delay-200" />
              <div className="absolute top-1/2 -right-4 w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl opacity-50 floating-element animation-delay-400" />
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-emerald-900/10 backdrop-blur-sm px-6 py-3 rounded-full border border-emerald-900/20 mb-6">
                <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                <span className="premium-text-gradient font-semibold text-lg">Natureore Logistics</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Who We 
                <span className="premium-text-gradient"> Are</span>
              </h2>
              
              <p className="text-gray-700 text-xl leading-relaxed mb-12 font-light">
                Your Gateway to Global Trade and Prosperity. At Natureore Logistics Limited, 
                we don&#39;t just trade—we connect continents, cultivate opportunities, and drive 
                sustainable growth. As a premier international export and import company, we 
                specialize in agricultural products and solid-state mineral mining across Africa, 
                ensuring seamless logistics and efficient global operations.
              </p>
            </div>

            {/* Stats grid */}
            {/* <div className="grid grid-cols-2 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="glass-card p-6 group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl group-hover:scale-110 transition-transform">
                      <stat.icon className="w-6 h-6 text-emerald-700" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                      <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
             */}
            <Link href="/about" className="btn-primary group">
              <span>Discover Our Story</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}