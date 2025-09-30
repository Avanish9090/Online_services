import Slider from "react-slick";
import axios from "axios";
import { useEffect, useState } from "react";

function Latest() {
  const URL = "https://prince-online-services.onrender.com";
  const [loading , setLoading] = useState(true);
  const [banner, setBaners] = useState([]);

  useEffect(() => {
    const getBanner = async () => {
      try {
        const res = await axios.get(`${URL}/banners`);
        const item = res.data.items;
        setBaners(item);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    getBanner();
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
  };
  return (
    <>
      <div className="mt-40">
        <h1 className="text-center text-5xl font-headings ">
          <span className="text-red-500">L</span>atest{" "}
          <span className="text-red-500">U</span>pdates
        </h1>
        <h1 className="text-center text-slate-500">
          The Latest and updated events for our customers
        </h1>
        <div className="md:mx-25 mx-10 mt-4 ">
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
            {banner.map((item) => (
              <img className="h-80" src={item.path} alt="banner" />
            ))}
          </Slider>
          )
          }
        </div>
      </div>
    </>
  );
}

export default Latest;
