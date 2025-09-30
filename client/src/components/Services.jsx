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
            <p className="text-center text-xl font-semibold">Loading..Please wait.</p>
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
