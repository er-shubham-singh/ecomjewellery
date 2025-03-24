import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../ProductsCard/ProductCard';

function Diamond() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOption, setSortOption] = useState('');
  const [filterLoading, setFilterLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const backendUrl = import.meta.env.VITE_BACKEND_HOST_URL;
    if (!backendUrl) {
      setError('Backend URL is not defined.');
      setLoading(false);
      return;
    }
    try {
      const response = await axios.get(`${backendUrl}/api/products/Diamond`);
      console.log('API Response:', response.data);
      const fetchedProducts = Array.isArray(response.data) 
        ? response.data 
        : response.data.products || [];
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch products');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  // Sorting function
  const handleSort = (option) => {
    setSortOption(option);
    setFilterLoading(true);

    let sortedData = [...products];

    if (option === 'lowToHigh') {
      sortedData.sort((a, b) => a.price - b.price);
    } else if (option === 'highToLow') {
      sortedData.sort((a, b) => b.price - a.price);
    }

    setTimeout(() => {
      setFilteredProducts(sortedData);
      setFilterLoading(false);
    }, 500); // Simulating loader effect for sorting
  };

  return (
    <>
      <h1 className="text-black lg:text-2xl font-bold p-2 lg:ml-8 my-3 md:text-left text-center">
        Diamonds ({filteredProducts.length})
      </h1>

      {/* ✅ Sorting Buttons */}
      <div className="flex justify-center space-x-4 mb-4">
        <button
          className={`px-4 py-2 border rounded ${
            sortOption === 'lowToHigh' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleSort('lowToHigh')}
        >
          Price: Low to High
        </button>
        <button
          className={`px-4 py-2 border rounded ${
            sortOption === 'highToLow' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleSort('highToLow')}
        >
          Price: High to Low
        </button>
      </div>

      {/* ✅ Loader Section */}
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-center text-blue-700 font-semibold mt-2">Loading...</p>
          </div>
        </div>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : filterLoading ? (
        <div className="flex justify-center items-center h-20">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="ml-2 text-blue-700 font-semibold">Sorting...</p>
        </div>
      ) : filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500">No diamonds available</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((info, index) => (
            <ProductCard
              key={index}
              titleimg={info.imageFile1 || 'default-image.jpg'}
              hoverimg={info.imageFile2 || 'default-hover.jpg'}
              title={info.name}
              price={`₹ ${info.price}`}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Diamond;
