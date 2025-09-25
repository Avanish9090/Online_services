import React from "react";
import Slider from "react-slick";
import cr1 from "../assets/images/w1.jpg";
import cr2 from "../assets/images/w2.jpg";
import cr3 from "../assets/images/w3.jpg";

function Corner() {
  const images = [cr1, cr2, cr3];

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <div>
        <h1 className="text-center text-5xl font-headings mt-20">
          <span className="text-red-500">W</span>eddings{" "}
          <span className="text-red-500">S</span>ervices
        </h1>
        <h1 className="text-center text-slate-500">
          Make you wedding ceremony special
        </h1>
        <div className="max-w-screen-2*1 container gap-2 mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
          <div className="  w-full md:w-1/2 order-1 md:mr-5 pr-4">
            <Slider {...settings}>
              {images.map((img, index) => (
                <div key={index}>
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-96 object-cover rounded-md"
                  />
                </div>
              ))}
            </Slider>
          </div>

          <div className="w-full md:w-1/2  order-2 md:order-1">
            <h1 className="font-headings text-red-500">
              -- Make memories with us
            </h1>
            <h1 className="font-inter text-7xl">
              Wedding Food Counter{" "}
              <span className="text-blue-800"> & Services !</span>
            </h1>
            <h1 className="text-xl text-gray-600 mt-4">
              We have best team for managing the counters and services related
              to your funtion ceremony. We provide you best product under you
              budget.Contact us for -
            </h1>
            <br />
            <div className="grid grid-cols-4 gap-2">
              <button className="btn btn-outline btn-primary">Counter</button>
              <button className="btn btn-outline btn-primary">Popcorn</button>
              <button className="btn btn-outline btn-primary">Ice Cream</button>
              <button className="btn btn-outline btn-primary">Tea Stal</button>
              <button className="btn btn-outline btn-primary">Stage</button>
              <button className="btn btn-outline btn-primary">Floar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Corner;
