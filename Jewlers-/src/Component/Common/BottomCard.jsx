import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function BottomCard({ product }) {
  const navigate = useNavigate()
  const { addToCart } = useContext(CartContext)
  const [isAdded, setIsAdded] = useState(false)

  const handleButtonClick = () => {
    if (!isAdded) {
      addToCart(product)
      toast.success('Product added successfully!', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light',
      })
      setIsAdded(true)
    } else {
      navigate('/productbag')
    }
  }

  return (
    <div>
      <div className="bottom-3 lg:right-[25%] z-10 fixed bg-white lg:w-1/2 mx-auto rounded-2xl shadow-2xl">
        <div className="flex justify-evenly py-1 items-center">
          <div className="lg:block hidden">
            <p className="text-md px-5 py-3">{product.price}</p>
          </div>
          <div className="w-3/6 px-3 lg:block hidden">
            <select className="w-full cursor-pointer border-none text-lg px-3 py-3 rounded-2xl">
              <option value="">{`Weight: ${product.weight}`}</option>
            </select>
          </div>
          <div>
            <button
              onClick={handleButtonClick}
              className={`px-5 py-3 text-white rounded-lg ${
                isAdded ? 'bg-green-600' : 'bg-amber-700'
              }`}
            >
              {isAdded ? 'Go To Bag' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  )
}

export default BottomCard