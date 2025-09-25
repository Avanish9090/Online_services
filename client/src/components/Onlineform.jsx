import { useState } from "react";
import Formmodal from "./Formmodal";
import axios from "axios";
import { useEffect } from "react";

function Onlineform() {
  const URL = "http://localhost:3000";
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
      }
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
        <div className=" mt-15 grid md:grid-cols-7 grid-cols-3 gap-2 md:mx-20">
          {form.map((item) => (
            <button
              className="btn btn-success w-30 h-12 rounded-xl mx-5 my-4"
              onClick={() => {
                openmodal(item);
              }}
            >
              {item.title}
            </button>
          ))}
        </div>
        <Formmodal item={selectedItem} />
      </div>
    </>
  );
}

export default Onlineform;
