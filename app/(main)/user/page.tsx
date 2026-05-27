'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff, ShoppingCart } from 'lucide-react'
import { useRouter } from 'next/navigation' 

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()
  const handleLogin = (e: React.FormEvent) => {
  e.preventDefault()

  router.push('/dashboard')
}
  return (
    <div className="min-h-screen bg-green-100  flex items-center justify-center px-4 py-10">

      {/* Main Container */}
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

        {/* Left Section */}
        <div className="hidden lg:flex flex-col justify-center bg-green-600 text-white p-14 relative">

          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-black/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <ShoppingCart size={42} />
              <h1 className="text-5xl font-extrabold">
                Fresh Market
              </h1>
            </div>

            <p className="text-lg text-green-100 leading-8 mb-10">
              Welcome back! Login to continue shopping fresh groceries
              and manage your orders easily.
            </p>

            {/* Features */}
            <div className="space-y-5">

              <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-5">
                <h3 className="text-xl font-semibold mb-2">
                  Fast Delivery
                </h3>

                <p className="text-sm text-green-100">
                  Get fresh groceries delivered quickly to your doorstep.
                </p>
              </div>

              <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-5">
                <h3 className="text-xl font-semibold mb-2">
                  Smart Shopping
                </h3>

                <p className="text-sm text-green-100">
                  Manage cart, products, and orders with modern UI experience.
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
                Welcome Back
              </h2>

              <p className="text-gray-500">
                Login to continue your Fresh Market journey.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-5">

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
                    placeholder="Enter your password"
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

              {/* Remember + Forgot */}
              <div className="flex items-center justify-between text-sm">

                <label className="flex items-center gap-2 text-gray-600">
                  <input type="checkbox" className="accent-green-600" />
                  Remember me
                </label>

                <button
                  type="button"
                  className="text-green-700 hover:underline"
                >
                  Forgot Password?
                </button>

              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-green-600  text-white py-4 rounded-2xl font-semibold text-lg shadow-lg hover:scale-[1.02] hover:shadow-2xl transition duration-300"
              >
                Login
              </button>

              {/* Divider */}
              <div className="relative flex items-center justify-center py-2">

                <div className="absolute border-t border-gray-300 w-full"></div>

                <span className="relative bg-white px-4 text-sm text-gray-500">
                  OR
                </span>

              </div>

             

              {/* Register Link */}
              <p className="text-center text-gray-600 mt-6">
                Don&apos;t have an account?{' '}

                <Link
                  href="/register"
                  className="text-green-700 font-semibold hover:underline"
                >
                  Register
                </Link>
              </p>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}