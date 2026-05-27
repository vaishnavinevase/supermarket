'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const banners = [
  '/images/products/fruit12.jpg',
  '/images/products/fruit2.jpg',
  '/images/products/fruit4.jpg',
]

export default function MarketBanner() {

  const [current, setCurrent] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent((prev) =>
        prev === banners.length - 1 ? 0 : prev + 1
      )

    }, 3000)

    return () => clearInterval(interval)

  }, [])

  return (
    <div className="relative h-[450px] overflow-hidden p-2 shadow-2xl">

      {/* Banner Images */}
      {banners.map((banner, index) => (

        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            current === index
              ? 'opacity-100'
              : 'opacity-0'
          }`}
        >

          <Image
            src={banner}
            alt="Fresh Market Banner"
            fill
            priority
            className="object-cover"
          />

        </div>

      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">

        <div className="p-10 md:p-16 text-white max-w-3xl">

          <p className="uppercase tracking-[6px] text-green-300 mb-4 font-semibold">

            Fresh Market

          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">

            Fresh Groceries <br />
            Delivered Fast 

          </h1>

          <p className="text-lg text-gray-200 leading-8 mb-8">

            Experience smart grocery shopping with fresh vegetables,
            fruits, bakery, dairy products, and daily essentials.

          </p>

          <div className="flex gap-5">

            <button className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl">

              Shop Now

            </button>

            <button className="bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 px-8 py-4 rounded-2xl font-semibold transition-all duration-300">

              Explore

            </button>

          </div>

        </div>

      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">

        {banners.map((_, index) => (

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