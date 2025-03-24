import { useState } from 'react'
import { ChevronDown, X } from 'lucide-react'

const filters = ['Jewellery Type', 'Brand', 'Metal', 'Purity']

const options = {
  'Jewellery Type': [
    'Earings',
    'Pendants',
    'Mangalsutras',
    'Finger Rings',
    'Chains',
    'Kadas',
  ],
  Metal: ['Gold', 'Diamond'],
  Brand: ['Mia', 'tanishq'],
  Purity: ['24K', '22K', '18K', '14K'],
}

export default function FilterSidebar({ clickHandle, applyFilters }) {
  const [sortOption, setSortOption] = useState('')
  const [selectedFilters, setSelectedFilters] = useState(
    filters.reduce((acc, filter) => ({ ...acc, [filter]: [] }), {})
  )

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters((prev) => {
      const isSelected = prev[filterType]?.includes(value)
      return {
        ...prev,
        [filterType]: isSelected
          ? prev[filterType].filter((item) => item !== value)
          : [...prev[filterType], value],
      }
    })
  }

  const clearFilters = () => {
    setSortOption('')
    setSelectedFilters(
      filters.reduce((acc, filter) => ({ ...acc, [filter]: [] }), {})
    )
  }

  const handleApplyFilters = () => {
    applyFilters(sortOption, selectedFilters)
  }

  return (
    <div className="fixed inset-0 sm:left-5 sm:top-10 w-full sm:w-[70%] max-w-[360px] bg-white shadow-xl rounded-2xl p-5 border z-50 h-[550px] sm:h-[600px] overflow-y-auto mt-28 left-2">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-2">
        <h2 className="text-lg font-semibold text-[#5E2D29]">Filter By</h2>
        <button
          className="text-gray-500 hover:text-gray-800"
          onClick={clickHandle}
        >
          <X className="w-6 h-6 cursor-pointer" />
        </button>
      </div>

      {/* Sorting */}
      <div className="mt-3">
        <label className="text-gray-700 font-semibold">Price</label>
        <select
          className="w-full mt-1 p-2 border rounded-md bg-white cursor-pointer"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Relevance</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>

      {/* Filters */}
      <div className="mt-2 max-h-90 overflow-y-auto">
        {filters.map((filter) => (
          <div key={filter} className="py-3 border-b">
            <span className="text-gray-700 font-medium">{filter}</span>
            <div className="mt-2 pl-2">
              {options[filter].map((option) => (
                <div key={option} className="flex items-center mt-1">
                  <input
                    type="checkbox"
                    className="mr-2 cursor-pointer"
                    checked={selectedFilters[filter]?.includes(option)}
                    onChange={() => handleFilterChange(filter, option)}
                  />
                  <label className="text-gray-600 cursor-pointer">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-5 flex gap-2">
        <button
          className="py-2 px-3 border border-[#5E2D29] text-[#5E2D29] rounded-full hover:bg-[#5E2D29] hover:text-white transition cursor-pointer"
          onClick={clearFilters}
        >
          Clear Filters
        </button>
        <button
          className="py-3 px-4 bg-[#842B26] text-white rounded-full flex items-center justify-center hover:bg-[#5E2D29] transition cursor-pointer"
          onClick={handleApplyFilters}
        >
          Show Results ➤
        </button>
      </div>
    </div>
  )
}
