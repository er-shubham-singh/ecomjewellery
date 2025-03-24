import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faComment,
  faAppleAlt,
 
  
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import { SiGoogleplay } from "react-icons/si";


export default function Footer() {
  return (
    <div className="bg-orange-100">
      <div className="max-w-[1200px] lg:mx-auto mx-3 pt-5 pb-5">
        <div className="lg:flex lg:justify-between md:grid md:grid-cols-2 gap-7  pb-7">
          <div className="">
            <h2 className="text-xl text-orange-900 font-medium capitalize lg:pb-7 pb-3 pt-10 sm:pt-0">
              useful links
            </h2>
            <ul className="flex flex-col lg:gap-y-7  gap-y-3  ">
              <li>
                <a href="">Delivery Information</a>
              </li>
              <li>
                <a href="">International Shipping</a>
              </li>
              <li>
                <a href="">Payment Options</a>
              </li>
              <li>
                <a href="">Track your Order</a>
              </li>
              <li>
                <a href="">Return</a>
              </li>
              <li>
                <a href="">Find a Store</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl text-orange-900 font-medium capitalize lg:pb-7 pb-3 pt-10 sm:pt-0 ">
              Information
            </h2>
            <ul className="flex flex-col lg:gap-y-7  gap-y-3  ">
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Offers & Contest Details</a>
              </li>
              <li>
                <a href="">Help & FAQs</a>
              </li>
              <li>
                <a href="">About Tanishq</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl text-orange-900 font-medium capitalize lg:pb-7 pb-3 pt-10 sm:pt-0">
              {" "}
              Contact Us
            </h2>
            <ul className="flex flex-col lg:gap-y-7  gap-y-3 ">
              <li>
                <a href="mailto:exampal@1.com">
                  <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>{" "}
                  exampal@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:0987654321">
                  <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> 98765432148
                </a>
              </li>
              <li>
                <a href="" className="capitalize">
                  <FontAwesomeIcon icon={faComment}></FontAwesomeIcon> chet with
                  us
                </a>
              </li>
            </ul>
            <div className="md:flex  gap-7 pt-5 lg:hidden hidden  ">
                <button className="flex  items-center gap-3 bg-black px-3 py-1 rounded-lg my-2">
                  <div>
                    <FontAwesomeIcon
                      icon={faAppleAlt}
                      className="text-2xl text-white"
                    ></FontAwesomeIcon>
                  </div>
                  <div className="">
                    <p className="text-white text-[0.6rem]">Download on the</p>
                    <p className="text-white text-[1rem] top-0">Apple Store</p>
                  </div>
                </button>
                <button className="flex  items-center gap-3 bg-black px-3 py-1 rounded-lg my-2">
                  <div>
                    <SiGoogleplay
                      icon={SiGoogleplay}
                      className="text-2xl text-white"
                    />
                  </div>
                  <div>
                    <p className="text-white text-[0.6rem]">Download on the</p>
                    <p className="text-white text-[1rem] top-0">play Store</p>
                  </div>
                </button>
              </div>
          </div>

          <div className="justify-self-center md:justify-self-auto pt-7 sm:pt-0">
            <div className=" block  ">
              <p className="text-xl font-medium capitalize ">
                Download the  App Now
              </p>
              <div className="pt-2">
                <img
                  src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw0fa1b94a/images/footer/tanishq-app-QR-code.svg"
                  alt=""
                  className="bg-black "
                />
              </div>
            </div>

            <div>
              <div className="lg:flex  gap-7 pt-5 md:hidden  ">
                <button className="flex  items-center gap-3 bg-black px-3 py-1 rounded-lg my-2">
                  <div>
                    <FontAwesomeIcon
                      icon={faAppleAlt}
                      className="text-2xl text-white"
                    ></FontAwesomeIcon>
                  </div>
                  <div className="">
                    <p className="text-white text-[0.6rem]">Download on the</p>
                    <p className="text-white text-[1rem] top-0">Apple Store</p>
                  </div>
                </button>
                <button className="flex  items-center gap-3 bg-black px-3 py-1 rounded-lg my-2">
                  <div>
                  <SiGoogleplay
                      icon={SiGoogleplay}
                      className="text-2xl text-white"
                    />
                  </div>
                  <div>
                    <p className="text-white text-[0.6rem]">Download on the</p>
                    <p className="text-white text-[1rem] top-0">play Store</p>
                  </div>
                </button>
              </div>
              <div className="pt-5 hidden lg:block">
                <p className=" text-xl font-medium capitalize  ">
                  Follow Us On
                </p>
                <div className="flex gap-3 py-2">
               <div>
                  <a href=""><i className="fa-brands fa-facebook  text-2xl" ></i></a>
                </div>
                <div>
                  <a href=""><i class="fa-brands fa-instagram text-2xl"></i></a>
                </div>
                <div>
                  <a href=""><i class="fa-brands fa-linkedin text-2xl"></i></a>
                </div>
               </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-2  lg:hidden justify-items-center">
                <p className=" text-xl font-medium capitalize  ">
                  Follow Us On
                </p>
               <div className="flex gap-3 py-2">
               <div>
                  <a href=""><i className="fa-brands fa-facebook  text-2xl" ></i></a>
                </div>
                <div>
                  <a href=""><i class="fa-brands fa-instagram text-2xl"></i></a>
                </div>
                <div>
                  <a href=""><i class="fa-brands fa-linkedin text-2xl"></i></a>
                </div>
               </div>
              </div>
        
        <hr className="lg:block hidden" />
        <div className="pt-4 text-center text-orange-900">
          <p>© 2025 Titan Company Limited. All Rights Reserved.</p>
          <div className="flex  justify-self-center gap-7 text-orange-900 pt-1">
            <a href="">Terms & Conditions</a>
            <a href="">Privacy Policy</a>
            <a href="">Disclaimer</a>
          </div>
        </div>
      </div>
    </div>
  );
}