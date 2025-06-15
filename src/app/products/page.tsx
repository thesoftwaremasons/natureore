'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, Grid, List, Filter, Star, ArrowRight, Package, Sparkles, Leaf, Gem } from 'lucide-react'
import productsData from '../data/products.json'
import categoryData from '../data/categories.json'

type Product = {
  id: string
  name: string
  description: string
  features: string[]
  category: string
  badge: string
  image: string
  availability: string
  rating: number
  reviews: number
}
type Category={
  id:string
  name:string,
  count:number,
  icon:string
}

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const products: Product[] = Array.isArray(productsData) ? productsData : []
  const categories:Category[]=Array.isArray(categoryData)?categoryData:[]


  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
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
      'Food Grade': 'bg-gradient-to-r from-indigo-500 to-indigo-600',
      'Traditional': 'bg-gradient-to-r from-amber-500 to-amber-600',
      'Medicinal': 'bg-gradient-to-r from-red-500 to-red-600',
      'Industrial': 'bg-gradient-to-r from-gray-600 to-gray-700',
      'Cultural': 'bg-gradient-to-r from-violet-500 to-violet-600',
      'default': 'bg-gradient-to-r from-gray-500 to-gray-600'
    }
    return colors[badge as keyof typeof colors] || colors.default
  }

  const getCategoryGradient = (categoryId: string) => {
    const gradients = {
      'staples': 'from-blue-500 to-blue-600',
      'cash-crops': 'from-emerald-500 to-emerald-600',
      'minerals': 'from-purple-500 to-purple-600',
      'specialty': 'from-orange-500 to-orange-600',
      'all': 'from-gray-600 to-gray-700'
    }
    return gradients[categoryId as keyof typeof gradients] || gradients.all
  }

  return (
    <div className="pt-20 bg-emerald-700 text-white">
      {/* Premium Hero Section */}
      <section className="py-32 bg-emerald-700 text-white relative overflow-hidden">
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
            sourced from Africa&#39;s finest producers. From traditional staples to rare minerals.
          </p>
        </div>
      </section>

      {/* Enhanced Filters and Search */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white border-b border-gray-200/50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              {categories.map(category => {
                // Map string icon names to Lucide icon components
                const iconMap: { [key: string]: React.ElementType } = {
                  'Leaf': Leaf,
                  'Gem': Gem,
                  'Sparkles': Sparkles,
                  'Package': Package,
                  'Star': Star,
                  'ArrowRight': ArrowRight,
                  'Grid': Grid,
                  'List': List,
                  'Filter': Filter,
                  // Add more mappings as needed
                }
                const IconComponent = iconMap[category.icon] || Leaf
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`group flex items-center space-x-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                      selectedCategory === category.id
                        ? `bg-gradient-to-r ${getCategoryGradient(category.id)} text-white shadow-2xl scale-105`
                        : 'bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 shadow-lg hover:shadow-xl border border-gray-200/50'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{category.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      selectedCategory === category.id 
                        ? 'bg-white/20 text-white' 
                        : 'bg-gray-100 text-gray-600 group-hover:bg-emerald-100 group-hover:text-emerald-700'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                )
              })}
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

      {/* Product Categories Overview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Explore Our <span className="text-emerald-600">Product Categories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From traditional African staples to modern industrial materials, discover the diversity of our premium offerings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.slice(1).map((category) => {
              // If you want to use a Lucide icon, map the string to the actual component
              // Example mapping (add more as needed)
              const iconMap: { [key: string]: React.ElementType } = {
                'Leaf': Leaf,
                'Gem': Gem,
                'Sparkles': Sparkles,
                'Package': Package,
                // Add more mappings as needed
              }
              const IconComponent = iconMap[category.icon] || Leaf
              const categoryProducts = products.filter(p => p.category === category.id)
              const topProducts = categoryProducts.slice(0, 3)

              return (
                <div key={category.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className={`h-2 bg-gradient-to-r ${getCategoryGradient(category.id)}`} />
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${getCategoryGradient(category.id)} text-white`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 group-hover:text-emerald-600 transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-sm text-gray-500">{category.count} products</p>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      {topProducts.map((product, index) => (
                        <div key={product.id} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div key={index} className="w-2 h-2 bg-emerald-400 rounded-full" />
                          <span>{product.name}</span>
                        </div>
                      ))}
                      {categoryProducts.length > 3 && (
                        <div className="flex items-center space-x-2 text-sm text-emerald-600 font-medium">
                          <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                          <span>+{categoryProducts.length - 3} more products</span>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedCategory(category.id)}
                      className="w-full py-2 px-4 border-2 border-emerald-200 text-emerald-600 rounded-lg hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300 font-medium"
                    >
                      View All Products
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              <span className="text-emerald-600">Featured</span> Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and highest-rated products across all categories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products
              .filter(p => ['Best Seller', 'Premium', 'Certified'].includes(p.badge))
              .slice(0, 6)
              .map((product) => (
                <div key={product.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3">
                      <div className={`px-2 py-1 text-white text-xs font-bold rounded-full ${getBadgeColor(product.badge)}`}>
                        {product.badge}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex items-center">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">({product.reviews})</span>
                    </div>
                    
                    <h3 className="font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-emerald-600 font-bold">Contact for Price</span>
                      <Link href={`/products/${product.id}`} className="text-emerald-600 hover:text-emerald-700 transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Source Premium African Products?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Connect with us to discuss your requirements, request samples, or get custom quotes for bulk orders
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary">
              Get Quote
            </Link>
            <Link href="/about" className="btn-outline">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}