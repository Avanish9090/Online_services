import axios from "axios";
import React, { useState, useEffect } from "react";

function Feedback() {
  const URL = "http://localhost:3000";
  const [msg, setMsg] = useState("");
  const [msg1, setMsg1] = useState("");
  const [fData, setFdata] = useState({
    title: "",
    about: "",
    document: "",
    price: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;

    let oldData = { ...fData };
    oldData[name] = value;
    setFdata(oldData);
  };
  useEffect(() => {
    if (msg) {
      const timer = setTimeout(() => {
        setMsg("");
      }, 2000);

      return () => clearTimeout(timer); //
    }
  }, [msg]);

  const handleSubmit = () => {
    if (
      fData.title == "" ||
      fData.about == "" ||
      fData.document == "" ||
      fData.price == ""
    ) {
      setMsg("Oops!fill all the feild");
      return;
    }

    if (fData.about.split(" ").filter((w) => w.trim() !== "").length <= 4) {
      setMsg("Please ! Atleast five words");
      return;
    }

    try {
      axios.post(`${URL}/form-details`, fData);
      setMsg1("Data Uploded successfully 😊");
      setFdata({
        title: "",
        about: "",
        document: "",
        price: "",
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div>
        <dialog id="form_modal" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <div className=" flex flex-col items-center justify-center border border-gray-100 rounded shadow-lg  bg-white  space-y-3 text-left">
              <h1 className="text-2xl font-bold text-blue-500">Upload</h1>
              <p className="text-xl text-red-500 ">{msg}</p>
              <p className="text-xl text-green-500 ">{msg1}</p>
              <h1 className="text-xl my-1">Title:</h1>
              <input
                type="text"
                name="title"
                value={fData.title}
                onChange={handleChange}
                placeholder="Enter your text"
                className="input input-neutral"
              />

              <h1 className="text-xl mt-1">About:</h1>
              <textarea
                type="text"
                name="about"
                value={fData.about}
                onChange={handleChange}
                placeholder="Enter your text"
                className="input input-neutral h-20"
              />
              <h1 className="text-xl mt-1">Documents:</h1>
              <textarea
                type="text"
                name="document"
                value={fData.document}
                onChange={handleChange}
                placeholder="Enter your text"
                className="input input-neutral h-20"
              />

              <h1 className="text-xl mt-1">Price:</h1>
              <input
                type="text"
                name="price"
                value={fData.price}
                onChange={handleChange}
                placeholder="in rupee"
                className="input input-neutral"
              />
              <br />
            </div>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn border-black">close</button>
              </form>
              <button className="btn mr-2 border-black" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Feedback;
