import ProductCard from './ProductCard'

interface Product {
  id: string
  name: string
  price: number
  image: string
}

interface SectionProps {
  title: string
  products: Product[]
}

export default function ProductSection({
  title,
  products,
}: SectionProps) {

  return (
    <section className="mb-14">

      <div className="flex items-center justify-between mb-8">

        <h2 className="text-4xl font-bold text-gray-800">
          {title}
        </h2>

        <button className="text-green-600 font-semibold">
          View All
        </button>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

        {products.map((product) => (

          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />

        ))}

      </div>

    </section>
  )
}