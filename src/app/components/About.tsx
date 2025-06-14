// components/About.tsx
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/7.jpg"
                alt="Natureore Logistics Team"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-green-200 rounded-full opacity-50" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-green-300 rounded-full opacity-30" />
          </div>
          
          <div>
            <p className="text-green-600 font-semibold mb-2">Natureore Logistics</p>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Who We Are</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Your Gateway to Global Trade and Prosperity. At Natureore Logistics Limited, 
              we don't just trade—we connect continents, cultivate opportunities, and drive 
              sustainable growth. As a premier international export and import company, we 
              specialize in agricultural products and solid-state mineral mining across Africa, 
              ensuring seamless logistics and efficient global operations.
            </p>
            <Link href="/about" className="btn-secondary">
              Know More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}