'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    productInterest: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert('Thank you for your inquiry! We will get back to you within 24 hours.')
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: '',
      productInterest: ''
    })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'Plot D463 Royal Gardens Estate, Ajah, Lekki, Lagos, Nigeria',
      color: 'text-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+234 (0) 81 873 577 92',
      color: 'text-green-600'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'ayolanre@natureore.com',
      color: 'text-purple-600'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon - Fri: 8:00 AM - 6:00 PM WAT',
      color: 'text-orange-600'
    }
  ]

  return (
    <div className="pt-20 bg-emerald-700 text-white">
      {/* Hero Section */}
      <section className="py-20 bg-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Ready to start your export journey? Get in touch with our expert team for 
            personalized consultation and premium product sourcing.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-green-50 transition-colors`}>
                  <info.icon className={`w-8 h-8 ${info.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{info.title}</h3>
                <p className="text-gray-600">{info.content}</p>
              </div>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="+234 08187357792"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <div>
                    <label htmlFor="productInterest" className="block text-sm font-medium text-gray-700 mb-2">
                      Product Interest
                    </label>
                    <select
                      id="productInterest"
                      name="productInterest"
                      value={formData.productInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select a category</option>
                      <option value="staples">Staples & Processed Foods</option>
                      <option value="cash-crops">Cash Crops & Natural Extracts</option>
                      <option value="minerals">Solid-State Minerals</option>
                      <option value="specialty">Specialty Products</option>
                      <option value="consulting">Trade Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your requirements, quantities, delivery timelines, or any specific questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center space-x-2 py-4 px-6 rounded-lg font-medium transition-all ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-green-900 hover:bg-green-900 text-white'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-2">
              {/* Location Map Section */}
              <section aria-label="Location Map" className="bg-gray-200 rounded-2xl p-6 flex flex-col items-center">
                {/* <h3 className="text-lg font-semibold text-gray-800 mb-2">Our Location</h3>
                <p className="text-gray-600 text-center mb-1">Royal Gardens Estate, Ajah, Lekki</p>
                <div className="w-full flex justify-center mb-2">
                  <span className="sr-only">Map location icon</span>
                  <MapPin className="w-10 h-10 text-emerald-500" />
                </div> */}
                <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-300">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.46744787017!2d3.576055875679811!3d6.462309423869945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf75efd0a36cb%3A0x52d9f87111148665!2sRoyal%20Gardens%20Estate%2C%20D262%20Aromire%20Cres%2C%20Ajah%2C%20Lagos%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1750606080728!5m2!1sen!2sng"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    aria-label="Google Map showing Royal Gardens Estate, Ajah, Lekki"
                  ></iframe>
                </div>
              </section>

              {/* Quick Contact */}
              <section className="bg-green-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Need Immediate Assistance?</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100">
                      <Phone className="w-5 h-5 text-green-600" />
                    </span>
                    <span className="text-gray-700 font-medium">Call us: <a href="tel:+2348187357792" className="underline hover:text-emerald-700">+234 (0) 818 735 7792</a></span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100">
                      <Mail className="w-5 h-5 text-green-600" />
                    </span>
                    <span className="text-gray-700 font-medium">Email: <a href="mailto:ayolanre@natureore.com" className="underline hover:text-emerald-700">ayolanre@natureore.com</a></span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Our team typically responds to inquiries within 2-4 hours during business hours.
                </p>
              </section>

              {/* Export Guidelines */}
              <section className="bg-blue-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Export Guidelines</h3>
                <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
                  <li>Minimum order quantities apply</li>
                  <li>Quality certificates provided</li>
                  <li>International shipping available</li>
                  <li>Custom packaging options</li>
                  <li>Trade financing assistance</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our products and services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "What are your minimum order quantities?",
                answer: "Minimum order quantities vary by product. For agricultural products, it's typically 1-5 tons, while specialty products may have lower minimums. Contact us for specific product MOQs."
              },
              {
                question: "Do you provide quality certificates?",
                answer: "Yes, we provide comprehensive quality certificates including phytosanitary certificates, certificates of origin, and third-party quality analysis reports for all our products."
              },
              {
                question: "What are your payment terms?",
                answer: "We offer flexible payment terms including T/T, L/C, and trade financing options. Specific terms depend on the order size and customer relationship."
              },
              {
                question: "How long does shipping take?",
                answer: "Shipping times vary by destination and shipping method. Sea freight typically takes 2-6 weeks, while air freight takes 3-7 days. We provide detailed shipping estimates with each quote."
              },
              {
                question: "Do you offer trade consulting services?",
                answer: "Yes, we provide comprehensive trade consulting including market entry strategies, export training, documentation assistance, and trade financing guidance."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}