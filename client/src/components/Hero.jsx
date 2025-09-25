import React from "react";
import Banner from "../assets/images/hero.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

function Hero() {
  return (
    <>
      <div className="max-w-screen-2*1 container gap-2 mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full md:w-1/2  order-2 md:order-1 ">
          <h1 className="font-headings text-red-500">
            -- Known for quality services
          </h1>
          <h1 className="font-inter text-7xl">
            Prince Online{" "}
            <span className="text-blue-800">Stetionary & Services !</span>
          </h1>
          <h1 className="text-xl text-gray-600 mt-4">
            All Your Daily Needs — From Mobiles to Tickets, in One Place!
            Complete Digital & Daily Services Under One Roof.
          </h1>
          <div className="mt-10">
            <button className="btn btn-outline font-bold btn-primary md:w-50 h-15 w-full rounded-4xl text-white bg-blue-500">
              Explore Now <FaArrowRightLong />
            </button>
            <button
              className="btn btn-outline btn-primary md:ml-5 mt-5 md:mt-0 md:w-50 h-15 w-full rounded-4xl"
              onClick={() =>
                window.open(
                  `https://wa.me/7985500628?text=${encodeURIComponent(
                    "Hi there!"
                  )}`,
                  "_blank"
                )
              }
            >
              Whatsapp Us
            </button>
          </div>
          <div className="flex mt-8">
            <div className="text-center">
              <h1 className="text-4xl text-blue-800">200+</h1>
              <h2 className="text-slate-500">Products</h2>
            </div>
            <div className="text-center ml-10">
              <h1 className="text-4xl text-blue-800">100+</h1>
              <h2 className="text-slate-500">Quality</h2>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 order-1">
          <div className=" bg-white rounded-xl shadow-2xl overflow-hidden">
            <img src={Banner} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
