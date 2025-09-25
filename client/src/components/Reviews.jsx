import React from "react";
import Slider from "react-slick";
import Reviewcard from "./Reviewcard";
import Feedback from "./Feedback";
import Responsive from "../hooks/useResponsiveSlides";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Reviews() {
  const URL = "http://localhost:3000";
  const handleslide = Responsive();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getAllReviews = async () => {
      let res = await axios.get(`${URL}/all-reviews`);
      let data = res.data.reviews;
      setReviews(data);
    };
    getAllReviews();
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: handleslide,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };
  return (
    <>
      <div>
        <h1 className="text-center text-5xl font-headings mt-20">
          <span className="text-red-500">C</span>ustomer{" "}
          <span className="text-red-500">R</span>eviews
        </h1>
        <h1 className="text-center text-slate-500">
          Read testimonials from our satisfied customers and add yours
        </h1>
        <div className=" rounded shadow-lg   my-3 p-2 md:mx-3">
          <div className="py-5">
            <Slider {...settings}>
              {reviews.map((item) => (
                <Reviewcard item={item} key={item.id} />
              ))}
            </Slider>
          </div>

          <div className="flex items-center justify-center mt-8">
            <button
              className="btn btn-outline btn-primary md:w-50 h-15 w-full rounded-4xl"
              onClick={() => {
                document.getElementById("feedback_modal").showModal();
              }}
            >
              Add response +
            </button>
          </div>
          <Feedback />
        </div>
      </div>
    </>
  );
}

export default Reviews;
