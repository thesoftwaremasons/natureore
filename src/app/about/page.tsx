"use client"

import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Users, Globe, Award } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'We maintain the highest standards in every product we export, ensuring quality that meets international requirements.'
    },
    {
      icon: Users,
      title: 'Customer-Centric',
      description: 'Our clients are at the heart of everything we do. We build lasting partnerships through trust and exceptional service.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'With operations across continents, we connect African producers to global markets efficiently and reliably.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our business, from sourcing to delivery and beyond.'
    }
  ]

  // const team = [
  //   {
  //     name: 'Ayolanre Johnson',
  //     role: 'Chief Executive Officer',
  //     image: '/api/placeholder/300/300',
  //     bio: 'With over 15 years in international trade, Ayolanre leads our vision of connecting continents through quality exports.'
  //   },
  //   {
  //     name: 'Samuel Adebayo',
  //     role: 'Head of Operations',
  //     image: '/api/placeholder/300/300',
  //     bio: 'Samuel ensures seamless logistics and supply chain management across all our export operations.'
  //   },
  //   {
  //     name: 'Grace Okafor',
  //     role: 'Quality Assurance Manager',
  //     image: '/api/placeholder/300/300',
  //     bio: 'Grace maintains our high standards through rigorous quality control and international compliance protocols.'
  //   }
  // ]

  return (
    <div className="pt-20 bg-emerald-700 text-white">
      {/* Hero Section */}
      <section className="py-20 bg-emerald-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About Natureore Logistics</h1>
            <p className="text-xl opacity-90">
              Your trusted partner in global trade, connecting continents and cultivating prosperity 
              through premium African exports and expert consulting services.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded with a vision to bridge the gap between African producers and global markets, 
                  Natureore Logistics Limited has grown into a leading export company specializing in 
                  premium agricultural products and solid-state minerals.
                </p>
                <p>
                  Our journey began with a simple belief: Africa &apos;s rich natural resources deserve to 
                  reach the world &apos;s finest markets. Today, we work with hundreds of local farmers and 
                  producers, ensuring fair trade practices while delivering exceptional quality to our 
                  international clients.
                </p>
                <p>
                  Through sustainable sourcing, rigorous quality control, and innovative logistics 
                  solutions, we &apos;s ve built a reputation for reliability and excellence that spans continents.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/work-boots-889816_640.jpg"
                alt="Natureore Logistics facility"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-200 rounded-full opacity-50" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-green-300 rounded-full opacity-30" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To connect African producers with global markets through sustainable trade practices, 
                ensuring quality products reach customers worldwide while supporting local communities 
                and promoting economic growth across the continent.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading African export company, recognized globally for excellence in quality, 
                sustainability, and innovation, while being the bridge that connects continents and 
                cultivates prosperity for all stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These fundamental principles guide every decision we make and every relationship we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <value.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced team brings together decades of expertise in international trade, 
              logistics, and quality assurance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-green-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our network of satisfied clients and experience the difference that quality, 
            reliability, and expertise can make in your business.
          </p>
          <Link href="/contact" className="btn-secondary">
            Start Your Partnership
          </Link>
        </div>
      </section>
    </div>
  )
}
