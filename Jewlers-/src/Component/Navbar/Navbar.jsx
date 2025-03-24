import React from 'react'
import {
  FaSearch,
  FaInstagram,
  FaMicrophone,
  FaGem,
  FaStore,
  FaHeart,
  FaUser,
  FaShoppingBag,
} from 'react-icons/fa'

const Header = () => {
  return (
    <nav className="flex items-center justify-between p-4 shadow-md">
      <div className="flex items-center space-x-2">
        <img src="" alt=" Logo" className="h-10 text-[#5b2724]" />
      </div>

      <div className="flex items-center border rounded-full px-4 py-2 w-full max-w-md gap-2">
        <FaSearch className="text-gray-600 mr-2" />
        <input
          type="text"
          placeholder="Search for Gold Jewellery, Diamond Jewellery and more..."
          className="outline-none w-full text-sm"
        />
        <FaInstagram className="text-gray-600 mx-2 cursor-pointer" />
        <FaMicrophone className="text-gray-600 cursor-pointer" />
      </div>

      <div className="flex items-center space-x-4 text-[#5b2724] px-3">
        <FaGem className="cursor-pointer size-7" />
        <FaStore className="cursor-pointer size-7" />
        <FaHeart className="cursor-pointer size-7" />
        <FaUser className="cursor-pointer size-7" />
        <div className="relative cursor-pointer">
          <FaShoppingBag className="size-7" />
          <span className="absolute -top-1 -right-1 bg-[#5b2724] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            0
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Header
