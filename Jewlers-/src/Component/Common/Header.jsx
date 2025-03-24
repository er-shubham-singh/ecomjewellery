import { useState, useEffect, useContext } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { menuItems } from './menuItem'
import axios from 'axios'
import { setToken } from '../../slices/authSlice'
import { useSelector, useDispatch } from 'react-redux'
import { CartContext } from '../Context/CartContext'
import { WishlistContext } from '../Context/WishlistContext'
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
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [userDropdown, setUserDropdown] = useState(false)
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const [products, setProducts] = useState([])
  const [categoryType, setCategoryType] = useState('')
  const dispatch = useDispatch()

  const { token } = useSelector((state) => state.auth)
  const { cartItems } = useContext(CartContext)
  const { wishlist } = useContext(WishlistContext)

  // Token
  useEffect(() => {
   
    const storedToken = localStorage.getItem('token')
    if (storedToken) {
      dispatch(setToken(storedToken))
    }
  }, [dispatch])

  const fetchData = async (searchTerm) => {
    if (!searchTerm.trim()) return

    setLoading(true)
    setError('')

    try {
      // Split search term by space to check for category & categoryType
      const parts = searchTerm.toLowerCase().split(' ')
      const backendUrl = import.meta.env.VITE_BACKEND_HOST_URL;
      if (!backendUrl) {
        setError('Backend URL is not defined.');
        setLoading(false);
        return;
      }
      let apiUrl = `${backendUrl}/api/search/${encodeURIComponent(
        parts[0]
      )}` // Category

      if (parts.length > 1) {
        apiUrl += `/${encodeURIComponent(parts.slice(1).join(' '))}` // Category Type
      }

      console.log('Fetching data from:', apiUrl)

      const response = await axios.get(apiUrl)
      console.log('API Response:', response.data)

      if (!response.data || response.data.length === 0) {
        throw new Error('No products found')
      }

      // Extract categoryName and categoryType if present
      const categoryName = response.data[0]?.category || parts[0]
      const categoryType =
        response.data[0]?.categoryType || parts.slice(1).join(' ')

      navigate('/all-jewellery', {
        state: {
          searchResults: response.data,
          categoryName,
          categoryType,
        },
      })
    } catch (err) {
      setError('No products found.')
      setProducts([])
      console.error('Error fetching products:', err)
    } finally {
      setLoading(false)
    }
  }

  // Fetch data when user presses Enter or clicks Search
  const handleSearch = (e) => {
    e.preventDefault()
    fetchData(query)
  }

  // Update categoryType from location state
  useEffect(() => {
    if (location.state?.categoryType) {
      setCategoryType(location.state.categoryType)
    }
  }, [location.state?.categoryType])

  // Fetch search results from location state
  useEffect(() => {
    if (location.state?.searchResults?.length > 0) {
      console.log('Using search results from location state')
      setProducts(location.state.searchResults)
    }
  }, [location.state?.searchResults])

  return (
    <>
      <header className="bg-gray-800 sticky top-0 z-10 text-white shadow-lg  pb-4">
        <nav className="p-4 bg-gray-800 text-white">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/">
            <div className="flex items-center">
                <img
                  src="/src/assets/logo/logo.png"
                  alt="Logo"
                  className="h-12 w-70 lg:w-30 "
                />
              </div>
            </Link>

            <div className=" w-full mt-4 flex justify-center md:mt-0 md:w-auto">
              <div className="hidden md:flex items-center border rounded-full px-4 py-2 w-full md:w-[400px] lg:w-[500px] gap-2 bg-white text-black">
                <FaSearch
                  className="text-gray-600 cursor-pointer"
                  onClick={handleSearch}
                />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch(e)}
                  placeholder="Search for Gold Jewellery, Diamond Jewellery and more..."
                  className="outline-none w-full text-sm"
                />
                <FaInstagram className="text-gray-600 cursor-pointer" />
                <FaMicrophone className="text-gray-600 cursor-pointer" />
              </div>
            </div>
            {/* Icons Section */}
            <div className="flex items-center space-x-4 px-3 g-gray-800">
              {/* <Link to="/diamondsection"><FaGem className="cursor-pointer size-7" /></Link> */}
              <Link to="/store">
                <FaStore className="cursor-pointer size-7" />
              </Link>
              <Link to="/wishlist" className="relative">
                <FaHeart className="cursor-pointer size-7" />
                {wishlist?.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              {token === null ? (
                <div
                  className="relative"
                  onMouseEnter={() => setUserDropdown(true)}
                  onMouseLeave={() => setUserDropdown(false)}
                >
                  <FaUser className="cursor-pointer size-7" />
                  {userDropdown && (
                    <div className="absolute right-0 top-full w-40 bg-white text-gray-800 shadow-lg rounded-lg">
                      <Link
                        to="/login/sihnup"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Log in / Sign up
                      </Link>
                      <Link
                        to="/contactpage"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Contact Us
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <div
                  className="relative"
                  onMouseEnter={() => setUserDropdown(true)}
                  onMouseLeave={() => setUserDropdown(false)}
                >
                  <FaUser className="cursor-pointer size-7" />
                  {userDropdown && (
                    <div className="absolute right-0 top-full w-40 bg-white text-gray-800 shadow-lg rounded-lg">
                      <button
                        onClick={() => {
                          localStorage.removeItem('token')
                          dispatch(setToken(null))
                          navigate('/login/sihnup')
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Log Out
                      </button>
                      <Link
                        to="/contactpage"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Contact Us
                      </Link>
                    </div>
                  )}
                </div>
              )}

              <Link to="/productbag">
                <div className="relative cursor-pointer">
                  <FaShoppingBag className="size-7" />
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                    {cartItems.length}
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Search Box - Full Width Below Icons in Mobile View */}

          <div className="w-full mt-4 md:hidden flex justify-center">
            <div className="flex items-center border rounded-full px-4 py-2 w-full gap-2 bg-white text-black">
              <FaSearch
                className="text-gray-600 cursor-pointer"
                onClick={handleSearch}
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch(e)}
                placeholder="Search for Gold Jewellery, Diamond Jewellery and more..."
                className="outline-none w-full text-sm"
              />
              <FaInstagram className="text-gray-600 cursor-pointer" />
              <FaMicrophone className="text-gray-600 cursor-pointer" />
            </div>
          </div>
        </nav>

        <div className="container mx-auto flex justify-end pr-4 items-center">
          <h1 className="text-2xl font-bold absolute left-4 p-4">Brand</h1>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex  space-x-8 relative">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative group p-4"
                onMouseEnter={() => setOpenDropdown(index)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.link}
                  className="flex items-center gap-2  hover:text-yellow-400 transition-all duration-300 relative"
                >
                  <img
                    src={item.imageIcon}
                    alt={item.name}
                    className="w-5 h-5 text-white"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />

                  <span>{item.name}</span>

                  {/* Center-out Animated Underline */}
                  <span className="absolute left-0 bottom-0 h-[2px] bg-yellow-400 w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                </Link>

                {/* Dropdown */}
                {openDropdown === index && item.dropdown.length > 0 && (
                  <div
                    className="z-10 fixed left-1/2 top-[129px] transform -translate-x-1/2 w-[1200px] bg-white text-gray-900 rounded-lg shadow-lg"
                    onMouseEnter={() => setOpenDropdown(index)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <div className="grid grid-cols-3 justify-center items-center gap-4 p-4">
                      {item.dropdown.map((option, i) => (
                        <Link
                          key={i}
                          to={option.link}
                          className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-transparent 
                 transition-all duration-300 ease-in-out group 
                 hover:bg-yellow-500/20 hover:border-yellow-500 
                 hover:shadow-[0_4px_15px_rgba(255,215,0,0.5)] hover:scale-95"
                        >
                          <div
                            className="w-8 h-8 flex justify-center items-center rounded-full bg-transparent 
                      transition-all duration-300 ease-in-out group-hover:bg-yellow-400/30"
                          >
                            <img
                              src={option.imageIcon}
                              alt={option.name}
                              className="w-8 h-8 object-cover rounded-full transition-all duration-300 ease-in-out 
                     group-hover:scale-120 group-hover:brightness-110 group-hover:contrast-125"
                            />
                          </div>
                          <span className="text-black  font-medium group-hover:text-black">
                            {option.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden " onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={28} />}
          </button>
        </div>
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-3/4 bg-gray-800 text-white 
                 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} 
                 transition-transform duration-300 shadow-lg 
                 overflow-y-auto max-h-screen`}
        >
          <button
            className="absolute top-4 right-4"
            onClick={() => setMenuOpen(false)}
          >
            <X size={28} />
          </button>

          <nav className="mt-12 p-4">
            {menuItems.map((item, index) => (
              <div key={index} className="mb-4">
                <button
                  className="w-full text-left font-semibold py-2 flex items-center space-x-2"
                  onClick={() =>
                    setOpenDropdown(openDropdown === index ? null : index)
                  }
                >
                  <img
                    src={item.imageIcon}
                    alt={item.name}
                    className=" w-5 h-5 text-white"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                  <span>{item.name}</span>
                </button>
                {openDropdown === index && item.dropdown.length > 0 && (
                  <div className="bg-gray-700 p-2 rounded">
                    {item.dropdown.map((option, i) => (
                      <Link
                        key={i}
                        to={option.link}
                        className="flex items-center space-x-2 px-4 py-2 text-white hover:bg-gray-600 rounded"
                        onClick={() => setMenuOpen(false)} // Close menu on click
                      >
                        <img
                          src={option.imageIcon}
                          alt={option.name}
                          className="w-4 h-4"
                        />
                        <span>{option.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
