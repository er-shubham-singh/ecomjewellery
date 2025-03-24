import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
// import exchange from '../assets/image/exchange.png'
// import purity from '../assets/image/purity.png'
// import replacements from '../assets/image/replacements.png'
// import maintan from '../assets/image/maintan.png'
import { FaChevronDown } from 'react-icons/fa'
import { GiMaterialsScience } from 'react-icons/gi'
import { IoDiamondOutline } from 'react-icons/io5'
import { MdDescription } from 'react-icons/md'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { useRef } from 'react'
import BottomCard from './BottomCard'
import { useLocation } from 'react-router-dom'

const products = [
  {
    id: 1,
    name: 'Charming Paisley Pendant',
    price: '₹ 32,944',
    image:
      'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwada93044/images/hi-res/511920FAOAA00_2.jpg?sw=640&sh=640',
    image2:
      'https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwafcff930/images/hi-res/50F4I1FALAA32_3.jpg',
  },
  {
    id: 2,
    name: 'Royal Heritage Gold Finger Ring',
    price: '₹ 33,046',
    image:
      'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwada93044/images/hi-res/511920FAOAA00_2.jpg?sw=640&sh=640',
    image2:
      'https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwafcff930/images/hi-res/50F4I1FALAA32_3.jpg',
  },
  {
    id: 3,
    name: 'Captivating Grace Drop Earrings',
    price: '₹ 49,593',
    image:
      'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwada93044/images/hi-res/511920FAOAA00_2.jpg?sw=640&sh=640',
  },
  {
    id: 4,
    name: 'Unique Allure Pendant',
    price: '₹ 29,006',
    image:
      'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwada93044/images/hi-res/511920FAOAA00_2.jpg?sw=640&sh=640',
    image2:
      'https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwafcff930/images/hi-res/50F4I1FALAA32_3.jpg',
  },
  {
    id: 5,
    name: 'Classic Gold Necklace',
    price: '₹ 52,399',
    image:
      'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwada93044/images/hi-res/511920FAOAA00_2.jpg?sw=640&sh=640',
    image2:
      'https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwafcff930/images/hi-res/50F4I1FALAA32_3.jpg',
  },
]

function AddCart() {
  const swiperRef = useRef(null)
  const location = useLocation()
  const product = location.state

  const [openSection, setOpenSection] = useState('metal')

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? '' : section)
  }
  const [pincode, setPincode] = useState('')
  const [country, setCountry] = useState('IN')
  return (
    <>
      <div className="bg-[#f5f5dc] w-full">
        <div className="max-w-[1200px] lg:mx-auto mx-3  pb-10 pt-10">
          <div className="bg-[#f5f5dc] w-full">
            <div className="bg-[#f5f5dc] w-full">
              <div className="max-w-[1200px] lg:mx-auto mx-3 pb-10 pt-10">
                <div className="text-center">
                  <h1 className="text-[#996515] md:text-[2rem] font-bold text-[1rem] leading-[3rem]">
                    {product?.title}
                  </h1>
                  <p className="md:text-[2rem] font-bold text-[1rem]">
                    {product?.price}
                  </p>
                  <p className="text-sm">Incl. taxes and charges</p>
                </div>

                <div className="md:grid md:grid-cols-2 gap-10 pt-8">
                  <div className="justify-items-center">
                    <img src={product?.titleimg} alt="Product" />
                  </div>
                  <div className="justify-items-center md:pt-0 pt-5">
                    <img src={product?.hoverimg} alt="Product Hover" />
                  </div>
                </div>

                {/* Country and Pincode Inputs */}
                <div className="grid md:grid-cols-2 items-center gap-4 p-4 w-full">
                  <div className="flex items-center w-full border-2 px-3 border-white">
                    <select
                      className="w-full h-[3rem]"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    >
                      <option value="IN">India</option>
                      <option value="US">USA</option>
                      <option value="UK">UK</option>
                    </select>
                  </div>
                  <div className="flex items-center border-white border-2 px-3">
                    <input
                      type="text"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      placeholder="Enter Pincode"
                      className="outline-none bg-transparent w-full h-[3rem]"
                    />
                    <div>
                      <p className="text-[0.6rem]">UNSERVICEABLE</p>
                      <p className="text-[0.5rem]">Try Another Code</p>
                    </div>
                  </div>
                </div>

                <div className="pt-15 text-center">
                  <h2 className="text-[#996515] md:text-[2rem] font-bold text-[1rem] leading-[3rem]">
                    Jewellery Details
                  </h2>
                </div>

                {/* Buttons for Details Sections */}
                <div className="pt-5 text-center rounded-4xl border-amber-950">
                  <button
                    className={`cursor-pointer ${
                      openSection === 'Product Details'
                        ? 'bg-amber-800 text-white px-5 py-3 rounded-4xl'
                        : 'px-5 py-3 rounded-4xl'
                    }`}
                    onClick={() => setOpenSection('Product Details')}
                  >
                    Product Details
                  </button>
                  <button
                    className={`cursor-pointer ${
                      openSection === 'Price Breakup'
                        ? 'bg-amber-800 text-white px-5 py-3 rounded-4xl'
                        : 'px-5 py-3 rounded-4xl'
                    }`}
                    onClick={() => setOpenSection('Price Breakup')}
                  >
                    Price Breakup
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <div className=" md:grid md:grid-cols-2 gap-10 md:pt-15 pt-8">
            <div className="justify-items-center">
              <img
                src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw994edc2d/images/hi-res/51D3D1DMNABA00_1.jpg"
                alt=""
              />
            </div>
            <div className="justify-items-center md:pt-0  pt-5">
              <img
                src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw36a3e793/images/hi-res/51D3D1DMNABA00_2.jpg"
                alt=""
                className=""
              />
            </div>
          </div> */}
          {/* <div className="  flex justify-center items-center gap-4 pt-10 ">
            <p className="text-[1.2rem] font-bold">22 karat </p>
            <p className="text-[1.2rem] font-bold">5.103 gm</p>
          </div> */}
          {/* <div className=" pt-10 w-full">
            <div>
              <p>Delivery Details</p>
            </div>
            <div className="grid md:grid-cols-2 items-center gap-4 p-4 w-full">
              <div className="flex items-center w-full  border-2 px-3 border-white ">
                <select
                  name=""
                  id=""
                  className="w-full h-[3rem] "
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="IN">India</option>
                  <option value="US">USA</option>
                  <option value="UK">UK</option>
                </select>
              </div>
              <div className="flex items-center border-white border-2 px-3 ">
                <input
                  type="text"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="Enter Pincode"
                  className="outline-none bg-transparent w-2/1 h-[3rem] "
                />
                <div className="">
                  <p className="text-[0.6rem]">UNSERVICEABLE </p>
                  <p className="text-[0.5rem]"> Try Another Code</p>
                </div>
              </div>
            </div>
          </div> */}
          <div>
            {/* <div className="pt-15 text-center ">
              <h2 className="text-[#996515] md:text-[2rem] font-bold  text-[1rem] leading-[3rem]">
                Jewellery Details
              </h2>
            </div> */}
            {/* <div className="pt-5 text-center rounded-4xl border-amber-950">
              <button
                className={` cursor-pointer ${
                  product === 'Product Details'
                    ? 'bg-amber-800 text-white px-5  py-3  rounded-4xl'
                    : 'px-5   py-3  rounded-4xl'
                }`}
                onClick={() => setProduct('Price Breakup')}
              >
                Product Details
              </button>
              <button
                className={` cursor-pointer ${
                  product === 'Price Breakup'
                    ? 'bg-amber-800 text-white px-5  py-3  rounded-4xl'
                    : ' px-5  py-3  rounded-4xl'
                }`}
                onClick={() => setProduct('Product Details ')}
              >
                Price Breakup
              </button>
            </div> */}
            <div className="md:flex gap-5 pt-15 ">
              {product === 'Price Breakup' ? (
                <div className="bg-white md:px-4 md:py-4 rounded-2xl md:w-[60%] h-[50%] justify-center items-center bg-cover ">
                  <table className="w-full  text-left  ">
                    <thead>
                      <tr className="border-b text-gray-500 ">
                        <th className="py-2">PRODUCT DETAILS</th>
                        <th className="py-2">RATE</th>
                        <th className="py-2">WEIGHT</th>
                        <th className="py-2">DISCOUNT</th>
                        <th className="py-2">VALUE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 flex items-center gap-2">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/63/Gold_coin_icon.png"
                            alt="Gold"
                            className="w-6 h-6"
                          />
                          <div>
                            <p className="">Yellow Gold</p>
                            <p className="text-sm text-gray-500">22KT</p>
                          </div>
                        </td>
                        <td className="py-3">₹ 8280/g</td>
                        <td className="py-3">5.103g</td>
                        <td className="py-3">-</td>
                        <td className="py-3 font-semibold">₹ 42252.84</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-gray-600">Making Charges</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td className="font-semibold">₹ 6760.45</td>
                      </tr>

                      <tr>
                        <td className="py-2 text-gray-600">Sub Total</td>
                        <td>-</td>
                        <td>
                          5.103g
                          <span className="text-sm text-gray-500">
                            Gross Wt.
                          </span>
                        </td>
                        <td>-</td>
                        <td className="font-semibold">₹ 49013.29</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-gray-600">GST</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td className="font-semibold">₹ 1470.4</td>
                      </tr>
                    </tbody>
                  </table>
                  <hr />
                  <div className="flex justify-between mt-4 text-lg font-semibold ">
                    <span>Grand Total</span>
                    <span className="text-2xl">₹ 50484</span>
                  </div>
                </div>
              ) : (
                <div className="  bg-white px-4 py-4 rounded-2xl md:w-[60%] h-[50%] ">
                  <div
                    className="border-b py-3 cursor-pointer flex items-center justify-between"
                    onClick={() => toggleSection('metal')}
                  >
                    <span className="flex items-center gap-2 text-lg font-semibold">
                      <GiMaterialsScience className="text-amber-700" /> METAL
                      DETAILS
                    </span>
                    <FaChevronDown
                      className={`transition-transform duration-1000 ${
                        openSection === 'metal' ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  {openSection === 'metal' && (
                    <div className="p-4 grid grid-cols-2 gap-4 text-gray-700   items-center text-center">
                      <div>
                        <p className="text-lg font-semibold">22K</p>
                        <p className="text-sm text-gray-500">Karatage</p>
                      </div>
                      <div>
                        <p className="text-lg font-semibold">Yellow</p>
                        <p className="text-sm text-gray-500">Material Colour</p>
                      </div>
                      <div>
                        <p className="text-lg font-semibold">Gold</p>
                        <p className="text-sm text-gray-500">Metal</p>
                      </div>
                      <div>
                        <p className="text-lg font-semibold">3 cm</p>
                        <p className="text-sm text-gray-500">Earring Height</p>
                      </div>
                      <div>
                        <p className="text-lg font-semibold">5.013g</p>
                        <p className="text-sm text-gray-500">Gross Weight</p>
                      </div>
                      <div>
                        <p className="text-lg font-semibold">1.1 cm</p>
                        <p className="text-sm text-gray-500">Earring Width</p>
                      </div>
                    </div>
                  )}

                  <div
                    className="border-b py-3 cursor-pointer flex items-center justify-between"
                    onClick={() => toggleSection('general')}
                  >
                    <span className="flex items-center gap-2 text-lg font-semibold">
                      <IoDiamondOutline className="text-amber-700" /> GENERAL
                      DETAILS
                    </span>
                    <FaChevronDown
                      className={`transition-transform duration-300 ${
                        openSection === 'general' ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  {openSection === 'general' && (
                    <div className="p-4 grid grid-cols-2 gap-4 text-gray-700 items-center text-center">
                      <div>
                        <p className="text-lg font-semibold">Gold Jewellery</p>
                        <p className="text-sm text-gray-500">Jewellery Type</p>
                      </div>
                      <div>
                        <p className="text-lg font-semibold">Drops</p>
                        <p className="text-sm text-gray-500">Product Type</p>
                      </div>
                      <div>
                        <p className="text-lg font-semibold">Tanishq</p>
                        <p className="text-sm text-gray-500">Brand</p>
                      </div>
                      <div>
                        <p className="text-lg font-semibold">Bestsellers</p>
                        <p className="text-sm text-gray-500">Collection</p>
                      </div>
                      <div>
                        <p className="text-lg font-semibold">Women</p>
                        <p className="text-sm text-gray-500">Gender</p>
                      </div>
                      <div>
                        <p className="text-lg font-semibold">Casual Wear</p>
                        <p className="text-sm text-gray-500">Occasion</p>
                      </div>
                    </div>
                  )}

                  <div
                    className="py-3 cursor-pointer flex items-center justify-between"
                    onClick={() => toggleSection('description')}
                  >
                    <span className="flex items-center gap-2 text-lg font-semibold">
                      <MdDescription className="text-amber-700" /> DESCRIPTION
                    </span>
                    <FaChevronDown
                      className={`transition-transform  duration-300 ${
                        openSection === 'description' ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  {openSection === 'description' && (
                    <div className=" pt-2 ">
                      <div>
                        <p className="text-sm pb-3">
                          Classy, radiant, and effortlessly stylish, these
                          partly sandblasted 22 karat yellow gold drop earrings
                          sway with grace.
                        </p>
                        <p className="text-sm ">
                          Exemplifying sophistication and enduring allure, these
                          gold drop earrings emanate a timeless elegance that
                          speaks volumes. Radiating charm, it weaves a spell of
                          captivating grace.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="  justify-center items-center text-center md:pt-0 pt-10 md:w-1/2">
                <p>SKU ID : 51d3d1dmnaba002ea000128</p>
                <img
                  src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw994edc2d/images/hi-res/51D3D1DMNABA00_1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="pt-15">
            <div className="text-center">
              <h4 className="text-[#996515] md:text-[2rem] font-bold  text-[1rem] md:leading-[3rem]">
                The Tanishq Assurance
              </h4>
              <p className="leading-[1.6rem] md:text-[1rem] text-[0.9rem]">
                Crafted by experts, cherished by you.
              </p>
            </div>
            <div className=" pt-10 grid md:grid-cols-4 grid-cols-2 items-center  gap-5 justify-around h-full md:mx-28 mx-5 ">
              <div className="flex flex-col items-center justify-between ">
                <img
                  src=""
                  alt=""
                  className="w-[60%]
                           h-[50%] object-contain "
                />
                <div className="text-[1.2rem] pt-3 text-center">
                  100% Exchange Value on Precious Stones
                </div>
              </div>
              <div className="flex flex-col items-center justify-between ">
                <img
                  src=""
                  alt=""
                  className="w-[60%]
                           h-[50%] object-contain "
                />
                <div className="text-[1.2rem] pt-3 text-center">
                  The Purity Guarantee
                </div>
              </div>
              <div className="flex flex-col items-center justify-between">
                <img
                  src=""
                  alt=""
                  className="w-[60%]
                           h-[50%] object-contain"
                />
                <div className="text-[1.2rem] pt-3 text-center">
                  Complete Transparency and Trust
                </div>
              </div>
              <div className="flex flex-col items-center justify-between">
                <img
                  src=""
                  alt=""
                  className="w-[50%]
                           h-[50%] object-contain"
                />
                <p className="text-[1.2rem] pt-3">Lifetime Maintenance</p>
              </div>
            </div>
          </div>
          <div className="pt-10">
            <div className="flex justify-between items-center">
              <h4 className="text-[#996515] md:text-[2rem] font-bold  text-[1rem] leading-[3rem]">
                You may also like
              </h4>
              <div className="flex gap-5">
                <button
                  className="md:px-3 text-center md:py-[0.1rem] text-2xl  md:border-2 rounded-full"
                  onClick={() => swiperRef.current?.slidePrev()}
                >
                  ←
                </button>
                <button
                  className="md:px-3 text-center md:py-[0.1rem]  md:border-2 text-2xl rounded-full"
                  onClick={() => swiperRef.current?.slideNext()}
                >
                  →
                </button>
              </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 py-10 relative">
              <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 4 },
                }}
              >
                {products.map((product) => (
                  <SwiperSlide key={product.id}>
                    <Link>
                      <div className="relative w-full h-[320px] sm:h-[400px] md:h-[450px] lg:h-[400px] overflow-hidden group">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="hover:boarder-white rounded-xl w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                        />
                        <img
                          src={product.image2}
                          alt="Hover Image"
                          className="absolute top-0 left-0 rounded-xl w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        />
                      </div>
                      <h3 className="text-lg font-semibold mt-2">
                        {product.name}
                      </h3>
                      <p className="text-xl font-bold ">{product.price}</p>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {/* Pass product to BootomCard */}
      {product && <BottomCard product={product} />}
    </>
  )
}

export default AddCart