'use client'

import { useState } from 'react'

export default function FilterSection() {
  const [isOpen, setIsOpen] = useState(false)
  
  const filters = [
    {
      title: 'Ideal For',
      options: ['Men', 'Women', 'Baby & Kids']
    },
    {
      title: 'Occasion',
      options: ['Casual', 'Formal', 'Party']
    },
    {
      title: 'Material',
      options: ['Leather', 'Metal', 'Plastic']
    },
    {
      title: 'Color',
      options: ['Black', 'Brown', 'Gold', 'Silver']
    }
  ]

  return (
    <aside className="w-full lg:w-1/4">
      <div className="sticky top-20">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">FILTERS</h2>
          <button 
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '×' : 'Show Filters'}
          </button>
          <button className="hidden lg:block text-sm text-gray-500">Clear All</button>
        </div>
        
        <div className={`space-y-6 ${isOpen ? 'block' : 'hidden lg:block'}`}>
          {filters.map((filter) => (
            <div key={filter.title} className="border-b pb-4">
              <h3 className="font-medium mb-2">{filter.title}</h3>
              <div className="space-y-2">
                {filter.options.map((option) => (
                  <label key={option} className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}
