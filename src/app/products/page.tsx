'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, Grid, List, Filter, Star, ArrowRight, Package, Sparkles } from 'lucide-react'

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState('grid')

  const products = [
    {
      id: 1,
      name: 'PAP (Custard)',
      category: 'staples',
      price: '$25/kg',
      image: '/api/placeholder/400/300',
      description: 'Premium quality custard powder made from finest ingredients',
      features: ['High Protein', 'Natural', 'Export Quality'],
      availability: 'In Stock',
      rating: 4.8,
      reviews: 24,
      badge: 'Premium'
    },
    {
      id: 2,
      name: 'GARRI (Cassava Flakes)',
      category: 'staples',
      price: '$15/kg',
      image: '/api/placeholder/400/300',
      description: 'Traditional cassava flakes, rich in nutrients',
      features: ['Gluten-Free', 'Long Shelf Life', 'Organic'],
      availability: 'In Stock',
      rating: 4.6,
      reviews: 18,
      badge: 'Organic'
    },
    {
      id: 3,
      name: 'Roasted Cashew Nuts',
      category: 'cash-crops',
      price: '$45/kg',
      image: '/api/placeholder/400/300',
      description: 'Premium roasted cashews with exceptional quality',
      features: ['Grade A', 'Rich in Minerals', 'Premium Quality'],
      availability: 'In Stock',
      rating: 4.9,
      reviews: 42,
      badge: 'Best Seller'
    },
    {
      id: 4,
      name: 'Raw Cashew Nuts',
      category: 'cash-crops',
      price: '$35/kg',
      image: '/api/placeholder/400/300',
      description: 'High-grade raw cashew nuts for processing',
      features: ['Unprocessed', 'Grade A', 'Bulk Available'],
      availability: 'In Stock',
      rating: 4.7,
      reviews: 31,
      badge: 'Bulk Available'
    },
    {
      id: 5,
      name: 'Shea Butter',
      category: 'cash-crops',
      price: '$40/kg',
      image: '/api/placeholder/400/300',
      description: 'Pure, natural shea butter for cosmetic and therapeutic use',
      features: ['100% Pure', 'Unrefined', 'Fair Trade'],
      availability: 'In Stock',
      rating: 4.8,
      reviews: 28,
      badge: 'Fair Trade'
    },
    {
      id: 6,
      name: 'Soybean Oil',
      category: 'cash-crops',
      price: '$30/L',
      image: '/api/placeholder/400/300',
      description: 'Premium quality soybean oil for cooking and industrial use',
      features: ['Cold Pressed', 'Refined', 'Food Grade'],
      availability: 'In Stock',
      rating: 4.5,
      reviews: 22,
      badge: 'Food Grade'
    },
    {
      id: 7,
      name: 'Gold',
      category: 'minerals',
      price: 'Market Price',
      image: '/api/placeholder/400/300',
      description: 'High-grade gold from certified mining operations',
      features: ['99.9% Pure', 'Certified', 'Ethical Mining'],
      availability: 'Available',
      rating: 5.0,
      reviews: 15,
      badge: 'Certified'
    },
    {
      id: 8,
      name: 'Lithium',
      category: 'minerals',
      price: 'Quote on Request',
      image: '/api/placeholder/400/300',
      description: 'High-grade lithium for battery and industrial applications',
      features: ['Battery Grade', 'High Purity', 'Sustainable'],
      availability: 'Available',
      rating: 4.9,
      reviews: 12,
      badge: 'Industrial Grade'
    },
    {
      id: 9,
      name: 'Black Soap',
      category: 'specialty',
      price: '$20/kg',
      image: '/api/placeholder/400/300',
      description: 'Traditional African black soap with natural ingredients',
      features: ['100% Natural', 'Handmade', 'Organic'],
      availability: 'In Stock',
      rating: 4.7,
      reviews: 35,
      badge: 'Handmade'
    },
    {
      id: 10,
      name: 'Plastic Scraps',
      category: 'specialty',
      price: '$5/kg',
      image: '/api/placeholder/400/300',
      description: 'Clean, sorted plastic scraps for recycling industry',
      features: ['Sorted', 'Clean', 'Recyclable'],
      availability: 'In Stock',
      rating: 4.4,
      reviews: 19,
      badge: 'Eco-Friendly'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'staples', name: 'Staples & Processed Foods', count: products.filter(p => p.category === 'staples').length },
    { id: 'cash-crops', name: 'Cash Crops & Natural Extracts', count: products.filter(p => p.category === 'cash-crops').length },
    { id: 'minerals', name: 'Solid-State Minerals', count: products.filter(p => p.category === 'minerals').length },
    { id: 'specialty', name: 'Specialty Products', count: products.filter(p => p.category === 'specialty').length }
  ]

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getBadgeColor = (badge: string) => {
    const colors = {
      'Premium': 'bg-gradient-to-r from-purple-500 to-purple-600',
      'Organic': 'bg-gradient-to-r from-green-500 to-green-600',
      'Best Seller': 'bg-gradient-to-r from-orange-500 to-orange-600',
      'Fair Trade': 'bg-gradient-to-r from-blue-500 to-blue-600',
      'Certified': 'bg-gradient-to-r from-emerald-500 to-emerald-600',
      'Handmade': 'bg-gradient-to-r from-pink-500 to-pink-600',
      'Eco-Friendly': 'bg-gradient-to-r from-teal-500 to-teal-600',
      'default': 'bg-gradient-to-r from-gray-500 to-gray-600'
    }
    return colors[badge as keyof typeof colors] || colors.default
  }

  return (
    <div className="pt-20">
      {/* Premium Hero Section */}
      <section className="py-32 gradient-bg text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-400/10 rounded-full -translate-x-1/2 -translate-y-1/2 floating-element" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-300/10 rounded-full translate-x-1/2 translate-y-1/2 floating-element animation-delay-200" />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full border border-white/20 mb-8 animate-fade-in-up">
            <Package className="w-5 h-5 text-emerald-300" />
            <span className="text-emerald-200 font-semibold text-lg">Premium Collection</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-shadow-lg animate-fade-in-up animation-delay-200">
            Our 
            <span className="bg-gradient-to-r from-emerald-200 to-emerald-400 bg-clip-text text-transparent"> Products</span>
          </h1>
          
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up animation-delay-400">
            Discover our extensive range of premium agricultural products, minerals, and specialty items 
            sourced from Africa&#39;s finest producers.
          </p>
        </div>
      </section>

      {/* Enhanced Filters and Search */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white border-b border-gray-200/50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`group flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-2xl shadow-emerald-600/25 scale-105'
                      : 'bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 shadow-lg hover:shadow-xl border border-gray-200/50'
                  }`}
                >
                  <span>{category.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    selectedCategory === category.id 
                      ? 'bg-white/20 text-emerald-100' 
                      : 'bg-gray-100 text-gray-600 group-hover:bg-emerald-100 group-hover:text-emerald-700'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Search and Controls */}
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 flex-1 max-w-2xl">
                {/* Enhanced Search */}
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-400" />
                  <input
                    type="text"
                    placeholder="Search premium products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-6 py-4 border border-gray-300/50 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300 text-lg"
                  />
                </div>

                {/* Filter Button */}
                <button className="flex items-center space-x-2 px-6 py-4 bg-white border border-gray-300/50 rounded-2xl hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300 shadow-lg font-medium">
                  <Filter className="w-5 h-5 text-emerald-600" />
                  <span>Filters</span>
                </button>
              </div>

              {/* View Mode Toggle */}
              <div className="flex bg-white rounded-2xl border border-gray-300/50 p-2 shadow-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-lg' 
                      : 'text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-lg' 
                      : 'text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Products Grid/List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <p className="text-gray-600 text-lg">
                Showing <span className="font-semibold text-emerald-600">{filteredProducts.length}</span> of <span className="font-semibold">{products.length}</span> products
              </p>
              {selectedCategory !== 'all' && (
                <div className="inline-flex items-center space-x-2 bg-emerald-50 px-4 py-2 rounded-full">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-medium text-sm">
                    {categories.find(c => c.id === selectedCategory)?.name}
                  </span>
                </div>
              )}
            </div>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group bg-white rounded-3xl premium-shadow hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Premium Badge */}
                    <div className="absolute top-4 left-4">
                      <div className={`px-3 py-1 text-white text-xs font-bold rounded-full ${getBadgeColor(product.badge)} shadow-lg`}>
                        {product.badge}
                      </div>
                    </div>
                    
                    {/* Availability */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm ${
                        product.availability === 'In Stock' 
                          ? 'bg-green-500/90 text-white' 
                          : 'bg-yellow-500/90 text-white'
                      }`}>
                        {product.availability}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <Link href={`/products/${product.id}`} className="btn-primary w-full text-center">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Rating */}
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">({product.reviews})</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <span key={index} className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full font-medium">
                          {feature}
                        </span>
                      ))}
                      {product.features.length > 2 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                          +{product.features.length - 2} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-emerald-600">
                        {/* {product.price} */}
                        Contact for Price
                      </div>
                      <ArrowRight className="w-5 h-5 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group bg-white rounded-3xl premium-shadow hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className="flex flex-col lg:flex-row">
                    <div className="relative w-full lg:w-80 h-64 flex-shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Badges */}
                      <div className="absolute top-4 left-4">
                        <div className={`px-3 py-1 text-white text-xs font-bold rounded-full ${getBadgeColor(product.badge)} shadow-lg`}>
                          {product.badge}
                        </div>
                      </div>
                      
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm ${
                          product.availability === 'In Stock' 
                            ? 'bg-green-500/90 text-white' 
                            : 'bg-yellow-500/90 text-white'
                        }`}>
                          {product.availability}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8 flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          {/* Rating */}
                          <div className="flex items-center space-x-2 mb-3">
                            <div className="flex items-center">
                              {Array.from({ length: 5 }, (_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(product.rating)
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                          </div>

                          <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors">
                            {product.name}
                          </h3>
                          
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {product.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {product.features.map((feature, index) => (
                          <span key={index} className="px-3 py-1 bg-emerald-50 text-emerald-700 text-sm rounded-full font-medium">
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-emerald-600">
                          {/* {product.price} */}
                          Contact for Price
                        </div>
                        <Link
                          href={`/products/${product.id}`}
                          className="btn-primary group"
                        >
                          <span>View Details</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredProducts.length === 0 && (
            <div className="text-center py-32">
              <div className="text-gray-400 mb-8">
                <Search className="w-24 h-24 mx-auto" />
              </div>
              <h3 className="text-3xl font-bold text-gray-600 mb-4">No products found</h3>
              <p className="text-gray-500 text-lg mb-8">Try adjusting your search or filter criteria</p>
              <button 
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('all')
                }}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}