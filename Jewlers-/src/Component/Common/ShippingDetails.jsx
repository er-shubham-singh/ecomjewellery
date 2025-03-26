import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ShippingDetails = () => {
  const navigate = useNavigate()

  const user = useSelector((state) => state.profile.user)
  const addressShow = useState(true)

  console.log('Printing User in ShoppingDetails', user)
  const userId = user._id
  const userEmail = user.email

  const country = 'IN'
  const code = '+91'

  const [formData, setFormData] = useState({
    name: '',
    email: userEmail,
    phoneNumber: '',
    pinCode: '',
    city: '',
    state: '',
    address: '',
    locality: '',
    id: userId,
  })

  const {
    name,
    email,
    phoneNumber,
    pinCode,
    city,
    state,
    address,
    locality,
    id,
  } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    console.log('Printing From Data', formData)

    const payload = { ...formData }
    console.log('Printing Payload', payload)

    try {
      const backendUrl = import.meta.env.VITE_BACKEND_HOST_URL
      if (!backendUrl) {
        setError('Backend URL is not defined.')
        setLoading(false)
        return
      }
      const response = await fetch(`${backendUrl}/api/auth/address`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      console.log('response', response)

      if (!response.ok) throw new Error('Failed to save address')

      const data = await response.json()
      console.log('address Save successful:', data)
      console.log('Printing User Data', data)
      navigate('/OrderDelever')
    } catch (error) {
      console.error('Error sending address data:', error)
    }
  }

  return addressShow ? (
    <div className="fixed inset-0  bg-opacity-40 backdrop-blur-md flex justify-center items-center p-4 z-9999 ">
      <div className="bg-white w-full sm:max-w-md md:max-w-3xl p-4 md:p-6 rounded-lg shadow-lg overflow-y-auto max-h-[90vh]">
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-lg md:text-xl font-semibold text-red-800">
            Add Shipping Details
          </h2>
          <button
            className="text-gray-500 text-2xl cursor-pointer"
            onClick={() => navigate('/orderDelever')}
          >
            X
          </button>
        </div>

        <form
          onSubmit={handleOnSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4"
        >
          <div className="md:col-span-2">
            <h3 className="font-semibold text-lg">Contact Details</h3>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Name *"
            className="border p-2 rounded w-full"
            value={name}
            onChange={handleOnChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            className="border p-2 rounded w-full bg-gray-100"
            value={email}
            readOnly
          />
          <div className="flex space-x-2">
            <select
              name="code"
              className="border p-2 rounded w-1/3"
              value={code}
              onChange={handleOnChange}
            >
              <option value="+91">+91</option>
              <option value="+1">+1</option>
            </select>
            <input
              type="number"
              name="phoneNumber"
              placeholder="Contact Number *"
              className="border p-2 rounded w-2/3"
              value={phoneNumber}
              onChange={handleOnChange}
            />
          </div>

          <div className="md:col-span-2 mt-4">
            <h3 className="font-semibold text-lg">Address Details</h3>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xl">🇮🇳</span>
            <input
              type="text"
              name="country"
              className="border p-2 rounded w-full bg-gray-100"
              value={country}
              readOnly
            />
          </div>
          <input
            type="number"
            name="pinCode"
            placeholder="Pincode *"
            className="border p-2 rounded w-full"
            value={pinCode}
            onChange={handleOnChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City *"
            className="border p-2 rounded w-full"
            value={city}
            onChange={handleOnChange}
          />
          <input
            type="text"
            name="state"
            placeholder="State *"
            className="border p-2 rounded w-full"
            value={state}
            onChange={handleOnChange}
          />
          <textarea
            name="address"
            placeholder="Address (House No., Building, Street, Area) *"
            className="border p-2 rounded w-full h-20 resize-none"
            value={address}
            onChange={handleOnChange}
            maxLength={210}
          />
          <input
            type="text"
            name="locality"
            placeholder="Locality / Town"
            className="border p-2 rounded w-full"
            value={locality}
            onChange={handleOnChange}
          />

          <div className="md:col-span-2 flex flex-col md:flex-row justify-between mt-4 gap-2">
            <button className="px-6 py-2 border border-gray-400 rounded-lg cursor-pointer w-full md:w-auto" onClick={() => navigate('/orderDelever')}>

              Cancel 
            </button>
            <button className="px-6 py-2 bg-red-600 text-white rounded-lg cursor-pointer w-full md:w-auto">
              Use This Address
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <></>
  )
}

export default ShippingDetails