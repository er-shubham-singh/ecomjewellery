import { createContext, useState, useEffect } from 'react'

export const WishlistContext = createContext()

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([])

  // Load wishlist from localStorage when the component mounts
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    setWishlist(storedWishlist)
  }, [])

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
  }, [wishlist])

  const toggleWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const exists = prevWishlist.some((item) => item.title === product.title)
      if (exists) {
        return prevWishlist.filter((item) => item.title !== product.title)
      } else {
        return [...prevWishlist, product]
      }
    })
  }

  const removeFromWishlist = (title) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.title !== title)
    )
  }

  return (
    <WishlistContext.Provider
      value={{ wishlist, toggleWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  )
}