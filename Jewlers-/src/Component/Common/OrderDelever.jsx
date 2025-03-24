import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { CartContext } from '../Context/CartContext'
import axios from 'axios'
import { setAddress } from '../../slices/savedSlice'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrderDelever = () => {
  const user = useSelector((state) => state.profile.user)
  const dispatch = useDispatch()

  const { cartItems, removeFromCart } = useContext(CartContext)
  const [addresses, setAddresses] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedAddress, setSelectedAddress] = useState(null)

  console.log('Selected Address:', selectedAddress)

  const totalPrice = cartItems
    .reduce(
      (total, product) =>
        total + (parseFloat(product.price.replace(/[^\d.]/g, '')) || 0),
      0
    )
    .toFixed(2)
  console.log('Total Price:', totalPrice)

  // ✅ Checkout Function - Handles Payment
  const checkOutHandler = async () => {
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_HOST_URL;
      if (!backendUrl) {
        setError('Backend URL is not defined.');
        setLoading(false);
        return;
      }
      const totalInPaise = Math.round(totalPrice * 100)
      
      const {
        data: { key },
      } = await axios.get(`${backendUrl}/api/getkey`)

      const {
        data: { order },
      } = await axios.post(`${backendUrl}/api/payment/checkout`, {
        totalPrice,
      })

      const options = {
        key,
        amount: order.amount,
        currency: 'INR',
        name: 'Naresh Chauhan',
        description: 'Tutorial of RazorPay',
        image: '',
        order_id: order.id,
        callback_url: `${backendUrl}/api/payment/paymentverification`,
        prefill: {
          name: 'Gaurav Kumar',
          email: 'gaurav.kumar@example.com',
          contact: '9999999999',
        },
        notes: {
          address: 'Razorpay Corporate Office',
        },
        theme: {
          color: '#121212',
        },
      }

      const razor = new window.Razorpay(options)
      razor.open()
    } catch (error) {
      console.error('Checkout Error:', error)
    }
  }

  // ✅ Save Order Function - Handles Order Submission (UPDATED)

  const onsubmit = async () => {
    if (!selectedAddress) {
      toast.error("No address selected!");
      return;
    }
  
    const orderDetails = {
      userId: user._id,
      address: selectedAddress,
      cartItems: cartItems,
      totalPrice: totalPrice,
    };
  
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_HOST_URL;
      if (!backendUrl) {
        setError('Backend URL is not defined.');
        setLoading(false);
        return;
      }
      // ✅ Fetch existing orders
      const { data: existingOrders } = await axios.get(
        `${backendUrl}/api/dislayOrderDetails`
      );
  
      // ✅ If database is empty, proceed without duplicate check
      if (!existingOrders.orders || existingOrders.orders.length === 0) {
        await placeOrder(orderDetails);
        return;
      }
  
      // ✅ Check if the same order exists before inserting a new one
      const isDuplicateOrder = existingOrders.orders.some(
        (order) =>
          order.userId === user._id &&
          order.address._id === selectedAddress._id && // Check if the same address is used
          order.cartItems.length === cartItems.length && // Ensure the cart length matches
          order.cartItems.every((item, index) => item.title === cartItems[index].title) // Compare products
      );
  
      if (isDuplicateOrder) {
        toast.warning("You have already placed this order at the same address!");
        return;
      }
  
      // ✅ Proceed with order submission if it's not a duplicate
      await placeOrder(orderDetails);
    } catch (error) {
      toast.error("Failed to place order. Please try again.");
      console.error("Error submitting order details:", error);
    }
  };
  
  
  // Helper function to place the order
  const placeOrder = async (orderDetails) => {
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_HOST_URL;
      if (!backendUrl) {
        setError('Backend URL is not defined.');
        setLoading(false);
        return;
      }
      const { data } = await axios.post(
       `${backendUrl}/api/inserOrderDetails`,
        orderDetails,
        { headers: { "Content-Type": "application/json" } }
      );
  
      toast.success("Order placed successfully!");
      console.log("Order details submitted successfully:", data);
    } catch (error) {
      toast.error("Failed to place order. Please try again.");
      console.error("Error submitting order details:", error);
    }
  };
  

 // ✅ Fetch User Addresses
 useEffect(() => {
  if (!user || !user._id) {
    console.error('User ID is missing, cannot fetch addresses')
    return
  }

  console.log('Fetching addresses for user ID:', user._id)

  const fetchAddresses = async () => {
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_HOST_URL;
      if (!backendUrl) {
        setError('Backend URL is not defined.');
        setLoading(false);
        return;
      }
      setLoading(true)
      const response = await fetch(
        `${backendUrl}/api/auth/getUserAddresses?id=${user._id}`,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        }
      )

      if (!response.ok) throw new Error('Failed to fetch addresses')

      const data = await response.json()
      setAddresses(data.addresses || [])
    } catch (error) {
      console.error('Error fetching address data:', error)
    } finally {
      setLoading(false)
    }
  }

  fetchAddresses()
}, [user])

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-10 ">
      <div className="max-w-6xl mx-auto bg-white p-6 md:p-10 rounded-xl shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Delivery Address Section */}
          <div className="md:col-span-2 space-y-6">
            <div className="border p-4 rounded-lg">
              <h2 className="text-lg font-semibold mb-3">DELIVER TO</h2>

              {loading ? (
                <p className="spinner">Loading addresses...</p>
              ) : addresses.length > 0 ? (
                <div>
                  {addresses.map((address, index) => (
                    <div key={index} className="p-3 mt-3 border rounded-lg">
                      <p>
                        <strong>Name:</strong> {address.name}
                      </p>
                      <p>
                        <strong>Email:</strong> {address.email}
                      </p>
                      <p>
                        <strong>Phone:</strong> {address.phoneNumber}
                      </p>
                      <p>
                        <strong>Address:</strong> {address.locality},{' '}
                        {address.city}, {address.state} - {address.pinCode}
                      </p>
                      <button
                        className={`mt-2 px-4 py-2 rounded-lg ${
                          selectedAddress === address
                            ? 'bg-green-500'
                            : 'bg-blue-600'
                        } text-white`}
                        onClick={() => setSelectedAddress(address)}
                      >
                        {selectedAddress === address
                          ? 'Address Selected'
                          : 'Use Address'}
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No saved address</p>
              )}

              <div className="mt-4">
                <Link to="/ShippingDetails">
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
                    + Add Address
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="border p-4 rounded-lg space-y-4 ">
            <h2 className="text-lg font-semibold">ORDER SUMMARY</h2>

            {cartItems.map((product, index) => (
              <div key={index} className="flex items-center gap-4">
                <img
                  src={product.titleimg}
                  alt={product.title}
                  className="w-16 h-16 object-cover"
                />
                <p>{product.title}</p>
                <p className="font-semibold ">{product.price}</p>
              </div>
            ))}

            <div className="flex justify-between font-bold text-lg text-red-600">
              <p>AMOUNT PAYABLE</p>
              <p>₹ {totalPrice}</p>
            </div>

            <button
              className="w-full bg-red-600 text-white py-3 rounded-lg"
              onClick={checkOutHandler}
            >
              Proceed To Buy
            </button>
          </div>

          <button
            className="w-full bg-red-600 text-white py-3 rounded-lg"
            onClick={onsubmit}
          >
            Test
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrderDelever
