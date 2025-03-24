

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faLocation, faSearch } from "@fortawesome/free-solid-svg-icons";
import Mumbai from "../../assets/image/Mumbai.png";
import jaipur from "../../assets/image/jaipur.png";
import Kolkata from "../../assets/image/Kolkata.png";
import Lucknow from "../../assets/image/Lucknow.png";
import Hyderabad from "../../assets/image/Hyderabad.png";
import soulmate1 from "../../assets/image/soulmate1.png";
import Pune from "../../assets/image/Pune.png";
import sesons from "../../assets/image/sesons.jpg";
import image3 from "../../assets/image/image3.png";
import exchange from "../../assets/image/exchange.png";
import purity from "../../assets/image/purity.png";
import replacements from "../../assets/image/replacements.png";
import maintan from "../../assets/image/maintan.png";
import { text } from "@fortawesome/fontawesome-svg-core";

const cards = [
  {
    icon: "🔄",
    title: "Easy Exchange",
    description:
      "Upgrade your gold to stunning new Tanishq jewellery with 100% exchange value.",
  },
  {
    icon: "🤝",
    title: "Karatmeter",
    description:
      "Our state-of-the-art Karatmeter ensures precise gold purity measurement,",
  },
  {
    icon: "🤝",
    title: "Trust of TATA",
    description:
      "With Tanishq, you’re choosing exquisite jewellery backed by the trust of TATA.",
  },
  {
    icon: "🤝",
    title: "Trust of TATA",
    description:
      "With Tanishq, you’re choosing exquisite jewellery backed by the trust of TATA.",
  },
  {
    icon: "🤝",
    title: "Online Shopping",
    description:
      "With Tanishq, you’re choosing exquisite jewellery backed by the trust of TATA.",
  },
  {
    icon: "🤝",
    title: "Quick Checkout",
    description:
      "With Tanishq, you’re choosing exquisite jewellery backed by the trust of TATA.",
  },
 
]

const Category = [
  { id: 1, image: Mumbai, text:'mumbai' },
  { id: 2, image: jaipur, text: 'jaipur' },
  { id: 3, image: Kolkata, text: 'kolkata' },
  { id: 4, image: Lucknow, text: 'lucknow' },
  { id: 5, image: Hyderabad,  text: "hyderabad"},
  { id: 6, image: Pune,  text: "pune"},
  { id: 7, image: Lucknow, text:"locknow"},
  { id: 8, image: Hyderabad,  text: "hyderabad"},
  { id: 9, image: Pune, text:'pune' },
  { id: 10, image: Pune, text:'lucknow' },
];

function StoreSection() {
  return (
      <div className="bg-[#f5f5dc] w-full">
        <div className="max-w-[1200px] lg:mx-auto  mx-3 md:pt-25  pt-30 ">
          <div className="items-center text-center">
            <h1 className="text-[#996515] md:text-[2rem] font-bold  text-[1rem] leading-[3rem]">
              Welcome to Tanishq!
            </h1>
            <p className="leading-[1.6rem] md:text-[1rem] text-[0.9rem]">
              Shop from a wide range of exquisite designs for all occasions. All
              backed by the Trust of TATA
            </p>
            <div className=" relative flex justify-self-center items-center   py-5  ">
              <FontAwesomeIcon
                icon={faLocation}
                className="absolute  text-red-900 text-2xl"
              />
              <input
                type="text"
                placeholder="Search by"
                className=" px-7 py-2 rounded-xl border max-w-full"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute right-1/300  text-red-900 text-2xl"
              />
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-[#996515] md:text-[2rem] font-bold  text-[1rem] leading-[3rem]">
              Popular Cities
            </h2>
          </div>
          <div className=" gap-2 md:pt-6 pt:2 items-center  grid lg:grid-cols-10 grid-cols-5 gap-y-10  ">
            {Category.map((card, index) => (
              <Link
                className=" shadow-2xl  w-[90%] h-[100%] hover:scale-110 transition-transform duration-300 overflow-hidden rounded-xl"
                key={index}
              >
                <img src={card.image} alt="" className="rounded-t-xl " />
                <h3 className=" text-center text-red-900 font-medium text-lg">{card.text}</h3>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full py-10">
      <div className="mx-auto max-w-7xl">
        <Swiper
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 1 }, // Mobile
            768: { slidesPerView: 2, spaceBetween: 2 }, // Tablet
            1150: { slidesPerView: 4, spaceBetween: 5 }, // Desktop
          }}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          centeredSlides={true}
          centeredSlidesBounds={true}
          modules={[Autoplay]}
          className="flex justify-center items-center"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="border rounded-lg p-4 shadow-md text-center w-72 mx-auto">
                <div className="text-4xl mb-2">{card.icon}</div>
                <h3 className="font-semibold text-lg">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
        <div className="max-w-[1200px] lg:mx-auto mx-3  md:pt-10 pt-5">
          <div className="text-center">
            <h3 className="text-[#996515] md:text-[2rem] font-bold  text-[1rem] md:leading-[3rem]">
              Explore our latest collections online even before you walk in!
            </h3>
          </div>
          <div className="flex gap-5 md:pt-10 pt-5 mx-1">
            <Link>
              <img src={soulmate1} alt=""  className="w-2xl rounded-4xl"/>
            </Link>
            <Link>
              <img src={sesons} alt=""  className="w-2xl rounded-4xl"/>
            </Link>
            <Link>
              <img src={image3} alt=""  className="w-2xl rounded-4xl md:block hidden"/>
            </Link>
          </div>
        </div>
        <div >
          <div className="max-w-[1200px] lg:mx-auto mx-3 md:pt-20 pt-7">
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
                <img src={exchange} alt=""  className="w-[60%]
                 h-[50%] object-contain "/>
                 <div className="text-[1rem] pt-3">
                 Tanishq
                 Exchange
                 </div>
              </div>
              <div className="flex flex-col items-center justify-between ">
                <img src={purity} alt="" className="w-[60%]
                 h-[50%] object-contain "/> 
                 <div className="text-[1rem] pt-3">
                 Purity
                 Guarantee
                 </div>
              </div>
              <div className="flex flex-col items-center justify-between">
                <img src={replacements} alt="" className="w-[60%]
                 h-[50%] object-contain"/>
                 <div className="text-[1rem] pt-3">
                 Easy
                 Replacement
                 </div>
              </div>
              <div className="flex flex-col items-center justify-between">
                <img src={maintan} alt="" className="w-[50%]
                 h-[50%] object-contain"/>
                 <p className="text-[1rem] pt-3">
                 Lifetime
                  Maintenance
                 </p>
              </div>
              
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] lg:mx-auto mx-3  pb-10 pt-10">
          <div className="text-center">
            <h5 className="text-[#996515] md:text-[2rem] font-bold  text-[1rem] leading-[3rem]">
              Suggested Articles
            </h5>
            <p className="leading-[1.6rem] md:text-[1rem] text-[0.9rem] ">
              Read more help and support articles, blogs here
            </p>
          </div>
          <div className="text-center justify-items-center pt-2">
            <div>
              <img src="" alt="" />
              <Link>
              <p className="text-start leading-[1.6rem]">Stories from Tanishq Exchange: A Journey of Trust, Loyalty, and Cherished Memories</p>
              </Link>
            </div>
            <div>
              <img src="" alt="" />
              <Link>
              <p className="text-start  leading-[1.6rem]">The Heart of Rivaah: What Tanishq’s wedding brand stands for</p>
              </Link>
            </div>
            <div>
              <img src="" alt="" />
              <Link>
              <p className="text-start leading-[1.6rem]">Mixing and Matching Earring Styles for Every Occasion</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
}

export default StoreSection