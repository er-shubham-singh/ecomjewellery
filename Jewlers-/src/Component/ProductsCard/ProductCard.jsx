

import React, { useContext } from 'react'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { WishlistContext } from '../Context/WishlistContext'

const ProductCard = ({ titleimg, hoverimg, title, price }) => {
  const navigate = useNavigate()
  const { wishlist, toggleWishlist } = useContext(WishlistContext)

  const handleImageClick = () => {
    navigate('/addcart', { state: { title, price, titleimg, hoverimg } })
  }

  const handleWishlist = (e) => {
    e.stopPropagation()
    if (toggleWishlist) {
      toggleWishlist({ title, price, titleimg })
    } else {
      console.error('toggleWishlist function is undefined')
    }
  }

  const isInWishlist = wishlist.some((item) => item.title === title)

  return (
    <div className="p-2 max-w-[450px] mx-auto">
      <div
        className="relative w-full h-[320px] sm:h-[400px] md:h-[450px] lg:h-[400px] overflow-hidden group cursor-pointer"
        onClick={handleImageClick}
      >
        <img
          src={titleimg}
          alt="Product Image"
          className="rounded-xl w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:opacity-0  "
        />

        <img
          src={hoverimg}
          alt="Hover Image"
          className="absolute top-0 left-[-100%] w-full h-full object-cover rounded-xl transition-all duration-700 ease-in-out opacity-0 group-hover:left-0  p-1 group-hover:opacity-100  group-hover:border-2 border-gray-300"
        />

        <button className="absolute top-2 right-2" onClick={handleWishlist}>
          {isInWishlist ? (
            <FaHeart className="size-6 cursor-pointer text-red-600" />
          ) : (
            <FaRegHeart className="size-6 cursor-pointer text-gray-600" />
          )}
        </button>
      </div>

      <div className="p-2">
        <h3 className="text-lg text-black font-bold">{title}</h3>
        <p className="text-xl font-bold text-[#996515]">{price}</p>
      </div>
    </div>
  )
}

export default ProductCard
