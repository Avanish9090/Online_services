import React from "react";
import Slider from "react-slick";
import Servicecard from "./Servicecard";
import useResponsiveSlides from "../hooks/useResponsiveSlides";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Services() {
  const URL = "https://prince-online-services.onrender.com";
  const [loading , setLoading] = useState(true)
  const slidesToShow = useResponsiveSlides();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllproducts = async () => {
      try {
        const res = await axios.get(`${URL}/all-products`);
        const data = res.data.products;
        setProducts(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getAllproducts();
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };
  return (
    <>
      <section
        id="products"
        className="x-full bg-slate-20 h-fit flex flex-col justify-center items-center px-4 py-10 lg:px-20 lg:py-20 gap-6"
      >
        <h1 className="text-center text-5xl font-headings mt-20">
          <span className="text-red-500">P</span>
          roducts{" "}
        </h1>
        <h1 className="text-center text-slate-500">
          Services that are provided by us with best quality products
        </h1>
        <div className="w-full max-w-full px-2">
          {loading ? (
            <div className="flex justify-center items-center">
                <button
                type="button"
                className="flex items-center bg-blue-200 text-white font-medium py-2 px-4 rounded disabled:opacity-50"
                disabled
              >
                <svg
                  className="mr-2 h-5 w-5 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Processing…
              </button>
              </div>
          ):(
             <Slider {...settings}>
              {products.map((item, index) => (
                <Servicecard item={item} key={index} />
              ))}
            </Slider>
          )}
        </div>
      </section>
    </>
  );
}

export default Services;
