import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductsCard/ProductCard';

function Gold_Necklaces() {
  const [goldData, setGoldData] = useState([]);
  const [filteredGold, setFilteredGold] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    const backendUrl = import.meta.env.VITE_BACKEND_HOST_URL;
    if (!backendUrl) {
      setError('Backend URL is not defined.');
      setLoading(false);
      return;
    }
    fetch(`${backendUrl}/api/products/Gold/Necklaces`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        return response.json();
      })
      .then((data) => {
        console.log('API Response:', data);
        const products = Array.isArray(data) ? data : data.products || [];
        setGoldData(products);
        setFilteredGold(products);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        setError(error.message);
        setGoldData([]);
      })
      .finally(() => setLoading(false));
  }, []);

  // Sorting function
  const handleSort = (order) => {
    setSortOrder(order);
    setLoading(true);

    setTimeout(() => {
      let sortedData = [...goldData];

      if (order === 'lowToHigh') {
        sortedData.sort((a, b) => a.price - b.price);
      } else if (order === 'highToLow') {
        sortedData.sort((a, b) => b.price - a.price);
      }

      setFilteredGold(sortedData);
      setLoading(false);
    }, 500);
  };

  return (
    <>
      <h1 className="text-black lg:text-2xl font-bold p-2 lg:ml-8 my-3 md:text-left text-center">
        Gold Necklaces ({filteredGold.length})
      </h1>

      {/* ✅ Sorting Buttons */}
      <div className="flex justify-center space-x-4 mb-4">
        <button
          className={`px-4 py-2 border rounded ${
            sortOrder === 'lowToHigh' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleSort('lowToHigh')}
        >
          Price: Low to High
        </button>
        <button
          className={`px-4 py-2 border rounded ${
            sortOrder === 'highToLow' ? 'bg-blue-500 text-white' : 'bg-gray-200'
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
      ) : filteredGold.length === 0 ? (
        <p className="text-center text-gray-500">No products available</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredGold.map((info, index) => (
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

export default Gold_Necklaces;
