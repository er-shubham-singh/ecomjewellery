import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import { motion } from "framer-motion";
import video from "../../assets/video/RajPatra.mp4";
import sideimg from "../../assets/image/images.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import hexa from "../../assets/image/hexagon.png";
import diant from "../../assets/image/dianty.png";
import heart from "../../assets/image/hearts.png";
import exchange from "../../assets/image/exchange.png";
import purity from "../../assets/image/purity.png";
import replacements from "../../assets/image/replacements.png";
import maintan from "../../assets/image/maintan.png";
import pristine from "../../assets/image/pristine.png";
import engagement from "../../assets/image/engagement.png";
import Our from "../../assets/image/pngtre.png";
import book from "../../assets/image/download.jpeg";
import talk from "../../assets/image/talk.png";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const time = [
  {
    id: 1,
    Image: sideimg,
    Imagetwo: sideimg,
    Imagethree: sideimg,
    Imagefour: sideimg,
    title: "Unbond",
    description:
      "Unbond is a collection of diamond jewellery that is crafted to perfection. Each piece is a masterpiece that is designed to be a timeless treasure. The collection is inspired by the beauty of nature and the elegance of",
  },
  {
    id: 2,
    Image: sideimg,
    Imagetwo: sideimg,
    Imagethree: sideimg,
    Imagefour: sideimg,
    title: "Unbond",
    description:
      "Unbond is a collection of diamond jewellery that is crafted to perfection. Each piece is a masterpiece that is designed to be a timeless treasure. The collection is inspired by the beauty of nature and the elegance of",
  },
  {
    id: 3,
    Image: sideimg,
    Imagetwo: sideimg,
    Imagethree: sideimg,
    Imagefour: sideimg,
    title: "Unbond",
    description:
      "Unbond is a collection of diamond jewellery that is crafted to perfection. Each piece is a masterpiece that is designed to be a timeless treasure. The collection is inspired by the beauty of nature and the elegance of",
  },
  {
    id: 4,
    Image: sideimg,
    Imagetwo: sideimg,
    Imagethree: sideimg,
    Imagefour: sideimg,
    title: "Unbond",
    description:
      "Unbond is a collection of diamond jewellery that is crafted to perfection. Each piece is a masterpiece that is designed to be a timeless treasure. The collection is inspired by the beauty of nature and the elegance of",
  },
  {
    id: 5,
    Image: sideimg,
    Imagetwo: sideimg,
    Imagethree: sideimg,
    Imagefour: sideimg,
    title: "Unbond",
    description:
      "Unbond is a collection of diamond jewellery that is crafted to perfection. Each piece is a masterpiece that is designed to be a timeless treasure. The collection is inspired by the beauty of nature and the elegance of",
  },
  {
    id: 6,
    Image: sideimg,
    Imagetwo: sideimg,
    Imagethree: sideimg,
    Imagefour: sideimg,
    title: "Unbond",
    description:
      "Unbond is a collection of diamond jewellery that is crafted to perfection. Each piece is a masterpiece that is designed to be a timeless treasure. The collection is inspired by the beauty of nature and the elegance of",
  },
  {
    id: 7,
    Image: sideimg,
    Imagetwo: sideimg,
    Imagethree: sideimg,
    Imagefour: sideimg,
    title: "Unbond",
    description:
      "Unbond is a collection of diamond jewellery that is crafted to perfection. Each piece is a masterpiece that is designed to be a timeless treasure. The collection is inspired by the beauty of nature and the elegance of",
  },
];

const images = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
];



  function DiamondSection() {
  const [current, setCurrent] = useState(2);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 500,
    });
  }, []);

  return (
    <div className="bg-[#f5f5dc]">
      <div>
        <video src={video} autoPlay controls muted className="w-full">
          Your browser does not support the video
        </video>
      </div>
      <div className=" max-w-[1200px] lg:mx-auto  mx-3" data-aos="fade-up">
        <div className="text-center pt-10">
          <h1 className="text-[#996515] md:text-[2rem] font-bold  text-[1rem] md:leading-[3rem]">
            TIMELESS TREASURE, EXPERTLY CRAFTED COLLECTIONS
          </h1>
          <h2 className="text-[#996515] md:text-[2rem] font-bold  text-[1rem] md:leading-[3rem]">
            Time crafted diamonds by Tanishq
          </h2>
        </div>
        <div className="">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper  "
          >
            {time.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="md:grid md:grid-cols-2 gap-10 px-10">
                  <div className=" text-center md:text-left md:pt-5">
                    <p className="text-[#996515] md:text-[2rem] font-bold  text-[1rem] md:leading-[3rem] ">
                      {card.title}
                    </p>
                    <p>{card.description}</p>
                    <div className="grid grid-cols-3 gap-10 pt-10">
                      <img
                        src={card.Imagetwo}
                        alt="image"
                        className="rounded-xl"
                      />
                      <img
                        src={card.Imagethree}
                        alt="image"
                        className="rounded-xl"
                      />
                      <img
                        src={card.Imagefour}
                        alt="image"
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                  <div>
                    <div className=" md:pt-0 pt-10 items-center justify-self-center">
                      <img
                        src={card.Image}
                        alt=""
                        className="w-72 h-96 border-4 border-white rounded-full overflow-hidden bg-navy flex justify-center items-center "
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="max-w-[600px] mx-auto" data-aos="fade-up">
          <div className="text-center py-10  ">
            <h3 className="text-[#996515] md:text-[2rem] font-bold  text-[1rem] leading-[3rem]">
              Tanishq’s 100% natural diamonds
            </h3>
            <p className="text-center text-wrap ">
              are sourced ethically and undergo a 5-step process that ensures
              our customers receive nothing but the finest and most authentic
              pieces .
            </p>
          </div>
        </div>
        <div data-aos="fade-up">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper  "
          >
            {time.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="md:flex md:flex-col-2 justify-between gap-10 md:px-20  ">
                  <div className="md:items-start md:text-start md:w-[50%] justify-self-center text-center pb-5 ">
                    <p className="text-[#996515] md:text-[2rem] font-bold  text-[1rem] leading-[3rem]">
                      {card.title}
                    </p>
                    <p className=" justify-self-center">{card.description}</p>
                  </div>
                  <div className="pb-5">
                    <div>
                      <img
                        src={card.Image}
                        alt=""
                        className="justify-self-center"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="mx-3 py-10" data-aos="zoom-in">
        <p className="text-lg uppercase">A companion for every occasion </p>
        <p className="text-[#996515] md:text-[2rem] font-bold  text-[1rem] leading-[3rem]">
          Tanishq World of Diamonds
        </p>
        <div>
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper  "
          >
            {time.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="  pt-5 items-center justify-self-center text-center">
                  <img
                    src={card.Image}
                    alt=""
                    className="w-72 h-96  rounded-full overflow-hidden bg-navy flex justify-center items-center "
                  />
                  <p className="text-[#996515]  font-bold pt-3 ">
                    high jewellery
                  </p>
                  <p className="text-[0.8rem]"> the epitome of luxury</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* siliddr image fr */}

      <div className="relative flex flex-col items-center py-10">
        <h2 className="text-[#996515] md:text-[2rem] font-bold  text-[1rem] leading-[3rem]">
          Discover brilliant design across categories
        </h2>
        <p className="md:text-lg uppercase pt-2">Find your perfect piece</p>

        <div className="relative w-full flex items-center overflow-hidden h-[300px]">
          <button
            onClick={prevSlide}
            className="absolute left-5 bg-gray-800 text-white p-2 rounded-full"
          >
            ←
          </button>
          <div className="flex justify-center items-center w-full gap-2">
            {images.map((src, index) => {
              const distance = Math.abs(current - index);
              return (
                <motion.img
                  key={index}
                  src={src}
                  alt="jewelry"
                  className="rounded-lg object-cover h-60"
                  initial={{ opacity: 0.6, scale: 0.8 }}
                  animate={{
                    opacity: index === current ? 1 : 0.5,
                    scale: index === current ? 1 : 0.7,
                    x: (index - current) * 150,
                  }}
                  transition={{ duration: 0.5 }}
                />
              );
            })}
          </div>
          <button
            onClick={nextSlide}
            className="absolute right-5 bg-gray-800 text-white p-2 rounded-full"
          >
            →
          </button>
        </div>
      </div>
      <div className="max-w-[1200px] lg:mx-auto mx-3 md:pt-10 py-5">
        <div className="text-center justify-self-center">
          <p className="text-[#996515] md:text-[2rem] font-bold  text-[1rem] leading-[3rem]">
            The Art of Solitaire
          </p>
          <p className="uppercase">
            A wonder, three billion years in the making.
          </p>
          <div>
            <img
              src={pristine}
              alt=""
              className="pt-5 w-[80%] justify-self-center"
            />
          </div>
        </div>
        <div
          className="text-center justify-self-center pt-10   "
          data-aos="fade-up"
        >
          <p className="text-[#996515] md:text-[2rem] font-bold  text-[1rem] leading-[3rem] pt-10">
            Love & Engagement
          </p>
          <p className="uppercase">WHEN IT RINGS TRUE.</p>
          <div>
            <img
              src={engagement}
              alt=""
              className="pt-5 w-[80%] justify-self-center"
            />
          </div>
        </div>
      </div>
      <div>
        <div
          className="max-w-[1200px] lg:mx-auto mx-3 md:pt-10 py-5"
          data-aos="zoom-in"
        >
          <div>
            <h5 className="text-[#996515] md:text-[2rem] font-bold  text-[1rem] leading-[3rem]">
              What’s Stealing the Spotlight
            </h5>
            <p>TRENDING TREASURES YOU NEED</p>
          </div>
          <div className="md:flex md:justify-between md:justify-self-auto justify-self-center ">
            <div className="text-center py-5">
              <img
                src={hexa}
                alt=""
                className="w-72 h-96 border-2 rounded-full overflow-hidden bg-navy flex justify-center items-center "
              />
              <p>Abstract Hexagon...</p>
              <p>38,398</p>
            </div>
            <div className="text-center py-5">
              <img
                src={diant}
                alt=""
                className="w-72 h-96  border-2 rounded-full overflow-hidden bg-navy flex justify-center items-center "
              />
              <p>Dainty Flora Dai....</p>
              <p>76,304</p>
            </div>
            <div className="text-center py-5">
              <img
                src={heart}
                alt=""
                className="w-72 h-96 border-2  rounded-full overflow-hidden bg-navy flex justify-center items-center "
              />
              <p>Hearts Aglow Dia...</p>
              <p>68,747</p>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] lg:mx-auto mx-3 md:pt-10 py-5">
          <div className="text-center">
            <h5 className="uppercase">
              {" "}
              We’re India’s most trusted jewellery brand
            </h5>
            <h6 className="text-[#996515] md:text-[2rem] font-bold  text-[1rem] leading-[3rem]">
              Tanishq Promises
            </h6>
          </div>
          <div className=" pt-10 grid md:grid-cols-4 grid-cols-2 items-center  gap-5 justify-around h-full md:mx-28 mx-5 ">
            <div className="flex flex-col items-center justify-between ">
              <img
                src={exchange}
                alt=""
                className="w-[60%]
                           h-[50%] object-contain "
              />
              <div className="text-[1rem] pt-3">Tanishq Exchange</div>
            </div>
            <div className="flex flex-col items-center justify-between ">
              <img
                src={purity}
                alt=""
                className="w-[60%]
                           h-[50%] object-contain "
              />
              <div className="text-[1rem] pt-3">Purity Guarantee</div>
            </div>
            <div className="flex flex-col items-center justify-between">
              <img
                src={replacements}
                alt=""
                className="w-[60%]
                           h-[50%] object-contain"
              />
              <div className="text-[1rem] pt-3">Easy Replacement</div>
            </div>
            <div className="flex flex-col items-center justify-between">
              <img
                src={maintan}
                alt=""
                className="w-[50%]
                           h-[50%] object-contain"
              />
              <p className="text-[1rem] pt-3">Lifetime Maintenance</p>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] lg:mx-auto mx-3 md:pt-10 py-5">
          <div>
            <p className="">GLITTERING STORIES FROM TANISHQ</p>
            <p className="text-[#996515] md:text-[2rem] font-bold  text-[1rem] leading-[3rem]">
              Brides who Sparkle with our Diamonds
            </p>
          </div>
          <div className="md:flex  justify-between gap-20  items-center ">
            <div className="text-center  items-center py-5">
              <img
                src="https://staticimg.tanishq.co.in/microsites-test/diamond/assets-three/images/Brides/tt-rivaah-bride.jpg"
                alt=""
                className=" object-cover rounded-full justify-self-center"
              />
              <p className="pt-2">
                If you are looking to wear multiple pieces instead of one, all
                we would recommend is layering them!
              </p>
            </div>
            <div className="text-center  items-center py-5">
              <Link>
                <img
                  src="https://staticimg.tanishq.co.in/microsites-test/diamond/assets-three/images/Brides/tt-rivaah-prod-m.jpg"
                  alt=""
                  className="justify-self-center border-15 border-white  rounded-2xl   "
                />
                <p className="pt-2  md:text-[1.5rem]  text-[1rem] ">
                  Alluring Floral Gold and Diamond Necklace Set
                </p>
              </Link>
              <p className="w-full justify-self-center pt-15">
                Diamonds are forever! Investing in diamond jewelry is an
                absolute no-brainer. Not only does it look stunning, but it also
                complements every kind of look.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] lg:mx-auto mx-3 md:pt-10 py-5">
          <div
            className="bg-gray-900 text-white  items-center justify-between gap-12
      bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://staticimg.tanishq.co.in/microsite/diamond/images/spotlight/spotlight-m.jpg')",
            }}
          >
            <div className="md:w-1/2 lg:px-20 px-5 lg:py-30 py-10">
              <h6 className=" md:text-[2rem] font-bold  text-[2rem] leading-[2rem]">
                LOOKING FOR THE PERFECT SPARKLE?
              </h6>
              <p className="text-[1rem] pt-5 md:block hidden">
                OUR DIAMOND EXPERTS ARE HERE TO GUIDE YOU THROUGH EXQUISITE
                COLLECTIONS
              </p>
              <button  className="md:mt-20 mt-10 md:px-10 md:py-5 px-5 py-2 border-2 border-amber-50 hover:bg-amber-50 hover:text-black">GET IN TOUCH</button>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] lg:mx-auto mx-3 md:pt-10 ">
          <div className=" py-5  flex flex-col md:flex-row items-center justify-center gap-8">
            <div className=" text-white rounded-t-full shadow-lg w-80 text-center overflow-hidden">
              <img src={Our} alt=""  className="w-full h-64 object-cover bg-black rounded-t-full"/>
              <p className="text-lg text-black font-semibold py-5">Visit Our Store</p>

            </div>
            <div className=" text-white rounded-t-full shadow-lg w-80 text-center overflow-hidden">
              <img src={book} alt=""  className="w-full h-64 object-cover bg-black rounded-t-full  "/>
              <p className="text-lg font-semibold py-5 text-black">Book An Appointment</p>

            </div>
            <div className=" text-white rounded-t-full shadow-lg w-80 text-center overflow-hidden">
              <img src={talk} alt=""  className="w-full h-64 object-cover bg-black rounded-t-full"/>
              <p className="text-lg font-semibold py-5 text-black">Talk to an Export</p>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default DiamondSection
