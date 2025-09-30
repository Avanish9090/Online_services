import { useState } from "react";
import Formmodal from "./Formmodal";
import axios from "axios";
import { useEffect } from "react";

function Onlineform() {
  const URL = "https://prince-online-services.onrender.com";
  const [loading , setLoading] = useState(true);
  const [selectedItem, setselectedItem] = useState(null);
  const [form, setForm] = useState([]);

  useEffect(() => {
    const getallForms = async () => {
      try {
        let res = await axios.get(`${URL}/get-formdetails`);
        let data = res.data.details;
        setForm(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false)
    };

    getallForms();
  }, []);

  const openmodal = (item) => {
    setselectedItem(item);
    document.getElementById("detail_modal").showModal();
  };

  return (
    <>
      <div id="services">
        <h1 className="text-center text-5xl font-headings mt-20">
          <span className="text-red-500">O</span>nline{" "}
          <span className="text-red-500">F</span>orms &
          <span className="text-red-500">T</span>ickets
        </h1>
        <h1 className="text-center text-slate-500">
          We fill all type of online forms and book all india tickets
        </h1>
        <div className=" mt-15 grid md:grid-cols-6 grid-cols-2 gap-2 md:mx-20">
          {
            loading ? (
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
            ) : (
              form.map((item) => (
            <button
              className="btn btn-success w-30 h-12 rounded-xl mx-5 my-4"
              onClick={() => {
                openmodal(item);
              }}
            >
              {item.title}
            </button>
          ))
            )
          }
          
        </div>
        <Formmodal item={selectedItem} />
      </div>
    </>
  );
}

export default Onlineform;
