'use client'

import Image from 'next/image'
import { products } from '../../../data/products'

interface PageProps {
  params: {
    id: string
  }
}

export default function ProductDetails({
  params,
}: PageProps) {

  const product = products.find(
    (item) => item.id === params.id
  )

  if (!product) {
    return (
      <div className="p-10 text-3xl">
        Product Not Found
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-7xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-2">

        {/* Image */}
        <div className="relative h-[600px]">

          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />

        </div>

        {/* Content */}
        <div className="p-10 flex flex-col justify-center">

          <p className="text-green-600 font-semibold mb-4">

            {product.category}

          </p>

          <h1 className="text-6xl font-extrabold text-gray-800 mb-6">

            {product.name}

          </h1>

          <p className="text-5xl font-bold text-green-600 mb-8">

            ₹{product.price}

          </p>

          <p className="text-gray-600 leading-8 text-lg mb-10">

            {product.description}

          </p>

          {/* Quantity */}
          <div className="flex items-center gap-5 mb-10">

            <button className="bg-gray-200 w-14 h-14 rounded-2xl text-2xl">

              -

            </button>

            <span className="text-2xl font-bold">
              1
            </span>

            <button className="bg-gray-200 w-14 h-14 rounded-2xl text-2xl">

              +

            </button>

          </div>

          {/* Buttons */}
          <div className="flex gap-5">

            <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-2xl text-lg font-semibold transition-all">

              Add To Cart

            </button>

            <button className="bg-black hover:bg-gray-800 text-white px-10 py-5 rounded-2xl text-lg font-semibold transition-all">

              Buy Now

            </button>

          </div>

        </div>

      </div>

    </div>
  )
}