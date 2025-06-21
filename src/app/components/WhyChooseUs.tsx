import { 
    Users, 
    Award, 
    Globe, 
    Leaf, 
    Shield, 
    TrendingUp,
    Sparkles,
    CheckCircle
  } from 'lucide-react'
  
  export default function WhyChooseUs() {
    const features = [
      {
        icon: Users,
        title: 'Expert Trade Consulting Services',
        description: 'We provide comprehensive export training, market entry strategies, and trade financing guidance to help businesses succeed globally.',
        color: 'from-blue-500 to-blue-600',
        bgColor: 'bg-blue-50',
        benefits: ['Market Entry Strategies', 'Export Training', 'Trade Financing']
      },
      {
        icon: Award,
        title: 'High-Quality Agricultural & Food Exports',
        description: 'Our products, including processed foods, spices, and raw materials, meet international standards for freshness, quality, and safety.',
        color: 'from-emerald-500 to-emerald-600',
        bgColor: 'bg-emerald-50',
        benefits: ['International Standards', 'Quality Assurance', 'Fresh Products']
      },
      {
        icon: Globe,
        title: 'Diverse Product Range',
        description: 'From premium agricultural products to high-value minerals, we offer a comprehensive selection of quality goods sourced directly from Africa\'s finest producers.',
        color: 'from-purple-500 to-purple-600',
        bgColor: 'bg-purple-50',
        benefits: ['Agricultural Products', 'Premium Minerals', 'Direct Sourcing']
      },
      {
        icon: Leaf,
        title: 'Sustainable & Ethical Sourcing',
        description: 'We support local farmers and eco-friendly business practices, ensuring responsible and ethical sourcing for all our exports with efficient supply chain management.',
        color: 'from-green-500 to-green-600',
        bgColor: 'bg-green-50',
        benefits: ['Eco-Friendly Practices', 'Local Support', 'Ethical Sourcing']
      },
      {
        icon: Shield,
        title: 'Global Reach, Local Expertise',
        description: 'Deep-rooted knowledge of African markets combined with international trade expertise ensures seamless global operations and cultural understanding.',
        color: 'from-orange-500 to-orange-600',
        bgColor: 'bg-orange-50',
        benefits: ['Local Knowledge', 'Global Network', 'Cultural Understanding']
      },
      {
        icon: TrendingUp,
        title: 'Trusted Partnership',
        description: 'Building lasting relationships with clients through transparency, integrity, and exceptional service. We deliver only the finest, rigorously inspected products.',
        color: 'from-red-500 to-red-600',
        bgColor: 'bg-red-50',
        benefits: ['Transparency', 'Quality Inspection', 'Lasting Relationships']
      }
    ]
  
    return (
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700" />
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #059669 2px, transparent 2px), 
                             radial-gradient(circle at 75% 75%, #064e3b 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-emerald-900/10 backdrop-blur-sm px-8 py-4 rounded-full border border-emerald-900/20 mb-8">
              <Sparkles className="w-5 h-5 text-emerald-600" />
              <span className="premium-text-gradient font-semibold text-xl">Natureore Nigeria limited</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Why Choose 
              <span className="premium-text-gradient"> Us</span>
            </h2>
            
            <p className="text-gray-700 text-xl max-w-3xl mx-auto leading-relaxed font-light">
              Discover what sets us apart as your trusted partner in global trade and export excellence.
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 premium-shadow hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100/50"
              >
                {/* Gradient background overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Icon container */}
                  <div className="mb-6">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg group-hover:scale-110 transition-all duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 font-light">
                    {feature.description}
                  </p>
                  
                  {/* Benefits list */}
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Hover indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-emerald-600" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to action */}
          <div className="text-center mt-16 animate-fade-in-up animation-delay-400">
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-emerald-900 to-emerald-800 text-white px-8 py-4 rounded-2xl shadow-2xl">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">Ready to experience the difference?</span>
              <span className="text-emerald-200">Contact us today</span>
            </div>
          </div>
        </div>
      </section>
    )
  }