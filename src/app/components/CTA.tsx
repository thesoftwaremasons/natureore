import Link from 'next/link'
import { Phone, Mail, ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Trading with Us?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of satisfied clients worldwide. Let &apos;s discuss how we can help grow your business 
            with our premium agricultural products and expert trade consulting services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>+234 (0) 123 456 7890</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>ayolanre@natureore.com</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary">
              Get Free Consultation
            </Link>
            <Link href="/products" className="inline-flex items-center bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-all font-medium">
              Browse Products
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}