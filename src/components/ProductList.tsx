'use client'

import Image from 'next/image'
import { Product } from '@/types/product'
import { useEffect, useState } from 'react'
import { useCart } from '@/context/CartContext'

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const { addToCart } = useCart()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching products:', error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="w-full lg:w-3/4">
        <div className="animate-pulse">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="aspect-square bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full lg:w-3/4">
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="text-gray-600">{products.length} Products</span>
        </div>
        <div className="flex gap-4">
          <select className="border p-2 rounded">
            <option>Sort By: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <article key={product.id} className="group">
            <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={product.id <= 4}
                quality={85}
                loading={product.id <= 4 ? "eager" : "lazy"}
              />
              <button 
                onClick={() => addToCart(product)}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-2 rounded-full 
                         opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Add to Cart
              </button>
            </div>
            <h3 className="font-medium text-sm mb-2 line-clamp-2">{product.title}</h3>
            <div className="flex justify-between items-center">
              <p className="text-gray-900 font-semibold">${product.price}</p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">★ {product.rating.rate}</span>
                <span className="text-xs text-gray-500">({product.rating.count})</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
