'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ArrowLeft, Star, Check, Package, Truck, Shield, Phone, Mail, Heart, Share2, AlertCircle } from 'lucide-react'

// Import the JSON data (in a real app, these would be API calls)
import productsData from '../../data/products.json'
import categoriesData from '../../data/categories.json'

type Product = {
  id: string
  name: string
  category: string
  categoryName: string
  price: string
  unit: string
  minOrder: string
  image: string
  images: string[]
  description: string
  features: string[]
  availability: string
  rating: number
  reviews: number
  badge: string
  specifications: Record<string, string>
  nutritionalInfo: Record<string, string>
  benefits: string[]
}

type Category = {
  id: string
  name: string
  count: number
  icon: string
  description: string
}

export default function ProductPage() {
  const { id } = useParams()
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')
  const [product, setProduct] = useState<Product | null>(null)
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would be an API call
    const fetchProduct = async () => {
      setLoading(true)
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 100))
        
        const foundProduct = productsData.find(p => p.id === id) as Product | undefined
        
        if (foundProduct) {
          setProduct(foundProduct)
          
          // Get related products from the same category
          const related = productsData
            .filter(p => p.id !== foundProduct.id && p.category === foundProduct.category)
            .slice(0, 3) as unknown as Product[]
          
          setRelatedProducts(related)
        }
      } catch (error) {
        console.error('Error fetching product:', error)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchProduct()
    }
  }, [id])

  const handleInquiry = () => {
    if (!product) return
    const message = `Hi, I'm interested in ${product.name}. Please provide more information about pricing, availability, and shipping options.`
    const whatsappUrl = `https://wa.me/2348187357792?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleShare = async () => {
    if (!product) return
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: window.location.href,
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href)
      alert('Product link copied to clipboard!')
    }
  }

  if (loading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product details...</p>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you are looking for does not exist or has been removed.</p>
          <Link href="/products" className="btn-primary inline-flex items-center space-x-2">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Products</span>
          </Link>
        </div>
      </div>
    )
  }

  const categoryInfo = categoriesData.find(cat => cat.id === product.category) as Category | undefined

  return (
    <div className="pt-30 bg-emerald-700 text-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-green-600 transition-colors">Home</Link>
            <span className="text-gray-300">/</span>
            <Link href="/products" className="text-gray-500 hover:text-green-600 transition-colors">Products</Link>
            <span className="text-gray-300">/</span>
            {categoryInfo && (
              <>
                <Link href={`/products?category=${product.category}`} className="text-gray-500 hover:text-green-600 transition-colors">
                  {categoryInfo.name}
                </Link>
                <span className="text-gray-300">/</span>
              </>
            )}
            <span className="text-gray-800 font-medium">{product.name}</span>
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
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-lg"
                />
                
                {/* Product Badge */}
                {product.badge && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-green-600 text-white text-sm font-medium rounded-full">
                    {product.badge}
                  </div>
                )}
                
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                  <button 
                    onClick={handleShare}
                    className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
                  >
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
              
              {/* Thumbnail Images */}
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index 
                        ? 'border-green-500 ring-2 ring-green-200' 
                        : 'border-gray-200 hover:border-gray-300'
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
              <div className="mb-6">
                {/* Category Badge */}
                {categoryInfo && (
                  <Link 
                    href={`/products?category=${product.category}`}
                    className="inline-block text-green-600 font-medium mb-2 hover:text-green-700 transition-colors"
                  >
                    {categoryInfo.name}
                  </Link>
                )}
                
                <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
                
                {/* Rating */}
                <div className="flex items-center space-x-3 mb-4">
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
                  <span className="text-gray-600 font-medium">{product.rating}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600">({product.reviews} reviews)</span>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline space-x-2 mb-2">
                    {product.price !== "Market Price" && product.price !== "Quote on Request" && product.price !== "Varies" ? (
                      <>
                        {/* <span className="text-3xl font-bold text-green-600">{product.price}</span> */}
                        <span className="text-gray-600">{product.unit}</span>
                      </>
                    ) : (
                      // <span className="text-2xl font-bold text-gray-700">{product.price}</span>
                      <span className="text-2xl font-bold text-gray-700">{}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">Minimum order: {product.minOrder}</p>
                </div>

                {/* Availability */}
                <div className="mb-6">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    product.availability === 'In Stock'
                      ? 'bg-green-100 text-green-600'
                      : product.availability === 'Available'
                      ? 'bg-blue-100 text-green-600'
                      : 'bg-yellow-100 text-yellow-600'
                  }`}>
                    <div className={`w-2 h-2 rounded-full mr-2 ${
                      product.availability === 'In Stock' 
                        ? 'bg-green-500' 
                        : product.availability === 'Available'
                        ? 'bg-green-500'
                        : 'bg-yellow-500'
                    }`} />
                    {product.availability}
                  </span>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
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
                      Quantity {product.unit.includes('kg') ? '(kg)' : '(units)'}
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleInquiry}
                    className="btn-primary flex-1 flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Request Quote</span>
                  </button>
                  <Link
                    href="/contact"
                    className="btn-secondary flex-1 text-center flex items-center justify-center space-x-2"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Contact Sales</span>
                  </Link>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t">
                  <div className="text-center">
                    <Package className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <p className="text-xs text-gray-600 font-medium">Quality Packaging</p>
                  </div>
                  <div className="text-center">
                    <Truck className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <p className="text-xs text-gray-600 font-medium">Global Shipping</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <p className="text-xs text-gray-600 font-medium">Quality Guarantee</p>
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
            <div className="flex flex-wrap gap-2 border-b mb-8 overflow-x-auto">
              {[
                { id: 'description', label: 'Description' },
                { id: 'specifications', label: 'Specifications' },
                { id: 'nutrition', label: 'Nutrition Facts' },
                { id: 'benefits', label: 'Benefits' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-4 px-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
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
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              {activeTab === 'description' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Product Description</h3>
                  <div className="prose max-w-none">
                    <p className="text-gray-600 leading-relaxed text-lg mb-6">
                      {product.description}
                    </p>
                    
                    {categoryInfo && (
                      <div className="bg-gray-50 rounded-lg p-6 mt-6">
                        <h4 className="font-semibold text-gray-800 mb-2">Category: {categoryInfo.name}</h4>
                        <p className="text-gray-600 text-sm">{categoryInfo.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeTab === 'specifications' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Technical Specifications</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                        <span className="font-medium text-gray-700">{key}:</span>
                        <span className="text-gray-600 text-right">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'nutrition' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    {product.category === 'minerals' ? 'Composition Analysis' : 'Nutritional Information'}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {Object.entries(product.nutritionalInfo).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                        <span className="font-medium text-gray-700">{key}:</span>
                        <span className="text-gray-600 text-right">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'benefits' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    {product.category === 'minerals' ? 'Applications & Benefits' : 'Health Benefits'}
                  </h3>
                  <div className="space-y-4">
                    {product.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 leading-relaxed">{benefit}</span>
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
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Related Products</h2>
              <p className="text-gray-600">More products from {categoryInfo?.name}</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.id}`}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {relatedProduct.badge && (
                      <div className="absolute top-3 left-3 px-2 py-1 bg-green-600 text-white text-xs font-medium rounded">
                        {relatedProduct.badge}
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {relatedProduct.description}
                    </p>
                    
                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-3">
                      <div className="flex items-center">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(relatedProduct.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">({relatedProduct.reviews})</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        {relatedProduct.price !== "Market Price" && relatedProduct.price !== "Quote on Request" && relatedProduct.price !== "Varies" ? (
                          <>
                            {/* <span className="text-green-600 font-semibold text-lg">{relatedProduct.price}</span> */}
                            <span className="text-gray-500 text-sm ml-1">{relatedProduct.unit}</span>
                          </>
                        ) : (
                          // <span className="text-gray-700 font-medium">{relatedProduct.price}</span>
                          <span className="text-gray-700 font-medium">{}</span>
                        )}
                      </div>
                      <span className="text-sm text-green-600 font-medium group-hover:text-green-700">
                        View Details →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            {/* View All Products Link */}
            <div className="text-center mt-12">
              <Link 
                href={`/products?category=${product.category}`}
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <span>View All {categoryInfo?.name}</span>
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}