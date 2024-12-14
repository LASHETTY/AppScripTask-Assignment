'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useCart } from '@/context/CartContext'
import Image from 'next/image'

export default function Header() {
  const [cartOpen, setCartOpen] = useState(false)
  const { items, total, removeFromCart, updateQuantity } = useCart()

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex flex-col md:flex-row justify-between items-center">
          <Link href="/" className="text-2xl font-bold mb-4 md:mb-0">
            METTĀ MUSE
          </Link>
          
          <div className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
            <Link href="#shop" className="hover:text-gray-600">Shop</Link>
            <Link href="#skills" className="hover:text-gray-600">Skills</Link>
            <Link href="#stories" className="hover:text-gray-600">Stories</Link>
            <Link href="#about" className="hover:text-gray-600">About</Link>
            <Link href="#contact" className="hover:text-gray-600">Contact Us</Link>
          </div>

          <div className="flex items-center gap-4">
            <button 
              className="flex items-center gap-2"
              onClick={() => setCartOpen(!cartOpen)}
            >
              <ShoppingCartIcon className="h-6 w-6" />
              <span>Cart ({items.length})</span>
            </button>
          </div>
        </nav>
      </div>

      {cartOpen && (
        <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg p-4 transform transition-transform">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Your Cart</h2>
            <button 
              onClick={() => setCartOpen(false)}
              className="text-2xl"
            >
              ×
            </button>
          </div>
          
          <div className="flex flex-col gap-4 max-h-[calc(100vh-200px)] overflow-auto">
            {items.length === 0 ? (
              <p className="text-gray-500">Your cart is empty</p>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex gap-4 border-b pb-4">
                  <div className="relative w-20 h-20">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.title}</h3>
                    <p className="text-gray-600">${item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 border rounded"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 border rounded"
                      >
                        +
                      </button>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 ml-auto"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-white">
            <div className="flex justify-between mb-4">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button 
              className="w-full bg-black text-white py-2 rounded"
              onClick={() => {
                // Handle checkout
                alert('Proceeding to checkout...')
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
