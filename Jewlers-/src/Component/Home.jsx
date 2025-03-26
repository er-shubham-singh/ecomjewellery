import React, { useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import rivaah from '../assets/image/rivaah.png'
import rivaahwj from '../assets/image/rivaahwj.png'
import soulmate from '../assets/image/soulmate.png'
import undbond from '../assets/image/unbound.png'
import womens from '../assets/image/womens.png'
import imgone from '../assets/image/image.png'
import imgtwo from '../assets/image/imgtwo.png'
import imgthree from '../assets/image/imgthree.png'
import imgfour from '../assets/image/imgfour.png'
import imgfive from '../assets/image/imgfive.png'
import imgsix from '../assets/image/imgsix.png'
import mangal from '../assets/image/bangle.jpg'
import bound from '../assets/image/unbound(1).jpg'
import banner from '../assets/image/banner.png'
import mangalsutra from '../assets/image/mangalsutra.png'
import miabtanishq from '../assets/image/miabytanishq.png'
import 'swiper/css/autoplay' // Ensure autoplay styles are loaded
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules' // Import Autoplay module
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import ringe6 from '../assets/ringimg6.jpg'
import earring from '../assets/earringsimg1.jpg'
import pendant from '../assets/image/pendants.png'
import mangals from '../assets/image/mangalsut.png'
import chain from '../assets/image/chains.png'
import nose from '../assets/image/nosepins.png'
import Ringes from '../assets/image/rings.png'
import necles from '../assets/image/necklace.png'
import brec from '../assets/image/bracelet.webp'
const Sparkle = [
  { id: 1, image: imgone },
  { id: 2, image: imgtwo },
  { id: 3, image: imgthree },
  { id: 4, image: imgfour },
  { id: 5, image: imgfive },
  { id: 6, image: imgsix },
]

const cards = [
  { id: 1, image: rivaah },
  { id: 2, image: rivaahwj },
  { id: 3, image: soulmate },
  { id: 4, image: womens },
  { id: 5, image: undbond },
]

const Category = [
  {
    id: 1,
    image: ringe6,
    icon: faArrowRight,
    text: 'Finger Rings',
    link: '/all-jewellery-finger-rings',
  },
  {
    id: 2,
    image: earring,
    icon: faArrowRight,
    text: 'Earings',
    link: '/alljewelery-earings',
  },
  {
    id: 3,
    image: pendant,
    icon: faArrowRight,
    text: 'Pendants',
    link: '/all-jewellery-pendants',
  },
  {
    id: 4,
    image: mangals,
    icon: faArrowRight,
    text: 'Mangalsutras',
    link: '/all-jewellery-mangalsutras',
  },
  {
    id: 5,
    image: chain,
    icon: faArrowRight,
    text: 'Chains',
    link: '/all-jewellery-chains',
  },
]

const Categorytwo = [
  {
    id: 1,
    image: mangal,
    icon: faArrowRight,
    text: 'Bangles',
    link: '/diamond-bangles',
  },
  {
    id: 2,
    image: brec,
    icon: faArrowRight,
    text: 'Braclects',
    link: '/diamond-bracelets',
  },
  {
    id: 3,
    image: necles,
    icon: faArrowRight,
    text: 'Necklaces',
    link: '/diamond-necklace',
  },
  {
    id: 4,
    image: nose,
    icon: faArrowRight,
    text: ' Nose pins',
    link: '/diamond-nose-pins',
  },
  {
    id: 5,
    image: Ringes,
    icon: faArrowRight,
    text: 'Casual Ring',
    link: '/rings-casual-rings',
  },
]

const Collections = [
  {
    id: 1,
    image: pendant,
    icon: faArrowRight,
    text: 'Pendants',
    link: '/all-jewellery-pendants',
  },
  {
    id: 2,
    image: mangal,
    icon: faArrowRight,
    text: 'Bangles',
    link: '/diamond-bangles',
  },
  {
    id: 3,
    image: chain,
    icon: faArrowRight,
    text: 'Chains',
    link: '/all-jewellery-chains',
  },
]

const New = [
  { id: 1, image: mangalsutra, link: '/all-jewellery-mangalsutras' },
  { id: 2, image: brec, link: '/diamond-bracelets' },
  { id: 3, image: Ringes, link: '/rings-casual-rings' },
]

// Fetch data from backend

export default function Home() {
  const [products, setProducts] = useState([])
  const [goldProducts, setGoldProducts] = useState([])
  const [jewelryProducts, setJewelryProducts] = useState([])

  // Fetch data from backend
  useEffect(() => {
    // Fetch All Jewellery Products
    const backendUrl = import.meta.env.VITE_BACKEND_HOST_URL;
    if (!backendUrl) {
      setError('Backend URL is not defined.');
      setLoading(false);
      return;
    }
    axios
      .get(`${backendUrl}/api/products/All Jewellery`)
      .then((response) => setJewelryProducts(response.data))
      .catch((error) =>
        console.error('Error fetching diamond products:', error)
      )

    // Fetch Diamond Products
    axios
      .get(`${backendUrl}/api/products/diamond`)
      .then((response) => setProducts(response.data))
      .catch((error) =>
        console.error('Error fetching diamond products:', error)
      )

    // Fetch Gold Products
    axios
      .get(`${backendUrl}/api/products/gold`)
      .then((response) => setGoldProducts(response.data))
      .catch((error) => console.error('Error fetching gold products:', error))
  }, [])
  return (
    <div className="bg-[#f5f5dc]">
      <div className=" flex  w-full  no-scrollbar relative pb-5  mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={2}
          navigation={true}
          autoplay={{
            delay: 3000, // 3 seconds per slide
            disableOnInteraction: false, // Allows manual interaction without stopping autoplay
          }}
          modules={[Navigation, Autoplay]} // Add Autoplay module
          className="mySwiper"
        >
          {cards.map((item, index) => (
            <SwiperSlide key={index}>
              <Link to={item.link}>
                <img src={item.image} alt="image" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <section className="max-w-[1200px] lg:mx-auto mx-3 pb-10">
        <div className="justify-center text-center pt-8 pb-8">
          <h1 className="text-[#996515] md:text-[2rem] font-bold text-[1rem] leading-[3rem]">
            Women's Day Sparkle
          </h1>
          <p className="leading-[1.6rem] md:text-[1rem] text-[0.9rem] pt-4">
            Dazzling jewellery at prices made for you!
          </p>
        </div>
        <hr />

        <div className="pt-15">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            navigation={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              350: { slidesPerView: 1, spaceBetween: 0 }, // Below 350px → 1 slide
              500: { slidesPerView: 2, spaceBetween: 0 }, // Below 500px → 2 slides
              640: { slidesPerView: 3, spaceBetween: 0 },
              1024: { slidesPerView: 4, spaceBetween: 0 },
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper mb-12"
          >
            {jewelryProducts.map((product) => (
              <SwiperSlide key={product._id} className="p-2">
                <div className="p-4 rounded-xl w-full max-w-[280px] mx-auto">
                  <div className="relative w-full h-60 overflow-hidden group rounded-xl shadow-lg">
                    {/* First Image (Default) */}
                    <img
                      src={product.imageFile1}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:translate-x-full"
                    />
                    {/* Second Image (On Hover) */}
                    <img
                      src={product.imageFile2}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out translate-x-full group-hover:translate-x-0"
                    />
                  </div>
                  <p className="font-medium pt-3 text-center">{product.name}</p>
                  <p className="font-medium text-center">₹ {product.price}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
        </div>
      </section>

      <section className="max-w-[1200px] lg:mx-auto mx-3 pb-10">
        <div>
          <div className="max-w-[1200px] lg:mx-auto mx-3 ">
            <div className="justify-center text-center pt-8 pb-8">
              <h1 className="text-[#996515] md:text-[2rem] font-bold  text-[1rem] leading-[3rem]">
                Styling 101 With Diamonds
              </h1>
              <p className="leading-[1.6rem] md:text-[1rem] text-[0.9rem] pt-4">
                Trendsetting diamond jewellery suited for every occasion
              </p>
            </div>
            <hr />
            <div>
              <Swiper
                slidesPerView={4}
                spaceBetween={30}
                navigation={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{
                  350: { slidesPerView: 1, spaceBetween: 0 }, // Below 350px → 1 slide
                  500: { slidesPerView: 2, spaceBetween: 0 }, // Below 500px → 2 slides
                  640: { slidesPerView: 3, spaceBetween: 0 },
                  1024: { slidesPerView: 4, spaceBetween: 0 },
                }}
                modules={[Navigation, Autoplay]}
                className="mySwiper mb-12"
              >
                {products.map((product) => (
                  <SwiperSlide key={product._id} className="p-2">
                    <div className="p-4 rounded-xl w-full max-w-[280px] mx-auto">
                      <div className="relative w-full h-60 overflow-hidden group rounded-xl shadow-lg">
                        {/* First Image (Default) */}
                        <img
                          src={product.imageFile1}
                          alt={product.name}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:translate-x-full"
                        />
                        {/* Second Image (On Hover) */}
                        <img
                          src={product.imageFile2}
                          alt={product.name}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out translate-x-full group-hover:translate-x-0"
                        />
                      </div>
                      <p className="font-medium pt-3 text-center">
                        {product.name}
                      </p>
                      <p className="font-medium text-center">
                        ₹ {product.price}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[1200px] lg:mx-auto mx-3 ">
          <div className="justify-center text-center pt-8 pb-8">
            <h1 className="text-[#996515] md:text-[2rem] font-bold  text-[1rem] leading-[3rem]">
              Shop By Category
            </h1>
            <p className="leading-[1.6rem] md:text-[1rem] text-[0.9rem] pt-4">
              Browse through your favorite categories. We've got them all!
            </p>
          </div>
          <hr />
          <div className="flex gap-5 pt-15 pb-5 md:flex-row flex-col items-center">
            {Collections.map((card, index) => (
              <Link
                to={card.link}
                className=" shadow-2xl  hover:shadow-blue-200 pb-3 rounded "
                key={index}
              >
                <img src={card.image} alt="" className="rounded " />
                <div className="flex justify-between px-3">
                  <h3 className="pt-3 text-red-900 font-medium text-lg">
                    {card.text}
                  </h3>
                  <div className="flex gap-2 px-3 pt-3">
                    <p>Explore More</p>
                    <p>
                      <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[1200px] lg:mx-auto mx-3 ">
          <div className="justify-center text-center pt-8 pb-8">
            <h1 className="text-[#996515] md:text-[2rem] font-bold  text-[1rem] leading-[3rem]">
              Pick Up Where You Left Off!
            </h1>
            <p className="leading-[1.6rem] md:text-[1rem] text-[0.9rem] pt-4">
              Our products tend to sell out quickly, so don't delay in
              completing your purchase.
            </p>
          </div>
          <hr />

          <div className="flex gap-5 pt-15 pb-5"></div>
          <div className="pb-5">
            <img src={banner} alt="" />
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] lg:mx-auto mx-3 pb-10">
        <div className="justify-center text-center pt-8 pb-8">
          <h1 className="text-[#996515] md:text-[2rem] font-bold text-[1rem] leading-[3rem]">
            Top Sellers
          </h1>
          <p className="text-lg pt-4">Explore our most loved products</p>
        </div>
        <hr />

        <div className="pt-8 pb-10">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            navigation={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 0 },
              480: { slidesPerView: 2, spaceBetween: 5 },
              768: { slidesPerView: 3, spaceBetween: 0 },
              1024: { slidesPerView: 4, spaceBetween: 0 },
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper mb-12"
          >
            {jewelryProducts.map((product) => (
              <SwiperSlide key={product._id} className="p-2">
                <div className="p-4 rounded-xl w-full max-w-[280px] mx-auto">
                  <div className="relative w-full h-60 overflow-hidden group rounded-xl shadow-lg">
                    {/* First Image (Default) */}
                    <img
                      src={product.imageFile1}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:translate-x-full"
                    />
                    {/* Second Image (On Hover) */}
                    <img
                      src={product.imageFile2}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out translate-x-full group-hover:translate-x-0"
                    />
                  </div>
                  <p className="font-medium pt-3 text-center text-sm md:text-base">
                    {product.name}
                  </p>
                  <p className="font-medium text-center text-sm md:text-base">
                    ₹ {product.price}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section>
        <div className="max-w-[1200px] lg:mx-auto mx-3 ">
          <div className="justify-center text-center pt-8 pb-8">
            <h1 className="text-[#996515] md:text-[2rem] font-bold  text-[1rem] leading-[3rem]">
              New For You!
            </h1>
            <p className="leading-[1.6rem] md:text-[1rem] text-[0.9rem] pt-4">
              Our latest releases, just for you !
            </p>
          </div>
          <hr />
          <div className="pt-15 pb-10 flex gap-18 md:flex-row flex-col items-center gap-y-10 ">
            {New.map((card, index) => (
              <div key={index} className="relative ">
                <img src={card.image} alt="" className="rounded-xl w-full " />
                <Link to={card.link}>
                  <button className="absolute inline bottom-2 left-1/2 -translate-x-1/2 border rounded-md  bg-white border-red-800 text-red-900 hover:text-white hover:bg-red-900 lg:px-4 lg:py-3 px-2 py-1 bg-cover">
                    Explore More
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[1200px] lg:mx-auto mx-3 ">
          <div className="justify-center text-center pt-8 pb-8">
            <h1 className="text-[#996515] md:text-[2rem] font-bold  text-[1rem] leading-[3rem]">
              Shop By Gender
            </h1>
            <p className="leading-[1.6rem] md:text-[1rem] text-[0.9rem] pt-4">
              First-class Jewellery for first-class Men, Women & Children.
            </p>
          </div>
          <hr />
          <div className="flex gap-5 pt-15 pb-5 md:flex-row flex-col items-center gap-y-10">
            {Collections.map((card, index) => (
              <Link
                className=" shadow-2xl  hover:shadow-blue-200 pb-3 rounded "
                key={index}
              >
                <img src={card.image} alt="" className="rounded-xl " />
                <div className="flex justify-between px-3">
                  <h3 className="pt-3 text-red-900 font-medium text-lg">Men</h3>
                  <div className="flex gap-2 px-3 pt-3">
                    <p>Explore More</p>
                    <p>
                      <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[1200px] lg:mx-auto mx-3 pt-5 pb-5 ">
          <img src={miabtanishq} alt="image" />
        </div>
      </section>
    </div>
  )
}