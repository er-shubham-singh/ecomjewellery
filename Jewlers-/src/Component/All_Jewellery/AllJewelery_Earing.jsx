import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../ProductsCard/ProductCard';

function AllJewelery_Earing() {
  const [earrings, setEarrings] = useState([]);
  const [filteredEarrings, setFilteredEarrings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterLoading, setFilterLoading] = useState(false); // New state for sorting loader
  const [error, setError] = useState(null);
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    const fetchEarrings = async () => {
      const backendUrl = import.meta.env.VITE_BACKEND_HOST_URL;
  
      if (!backendUrl) {
        setError('Backend URL is not defined.');
        setLoading(false);
        return;
      }
  
      try {
        const response = await axios.get(
          `${backendUrl}/api/products/All%20Jewellery/Earings`
        );
  
        console.log('API Response:', response.data);
  
        let fetchedEarrings = [];
  
        if (Array.isArray(response.data)) {
          fetchedEarrings = response.data;
        } else if (Array.isArray(response.data.products)) {
          fetchedEarrings = response.data.products;
        } else {
          throw new Error('Invalid API response format');
        }
  
        setEarrings(fetchedEarrings);
        setFilteredEarrings(fetchedEarrings);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError(err.response?.data?.message || err.message || 'Failed to fetch earrings');
      } finally {
        setLoading(false);
      }
    };
  
    fetchEarrings();
  }, []);

  // Sorting function with loader
  const handleSort = (option) => {
    setSortOption(option);
    setFilterLoading(true); // Show loader when sorting

    setTimeout(() => {
      let sortedEarrings = [...filteredEarrings];

      if (option === 'lowToHigh') {
        sortedEarrings.sort((a, b) => a.price - b.price);
      } else if (option === 'highToLow') {
        sortedEarrings.sort((a, b) => b.price - a.price);
      }

      setFilteredEarrings(sortedEarrings);
      setFilterLoading(false); // Hide loader after sorting
    }, 500); // Small delay for a smooth effect
  };

  return (
    <>
      <h1 className="text-black lg:text-2xl font-bold p-2 lg:ml-8 my-3 md:text-left text-center">
        Earrings ({filteredEarrings.length})
      </h1>

      {/* ✅ Sorting Filters */}
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
      {loading || filterLoading ? (
        <div className="flex justify-center items-center h-40">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-center text-blue-700 font-semibold mt-2">
              {loading ? 'Loading products...' : 'Sorting...'}
            </p>
          </div>
        </div>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : filteredEarrings.length === 0 ? (
        <p className="text-center text-gray-500">No earrings available</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredEarrings.map((info, index) => (
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

export default AllJewelery_Earing;
