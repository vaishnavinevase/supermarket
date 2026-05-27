'use client'

import {
  Bell,
  Menu,
  Search,
} from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-green-100 shadow-sm px-6 py-5 flex items-center justify-between">

      {/* Left */}
      <div className="flex items-center gap-4">

        <button className="lg:hidden">
          <Menu size={28} />
        </button>

        <div>

          <h2 className="text-3xl font-bold text-gray-800">
            Dashboard
          </h2>

          <p className="text-gray-500 text-sm">
            Welcome back 
          </p>

        </div>

      </div>

      {/* Right */}
      <div className="flex items-center gap-5">

        {/* Search */}
        <div className="hidden md:flex items-center bg-white px-4 py-3 rounded-2xl w-[300px]">

          <Search size={20} className="text-gray-500" />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none px-3 w-full text-sm"
          />

        </div>

        {/* Notification */}
        <button className="relative bg-white p-3 rounded-2xl">

          <Bell size={22} />

          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>

        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-2xl">

        <img
  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
  alt="girl profile"
  className="w-11 h-11 rounded-full object-cover"
/>

          <div>

            <h4 className="font-semibold text-sm">
              Vaishnavi
            </h4>

            <p className="text-gray-500 text-xs">
              Admin
            </p>

          </div>

        </div>

      </div>

    </header>
  )
}