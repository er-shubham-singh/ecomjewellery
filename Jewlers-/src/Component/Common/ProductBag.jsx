import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'

const ProductBag = () => {
  const { cartItems, removeFromCart } = useContext(CartContext)

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-4">Delivery Details</h2>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-green-600 font-bold text-lg">🇮🇳</span>
            <input
              type="text"
              placeholder="Enter Pincode"
              className="border p-2 rounded flex-1"
            />
            <button className="px-4 py-2 rounded bg-gray-200 cursor-pointer">
              Check
            </button>
          </div>

          {cartItems.length > 0 ? (
            cartItems.map((product, index) => {
              const productPrice =
                parseFloat(product.price.replace(/[^\d.]/g, '')) || 0

              return (
                <div
                  key={index}
                  className="border p-2 rounded-xl gap-4 items-center mt-2 flex flex-col sm:flex-row sm:flex-wrap"
                >
                  {/* Product Image */}
                  <img
                    src={product.titleimg}
                    alt={product.title}
                    className="w-24 h-24 object-cover sm:w-30 sm:h-30 rounded-xl shadow-xl "
                  />

                  {/* Product Details */}
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-semibold my-2">
                      {product.title || 'Product Name'}
                    </h3>
                    <p className="text-gray-500 text-sm my-2">
                      Size: {product.size || '47 * 57 MM'} | Weight:{' '}
                      {product.weight || '8.443 g'}
                    </p>
                    <p className="font-bold text-lg">
                      ₹{productPrice.toFixed(2)}
                    </p>
                  </div>

                  {/* Buttons Section */}
                  <div className="flex flex-col gap-4 sm:gap-7 sm:items-end w-full sm:w-auto justify-center items-center">
                    <button className="" onClick={() => removeFromCart(index)}>
                      <MdDelete className="text-4xl text-red-600 cursor-pointer   " />
                    </button>
                    <button className="text-green-500 cursor-pointer text-sm sm:text-base">
                      + Add A Gift Message
                    </button>
                  </div>
                </div>
              )
            })
          ) : (
            <p className="text-gray-500 text-center">No items in the bag.</p>
          )}
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md h-[300px]">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          {cartItems.length > 0 ? (
            <>
              <div className="text-sm">
                <p className="flex justify-between">
                  <span>Sub Total</span>
                  <span>
                    ₹
                    {cartItems
                      .reduce(
                        (total, product) =>
                          total +
                          (parseFloat(product.price.replace(/[^\d.]/g, '')) ||
                            0),
                        0
                      )
                      .toFixed(2)}
                  </span>
                </p>
                <p className="flex justify-between text-green-500">
                  <span>Discount</span> <span>0</span>
                </p>
                <p className="flex justify-between text-blue-500">
                  <span>Delivery Charge</span> <span>FREE</span>
                </p>
              </div>
              <div className="border-t my-4"></div>
              <p className="flex justify-between font-semibold text-lg">
                <span>TOTAL (Incl. Taxes)</span>
                <span>
                  ₹
                  {cartItems
                    .reduce(
                      (total, product) =>
                        total +
                        (parseFloat(product.price.replace(/[^\d.]/g, '')) || 0),
                      0
                    )
                    .toFixed(2)}
                </span>
              </p>
              <Link to="/orderDelever">
                <button className="w-full mt-4 bg-red-600 text-white py-3 rounded-xl font-semibold cursor-pointer">
                  Proceed to Checkout
                </button>
              </Link>
            </>
          ) : (
            <p className="text-gray-500 text-center">No items in the bag.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductBag
