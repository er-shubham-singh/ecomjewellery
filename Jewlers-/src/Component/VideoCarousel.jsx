import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

const videos = [
  "https://cdn1.fireworktv.com/medias/2024/12/20/1734679771-iwgzlfdj/watermarked/720/DiamondsareallyouneedtounleashthatmaincharacterenergyWhetheryoustylethemasstatementpiecesorlayerthemtomakeafashionstatement,Tanishq%E2%80%99swiderangeofjewelleryhe.mp4",
  "https://cdn4.fireworktv.com/medias/2024/12/20/1734677123-wqpjifmg/transcoded/720/FindtheperfectdiamondthatmakesyoudazzlefromAMtoPMExploretheworldofnaturalandrarediamondsatTanishq%E2%80%99sFestivalofDiamonds,withover10,000diamonddesigns%C2%A0Fe1_1.mp4",
  "https://cdn4.fireworktv.com/medias/2024/12/20/1734678389-rbzsypiw/transcoded/720/Frombusinesshourstoblissfulevenings,makeeverymomentshinebrightwithourdiamondcollection.%C2%A0ExploretheworldofnaturaldiamondsatTanishq%E2%80%99sFestivalofDiamonds,withover-.mp4",
  "https://cdn4.fireworktv.com/medias/2024/12/20/1734678380-ckotgfwb/transcoded/720/MarkYourMomentwithdiamondscraftedforspecialoccasionsandstylethemwithyourfestiveattireforadazzlingtouch,makingeachmomenttrulyunforgettable.Exploretheworldofnat_1.mp4",
  "https://cdn4.fireworktv.com/medias/2024/12/20/1734678409-fezmqahu/transcoded/720/Yourearringsparkle,elevated.Turnordinarymomentsintoextraordinaryoneswithapairofdazzlingdiamondearrings.ExploretheworldofnaturalandrarediamondsatTanishq%E2%80%99sFestiv_1.mp4",
];

export default function CoverflowVideoCarousel() {
  const swiperRef = useRef(null);
  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(2);
  const [fullscreenVideo, setFullscreenVideo] = useState(null);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === activeIndex) {
          video.play();
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [activeIndex]);

  return (
    <div className="relative w-full flex flex-col items-center justify-center bg-gray-900 p-10 rounded-xl">
      {/* Swiper Container */}
      <Swiper
        effect="coverflow"
        centeredSlides={true}
        slidesPerView={2}
        loop={true}
        spaceBetween={-60}
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 600,
          modifier: 1.8,
          slideShadows: false,
        }}
        navigation={false}
        modules={[Navigation, EffectCoverflow]}
        className="w-[900px] h-[500px] rounded-lg"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {videos.map((video, index) => (
         <SwiperSlide key={index} className="relative flex justify-center items-center">
         <div className="relative">
           <video
             ref={(el) => (videoRefs.current[index] = el)}
             src={video}
             className={`rounded-lg transition-all duration-500 shadow-lg border-4 ${
              index === activeIndex
                ? "w-[450px] h-[550px] scale-105 border-white"  /* Remove border-white */
                : "w-[450px] h-[550px] opacity-70 border-transparent"
            }`}
            
             controls
           />
           {index === activeIndex && (
             <button
               className="fullscreen-btn absolute top-2 right-2"
               onClick={() => setFullscreenVideo(video)}
             >
               <Maximize2 size={30} className="text-gray-900" />
             </button>
           )}
         </div>
       </SwiperSlide>
       
       
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="absolute top-1/2 left-5 z-10">
        <button
          className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-all"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ChevronLeft size={40} className="text-gray-900" />
        </button>
      </div>
      <div className="absolute top-1/2 right-5 z-10">
        <button
          className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-all"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ChevronRight size={40} className="text-gray-900" />
        </button>
      </div>

      {/* Fullscreen Video Modal */}
      {fullscreenVideo && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="relative w-[90%] max-w-5xl">
            {/* Close Button */}
            <button
  className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:scale-110 transition-all"
  onClick={() => setFullscreenVideo(null)}
>
  <X size={30} className="text-gray-900" />
</button>
            <video
              src={fullscreenVideo}
              className="w-full h-auto max-h-[90vh] rounded-lg"
              controls
              autoPlay
            />
          </div>
        </div>
      )}
    </div>
  );
}




// const videos = [
//   "https://cdn1.fireworktv.com/medias/2024/12/20/1734679771-iwgzlfdj/watermarked/720/DiamondsareallyouneedtounleashthatmaincharacterenergyWhetheryoustylethemasstatementpiecesorlayerthemtomakeafashionstatement,Tanishq%E2%80%99swiderangeofjewelleryhe.mp4",
//   "https://cdn4.fireworktv.com/medias/2024/12/20/1734677123-wqpjifmg/transcoded/720/FindtheperfectdiamondthatmakesyoudazzlefromAMtoPMExploretheworldofnaturalandrarediamondsatTanishq%E2%80%99sFestivalofDiamonds,withover10,000diamonddesigns%C2%A0Fe1_1.mp4",
//   "https://cdn4.fireworktv.com/medias/2024/12/20/1734678389-rbzsypiw/transcoded/720/Frombusinesshourstoblissfulevenings,makeeverymomentshinebrightwithourdiamondcollection.%C2%A0ExploretheworldofnaturaldiamondsatTanishq%E2%80%99sFestivalofDiamonds,withover-.mp4",
//   "https://cdn4.fireworktv.com/medias/2024/12/20/1734678380-ckotgfwb/transcoded/720/MarkYourMomentwithdiamondscraftedforspecialoccasionsandstylethemwithyourfestiveattireforadazzlingtouch,makingeachmomenttrulyunforgettable.Exploretheworldofnat_1.mp4",
//   "https://cdn4.fireworktv.com/medias/2024/12/20/1734678409-fezmqahu/transcoded/720/Yourearringsparkle,elevated.Turnordinarymomentsintoextraordinaryoneswithapairofdazzlingdiamondearrings.ExploretheworldofnaturalandrarediamondsatTanishq%E2%80%99sFestiv_1.mp4",
// ];