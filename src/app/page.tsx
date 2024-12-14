'use client'

import ProductList from '@/components/ProductList'
import Header from '@/components/Header'
import FilterSection from '@/components/FilterSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <h1 className="text-3xl font-bold mb-8">ACCESSORIES</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <FilterSection />
          <ProductList />
        </div>
      </main>
      <Footer />
    </div>
  )
}
