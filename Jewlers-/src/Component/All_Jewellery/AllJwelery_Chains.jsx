import React, { useState, useEffect } from 'react'
import ProductCard from '../ProductsCard/ProductCard'
import axios from 'axios'

function AllJwelery_Chains() {
  const [jewelleryData, setJewelleryData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchJewelleryData = async () => {
      const backendUrl = import.meta.env.VITE_BACKEND_HOST_URL;
      if (!backendUrl) {
        setError('Backend URL is not defined.');
        setLoading(false);
        return;
      }
      try {
        const category = 'jewellery'
        const categoryType = 'chains'

        const response = await axios.get(
          `${backendUrl}/api/products/all%20jewellery/chains`
        )
        console.log('API Response:', response.data)
        setJewelleryData(response.data)
      } catch (err) {
        setError('Failed to fetch jewellery data')
      } finally {
        setLoading(false)
      }
    }
    fetchJewelleryData()
  }, [])

  return (
    <>
      <h1 className="text-black lg:text-2xl font-bold p-2 lg:ml-8 my-3 md:text-left text-center">
        Chains ({jewelleryData.length})
      </h1>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {jewelleryData.map((info, index) => (
            <ProductCard
              key={index}
              titleimg={`http://localhost:8000/${info.img}`}
              hoverimg={
                info.hoverimg ? `http://localhost:8000/${info.hoverimg}` : null
              }
              title={info.title}
              price={info.price}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default AllJwelery_Chains
