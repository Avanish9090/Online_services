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
        setLoading(true);
    };
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
          {loading ? ( <p className="text-center text-xl font-semibold">
              Loading..Please wait
            </p>
          ):(
      <Slider {...settings}>
            {banner.map((item) => (
              <img className="h-80" src={item.path} alt="banner" />
            ))}
          </Slider>
          )
          
        </div>
      </div>
    </>
  );
}

export default Latest;
