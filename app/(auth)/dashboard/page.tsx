import MarketBanner from '../../component/MarketBanner'

import {
  TrendingUp,
  ShoppingBag,
  Package,
  Users,
} from 'lucide-react'

export default function DashboardPage() {
  return (
    <main>

      {/* Animated Market Banner */}
      <MarketBanner />

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8 p-5">

        {/* Card 1 */}
        <div className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

          <div className="flex items-center justify-between mb-5">

            <div className="bg-green-100 text-green-700 p-4 rounded-2xl">
              <TrendingUp size={28} />
            </div>

            <span className="text-green-600 text-sm font-semibold">
              +12%
            </span>

          </div>

          <p className="text-gray-500 mb-2">
            Total Sales
          </p>

          <h3 className="text-4xl font-bold text-gray-800">
            ₹48,520
          </h3>

        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

          <div className="flex items-center justify-between mb-5">

            <div className="bg-orange-100 text-orange-600 p-4 rounded-2xl">
              <ShoppingBag size={28} />
            </div>

            <span className="text-orange-600 text-sm font-semibold">
              +8%
            </span>

          </div>

          <p className="text-gray-500 mb-2">
            Orders
          </p>

          <h3 className="text-4xl font-bold text-gray-800">
            1,245
          </h3>

        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

          <div className="flex items-center justify-between mb-5">

            <div className="bg-blue-100 text-blue-600 p-4 rounded-2xl">
              <Users size={28} />
            </div>

            <span className="text-blue-600 text-sm font-semibold">
              +20%
            </span>

          </div>

          <p className="text-gray-500 mb-2">
            Customers
          </p>

          <h3 className="text-4xl font-bold text-gray-800">
            850
          </h3>

        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

          <div className="flex items-center justify-between mb-5">

            <div className="bg-purple-100 text-purple-600 p-4 rounded-2xl">
              <Package size={28} />
            </div>

            <span className="text-purple-600 text-sm font-semibold">
              +15%
            </span>

          </div>

          <p className="text-gray-500 mb-2">
            Products
          </p>

          <h3 className="text-4xl font-bold text-gray-800">
            320
          </h3>

        </div>

      </div>

    </main>
  )
}