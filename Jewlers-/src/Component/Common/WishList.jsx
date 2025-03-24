import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { FaHome, FaUserCircle } from 'react-icons/fa'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { WishlistContext } from '../Context/WishlistContext'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { CartContext } from '../Context/CartContext'
import { useSelector } from 'react-redux'
import axios from 'axios'

const tabs = [
  { name: 'Overview', id: 0 },
  { name: 'Tanishq Digital Gold', id: 1 },
  { name: 'Personal Information', id: 2 },
  { name: 'Address Book', id: 3 },
  { name: 'Wishlist', id: 4 },
  { name: 'Order History', id: 5 },
  { name: 'Gift Card Balance', id: 6 },
]

const WishList = () => {
  const [pinVisible, setPinVisible] = useState(false)
  const [cardNumber, setCardNumber] = useState('')
  const [pin, setPin] = useState('')
  const [activeTab, setActiveTab] = useState(0)
  const [isPurchaseOpen, setIsPurchaseOpen] = useState(false)
  const [isSellingOpen, setIsSellingOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [addresses, setAddresses] = useState([])
  const [addedItems, setAddedItems] = useState({})
  const { wishlist, removeFromWishlist } = useContext(WishlistContext)
  const { addToCart } = useContext(CartContext)
  const navigate = useNavigate()


  const { saveaddress } = useSelector((state) => state.address)
  // Ensure saveaddress is an array before mapping

  const savedAddresses = saveaddress?.data || saveaddress
  const handleButtonBag = (item) => {
    if (!addedItems[item.title]) {
      addToCart(item)
      removeFromWishlist(item.title)
      toast.success('Product moved to Bag!', {
        position: 'top-right',
        autoClose: 1000,
      }) / setAddedItems((prev) => ({ ...prev, [item.title]: true }))
    } else {
      navigate('/productbag')
    }
  }
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    addressType: 'Home',
    isDefault: false,
  })

  const sectionRefs = {
    Overview: useRef(0),
    gold: useRef(null),
    personal: useRef(null),
    address: useRef(null),
    wishlist: useRef(null),
    orders: useRef(null),
    gift: useRef(null),
  }

  const scrollToSection = (id) => {
    setActiveTab(id)
    sectionRefs[id]?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const handleSubmit = () => {
    if (!formData.fullName || !formData.contactNumber) return

    setAddresses([...addresses, formData])
    setShowModal(false)
    setFormData({
      fullName: '',
      contactNumber: '',
      addressType: 'Home',
      isDefault: false,
    })
  }

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const backendUrl = import.meta.env.VITE_BACKEND_HOST_URL;
    if (!backendUrl) {
      setError('Backend URL is not defined.');
      setLoading(false);
      return;
    }
    axios
      .get(`${backendUrl}/api/dislayOrderDetails`)
      .then((response) => {
        setOrders(response.data.orders);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching order details:", error);
        setLoading(false);
      });
  }, []);

  const user = useSelector((state) => state.profile.user);
  const userId = user?._id; // Get the user ID
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (userId) {
      fetchUserDetails(userId);
    }
  }, [userId]);

  const fetchUserDetails = async (id) => {
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_HOST_URL;
      if (!backendUrl) {
        setError('Backend URL is not defined.');
        setLoading(false);
        return;
      }
      const response = await axios.get(`${backendUrl}/api/${id}`);
      console.log(response.data)
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user details:", error.response?.data || error.message);
    }
  };

  // for personal information
  // useEffect(() => {
  //   if (!user || !user._id) {
  //     console.error('User ID is missing, cannot fetch addresses')
  //     return
  //   }
  
  //   console.log('Fetching addresses for user ID:', user._id)
  
  //   const fetchAddresses = async () => {
  //     try {
  //       setLoading(true)
  //       const response = await fetch(
  //         `http://localhost:8000/api/auth/getUserAddresses?id=${user._id}`,
  //         {
  //           method: 'GET',
  //           headers: { 'Content-Type': 'application/json' },
  //         }
  //       )
  
  //       if (!response.ok) throw new Error('Failed to fetch addresses')
  
  //       const data = await response.json()
  //       setAddresses(data.addresses || [])
  //     } catch (error) {
  //       console.error('Error fetching address data:', error)
  //     } finally {
  //       setLoading(false)
  //     }
  //   }
  
  //   fetchAddresses()
  // }, [user])
  return (
    <div className="bg-[#f5f5dc] w-full  ">
      <div className="max-w-[1200px]  mx-auto md:py-5 py-15    overflow-hidden">
        <h1 className="text-[#996515] md:text-[2rem] font-bold  text-[1rem] leading-[3rem] text-center lg:text-start ">
          My Account
        </h1>

        <div className="lg:flex  ">
          {/* Sidebar - 30% */}
          <div className="lg:w-1/4  p-4 flex flex-col">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`p-3 mb-2 rounded lg:text-left text-center transition ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-gray-300'
                }`}
                onClick={() => scrollToSection(tab.id)}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Right Content - 70% */}
          <div className="w-full px-2 ">
            {activeTab === 0 && (
             <div className="border rounded-lg overflow-hidden">
             <div className="bg-red-100 p-4 flex justify-between items-center">
               <h3 className="text-lg font-semibold text-red-700">Account Overview</h3>
               {/* <button className="border border-red-700 text-red-700 px-4 py-1 rounded-md hover:bg-red-700 hover:text-white">
                 Edit Details
               </button> */}
             </div>
     
             <div className="p-6 space-y-3 text-gray-700">
               <p>
                 <span className="font-semibold">Name:</span>{' '}
                 <span className="font-bold">{userData?.fullName || "Loading..."}</span>
               </p>
               <p>
                 <span className="font-semibold">Date of Birth:</span>{' '}
                 <span className="font-bold">{userData?.dob || "Not Provided"}</span>
               </p>
               <p>
                 <span className="font-semibold">Anniversary Date:</span>{' '}
                 <span className="font-bold">{userData?.anniversary || "Not Provided"}</span>
               </p>
               <p>
                 <span className="font-semibold">Phone Number:</span>{' '}
                 <span className="font-bold">{userData?.phoneNumber || "Loading..."}</span>
               </p>
               <p>
                 <span className="font-semibold">Email Address:</span>{' '}
                 <span className="font-bold">{userData?.email || "Loading..."}</span>
               </p>
               <p>
                 <span className="font-semibold">Encircle ID:</span>{' '}
                 <span className="font-bold">{userData?.encircleId || "Not Available"}</span>
               </p>
               <p>
                 <span className="font-semibold">NeuCoins:</span>{' '}
                 <span className="font-bold">{userData?.neuCoins || "0"}</span>
               </p>
             </div>
           </div>
            )}

            {activeTab === 1 && (
              <div className="">
                <div className="" ref={sectionRefs.gold} id="gold">
                  <h2 className="text-2xl font-semibold mb-6 lg:text-left text-center">
                    Tanishq Digital Gold
                  </h2>

                  {/* Account Summary */}
                  <div className="bg-black text-white rounded-lg overflow-hidden">
                    <div className="flex items-center p-6 bg-gradient-to-r from-yellow-500 to-black">
                      <FaUserCircle className="text-4xl text-black bg-yellow-500 rounded-full p-1" />
                      <h3 className="ml-4 text-lg font-semibold">
                        Account Summary
                      </h3>
                    </div>

                    {/* Gold Balances */}
                    <div className="p-6">
                      <div className="flex justify-between items-center bg-gradient-to-r from-yellow-500 to-black text-black p-3 rounded-lg mb-2 border border-yellow-500">
                        <span className="font-semibold">
                          Tanishq Gold Balance
                        </span>
                        <span>0g</span>
                      </div>
                      <div className="flex justify-between items-center bg-gradient-to-r from-yellow-500 to-black text-black p-3 rounded-lg border border-yellow-500">
                        <span className="font-semibold">
                          Other Channel Gold Balance
                        </span>
                        <span>0g</span>
                      </div>
                    </div>
                  </div>

                  {/* Welcome Message */}
                  <div className="mt-6 flex justify-between items-center">
                    <div>
                      <h2 className="text-xl font-semibold">
                        Welcome Bhupendra Singh
                      </h2>
                      <p className="text-gray-600">
                        This is your Tanishq Digital Gold account summary. You
                        can access your past transaction history.
                      </p>
                    </div>
                    <FaHome className="text-3xl text-yellow-500" />
                  </div>

                  {/* Purchase History */}
                  <div
                    className="mt-6 shadow-md rounded-lg p-4 cursor-pointer"
                    onClick={() => setIsPurchaseOpen(!isPurchaseOpen)}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">
                        🔶 Purchase History - 0g
                      </span>
                      <span className="text-gray-500">
                        Total Price of Purchase: ₹ 0.0
                      </span>
                    </div>
                    {isPurchaseOpen && (
                      <p className="mt-2 text-gray-600">
                        No purchases available.
                      </p>
                    )}
                  </div>

                  {/* Selling History */}
                  <div
                    className="mt-4  shadow-md rounded-lg p-4 cursor-pointer"
                    onClick={() => setIsSellingOpen(!isSellingOpen)}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">
                        🔶 Exchange / Selling History - 0g
                      </span>
                      <span className="text-gray-500">+</span>
                    </div>
                    {isSellingOpen && (
                      <p className="mt-2 text-gray-600">
                        No selling records available.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <>
                <div className=" ">
      <h2 className="text-2xl font-semibold mb-4 lg:text-left text-center">
        Account Overview
      </h2>

      {/* Personal Information Section */}
      <div className="border rounded-lg overflow-hidden">
        <div className="bg-red-100 p-4 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-red-700">Personal Information</h3>
          {/* <button className="border border-red-700 text-red-700 px-4 py-1 rounded-md hover:bg-red-700 hover:text-white">
            Edit Details
          </button> */}
        </div>

        <div className="p-6 space-y-3 text-gray-700">
          <p>
            <span className="font-semibold">Name:</span>{' '}
            <span className="font-bold">{userData?.fullName || "Loading..."}</span>
          </p>
          <p>
            <span className="font-semibold">Date of Birth:</span>{' '}
            <span className="font-bold">{userData?.dob || "Not Provided"}</span>
          </p>
          <p>
            <span className="font-semibold">Anniversary Date:</span>{' '}
            <span className="font-bold">{userData?.anniversary || "Not Provided"}</span>
          </p>
          <p>
            <span className="font-semibold">Phone Number:</span>{' '}
            <span className="font-bold">{userData?.phoneNumber || "Loading..."}</span>
          </p>
          <p>
            <span className="font-semibold">Email Address:</span>{' '}
            <span className="font-bold">{userData?.email || "Loading..."}</span>
          </p>
          <p>
            <span className="font-semibold">Encircle ID:</span>{' '}
            <span className="font-bold">{userData?.encircleId || "Not Available"}</span>
          </p>
          <p>
            <span className="font-semibold">NeuCoins:</span>{' '}
            <span className="font-bold">{userData?.neuCoins || "0"}</span>
          </p>
        </div>
      </div>

      <div className="pt-4">
        {/* Contact Details Section */}
        <div className="border rounded-lg overflow-hidden">
          <div className="bg-red-100  p-2 items-center">
            <h3 className="text-lg font-semibold text-red-700">Contact Details</h3>
          </div>

          <div className="p-6 space-y-3 text-gray-700">
            <p>
              <span className="font-semibold">Phone Number:</span>{' '}
              <span className="font-bold">{userData?.phoneNumber || "Loading..."}</span>
            </p>
            <p>
              <span className="font-semibold">Email Address:</span>{' '}
              <span className="font-bold">{userData?.email || "Loading..."}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
              </>
            )}

            {activeTab === 3 && (
              <div className=" ">
                <div className="  w-full  px-2">
                  <div className="w-full flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold lg:text-left text-center">
                      Address Book
                    </h2>
                    <button
                      onClick={() => setShowModal(true)}
                      className="border border-red-700 text-red-700 px-4 py-1 rounded-md hover:bg-red-700 hover:text-white"
                    >
                      Add New Address
                    </button>
                  </div>

                  {/* Address List */}
                  {addresses.length > 0 ? (
                    <div className="space-y-4">
                      {addresses.map((address, index) => (
                        <div
                          key={index}
                          className="border p-4 rounded-md bg-gray-50"
                        >
                          <p>
                            <strong>Name:</strong> {address.fullName}
                          </p>
                          <p>
                            <strong>Contact:</strong> {address.contactNumber}
                          </p>
                          <p>
                            <strong>Type:</strong> {address.addressType}
                          </p>
                          {address.isDefault && (
                            <p className="text-green-500 font-semibold">
                              Default Address
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600">No addresses added yet.</p>
                  )}

                  {/* Modal */}
                  {showModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <div className="bg-white  p-6 rounded-lg shadow-lg">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-lg font-semibold">
                            Add New Address
                          </h3>
                          <button onClick={() => setShowModal(false)}>✖</button>
                        </div>

                        <div className="space-y-4">
                          <input
                            type="text"
                            placeholder="Full Name *"
                            className="w-full border p-2 rounded"
                            value={formData.fullName}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                fullName: e.target.value,
                              })
                            }
                          />
                          <input
                            type="text"
                            placeholder="Contact Number *"
                            className="w-full border p-2 rounded"
                            value={formData.contactNumber}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                contactNumber: e.target.value,
                              })
                            }
                          />

                          {/* Address Type */}
                          <div className="flex space-x-2">
                            {['Home', 'Work', 'Other'].map((type) => (
                              <button
                                key={type}
                                className={`px-4 py-2 border rounded-md ${
                                  formData.addressType === type
                                    ? 'bg-red-500 text-white'
                                    : 'bg-gray-200'
                                }`}
                                onClick={() =>
                                  setFormData({
                                    ...formData,
                                    addressType: type,
                                  })
                                }
                              >
                                {type}
                              </button>
                            ))}
                          </div>

                          {/* Default Address */}
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              className="mr-2"
                              checked={formData.isDefault}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  isDefault: e.target.checked,
                                })
                              }
                            />
                            <label>Make this address default</label>
                          </div>

                          {/* Buttons */}
                          <div className="flex justify-end space-x-2">
                            <button
                              onClick={() => setShowModal(false)}
                              className="px-4 py-2 border border-red-700 rounded-md"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={handleSubmit}
                              className="px-4 py-2 bg-red-700 text-white rounded-md"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 4 && (
              <div className="w-full px-4 py-6">
                {wishlist.length === 0 ? (
                  <div className="w-full flex items-center justify-center flex-col">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/4083/4083877.png"
                      alt="Empty Wishlist"
                      className="w-40 mb-4"
                    />
                    <h2 className="text-2xl font-semibold text-red-700">
                      Your Wishlist Is Empty!
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Add items to your wishlist.
                    </p>
                    <button
                      onClick={() => navigate('/all-jewellery')}
                      className="px-6 py-2 bg-red-700 text-white rounded-md hover:bg-red-800"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wishlist.map((item) => (
                      <div
                        key={item.title}
                        className="bg-white p-4 shadow-lg rounded-lg flex flex-col items-center"
                      >
                        <img
                          src={item.titleimg}
                          alt={item.title}
                          className="w-32 h-32 object-cover mb-2"
                        />
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="text-gray-600">{item.price}</p>
                        <div className="flex flex-row gap-4">
                          <button
                            onClick={() => removeFromWishlist(item.title)}
                            className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 shadow-lg"
                          >
                            Remove
                          </button>
                          <button
                            onClick={() => handleButtonBag(item)}
                            className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 shadow-lg"
                          >
                            {addedItems[item.title]
                              ? 'Go to Bag'
                              : 'Add to Bag'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 5 && (
              // <div className=" ">
              //   {savedAddresses ? (
              //     <div className="h-90 p-3 mt-3 border rounded-lg flex flex-col gap-4">
              //       <p>
              //         <strong>Name:</strong> {savedAddresses.name}
              //       </p>
              //       <p>
              //         <strong>Email:</strong> {savedAddresses.email}
              //       </p>
              //       <p>
              //         <strong>Phone:</strong> {savedAddresses.phoneNumber}
              //       </p>
              //       <p>
              //         <strong>Address:</strong> {savedAddresses.address}
              //       </p>
              //       <p>
              //         <strong>Locality:</strong> {savedAddresses.locality},
              //       </p>
              //       <p>
              //         <strong>City:</strong> {savedAddresses.city},
              //       </p>
              //       <p>
              //         <strong>state:</strong> {savedAddresses.state}
              //       </p>
              //       <p>
              //         <strong>Pincode:</strong> {savedAddresses.pinCode}
              //       </p>
              //     </div>
              //   ) : (
              //     <div className="w-full px-2 flex items-center justify-between">
              //       {/* Left - Empty Box Image */}
              //       <div className="w-1/2 flex justify-center">
              //         <img
              //           src="https://cdn-icons-png.flaticon.com/512/4083/4083877.png"
              //           alt="Empty Wishlist"
              //           className="w-40"
              //         />
              //       </div>

              //       {/* Right - Wishlist Message */}
              //       <div className="w-1/2 text-center">
              //         <h2 className="text-2xl font-semibold text-red-700">
              //           No Order Details Yet !
              //         </h2>
              //         <p className="text-gray-600 mb-4">
              //           Add Tanishq To Your Jewellery Wardrobe
              //         </p>
              //         <button className="px-6 py-2 bg-red-700 text-white rounded-md hover:bg-red-800">
              //           Continue Shopping
              //         </button>
              //       </div>
              //     </div>
              //   )}
              // </div>
              <div className="p-4">
              {loading ? (
                <p className="text-center text-lg font-semibold">Loading...</p>
              ) : orders.length > 0 ? (
                orders.map((order, index) => (
                  <div key={order._id} className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-4 md:p-6 mb-6">
                    <h2 className="text-xl font-bold text-red-700 text-center mb-4">Order #{index + 1}</h2>
                    
                    {/* User Info */}
                    <div className="border-b pb-4 mb-4">
                      <p><strong>Name:</strong> {order.address.name}</p>
                      <p><strong>Email:</strong> {order.address.email}</p>
                      <p><strong>Phone:</strong> {order.address.phoneNumber}</p>
                      <p><strong>Address:</strong> {order.address.address}, {order.address.locality}, {order.address.city}, {order.address.state} - {order.address.pinCode}</p>
                    </div>
        
                    {/* Order Items */}
                    <div className="space-y-4">
                      {order.cartItems.map((product) => (
                        <div key={product._id} className="flex flex-col md:flex-row items-center gap-4 border p-3 rounded-lg">
                          <img
                            src={product.titleimg}
                            alt={product.title}
                            className="w-20 h-20 object-cover rounded-md"
                          />
                          <div className="flex-1">
                            <p className="text-lg font-semibold">{product.title}</p>
                            <p className="text-red-600 font-bold">{product.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
        
                    {/* Total Amount */}
                    <div className="flex justify-between font-bold text-lg text-red-600 mt-4 border-t pt-4">
                      <p>Amount Payable:</p>
                      <p>₹ {order.totalPrice}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center text-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4083/4083877.png"
                    alt="No Order"
                    className="w-40"
                  />
                  <h2 className="text-2xl font-semibold text-red-700 mt-4">No Order Details Yet!</h2>
                  <p className="text-gray-600 mb-4">Add Tanishq To Your Jewellery Wardrobe</p>
                  <button className="px-6 py-2 bg-red-700 text-white rounded-md hover:bg-red-800">
                    Continue Shopping
                  </button>
                </div>
              )}
            </div>
            )}

            {activeTab === 6 && (
              <div className=" ">
                <div className="    w-full px-2">
                  <h2 className="text-2xl font-semibold mb-4 lg:text-left text-center">
                    Gift Cards
                  </h2>

                  {/* Gift Card Balance Section */}
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-red-100 p-4 flex items-center">
                      <h3 className="text-lg font-semibold text-red-700">
                        Gift Card Balance
                      </h3>
                    </div>

                    <div className="p-6 text-gray-700">
                      <p className="mb-4">
                        To View Your Card Balance, Enter The 16-Digit Card
                        Number And The 6-Digit Security Code (PIN).
                      </p>

                      <div className="flex gap-4">
                        {/* Gift Card Number Input */}
                        <input
                          type="text"
                          maxLength="16"
                          placeholder="Gift Card Number"
                          className="border p-2 w-full rounded-md"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                        />

                        {/* PIN Input */}
                        <div className="relative w-full">
                          <input
                            type={pinVisible ? 'text' : 'password'}
                            maxLength="6"
                            placeholder="6-Digit PIN"
                            className="border p-2 w-full rounded-md pr-10"
                            value={pin}
                            onChange={(e) => setPin(e.target.value)}
                          />
                          <button
                            className="absolute right-3 top-3 text-gray-500"
                            onClick={() => setPinVisible(!pinVisible)}
                          >
                            {pinVisible ? <FaEyeSlash /> : <FaEye />}
                          </button>
                        </div>
                      </div>

                      {/* Check Balance Button */}
                      <button className="mt-4 px-6 py-2 bg-red-700 text-white rounded-md hover:bg-red-800">
                        Check Balance
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WishList
