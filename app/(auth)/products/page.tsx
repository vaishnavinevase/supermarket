'use client'

import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import {
  Apple,
  Carrot,
  Milk,
  Star,
  ShoppingCart,
} from 'lucide-react'

import { products } from '../../data/products'

export default function ProductsPage() {

  const [selectedCategory, setSelectedCategory] =
    useState('All')

  // Filter Products
  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter(
          (item) =>
            item.category === selectedCategory
        )

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden">

      {/* Hero Section */}
      <section className="relative px-8 md:px-16 pt-20 pb-16">

        {/* Glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">

          <p className="uppercase tracking-[8px] text-green-600 font-semibold mb-5">

            Fresh Grocery Collection

          </p>

          <h1 className="text-6xl md:text-7xl font-extrabold text-gray-800 leading-tight mb-6">

            Fresh Market 🛒

          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-9">

            Fresh fruits, vegetables, and dairy products
            with modern shopping experience.

          </p>

        </div>

      </section>

      {/* Category Cards */}
      <section className="px-8 md:px-16 pb-16">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Fruits */}
          <button
            onClick={() =>
              setSelectedCategory('Fruits')
            }
            className={`group rounded-[35px] p-10 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border ${
              selectedCategory === 'Fruits'
                ? 'bg-red-500 text-white'
                : 'bg-white border-green-100'
            }`}
          >

            <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 transition-all ${
              selectedCategory === 'Fruits'
                ? 'bg-white text-red-500'
                : 'bg-red-100 text-red-500'
            }`}>

              <Apple size={42} />

            </div>

            <h2 className="text-3xl font-bold mb-4">

              Fresh Fruits

            </h2>

            <p className={`text-lg leading-8 ${
              selectedCategory === 'Fruits'
                ? 'text-white/90'
                : 'text-gray-500'
            }`}>

              Explore seasonal fresh fruits.

            </p>

          </button>

          {/* Vegetables */}
          <button
            onClick={() =>
              setSelectedCategory('Vegetables')
            }
            className={`group rounded-[35px] p-10 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border ${
              selectedCategory === 'Vegetables'
                ? 'bg-green-600 text-white'
                : 'bg-white border-green-100'
            }`}
          >

            <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 transition-all ${
              selectedCategory === 'Vegetables'
                ? 'bg-white text-green-600'
                : 'bg-green-100 text-green-600'
            }`}>

              <Carrot size={42} />

            </div>

            <h2 className="text-3xl font-bold mb-4">

              Vegetables

            </h2>

            <p className={`text-lg leading-8 ${
              selectedCategory === 'Vegetables'
                ? 'text-white/90'
                : 'text-gray-500'
            }`}>

              Organic vegetables directly from farms.

            </p>

          </button>

          {/* Dairy */}
          <button
            onClick={() =>
              setSelectedCategory('Dairy')
            }
            className={`group rounded-[35px] p-10 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border ${
              selectedCategory === 'Dairy'
                ? 'bg-blue-500 text-white'
                : 'bg-white border-green-100'
            }`}
          >

            <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 transition-all ${
              selectedCategory === 'Dairy'
                ? 'bg-white text-blue-500'
                : 'bg-blue-100 text-blue-500'
            }`}>

              <Milk size={42} />

            </div>

            <h2 className="text-3xl font-bold mb-4">

              Dairy Products

            </h2>

            <p className={`text-lg leading-8 ${
              selectedCategory === 'Dairy'
                ? 'text-white/90'
                : 'text-gray-500'
            }`}>

              Premium milk and dairy products.

            </p>

          </button>

        </div>

        {/* Show All Button */}
        <div className="flex justify-center mt-10">

          <button
            onClick={() =>
              setSelectedCategory('All')
            }
            className="bg-black text-white px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-all"
          >

            Show All Products

          </button>

        </div>

      </section>

      {/* Products */}
      <section className="px-8 md:px-16 pb-20">

        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="mb-12">

            <h2 className="text-5xl font-bold text-gray-800 mb-3">

              {selectedCategory === 'All'
                ? 'All Products'
                : selectedCategory}

            </h2>

            <p className="text-gray-500 text-lg">

              Premium grocery collection

            </p>

          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

            {filteredProducts.map((product) => (

              <Link
                href={`/products/${product.id}`}
                key={product.id}
              >

                <div className="group bg-white rounded-[35px] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-gray-100">

                  {/* Image */}
                  <div className="relative h-[300px] overflow-hidden">

                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-all duration-700"
                    />

                    {/* Cart Button */}
                    <button className="absolute top-5 right-5 bg-white p-3 rounded-full shadow-xl hover:bg-green-600 hover:text-white transition-all">

                      <ShoppingCart size={20} />

                    </button>

                  </div>

                  {/* Content */}
                  <div className="p-6">

                    {/* Rating */}
                    <div className="flex items-center gap-1 text-yellow-500 mb-3">

                      <Star size={18} fill="currentColor" />
                      <Star size={18} fill="currentColor" />
                      <Star size={18} fill="currentColor" />
                      <Star size={18} fill="currentColor" />
                      <Star size={18} fill="currentColor" />

                    </div>

                    {/* Category */}
                    <p className="text-sm text-green-600 font-semibold uppercase tracking-wider mb-2">

                      {product.category}

                    </p>

                    {/* Name */}
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">

                      {product.name}

                    </h3>

                    {/* Bottom */}
                    <div className="flex items-center justify-between">

                      <div>

                        <p className="text-3xl font-extrabold text-green-600">

                          ₹{product.price}

                        </p>

                        <p className="text-gray-400 line-through">

                          ₹{product.price + 40}

                        </p>

                      </div>

                      <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-2xl font-semibold transition-all">

                        Buy

                      </button>

                    </div>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>

    </div>
  )
}