'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">BE THE FIRST TO KNOW</h3>
            <p className="text-gray-300">Sign up for updates from mettā muse.</p>
            <div className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className="bg-transparent border border-white px-4 py-3 rounded text-white w-full"
              />
              <button className="bg-white text-black px-6 py-3 rounded font-medium hover:bg-gray-100 transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold">CONTACT US</h3>
            <div className="space-y-4">
              <p className="text-gray-300">+44 221 133 5360</p>
              <p className="text-gray-300">customercare@mettamuse.com</p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold">CURRENCY</h3>
            <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <span className="text-xl">🇺🇸</span> USD
            </button>
            <p className="text-gray-400 text-sm">
              Transactions will be completed in Euros and a currency reference is available on hover.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold">FOLLOW US</h3>
            <div className="flex gap-6">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                Instagram
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12">
          <h3 className="text-lg font-semibold mb-8 text-center">mettā muse ACCEPTS</h3>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center justify-center bg-white rounded-lg p-4 w-24 h-14 hover:shadow-lg transition-shadow">
              <Image
                src="/images/payment/gpay.svg"
                alt="Google Pay"
                width={60}
                height={24}
              />
            </div>
            <div className="flex items-center justify-center bg-white rounded-lg p-4 w-24 h-14 hover:shadow-lg transition-shadow">
              <Image
                src="/images/payment/mastercard.svg"
                alt="Mastercard"
                width={60}
                height={24}
              />
            </div>
            <div className="flex items-center justify-center bg-white rounded-lg p-4 w-24 h-14 hover:shadow-lg transition-shadow">
              <Image
                src="/images/payment/paypal.svg"
                alt="PayPal"
                width={60}
                height={24}
              />
            </div>
            <div className="flex items-center justify-center bg-white rounded-lg p-4 w-24 h-14 hover:shadow-lg transition-shadow">
              <Image
                src="/images/payment/amex.svg"
                alt="American Express"
                width={60}
                height={24}
              />
            </div>
            <div className="flex items-center justify-center bg-white rounded-lg p-4 w-24 h-14 hover:shadow-lg transition-shadow">
              <Image
                src="/images/payment/apple-pay.svg"
                alt="Apple Pay"
                width={60}
                height={24}
              />
            </div>
          </div>
          <p className="text-center text-gray-400 text-sm">
            Copyright 2023 mettamuse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
