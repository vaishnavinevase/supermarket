'use client'

import Image from 'next/image'
import Link from 'next/link'

interface ProductProps {
  id: string
  name: string
  price: number
  image: string
}

export default function ProductCard({
  id,
  name,
  price,
  image,
}: ProductProps) {

  return (
    <Link href={`/products/${id}`}>

      <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">

        <div className="relative h-[250px] overflow-hidden">

          <Image
            src={image}
            alt={name}
            fill
            className="object-cover hover:scale-110 transition-all duration-500"
          />

        </div>

        <div className="p-5">

          <h3 className="text-xl font-bold text-gray-800 mb-2">

            {name}

          </h3>

          <div className="flex items-center justify-between">

            <p className="text-2xl font-bold text-green-600">

              ₹{price}

            </p>

            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl transition-all">

              View

            </button>

          </div>

        </div>

      </div>

    </Link>
  )
}