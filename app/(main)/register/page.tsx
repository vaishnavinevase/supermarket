'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff, ShoppingBag } from 'lucide-react'

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-emerald-100 flex items-center justify-center px-4 py-10">

      {/* Main Container */}
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

        {/* Left Section */}
        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-green-600 to-emerald-700 text-white p-14 relative overflow-hidden">

          {/* Blur Effects */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-black/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">

            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <ShoppingBag size={42} />
              <h1 className="text-5xl font-extrabold">
                Fresh Market
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg text-green-100 leading-8 mb-10">
              Fresh groceries delivered faster with a modern shopping
              experience designed for smart customers.
            </p>

            {/* Feature Cards */}
            <div className="space-y-5">

              <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-5 hover:scale-105 transition duration-300">
                <h3 className="text-xl font-semibold mb-2">
                  Fresh Products
                </h3>

                <p className="text-sm text-green-100">
                  Discover fresh vegetables, fruits, and daily essentials.
                </p>
              </div>

              <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-5 hover:scale-105 transition duration-300">
                <h3 className="text-xl font-semibold mb-2">
                  Fast Delivery
                </h3>

                <p className="text-sm text-green-100">
                  Quick and seamless grocery delivery experience.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center p-8 sm:p-14">

          <div className="w-full max-w-md">

            {/* Heading */}
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-2">
                Create Account
              </h2>

              <p className="text-gray-500">
                Register to start shopping with Fresh Market.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-5">

              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 transition"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>

                <div className="relative">

                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create password"
                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 pr-14 outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 transition"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>

                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>

                <input
                  type="password"
                  placeholder="Confirm password"
                  className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 transition"
                />
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3 text-sm text-gray-600">

                <input
                  type="checkbox"
                  className="mt-1 accent-green-600"
                />

                <p>
                  I agree to the{' '}
                  <span className="text-green-700 font-medium cursor-pointer hover:underline">
                    Terms & Conditions
                  </span>
                </p>

              </div>

              {/* Register Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg hover:scale-[1.02] hover:shadow-2xl transition duration-300"
              >
                Create Account
              </button>

              {/* Divider */}
              <div className="relative flex items-center justify-center py-2">

                <div className="absolute border-t border-gray-300 w-full"></div>

                <span className="relative bg-white px-4 text-sm text-gray-500">
                  OR
                </span>

              </div>

              {/* Social Buttons */}
              <div className="grid grid-cols-2 gap-4">

                <button
                  type="button"
                  className="border border-gray-300 py-3 rounded-2xl font-medium hover:bg-gray-100 transition"
                >
                  Google
                </button>

                <button
                  type="button"
                  className="border border-gray-300 py-3 rounded-2xl font-medium hover:bg-gray-100 transition"
                >
                  Apple
                </button>

              </div>

              {/* Login Link */}
              <p className="text-center text-gray-600 mt-6">
                Already have an account?{' '}

                <Link
                  href="/login"
                  className="text-green-700 font-semibold hover:underline"
                >
                  Login
                </Link>
              </p>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}