import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductsCard/ProductCard';

function DailyWear_Pendants() {
  const [pendantsData, setPendantsData] = useState([]);
  const [filteredPendants, setFilteredPendants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    const fetchPendants = async () => {
      const backendUrl = import.meta.env.VITE_BACKEND_HOST_URL;
      if (!backendUrl) {
        setError('Backend URL is not defined.');
        setLoading(false);
        return;
      }
      try {
        const response = await fetch(`${backendUrl}/api/products/daily%20wear/Pendants`);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        console.log('API Response:', data);

        let products = Array.isArray(data) ? data : data.products || [];
        setPendantsData(products);
        setFilteredPendants(products);
      } catch (error) {
        console.error('Fetch error:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPendants();
  }, []);

  // Sorting function
  const handleSort = (option) => {
    setSortOption(option);
    setLoading(true);

    setTimeout(() => {
      let sortedData = [...pendantsData];

      if (option === 'lowToHigh') {
        sortedData.sort((a, b) => a.price - b.price);
      } else if (option === 'highToLow') {
        sortedData.sort((a, b) => b.price - a.price);
      }

      setFilteredPendants(sortedData);
      setLoading(false);
    }, 500);
  };

  return (
    <>
      <h1 className="text-black lg:text-2xl font-bold p-2 lg:ml-8 my-3 md:text-left text-center">
        Daily Wear Pendants ({filteredPendants.length})
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
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-center text-blue-700 font-semibold mt-2">Loading...</p>
          </div>
        </div>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : filteredPendants.length === 0 ? (
        <p className="text-center text-gray-500">No products available</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPendants.map((info, index) => (
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

export default DailyWear_Pendants;
