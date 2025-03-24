import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useLocation } from 'react-router-dom'
import ProductCard from '../ProductsCard/ProductCard'
import FilterSidebar from '../Filter/FilterSidebar'
import FilterButton from '../Filter/FilterButton'

function AllJewellery() {
  const location = useLocation()
  const { categoryType } = useParams()

  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [filteredCount, setFilteredCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [categoryName, setCategoryName] = useState('All Jewellery')

  const mainCategory = location.state?.mainCategory || 'All-jewellery' // Get mainCategory from state or default

  useEffect(() => {
    if (location.state?.searchResults?.length > 0) {
      // Handle search results if they exist
      setProducts(location.state.searchResults)
      setFilteredProducts(location.state.searchResults)
      setFilteredCount(location.state.searchResults.length)
      setCategoryName(location.state.categoryName || 'All Jewellery')
    } else {
      // Normal product fetching
      fetchProducts()
    }
  }, [mainCategory, categoryType, location.state?.searchResults])

  const fetchProducts = async () => {
    setLoading(true)
    const backendUrl = import.meta.env.VITE_BACKEND_HOST_URL;
    if (!backendUrl) {
      setError('Backend URL is not defined.');
      setLoading(false);
      return;
    }
    try {
      const url = `${backendUrl}/api/products/${encodeURIComponent(
        mainCategory
      )}`
      const response = await axios.get(url)
      let allProducts = response.data

      // If categoryType is provided, filter products accordingly
      if (categoryType) {
        allProducts = allProducts.filter(
          (product) => product.categoryType === categoryType
        )
      }

      setProducts(allProducts)
      setFilteredProducts(allProducts)
      setFilteredCount(allProducts.length)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
    setLoading(false)
  }

  const applyFilters = (selectedSort, selectedFilters) => {
    let filtered = [...products]

    // Apply all filter types
    if (selectedFilters['Jewellery Type']?.length > 0) {
      filtered = filtered.filter((product) =>
        selectedFilters['Jewellery Type'].includes(product.categoryType)
      )
    }
    if (selectedFilters['Brand']?.length > 0) {
      filtered = filtered.filter((product) =>
        selectedFilters['Brand'].includes(product.brand)
      )
    }
    if (selectedFilters['Metal']?.length > 0) {
      filtered = filtered.filter((product) =>
        selectedFilters['Metal'].includes(product.metel)
      )
    }
    if (selectedFilters['Purity']?.length > 0) {
      filtered = filtered.filter((product) =>
        selectedFilters['Purity'].includes(product.purity)
      )
    }

    // Apply sorting
    if (selectedSort === 'lowToHigh') {
      filtered.sort((a, b) => a.price - b.price)
    } else if (selectedSort === 'highToLow') {
      filtered.sort((a, b) => b.price - a.price)
    }

    setFilteredProducts(filtered)
    setFilteredCount(filtered.length)
    setIsOpen(false)
  }

  return (
    <>
      <h1 className="text-black lg:text-2xl font-bold p-2 lg:ml-8 my-3 md:text-left text-center">
        {categoryType || categoryName} ({filteredCount})
      </h1>
      <FilterButton handleClick={() => setIsOpen(true)} />
      {isOpen && (
        <FilterSidebar
          clickHandle={() => setIsOpen(false)}
          handleSort={applyFilters}
          applyFilters={applyFilters}
          filteredCount={filteredCount}
        />
      )}
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-center text-blue-700 font-semibold mt-2">
              Loading...
            </p>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((info) => (
              <ProductCard
                key={info._id}
                titleimg={info.imageFile1}
                hoverimg={info.imageFile2}
                title={info.name}
                price={`₹ ${info.price}`}
              />
            ))
          ) : (
            <p className="text-center col-span-3 text-gray-500 mt-5">
              No products found.
            </p>
          )}
        </div>
      )}
    </>
  )
}

export default AllJewellery
