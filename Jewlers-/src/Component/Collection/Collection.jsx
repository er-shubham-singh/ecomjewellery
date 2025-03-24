import React from 'react';
// All Cards Images
// Section-1
import assets1 from "../../assets/Collection/assets1.webp"
import assets2 from "../../assets/Collection/assets2.webp"
import assets3 from "../../assets/Collection/assets3.webp"
import assets4 from "../../assets/Collection/assets4.webp"
import assets5 from "../../assets/Collection/assets5.webp"

// Section-2
import assets6 from "../../assets/Collection/assets6.webp"
import assets7 from "../../assets/Collection/assets7.webp"
import assets8 from "../../assets/Collection/assets8.webp"
import assets9 from "../../assets/Collection/assets9.webp"
import assets10 from "../../assets/Collection/assets10.webp"

// Section-3
import assets11 from "../../assets/Collection/assets11.webp"
import assets12 from "../../assets/Collection/assets12.webp"
import assets13 from "../../assets/Collection/assets13.webp"
import assets14 from "../../assets/Collection/assets14.webp"
import assets15 from "../../assets/Collection/assets15.webp"

// Section-4
import assets16 from "../../assets/Collection/assets16.webp"
import assets17 from "../../assets/Collection/assets17.webp"
import assets18 from "../../assets/Collection/assets18.webp"
import assets19 from "../../assets/Collection/assets19.webp"
import assets20 from "../../assets/Collection/assets20.webp"

// Section-5
import assets21 from "../../assets/Collection/assets21.webp"
import assets22 from "../../assets/Collection/assets22.webp"
import assets23 from "../../assets/Collection/assets23.webp"
import assets24 from "../../assets/Collection/assets24.webp"
import assets25 from "../../assets/Collection/assets25.webp"

// Section-6
import assets26 from "../../assets/Collection/assets26.jpg"
import assets27 from "../../assets/Collection/assets27.webp"
import assets28 from "../../assets/Collection/assets28.webp"
import assets29 from "../../assets/Collection/assets29.webp"
import assets30 from "../../assets/Collection/assets30.webp"

// Section-7
import assets31 from "../../assets/Collection/assets31.webp"
import assets32 from "../../assets/Collection/assets32.webp"
import assets33 from "../../assets/Collection/assets33.jpg"
import assets34 from "../../assets/Collection/assets34.webp"
import assets35 from "../../assets/Collection/assets35.webp"

// Section-8
import assets36 from "../../assets/Collection/assets36.webp"
import assets37 from "../../assets/Collection/assets37.webp"
import assets38 from "../../assets/Collection/assets38.webp"
import assets39 from "../../assets/Collection/assets39.webp"
import assets40 from "../../assets/Collection/assets40.webp"

// Section-9
import assets41 from "../../assets/Collection/assets41.webp"
import assets42 from "../../assets/Collection/assets42.webp"
import assets43 from "../../assets/Collection/assets43.webp"
import assets44 from "../../assets/Collection/assets44.webp"
import assets45 from "../../assets/Collection/assets45.webp"

// Section-10
import assets46 from "../../assets/Collection/assets46.webp"
import assets47 from "../../assets/Collection/assets47.webp"
import assets48 from "../../assets/Collection/assets48.webp"
import assets49 from "../../assets/Collection/assets49.webp"
import assets50 from "../../assets/Collection/assets50.webp"

// Section-11
import assets51 from "../../assets/Collection/assets51.webp"
import assets52 from "../../assets/Collection/assets52.webp"
import assets53 from "../../assets/Collection/assets53.webp"
import assets54 from "../../assets/Collection/assets54.webp"
import assets55 from "../../assets/Collection/assets55.webp"

// Section-12
import assets56 from "../../assets/Collection/assets56.webp"
import assets57 from "../../assets/Collection/assets57.webp"
import assets58 from "../../assets/Collection/assets58.webp"
import assets59 from "../../assets/Collection/assets59.webp"
import assets60 from "../../assets/Collection/assets60.webp"

// Section-13
import assets61 from "../../assets/Collection/assets61.jpg"
import assets62 from "../../assets/Collection/assets62.webp"
import assets63 from "../../assets/Collection/assets63.webp"
import assets64 from "../../assets/Collection/assets64.jpg"
import assets65 from "../../assets/Collection/assets65.webp"


function Collection() {
  return (
    <div className="">

      {/* Section 1 */}
      <div className="">

        {/* Full Image Section*/}
        <section className="">
          <img src={assets1} alt="Collection" className="w-full object-cover" />
        </section>

        {/* Card Image Section */}
        <section className="px-6 py-18 flex flex-wrap gap-4 justify-self-start">
          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets2} alt="Jewelry" className="w-full h-auto object-cover" />
            <div className="flex flex-col justify-center items-center gap-3 py-4">
              <p className="font-semibold text-gray-500">Glitterati Band Hoop Earrings</p>
              <p className="text-gray-500">50D4FFHCOAAA02</p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets3} alt="Jewelry" className="w-full h-auto object-cover" />
            <div className="flex flex-col justify-center items-center gap-3 py-4">
              <p className="font-semibold text-gray-500">Layering Radiance Ring</p>
              <p className="text-gray-500">50D4FFFCCLAA02</p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets4} alt="Jewelry" className="w-full h-auto object-cover" />
            <div className="flex flex-col justify-center items-center gap-3 py-4">
              <p className="font-semibold text-gray-500">All Strings Attached Bangle</p>
              <p className="text-gray-500">50D4FFVCCE1A02</p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets5} alt="Jewelry" className="w-full h-auto object-cover" />
          </div>
        </section>

        <div className="flex justify-center mb-10">
          <button className="uppercase bg-black text-white py-3 px-5 rounded-md border border-black transition-all duration-300 ease-in-out hover:bg-white hover:text-black">
            Shop The Collection
          </button>
        </div>
      </div>

      {/* Section 2 */}
      <div className="">

        {/* Full Image Section*/}
        <section className="">
          <img src={assets6} alt="Collection" className="w-full object-cover" />
        </section>

        {/* Card Image Section */}
        <section className="px-6 py-18 flex flex-wrap gap-4 justify-self-start">
          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets7} alt="Jewelry" className="w-full h-auto object-cover" />
            <div className="flex flex-col justify-center items-center gap-3 py-4">
              <p className="font-semibold text-gray-500">Glitterati Band Hoop Earrings</p>
              <p className="text-gray-500">50D4FFHCOAAA02</p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets8} alt="Jewelry" className="w-full h-auto object-cover" />
            <div className="flex flex-col justify-center items-center gap-3 py-4">
              <p className="font-semibold text-gray-500">Layering Radiance Ring</p>
              <p className="text-gray-500">50D4FFFCCLAA02</p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets9} alt="Jewelry" className="w-full h-auto object-cover" />
            <div className="flex flex-col justify-center items-center gap-3 py-4">
              <p className="font-semibold text-gray-500">All Strings Attached Bangle</p>
              <p className="text-gray-500">50D4FFVCCE1A02</p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets10} alt="Jewelry" className="w-full h-auto object-cover" />
          </div>
        </section>

        <div className="flex justify-center mb-10">
          <button className="uppercase bg-black text-white py-3 px-5 rounded-md border border-black transition-all duration-300 ease-in-out hover:bg-white hover:text-black">
            Shop The Collection
          </button>
        </div>
      </div>

      {/* Section 3 */}
      <div className="">

        {/* Full Image Section*/}
        <section className="">
          <img src={assets11} alt="Collection" className="w-full object-cover" />
        </section>

        {/* Card Image Section */}
        <section className="px-6 py-18 flex flex-wrap gap-4 justify-self-start">
          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets12} alt="Jewelry" className="w-full h-auto object-cover" />
            <div className="flex flex-col justify-center items-center gap-3 py-4">
              <p className="font-semibold text-gray-500">Glitterati Band Hoop Earrings</p>
              <p className="text-gray-500">50D4FFHCOAAA02</p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets13} alt="Jewelry" className="w-full h-auto object-cover" />
            <div className="flex flex-col justify-center items-center gap-3 py-4">
              <p className="font-semibold text-gray-500">Layering Radiance Ring</p>
              <p className="text-gray-500">50D4FFFCCLAA02</p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets14} alt="Jewelry" className="w-full h-auto object-cover" />
            <div className="flex flex-col justify-center items-center gap-3 py-4">
              <p className="font-semibold text-gray-500">All Strings Attached Bangle</p>
              <p className="text-gray-500">50D4FFVCCE1A02</p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets15} alt="Jewelry" className="w-full h-auto object-cover" />
          </div>
        </section>

        <div className="flex justify-center mb-10">
          <button className="uppercase bg-black text-white py-3 px-5 rounded-md border border-black transition-all duration-300 ease-in-out hover:bg-white hover:text-black">
            Shop The Collection
          </button>
        </div>
      </div>

      {/* Section 4 */}
      <div className="">

        {/* Full Image Section*/}
        <section className="">
          <img src={assets16} alt="Collection" className="w-full object-cover" />
        </section>

        {/* Card Image Section */}
        <section className="px-6 py-18 flex flex-wrap gap-4 justify-self-start">
          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets17} alt="Jewelry" className="w-full h-auto object-cover" />
            <div className="flex flex-col justify-center items-center gap-3 py-4">
              <p className="font-semibold text-gray-500">Glitterati Band Hoop Earrings</p>
              <p className="text-gray-500">50D4FFHCOAAA02</p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets18} alt="Jewelry" className="w-full h-auto object-cover" />
            <div className="flex flex-col justify-center items-center gap-3 py-4">
              <p className="font-semibold text-gray-500">Layering Radiance Ring</p>
              <p className="text-gray-500">50D4FFFCCLAA02</p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets19} alt="Jewelry" className="w-full h-auto object-cover" />
            <div className="flex flex-col justify-center items-center gap-3 py-4">
              <p className="font-semibold text-gray-500">All Strings Attached Bangle</p>
              <p className="text-gray-500">50D4FFVCCE1A02</p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets20} alt="Jewelry" className="w-full h-auto object-cover" />
          </div>
        </section>

        <div className="flex justify-center mb-10">
          <button className="uppercase bg-black text-white py-3 px-5 rounded-md border border-black transition-all duration-300 ease-in-out hover:bg-white hover:text-black">
            Shop The Collection
          </button>
        </div>
      </div>

      {/* Section 5 */}
      <div className="">

        {/* Full Image Section*/}
        <section className="">
          <img src={assets21} alt="Collection" className="w-full object-cover" />
        </section>

        {/* Card Image Section */}
        <section className="px-6 py-18 flex flex-wrap gap-4 justify-self-start">
          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets22} alt="Jewelry" className="w-full h-auto object-cover" />
            <div className="flex flex-col justify-center items-center gap-3 py-4">
              <p className="font-semibold text-gray-500">Glitterati Band Hoop Earrings</p>
              <p className="text-gray-500">50D4FFHCOAAA02</p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets23} alt="Jewelry" className="w-full h-auto object-cover" />
            <div className="flex flex-col justify-center items-center gap-3 py-4">
              <p className="font-semibold text-gray-500">Layering Radiance Ring</p>
              <p className="text-gray-500">50D4FFFCCLAA02</p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets24} alt="Jewelry" className="w-full h-auto object-cover" />
            <div className="flex flex-col justify-center items-center gap-3 py-4">
              <p className="font-semibold text-gray-500">All Strings Attached Bangle</p>
              <p className="text-gray-500">50D4FFVCCE1A02</p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets25} alt="Jewelry" className="w-full h-auto object-cover" />
          </div>
        </section>

        <div className="flex justify-center mb-10">
          <button className="uppercase bg-black text-white py-3 px-5 rounded-md border border-black transition-all duration-300 ease-in-out hover:bg-white hover:text-black">
            Shop The Collection
          </button>
        </div>
      </div>

      {/* Section 6 */}
      <div className="">

        {/* Full Image Section*/}
        <section className="">
          <img src={assets26} alt="Collection" className="w-full object-cover" />
        </section>

        {/* Card Image Section */}
        <section className="px-6 py-18 flex flex-wrap gap-4 justify-self-start">
          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets27} alt="Jewelry" className="w-full h-auto object-cover" />
            <div className="flex flex-col justify-center items-center gap-3 py-4">
              <p className="font-semibold text-gray-500">Glitterati Band Hoop Earrings</p>
              <p className="text-gray-500">50D4FFHCOAAA02</p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets28} alt="Jewelry" className="w-full h-auto object-cover" />
            <div className="flex flex-col justify-center items-center gap-3 py-4">
              <p className="font-semibold text-gray-500">Layering Radiance Ring</p>
              <p className="text-gray-500">50D4FFFCCLAA02</p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets29} alt="Jewelry" className="w-full h-auto object-cover" />
            <div className="flex flex-col justify-center items-center gap-3 py-4">
              <p className="font-semibold text-gray-500">All Strings Attached Bangle</p>
              <p className="text-gray-500">50D4FFVCCE1A02</p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets30} alt="Jewelry" className="w-full h-auto object-cover" />
          </div>
        </section>

        <div className="flex justify-center mb-10">
          <button className="uppercase bg-black text-white py-3 px-5 rounded-md border border-black transition-all duration-300 ease-in-out hover:bg-white hover:text-black">
            Shop The Collection
          </button>
        </div>
      </div>

      {/* Section 7 */}
      <div className="">

        {/* Full Image Section*/}
        <section className="">
          <img src={assets31} alt="Collection" className="w-full object-cover" />
        </section>

        {/* Card Image Section */}
        <section className="px-6 py-18 flex flex-wrap gap-4 justify-self-start">
          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets32} alt="Jewelry" className="w-full h-auto object-cover" />
            <div className="flex flex-col justify-center items-center gap-3 py-4">
              <p className="font-semibold text-gray-500">Glitterati Band Hoop Earrings</p>
              <p className="text-gray-500">50D4FFHCOAAA02</p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets33} alt="Jewelry" className="w-full h-auto object-cover" />
            <div className="flex flex-col justify-center items-center gap-3 py-4">
              <p className="font-semibold text-gray-500">Layering Radiance Ring</p>
              <p className="text-gray-500">50D4FFFCCLAA02</p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets34} alt="Jewelry" className="w-full h-auto object-cover" />
            <div className="flex flex-col justify-center items-center gap-3 py-4">
              <p className="font-semibold text-gray-500">All Strings Attached Bangle</p>
              <p className="text-gray-500">50D4FFVCCE1A02</p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets35} alt="Jewelry" className="w-full h-auto object-cover" />
          </div>
        </section>

        <div className="flex justify-center mb-10">
          <button className="uppercase bg-black text-white py-3 px-5 rounded-md border border-black transition-all duration-300 ease-in-out hover:bg-white hover:text-black">
            Shop The Collection
          </button>
        </div>
      </div>

      {/* Section 8 */}
      <div className="">

        {/* Full Image Section*/}
        <section className="">
          <img src={assets36} alt="Collection" className="w-full object-cover" />
        </section>

        {/* Card Image Section */}
        <section className="px-6 py-18 flex flex-wrap gap-4 justify-self-start">
          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets37} alt="Jewelry" className="w-full h-auto object-cover" />
            <div className="flex flex-col justify-center items-center gap-3 py-4">
              <p className="font-semibold text-gray-500">Glitterati Band Hoop Earrings</p>
              <p className="text-gray-500">50D4FFHCOAAA02</p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets38} alt="Jewelry" className="w-full h-auto object-cover" />
            <div className="flex flex-col justify-center items-center gap-3 py-4">
              <p className="font-semibold text-gray-500">Layering Radiance Ring</p>
              <p className="text-gray-500">50D4FFFCCLAA02</p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets39} alt="Jewelry" className="w-full h-auto object-cover" />
            <div className="flex flex-col justify-center items-center gap-3 py-4">
              <p className="font-semibold text-gray-500">All Strings Attached Bangle</p>
              <p className="text-gray-500">50D4FFVCCE1A02</p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets40} alt="Jewelry" className="w-full h-auto object-cover" />
          </div>
        </section>

        <div className="flex justify-center mb-10">
          <button className="uppercase bg-black text-white py-3 px-5 rounded-md border border-black transition-all duration-300 ease-in-out hover:bg-white hover:text-black">
            Shop The Collection
          </button>
        </div>
      </div>

      {/* Section 9 */}
      <div className="">

        {/* Full Image Section*/}
        <section className="">
          <img src={assets41} alt="Collection" className="w-full object-cover" />
        </section>

        {/* Card Image Section */}
        <section className="px-6 py-18 flex flex-wrap gap-4 justify-self-start">
          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets42} alt="Jewelry" className="w-full h-auto object-cover" />
            <div className="flex flex-col justify-center items-center gap-3 py-4">
              <p className="font-semibold text-gray-500">Glitterati Band Hoop Earrings</p>
              <p className="text-gray-500">50D4FFHCOAAA02</p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets43} alt="Jewelry" className="w-full h-auto object-cover" />
            <div className="flex flex-col justify-center items-center gap-3 py-4">
              <p className="font-semibold text-gray-500">Layering Radiance Ring</p>
              <p className="text-gray-500">50D4FFFCCLAA02</p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets44} alt="Jewelry" className="w-full h-auto object-cover" />
            <div className="flex flex-col justify-center items-center gap-3 py-4">
              <p className="font-semibold text-gray-500">All Strings Attached Bangle</p>
              <p className="text-gray-500">50D4FFVCCE1A02</p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets45} alt="Jewelry" className="w-full h-auto object-cover" />
          </div>
        </section>

        <div className="flex justify-center mb-10">
          <button className="uppercase bg-black text-white py-3 px-5 rounded-md border border-black transition-all duration-300 ease-in-out hover:bg-white hover:text-black">
            Shop The Collection
          </button>
        </div>
      </div>

      {/* Section 10 */}
      <div className="">

        {/* Full Image Section*/}
        <section className="">
          <img src={assets46} alt="Collection" className="w-full object-cover" />
        </section>

        {/* Card Image Section */}
        <section className="px-6 py-18 flex flex-wrap gap-4 justify-self-start">
          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets47} alt="Jewelry" className="w-full h-auto object-cover" />
            <div className="flex flex-col justify-center items-center gap-3 py-4">
              <p className="font-semibold text-gray-500">Glitterati Band Hoop Earrings</p>
              <p className="text-gray-500">50D4FFHCOAAA02</p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets48} alt="Jewelry" className="w-full h-auto object-cover" />
            <div className="flex flex-col justify-center items-center gap-3 py-4">
              <p className="font-semibold text-gray-500">Layering Radiance Ring</p>
              <p className="text-gray-500">50D4FFFCCLAA02</p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets49} alt="Jewelry" className="w-full h-auto object-cover" />
            <div className="flex flex-col justify-center items-center gap-3 py-4">
              <p className="font-semibold text-gray-500">All Strings Attached Bangle</p>
              <p className="text-gray-500">50D4FFVCCE1A02</p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets50} alt="Jewelry" className="w-full h-auto object-cover" />
          </div>
        </section>
        <div className="flex justify-center mb-10">
          <button className="uppercase bg-black text-white py-3 px-5 rounded-md border border-black transition-all duration-300 ease-in-out hover:bg-white hover:text-black">
            Shop The Collection
          </button>
        </div>
      </div>

      {/* Section 11 */}
      <div className="">

        {/* Full Image Section*/}
        <section className="">
          <img src={assets51} alt="Collection" className="w-full object-cover" />
        </section>

        {/* Card Image Section */}
        <section className="px-6 py-18 flex flex-wrap gap-4 justify-self-start">
          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets52} alt="Jewelry" className="w-full h-auto object-cover" />
            <div className="flex flex-col justify-center items-center gap-3 py-4">
              <p className="font-semibold text-gray-500">Glitterati Band Hoop Earrings</p>
              <p className="text-gray-500">50D4FFHCOAAA02</p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets53} alt="Jewelry" className="w-full h-auto object-cover" />
            <div className="flex flex-col justify-center items-center gap-3 py-4">
              <p className="font-semibold text-gray-500">Layering Radiance Ring</p>
              <p className="text-gray-500">50D4FFFCCLAA02</p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets54} alt="Jewelry" className="w-full h-auto object-cover" />
            <div className="flex flex-col justify-center items-center gap-3 py-4">
              <p className="font-semibold text-gray-500">All Strings Attached Bangle</p>
              <p className="text-gray-500">50D4FFVCCE1A02</p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets55} alt="Jewelry" className="w-full h-auto object-cover" />
          </div>
        </section>

        <div className="flex justify-center mb-10">
          <button className="uppercase bg-black text-white py-3 px-5 rounded-md border border-black transition-all duration-300 ease-in-out hover:bg-white hover:text-black">
            Shop The Collection
          </button>
        </div>
      </div>

      {/* Section 12 */}
      <div className="">

        {/* Full Image Section*/}
        <section className="">
          <img src={assets56} alt="Collection" className="w-full object-cover" />
        </section>

        {/* Card Image Section */}
        <section className="px-6 py-18 flex flex-wrap gap-4 justify-self-start">
          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets57} alt="Jewelry" className="w-full h-auto object-cover" />
            <div className="flex flex-col justify-center items-center gap-3 py-4">
              <p className="font-semibold text-gray-500">Glitterati Band Hoop Earrings</p>
              <p className="text-gray-500">50D4FFHCOAAA02</p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets58} alt="Jewelry" className="w-full h-auto object-cover" />
            <div className="flex flex-col justify-center items-center gap-3 py-4">
              <p className="font-semibold text-gray-500">Layering Radiance Ring</p>
              <p className="text-gray-500">50D4FFFCCLAA02</p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets59} alt="Jewelry" className="w-full h-auto object-cover" />
            <div className="flex flex-col justify-center items-center gap-3 py-4">
              <p className="font-semibold text-gray-500">All Strings Attached Bangle</p>
              <p className="text-gray-500">50D4FFVCCE1A02</p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets60} alt="Jewelry" className="w-full h-auto object-cover" />
          </div>
        </section>

        <div className="flex justify-center mb-10">
          <button className="uppercase bg-black text-white py-3 px-5 rounded-md border border-black transition-all duration-300 ease-in-out hover:bg-white hover:text-black">
            Shop The Collection
          </button>
        </div>
      </div>

      {/* Section 13 */}
      <div className="">

        {/* Full Image Section*/}
        <section className="">
          <img src={assets61} alt="Collection" className="w-full object-cover" />
        </section>

        {/* Card Image Section */}
        <section className="px-6 py-18 flex flex-wrap gap-4 justify-self-start">
          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets62} alt="Jewelry" className="w-full h-auto object-cover" />
            <div className="flex flex-col justify-center items-center gap-3 py-4">
              <p className="font-semibold text-gray-500">Glitterati Band Hoop Earrings</p>
              <p className="text-gray-500">50D4FFHCOAAA02</p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets63} alt="Jewelry" className="w-full h-auto object-cover" />
            <div className="flex flex-col justify-center items-center gap-3 py-4">
              <p className="font-semibold text-gray-500">Layering Radiance Ring</p>
              <p className="text-gray-500">50D4FFFCCLAA02</p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets64} alt="Jewelry" className="w-full h-auto object-cover" />
            <div className="flex flex-col justify-center items-center gap-3 py-4">
              <p className="font-semibold text-gray-500">All Strings Attached Bangle</p>
              <p className="text-gray-500">50D4FFVCCE1A02</p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] max-w-[400px] rounded border border-gray-400 shadow-lg">
            <img src={assets65} alt="Jewelry" className="w-full h-auto object-cover" />
          </div>
        </section>

        <div className="flex justify-center mb-10">
          <button className="uppercase bg-black text-white py-3 px-5 rounded-md border border-black transition-all duration-300 ease-in-out hover:bg-white hover:text-black">
            Shop The Collection
          </button>
        </div>
      </div>

    </div>
  );
}

export default Collection;