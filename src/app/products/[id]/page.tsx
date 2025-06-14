'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ArrowLeft, Star, Check, Package, Truck, Shield, Phone, Mail, Heart, Share2 } from 'lucide-react'

//export const runtime = 'edge'; // ✅ Add this
export default function ProductPage() {
  const { id } = useParams()
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')

  // Mock product data - in a real app, this would come from an API or database
  const products = {
    '1': {
      id: '1',
      name: 'PAP (Custard)',
      category: 'Staples & Processed Foods',
      price: '$25',
      unit: 'per kg',
      minOrder: '100 kg',
      availability: 'In Stock',
      rating: 4.8,
      reviews: 24,
      images: [
        '/api/placeholder/600/600',
        '/api/placeholder/600/600',
        '/api/placeholder/600/600',
        '/api/placeholder/600/600'
      ],
      description: 'Premium quality custard powder made from the finest ingredients. Our PAP is rich in nutrients and provides excellent nutritional value. Perfect for breakfast, desserts, and various culinary applications.',
      features: [
        'High Protein Content',
        'Natural Ingredients',
        'Export Quality',
        'Long Shelf Life',
        'Gluten-Free Option Available',
        'Rich in Vitamins and Minerals'
      ],
      specifications: {
        'Product Type': 'Custard Powder',
        'Origin': 'Nigeria',
        'Shelf Life': '18 months',
        'Packaging': '25kg bags, 50kg bags',
        'Moisture Content': '< 12%',
        'Protein Content': '≥ 15%',
        'Storage': 'Cool, dry place',
        'Certifications': 'ISO 22000, HACCP'
      },
      nutritionalInfo: {
        'Energy': '350 kcal/100g',
        'Protein': '15g/100g',
        'Carbohydrates': '65g/100g',
        'Fat': '2g/100g',
        'Fiber': '3g/100g',
        'Sodium': '200mg/100g'
      },
      benefits: [
        'Rich source of plant-based protein',
        'Easy to digest and prepare',
        'Suitable for all age groups',
        'Versatile cooking ingredient',
        'Long lasting energy source'
      ]
    },
    '2': {
      id: '2',
      name: 'GARRI (Cassava Flakes)',
      category: 'Staples & Processed Foods',
      price: '$15',
      unit: 'per kg',
      minOrder: '500 kg',
      availability: 'In Stock',
      rating: 4.6,
      reviews: 18,
      images: [
        '/api/placeholder/600/600',
        '/api/placeholder/600/600',
        '/api/placeholder/600/600'
      ],
      description: 'Traditional cassava flakes processed using modern techniques while maintaining authentic taste and nutrition. Our Garri is carefully processed to ensure quality and safety standards.',
      features: [
        'Gluten-Free',
        'Long Shelf Life',
        'Organic Processing',
        'Traditional Taste',
        'High Energy Content',
        'Easy to Prepare'
      ],
      specifications: {
        'Product Type': 'Cassava Flakes',
        'Origin': 'Nigeria',
        'Shelf Life': '12 months',
        'Packaging': '25kg bags, 50kg bags',
        'Moisture Content': '< 10%',
        'pH Level': '3.5 - 4.5',
        'Storage': 'Cool, dry place',
        'Certifications': 'NAFDAC, Export Quality'
      },
      nutritionalInfo: {
        'Energy': '330 kcal/100g',
        'Carbohydrates': '80g/100g',
        'Protein': '2g/100g',
        'Fat': '0.5g/100g',
        'Fiber': '4g/100g',
        'Iron': '2mg/100g'
      },
      benefits: [
        'Excellent source of carbohydrates',
        'Naturally gluten-free',
        'Quick energy source',
        'Supports digestive health',
        'Affordable nutrition'
      ]
    },
    '3': {
      id: '3',
      name: 'Roasted Cashew Nuts',
      category: 'Cash Crops & Natural Extracts',
      price: '$45',
      unit: 'per kg',
      minOrder: '50 kg',
      availability: 'In Stock',
      rating: 4.9,
      reviews: 42,
      images: [
        '/api/placeholder/600/600',
        '/api/placeholder/600/600',
        '/api/placeholder/600/600',
        '/api/placeholder/600/600'
      ],
      description: 'Premium grade roasted cashew nuts, carefully selected and processed to maintain their natural flavor and nutritional value. Perfect for snacking, cooking, and food manufacturing.',
      features: [
        'Grade A Quality',
        'Rich in Minerals',
        'Premium Roasting',
        'Natural Flavor',
        'High Nutritional Value',
        'Export Grade'
      ],
      specifications: {
        'Product Type': 'Roasted Cashew Nuts',
        'Origin': 'Nigeria',
        'Grade': 'W180, W240, W320',
        'Packaging': '10kg cartons, 25kg bags',
        'Moisture Content': '< 5%',
        'Broken Ratio': '< 5%',
        'Storage': 'Cool, dry place',
        'Certifications': 'Organic, Fair Trade'
      },
      nutritionalInfo: {
        'Energy': '553 kcal/100g',
        'Protein': '18g/100g',
        'Fat': '44g/100g',
        'Carbohydrates': '30g/100g',
        'Fiber': '3g/100g',
        'Magnesium': '292mg/100g'
      },
      benefits: [
        'Heart-healthy fats',
        'Rich in antioxidants',
        'Supports bone health',
        'Boosts immune system',
        'Natural energy source'
      ]
    }
  }

  const product = products[id as keyof typeof products]

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you &apos;re looking for doesn &apos;t exist.</p>
          <Link href="/products" className="btn-primary">
            <ArrowLeft className="w-5 h-5" />
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  const handleInquiry = () => {
    const message = `Hi, I'm interested in ${product.name}. Please provide more information about pricing, availability, and shipping options.`
    const whatsappUrl = `https://wa.me/2341234567890?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const relatedProducts = Object.values(products)
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 3)

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-green-600">Home</Link>
            <span className="text-gray-300">/</span>
            <Link href="/products" className="text-gray-500 hover:text-green-600">Products</Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-800">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="relative mb-4">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl"
                />
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50">
                  <Heart className="w-5 h-5 text-gray-600" />
                </button>
                <button className="absolute top-4 right-16 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50">
                  <Share2 className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              
              {/* Thumbnail Images */}
              <div className="flex space-x-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-green-500' : 'border-gray-200'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <p className="text-green-600 font-medium mb-2">{product.category}</p>
                <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
                
                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">({product.reviews} reviews)</span>
                </div>

                {/* Price */}
                <div className="mb-6">
                  {/* <span className="text-3xl font-bold text-green-600">{product.price}</span> */}
                  <span className="text-gray-600 ml-2">{product.unit}</span>
                  <p className="text-sm text-gray-500 mt-1">Minimum order: {product.minOrder}</p>
                </div>

                {/* Availability */}
                <div className="mb-6">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    product.availability === 'In Stock'
                      ? 'bg-green-100 text-green-600'
                      : 'bg-yellow-100 text-yellow-600'
                  }`}>
                    <div className={`w-2 h-2 rounded-full mr-2 ${
                      product.availability === 'In Stock' ? 'bg-green-500' : 'bg-yellow-500'
                    }`} />
                    {product.availability}
                  </span>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Features</h3>
                <div className="grid grid-cols-2 gap-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantity and Actions */}
              <div className="border-t pt-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Quantity (kg)
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                      className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleInquiry}
                    className="btn-primary flex-1"
                  >
                    <Phone className="w-5 h-5" />
                    Request Quote
                  </button>
                  <Link
                    href="/contact"
                    className="btn-secondary flex-1 text-center"
                  >
                    <Mail className="w-5 h-5" />
                    Contact Sales
                  </Link>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t">
                  <div className="text-center">
                    <Package className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <p className="text-xs text-gray-600">Quality Packaging</p>
                  </div>
                  <div className="text-center">
                    <Truck className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <p className="text-xs text-gray-600">Global Shipping</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <p className="text-xs text-gray-600">Quality Guarantee</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex space-x-8 border-b mb-8">
              {[
                { id: 'description', label: 'Description' },
                { id: 'specifications', label: 'Specifications' },
                { id: 'nutrition', label: 'Nutrition Facts' },
                { id: 'benefits', label: 'Benefits' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-4 px-2 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-2xl p-8">
              {activeTab === 'description' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Product Description</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {product.description}
                  </p>
                </div>
              )}

              {activeTab === 'specifications' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Technical Specifications</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-3 border-b border-gray-200">
                        <span className="font-medium text-gray-700">{key}:</span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'nutrition' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Nutritional Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {Object.entries(product.nutritionalInfo).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-3 border-b border-gray-200">
                        <span className="font-medium text-gray-700">{key}:</span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'benefits' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Health Benefits</h3>
                  <div className="space-y-4">
                    {product.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Related Products</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.id}`}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {relatedProduct.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-green-600 font-semibold text-lg">
                        {/* {relatedProduct.price} {relatedProduct.unit} */}
                        {relatedProduct.unit}
                      </span>
                      <span className="text-sm text-green-600 font-medium">
                        View Details →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}