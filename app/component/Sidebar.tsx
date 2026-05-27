'use client'

import Link from 'next/link'

import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  Settings,
  LogOut,
} from 'lucide-react'

export default function Sidebar() {
  return (
    <aside className="w-[280px] min-h-screen bg-green-700 to-emerald-800 text-white p-6 flex flex-col justify-between">

      {/* Top */}
      <div>

        {/* Logo */}
        <div className="flex items-center gap-3 mb-12">

          <div className="bg-white text-green-700 p-3 rounded-2xl">
            <ShoppingCart size={28} />
          </div>

          <div>
            <h1 className="text-2xl font-bold">
              Fresh Market
            </h1>

            <p className="text-green-100 text-sm">
              Grocery Dashboard
            </p>
          </div>

        </div>

        {/* Menu */}
        <nav className="space-y-3">

          {/* Dashboard */}
          <Link
            href="/dashboard"
            className="w-full flex items-center gap-4 bg-white/20 p-4 rounded-2xl hover:bg-white/30 transition-all"
          >

            <LayoutDashboard size={22} />

            <span>
              Dashboard
            </span>

          </Link>

          {/* Products */}
          <Link
            href="/products"
            className="w-full flex items-center gap-4 hover:bg-white/10 p-4 rounded-2xl transition-all"
          >

            <Package size={22} />

            <span>
              Products
            </span>

          </Link>

          {/* Orders */}
          <Link
            href="/orders"
            className="w-full flex items-center gap-4 hover:bg-white/10 p-4 rounded-2xl transition-all"
          >

            <ShoppingCart size={22} />

            <span>
              Orders
            </span>

          </Link>

          {/* Customers */}
          <Link
            href="/customers"
            className="w-full flex items-center gap-4 hover:bg-white/10 p-4 rounded-2xl transition-all"
          >

            <Users size={22} />

            <span>
              Customers
            </span>

          </Link>

          {/* Settings */}
          <Link
            href="/settings"
            className="w-full flex items-center gap-4 hover:bg-white/10 p-4 rounded-2xl transition-all"
          >

            <Settings size={22} />

            <span>
              Settings
            </span>

          </Link>

        </nav>

      </div>

      {/* Logout */}
      <button className="w-full flex items-center gap-4 bg-red-500 hover:bg-red-600 p-4 rounded-2xl transition-all">

        <LogOut size={22} />

        <span>
          Logout
        </span>

      </button>

    </aside>
  )
}