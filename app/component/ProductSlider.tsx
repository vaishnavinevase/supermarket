'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const products = [
  {
    image: '/images/products/apple.jpg',
    title: 'Fresh Apples',
    price: '₹120',
  },
  {
    image: '/images/products/milk.jpg',
    title: 'Dairy Milk',
    price: '₹60',
  },
  {
    image: '/images/products/bread.jpg',
    title: 'Bakery Bread',
    price: '₹45',
  },
  {
    image: '/images/products/vegetables.jpg',
    title: 'Fresh Vegetables',
    price: '₹90',
  },
]

export default function ProductSlider() {

  const [current, setCurrent] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent((prev) =>
        prev === products.length - 1 ? 0 : prev + 1
      )

    }, 3000)

    return () => clearInterval(interval)

  }, [])

  return (
    <div className="relative overflow-hidden rounded-3xl shadow-2xl">

      {/* Image */}
      <div className="relative w-full h-[450px]">

        <Image
          src={products[current].image}
          alt={products[current].title}
          fill
          className="object-cover transition-all duration-700"
        />

      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-center">

        <div className="p-10 text-white max-w-2xl">

          <h1 className="text-5xl font-extrabold mb-4 animate-pulse">

            {products[current].title}

          </h1>

          <p className="text-lg text-gray-200 leading-8 mb-6">

            Fresh organic grocery products available at best prices.
            Experience smart shopping with modern dashboard UI.

          </p>

          <div className="flex items-center gap-5">

            <span className="text-4xl font-bold text-green-300">

              {products[current].price}

            </span>

            <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl">

              Add To Cart

            </button>

          </div>

        </div>

      </div>

      {/* Dots */}
      <div className="absolute bottom-6 right-6 flex gap-3">

        {products.map((_, index) => (

          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index
                ? 'bg-white scale-125'
                : 'bg-white/40'
            }`}
          />

        ))}

      </div>

    </div>
  )
}