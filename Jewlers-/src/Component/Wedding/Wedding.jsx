import Image1 from '../../assets/Wedding/image1.jpg'
import swipe1 from '../../assets/Wedding/swipe1.png'
import swipe2 from '../../assets/Wedding/swipe2.png'
import swipe3 from '../../assets/wedding/swipe3.png'
import uniqureBorder from '../../assets/wedding/uniqueBorder.png'
import logo from '../../assets/Wedding/1.png'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { motion, AnimatePresence } from 'framer-motion'
import { IoSearch } from 'react-icons/io5'
import IconImage from '../../assets/Wedding/leaf-image.png'
import assets1 from '../../assets/Wedding/assets1.webp'
import assets2 from '../../assets/Wedding/assets2.webp'
import assets25 from '../../assets/Wedding/assets25.png'
// import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/navigation'

// 3 Card Slider
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import assets3 from '../../assets/Wedding/assets3.png'
import assets4 from '../../assets/Wedding/assets4.png'
import assets5 from '../../assets/Wedding/assets5.png'
import assets6 from '../../assets/Wedding/assets6.jpg'
import assets7 from '../../assets/Wedding/assets7.png'
import assets8 from '../../assets/Wedding/assets8.jpg'
import assets9 from '../../assets/Wedding/assets9.png'
import assets10 from '../../assets/Wedding/assets10.png'
import assets11 from '../../assets/Wedding/assets11.png'

// Handpicked for the Bride
import assets12 from '../../assets/Wedding/assets12.png'
import assets13 from '../../assets/Wedding/assets13.png'
import assets14 from '../../assets/Wedding/assets14.png'
import assets15 from '../../assets/Wedding/assets15.png'
import assets16 from '../../assets/Wedding/assets16.png'

// ways to shop
import assets17 from '../../assets/Wedding/assets17.webp'
import assets18 from '../../assets/Wedding/assets18.webp'
import assets19 from '../../assets/Wedding/assets19.webp'
import assets20 from '../../assets/Wedding/assets20.webp'

// Four Card
import assets21 from '../../assets/Wedding/assets21.png'
import assets22 from '../../assets/Wedding/assets21.png'
import assets23 from '../../assets/Wedding/assets22.png'
import assets24 from '../../assets/Wedding/assets23.png'

// Video Section
import assets26 from '../../assets/Wedding/assets26.mp4'
import assets27 from '../../assets/Wedding/assets27.mp4'
import assets28 from '../../assets/Wedding/assets28.png'
import assets29 from '../../assets/Wedding/assets29.png'

// Image Card
import assets30 from '../../assets/Wedding/assets30.jpg'
import assets31 from '../../assets/Wedding/assets31.jpg'
import assets32 from '../../assets/Wedding/assets32.jpg'
import assets33 from '../../assets/Wedding/assets33.jpg'

const Wedding = () => {
  const cards = [
    { id: 1, image: assets1 },
    { id: 2, image: assets2 },
  ]

  const images = [
    { src: swipe1, label: 'Wedding' },
    { src: swipe2, label: 'Engagement' },
    { src: swipe3, label: 'Reception' },
  ]

  const [search, setSearch] = useState('')
  const communities = [
    'Telugu Bride',
    'Gujarati Bride',
    'Tamil Bride',
    'Marathi Bride',
    'Bengali Bride',
    'Punjabi Bride',
    'UP Bride',
    'Bihari Bride',
    'Kannadiga Bride',
    'Marwari Bride',
    'Odia Bride',
    'Muslim Bride',
  ]

  const filteredCommunities = communities.filter((community) =>
    community.toLowerCase().includes(search.toLowerCase())
  )

  // 3 Card Slider
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  //3 Card Slider
  const Handpicked = [
    { id: 3, title: assets12, description: 'Long Necklace' },
    { id: 4, title: assets13, description: 'Bnagles' },
    { id: 5, title: assets14, description: 'Diamond Jewellery' },
    { id: 6, title: assets15, description: 'Accessories' },
    { id: 7, title: assets16, description: 'Necklace Set' },
  ]

  // Handpicked for the Bride
  const threeCardSlider = [
    { id: 3, title: assets3, description: 'This is the first card.' },
    { id: 4, title: assets4, description: 'This is the first card.' },
    { id: 5, title: assets5, description: 'This is the first card.' },
    { id: 6, title: assets6, description: 'This is the first card.' },
    { id: 7, title: assets7, description: 'This is the first card.' },
    { id: 8, title: assets8, description: 'This is the first card.' },
    { id: 9, title: assets9, description: 'This is the first card.' },
    { id: 10, title: assets10, description: 'This is the first card.' },
    { id: 11, title: assets11, description: 'This is the first card.' },
  ]

  // Slide text
  const slides = [
    [
      'Bangles',
      'Long Necklace',
      'Necklace Sets',
      'Diamond Jewellery',
      'Accessories',
    ],
    [
      'Necklace Chain',
      'Statement Necklace',
      'Torsade Necklace',
      'Stud Earrings',
      'Hoop Earrings',
    ],
    [
      'Cocktail Ring',
      'Signet Ring',
      'Eternity Ring',
      'Promise Ring',
      'Stackable Rings',
    ],
    ['Anklet', 'Charm Anklet', 'Adjustable Anklet', 'Toe Ring', 'Cameo Brooch'],
  ]
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % slides.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Ways to Shop from Tanishq
  const waysToShop = [
    { id: 1, title: assets17, content: 'This is the first card' },
    { id: 2, title: assets18, content: 'This is the second card' },
    { id: 3, title: assets19, content: 'This is the third card' },
    { id: 3, title: assets20, content: 'This is the third card' },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? waysToShop.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === waysToShop.length - 1 ? 0 : prev + 1))
  }

  // Card + image Slider
  const CardImages = [
    { src: assets30, label: 'Engagement' },
    { src: assets31, label: 'Reception' },
    { src: assets32, label: 'Reception' },
    { src: assets33, label: 'Wedding' },
  ]

  const [currentIndex1, setCurrentIndex1] = useState(0)

  const prevSlide1 = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const nextSlide2 = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <>
      {/* Slider */}
      <section className="pt-5 flex w-full no-scrollbar relative pb-5  ">
        <Swiper
          slidesPerView={1}
          spaceBetween={2}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          loop={true}
        >
          {cards.map((item, index) => (
            <SwiperSlide key={index}>
              <Link to="#">
                <img src={item.image} alt={`Slide ${index + 1}`} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <div className="flex flex-col items-center px-3 lg:px-auto  w-full   ">
        {/* Search Section */}
        <section className="flex flex-col items-center  ">
          <div className="">
            <img src={IconImage} alt="" width={30} />
          </div>
          <h2 className="text-3xl font-semibold text-red-900 mb-4">
            For a sparkling new beginning
          </h2>
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Find my community"
              className="border border-red-800 rounded-[10px] py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-red-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="absolute right-3 top-3 text-red-950 text-[20px]">
              <IoSearch />
            </span>
          </div>

          <div className="flex flex-wrap gap-3 justify-center md:w-[60%]  ">
            {filteredCommunities.map((community, index) => (
              <button
                key={index}
                className="border border-red-400 text-red-800 px-4 py-2 rounded-full hover:bg-red-100"
              >
                {community}
              </button>
            ))}
          </div>
        </section>

        {/* 3 Card Slider */}
        {/* <section>
        <div className="max-w-7xl mx-auto p-4 ">
          <Slider {...settings}>
            {threeCardSlider.map((card) => (
              <div key={card.id} className="w-full p-4">
                <div className="relative rounded-xl shadow-lgs p-6 text-center">
                  <img src={card.title} alt="" />
                  <div className="absolute top-0s bottom-10 right-20">
                    <p className="text-[18px] mb-2 text-red-900 bg-white">Kannadiga Bride</p>
                    <div className="flex gap-3">
                      <button className="bg-white rounded-[4px] p-1 cursor-pointer">Know More</button>
                      <button className="bg-white rounded-[4px] p-1 cursor-pointer">Explore Jewellery</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section> */}
        <section className="w-full px-4 py-6 ">
          <div className="max-w-7xl mx-auto">
            <Slider {...settings}>
              {threeCardSlider.map((card) => (
                <div key={card.id} className="w-full px-2 sm:px-3 md:px-4">
                  <div className="relative rounded-xl shadow-lg p-3 sm:p-4 md:p-6 text-center">
                    {/* Image */}
                    <img
                      src={card.title}
                      alt="Kannadiga Bride"
                      className="w-full object-cover rounded-lg"
                    />

                    {/* Text & Buttons */}
                    <div className="absolute bottom-4 right-24 sm:right-11  p-2 sm:p-3 rounded-md shadow-md text-center">
                      <p className="text-sm sm:text-base md:text-lg mb-2 text-red-900 bg-white">
                        Kannadiga Bride
                      </p>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <button className="bg-white border border-red-500 rounded-md px-2 sm:px-3 py-1 text-xs sm:text-sm cursor-pointer hover:bg-red-500 hover:text-white transition-all">
                          Know More
                        </button>
                        <button className="bg-white border border-red-500 rounded-md px-2 sm:px-3 py-1 text-xs sm:text-sm cursor-pointer hover:bg-red-500 hover:text-white transition-all">
                          Explore Jewellery
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* Handpicked for the Bride*/}
        <section className="flex flex-col justify-center items-center ">
          <div className="flex flex-col items-center gap-2">
            <img src={IconImage} alt="" width={30} />
            <p className="text-3xl font-semibold text-red-900 mb-4">
              Handpicked for the Bride
            </p>
          </div>
          <div className="w-full flex flex-wrap justify-center gap-6 py-10">
            {Handpicked.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={image.title}
                  alt={`Card ${index + 1}`}
                  className="w-60 h-auto transform transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute bottom-0 w-full p-4 flex justify-center bg-pink-300">
                  {image.description}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Text Slider */}
        {/* <section className="flex flex-col items-center text-center gap-4 overflow-hidden">
        <div className="flex flex-col items-center gap-2">
          <img src={IconImage} alt="Icon" width={30} />
          <p className="text-3xl font-semibold text-red-900">What other brides are looking for</p>
        </div>

        <div className="relative w-[1180px] h-70 overflow-hidden space-y-4">
          {slides.map((text, i) => (
            <motion.div
              key={i}
              initial={{ x: "100%" }}
              animate={{ x: "-100%" }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="whitespace-nowrap text-2xl font-semibold"
            >
              {text}
            </motion.div>
          ))}
        </div>
      </section> */}
        <section className="flex flex-col items-center text-center gap-4 overflow-hidden px-4 py-6 md:max-w-[80%] w-screen ">
          <div className="flex flex-col items-center gap-2">
            <img src={IconImage} alt="Icon" width={30} />
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-red-900">
              What other brides are looking for
            </p>
          </div>

          <div className="relative   overflow-hidden space-y-4 w-screen">
            {slides.map((text, i) => (
              <motion.div
                key={i}
                initial={{ x: '100%' }}
                animate={{ x: '-100%' }}
                transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
                className="whitespace-nowrap text-lg sm:text-xl md:text-2xl font-semibold"
              >
                {text}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Card swipe */}
        <div className="section max-w-full  ">
          <div className="flex flex-col items-center gap-2">
            <img src={IconImage} alt="Icon" width={30} />
            <p className="text-3xl font-semibold text-red-900">
              Be a star in every wedding occasion
            </p>
          </div>

          <div className="relative w-full max-w-4xl mx-auto py-10">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1.5}
              coverflowEffect={{
                rotate: 0,
                stretch: 50,
                depth: 100,
                modifier: 2,
              }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              modules={[EffectCoverflow, Navigation]}
              className="swiper-container"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full md:h-[500px]  flex items-center justify-center">
                    <img
                      src={image.src}
                      alt={image.label}
                      className="rounded-xl shadow-lg w-full h-[500px] object-fit"
                    />
                    <div className="absolute bottom-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
                      {image.label}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 swiper-button-prev cursor-pointer p-2  rounded-full shadow-md">
              <ChevronLeft />
            </div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 swiper-button-next cursor-pointer p-2  rounded-full shadow-md">
              <ChevronRight />
            </div>
          </div>
        </div>

        {/* Featured Collections */}
        <section className="flex justify-center flex-col items-center gap-4 my-10  ">
          <div className="flex flex-col items-center gap-2">
            <img src={IconImage} alt="Icon" width={30} />
            <p className="text-3xl font-semibold text-red-900">
              Featured Collections
            </p>
          </div>

          <div className="w-[95%]">
            <img src={Image1} alt="Featured Collection 1" />
          </div>
        </section>

        {/* Ways to Shop from Tanishq */}

        <section className="w-full px-4 py-10 ">
          <div className="max-w-7xl mx-auto flex flex-col items-center mb-10">
            {/* Heading */}
            <div className="flex flex-col items-center gap-2 mb-6 text-center">
              <img src={IconImage} alt="Icon" width={30} />
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-red-900">
                Ways to Shop from Tanishq
              </p>
            </div>

            {/* Content Section */}
            <div className="relative w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 mt-10">
              {/* Left Section */}
              <div className="w-full md:w-1/2 text-center md:text-left px-4">
                <img
                  src={logo}
                  alt="Tanishq Logo"
                  className="w-32 md:w-40 mx-auto md:mx-0 mb-4"
                />
                <h2 className="text-xl sm:text-2xl md:text-3xl py-2">
                  Tanishq Exchange
                </h2>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  Every hour over 100 Indians join Tanishq's exchange community
                  to upgrade their old gold at a better value!
                </p>
                <button className="mt-4 text-white bg-red-400 px-5 py-2 rounded-full flex items-center justify-center mx-auto md:mx-0 transition-all hover:bg-red-500">
                  Learn More
                  <MdKeyboardArrowRight className="text-2xl ml-2" />
                </button>
              </div>

              {/* Right Section - Image Slider */}
              <div className="w-full md:w-1/2 flex flex-col items-center gap-4 relative">
                <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md h-auto flex items-center justify-center rounded-lg shadow-lg p-4">
                  <img
                    src={waysToShop[currentIndex].title}
                    alt="Ways to Shop"
                    className="w-full object-cover rounded-lg"
                  />
                </div>

                {/* Slider Controls */}
                <div className="flex gap-4 absolute w-full max-w-[80%] justify-between bottom-5">
                  <button
                    onClick={prevSlide}
                    className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-all"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-all"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Four Card */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 mb-5 ">
          {[assets21, assets22, assets23, assets24].map((asset, index) => (
            <div
              key={index}
              className="bg-pink-200 flex flex-col justify-center items-center aspect-square rounded-2xl"
            >
              <img src={asset} alt="" className="w-3/4 h-3/4 object-contain" />
              <button className="text-white bg-red-400 p-3 rounded-full cursor-pointer flex justify-center gap-2 items-center">
                Read More
                <MdKeyboardArrowRight className="text-2xl" />
              </button>
            </div>
          ))}
        </section>

        <section className="my-4 ">
          <div className="w-[98%] mx-auto flex flex-col items-center">
            <img src={assets25} alt="Featured Collection 2" />
          </div>
        </section>

        {/* Image Slider Section */}
        {/* <section>
        <div className="max-w-7xl mx-auto p-4 ">
          <Slider {...settings}>
            {CardImages.map((card) => (
              <div key={card.id} className="w-full p-4">
                <div className="relative rounded-xl shadow-lgs p-6 text-center">
                  <img src={card.src} alt="" />

                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section> */}
        <section className="w-full px-4 py-6 ">
          <div className="max-w-7xl mx-auto">
            <Slider {...settings}>
              {CardImages.map((card) => (
                <div key={card.id} className="w-full px-2 sm:px-3 md:px-4">
                  <div className="relative rounded-xl shadow-lg p-3 sm:p-4 md:p-6 text-center">
                    {/* Image */}
                    <img
                      src={card.src}
                      alt="Slider Image"
                      className="w-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* Video Section */}
        <section className="w-full ">
          <div className="flex flex-col items-center gap-2 mb-10">
            <img src={IconImage} alt="Icon" width={30} />
            <p className="text-3xl font-semibold text-red-900">
              Be a trendsetter with Rivaah Wedding Jewellery
            </p>
            <p>Trendy Looks Styled by Rivaah</p>
          </div>

          {/* <div className="relative md:flex justify-between w-[1280px] mx-auto mb-10">
          <video src={assets26} autoPlay width={300}
            onCanPlay={(e) => e.target.play()} className="rounded-[10px]"
          >
          </video>
          <video src={assets27} autoPlay muted width={300} className="rounded-[10px]"></video>
          <img src={assets29} alt="" muted width={400} className="rounded-[10px]" />
          <img src={assets28} alt="" width={400} className="rounded-[10px] absolute right-0 top-8 md:block hidden" />
        </div> */}
          <div className="relative flex flex-wrap justify-center lg:justify-between   max-w-7xl mx-auto gap-[20%] lg:gap-0 mb-10">
            {/* Videos & Images - Responsive Grid */}
            <video
              src={assets26}
              autoPlay
              muted
              className="rounded-lg w-full sm:w-[300px] md:w-[300px] object-cover pt-2"
            ></video>

            <video
              src={assets27}
              autoPlay
              muted
              className="rounded-lg w-full sm:w-[300px] md:w-[300px] object-cover pt-2"
            ></video>

            <div className="flex pt-2 ">
              <img
                src={assets29}
                alt="Image 1"
                className="rounded-lg w-full sm:w-[400px] md:w-[400px] object-cover"
              />

              <img
                src={assets28}
                alt="Image 2"
                className="rounded-lg w-full sm:w-[400px] md:w-[400px] object-cover  absolute lg:right-0 lg:top-8"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Wedding

// w-full max-w-lg md:max-w-2xl lg:max-w-4xl h-60 md:h-80 lg:h-96 bg-cover bg-center bg-no-repeat rounded-lg
