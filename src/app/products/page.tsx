'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, Filter, Grid, List } from 'lucide-react'

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
      availability: 'In Stock'
    },
    {
      id: 2,
      name: 'GARRI (Cassava Flakes)',
      category: 'staples',
      price: '$15/kg',
      image: '/api/placeholder/400/300',
      description: 'Traditional cassava flakes, rich in nutrients',
      features: ['Gluten-Free', 'Long Shelf Life', 'Organic'],
      availability: 'In Stock'
    },
    {
      id: 3,
      name: 'Roasted Cashew Nuts',
      category: 'cash-crops',
      price: '$45/kg',
      image: '/api/placeholder/400/300',
      description: 'Premium roasted cashews with exceptional quality',
      features: ['Grade A', 'Rich in Minerals', 'Premium Quality'],
      availability: 'In Stock'
    },
    {
      id: 4,
      name: 'Raw Cashew Nuts',
      category: 'cash-crops',
      price: '$35/kg',
      image: '/api/placeholder/400/300',
      description: 'High-grade raw cashew nuts for processing',
      features: ['Unprocessed', 'Grade A', 'Bulk Available'],
      availability: 'In Stock'
    },
    {
      id: 5,
      name: 'Shea Butter',
      category: 'cash-crops',
      price: '$40/kg',
      image: '/api/placeholder/400/300',
      description: 'Pure, natural shea butter for cosmetic and therapeutic use',
      features: ['100% Pure', 'Unrefined', 'Fair Trade'],
      availability: 'In Stock'
    },
    {
      id: 6,
      name: 'Soybean Oil',
      category: 'cash-crops',
      price: '$30/L',
      image: '/api/placeholder/400/300',
      description: 'Premium quality soybean oil for cooking and industrial use',
      features: ['Cold Pressed', 'Refined', 'Food Grade'],
      availability: 'In Stock'
    },
    {
      id: 7,
      name: 'Gold',
      category: 'minerals',
      price: 'Market Price',
      image: '/api/placeholder/400/300',
      description: 'High-grade gold from certified mining operations',
      features: ['99.9% Pure', 'Certified', 'Ethical Mining'],
      availability: 'Available'
    },
    {
      id: 8,
      name: 'Lithium',
      category: 'minerals',
      price: 'Quote on Request',
      image: '/api/placeholder/400/300',
      description: 'High-grade lithium for battery and industrial applications',
      features: ['Battery Grade', 'High Purity', 'Sustainable'],
      availability: 'Available'
    },
    {
      id: 9,
      name: 'Black Soap',
      category: 'specialty',
      price: '$20/kg',
      image: '/api/placeholder/400/300',
      description: 'Traditional African black soap with natural ingredients',
      features: ['100% Natural', 'Handmade', 'Organic'],
      availability: 'In Stock'
    },
    {
      id: 10,
      name: 'Plastic Scraps',
      category: 'specialty',
      price: '$5/kg',
      image: '/api/placeholder/400/300',
      description: 'Clean, sorted plastic scraps for recycling industry',
      features: ['Sorted', 'Clean', 'Recyclable'],
      availability: 'In Stock'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'staples', name: 'Staples & Processed Foods' },
    { id: 'cash-crops', name: 'Cash Crops & Natural Extracts' },
    { id: 'minerals', name: 'Solid-State Minerals' },
    { id: 'specialty', name: 'Specialty Products' }
  ]

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Discover our extensive range of premium agricultural products, minerals, and specialty items 
            sourced from Africa's finest producers.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex bg-white rounded-lg border p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-green-900 text-white' : 'text-gray-600'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-green-900 text-white' : 'text-gray-600'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid/List */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        product.availability === 'In Stock' 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-yellow-100 text-yellow-600'
                      }`}>
                        {product.availability}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {product.features.map((feature, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-green-600 font-semibold text-lg">
                        {/* {product.price} */}
                      </span>
                      <Link
                        href={`/products/${product.id}`}
                        className="btn-primary text-sm px-4 py-2"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-64 h-48 flex-shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="p-6 flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            {product.name}
                          </h3>
                          <p className="text-gray-600 mb-3">
                            {product.description}
                          </p>
                        </div>
                        <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                          product.availability === 'In Stock' 
                            ? 'bg-green-100 text-green-600' 
                            : 'bg-yellow-100 text-yellow-600'
                        }`}>
                          {product.availability}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.features.map((feature, index) => (
                          <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded">
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-green-600 font-semibold text-xl">
                          {/* {product.price} */}
                        </span>
                        <Link
                          href={`/products/${product.id}`}
                          className="btn-primary"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
