import { 
    Users, 
    Award, 
    Globe, 
    Leaf, 
    Shield, 
    TrendingUp 
  } from 'lucide-react'
  
  export default function WhyChooseUs() {
    const features = [
      {
        icon: Users,
        title: 'Expert Trade Consulting Services',
        description: 'We provide comprehensive export training, market entry strategies, and trade financing guidance to help businesses succeed globally.',
        color: 'bg-blue-100 text-blue-600'
      },
      {
        icon: Award,
        title: 'High-Quality Agricultural & Food Exports',
        description: 'Our products, including processed foods, spices, and raw materials, meet international standards for freshness, quality, and safety.',
        color: 'bg-green-100 text-green-600'
      },
      {
        icon: Globe,
        title: 'Diverse Product Range',
        description: 'From premium agricultural products to high-value minerals, we offer a comprehensive selection of quality goods sourced directly from Africa\'s finest producers.',
        color: 'bg-purple-100 text-purple-600'
      },
      {
        icon: Leaf,
        title: 'Sustainable & Ethical Sourcing',
        description: 'We support local farmers and eco-friendly business practices, ensuring responsible and ethical sourcing for all our exports with efficient supply chain management.',
        color: 'bg-emerald-100 text-emerald-600'
      },
      {
        icon: Shield,
        title: 'Global Reach, Local Expertise',
        description: 'Deep-rooted knowledge of African markets combined with international trade expertise ensures seamless global operations and cultural understanding.',
        color: 'bg-orange-100 text-orange-600'
      },
      {
        icon: TrendingUp,
        title: 'Trusted Partnership',
        description: 'Building lasting relationships with clients through transparency, integrity, and exceptional service. We deliver only the finest, rigorously inspected products that meet international standards.',
        color: 'bg-red-100 text-red-600'
      }
    ]
  
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-green-600 font-semibold mb-2">Natureore Logistics</p>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover what sets us apart as your trusted partner in global trade and export excellence.
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl ${feature.color} group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  