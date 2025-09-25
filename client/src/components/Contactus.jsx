import React, { useRef, useState } from "react";
import send from "../assets/icons/send.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { ImStopwatch } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { FiYoutube } from "react-icons/fi";
import { CiFacebook } from "react-icons/ci";
import axios from "axios";

function Contactus() {
  const URL = "http://localhost:3000";
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [contData, setContData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const addressRef = useRef(null);
  const messageRef = useRef(null);

  const refs = {
    name: nameRef,
    email: emailRef,
    phone: phoneRef,
    address: addressRef,
    message: messageRef,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    let oldData = { ...contData };
    oldData[name] = value;
    setContData(oldData);
  };

  const handleSubmit = () => {
    for (let key in contData) {
      if (!contData[key].trim()) {
        setError(`please enter ${key}`);
        refs[key].current.focus();
        return;
      }
    }

    setError("");
    if (contData.phone.length < 10) {
      setError("Invalid number or empty");
      return;
    }
    setError("");
    axios.post(`${URL}/upload-contact`, contData);
    setContData({
      name: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    });
    setSuccess("Message has been sent !");
    setTimeout(() => {
      setSuccess("");
    }, 4000);
  };

  return (
    <>
      <div id="contact">
        <h1 className="text-center text-5xl font-headings mt-20">
          <span className="text-red-500">G</span>et{" "}
          <span className="text-red-500">I</span>n
          <span className="text-red-500">T</span>ouch
        </h1>
        <h1 className="text-center text-slate-500">
          Have questions or need a custom quote? We're here to help!
        </h1>
        <div className="max-w-screen-2*1 container gap-5 mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
          <div className="w-full md:w-1/2  order-2 md:order-1 shadow-lg bg-white rounded-3xl">
            <div className="mx-10">
              {success && (
                <div role="alert" className="alert alert-success mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 shrink-0 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{success}</span>
                </div>
              )}
              {error && (
                <div role="alert" className="alert alert-error mt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 shrink-0 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{error}</span>
                </div>
              )}
              <h1 className="text-3xl font-bold my-10">Send us a message</h1>
              <label className="label font-bold mb-2">Full name</label>
              <input
                type="text"
                name="name"
                ref={nameRef}
                onChange={handleChange}
                placeholder="Name"
                className="input input-lg w-full rounded-2xl mb-5"
                required
              />

              <label className="label font-bold mb-2">Email Address</label>
              <input
                type="text"
                name="email"
                ref={emailRef}
                onChange={handleChange}
                placeholder="example123@gmail.com"
                className="input input-lg w-full rounded-2xl mb-5"
                required
              />

              <label className="label font-bold mb-2">Phone Number</label>
              <input
                type="number"
                name="phone"
                ref={phoneRef}
                onChange={handleChange}
                placeholder="+91 ********28"
                className="input input-lg w-full rounded-2xl mb-5"
                required
              />

              <label className="label font-bold mb-2">Address</label>
              <input
                type="text"
                name="address"
                ref={addressRef}
                onChange={handleChange}
                placeholder="address"
                className="input input-lg w-full mb-5 rounded-2xl"
                required
              />

              <label className="label font-bold mb-2">Message</label>
              <textarea
                type="text"
                name="message"
                ref={messageRef}
                onChange={handleChange}
                placeholder="Tell us about your requirements...."
                className="input input-lg w-full rounded-2xl mb-5 h-25"
                required
              />
              <button
                class="btn btn-primary h-14 rounded-2xl text-xl w-full mb-10"
                onClick={handleSubmit}
              >
                <img src={send} alt="" />
                Send message
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1 bg-blue-600 rounded-2xl">
            <div className="mx-10 mb-10">
              <h1 className="text-3xl font-bold my-10 text-white">
                Contact information
              </h1>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500 text-2xl  md:mb-14 mb-22" />
                <div>
                  <h1 className="text-white text-xl font-bold">Address</h1>
                  <p className="text-white text-xl">
                    Ramleela mandir Ghoorpur thana Rewa road Prayagraj Uttar
                    pradesh 212107
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-10">
                <FaPhoneAlt className="text-red-500 text-2xl mb-6" />
                <div>
                  <h1 className="text-white text-xl font-bold">Phone</h1>
                  <p className="text-white text-xl">
                    +91 7081507239 , +91 7985500628
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-10">
                <HiOutlineMailOpen className="text-red-500 text-3xl mb-6" />
                <div>
                  <h1 className="text-white text-xl font-bold">
                    Email address
                  </h1>
                  <p className="text-white text-xl">
                    princejais2782000@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-10">
                <ImStopwatch className="text-red-500 text-3xl mb-6" />
                <div>
                  <h1 className="text-white text-xl font-bold">
                    Business Hour
                  </h1>
                  <p className="text-white text-xl">
                    Mon - Sun: 7:00 AM - 10:00 PM
                  </p>
                </div>
              </div>
              <h1 className="text-white text-xl font-bold mt-5">Follow us</h1>
              <div className="mt-4 flex items-center gap-4">
                <a className="text-3xl hover:text-pink-500 " href="">
                  <BsInstagram />
                </a>

                <a className="text-3xl hover:text-red-500" href="">
                  <FiYoutube />
                </a>

                <a className="text-3xl hover:text-blue-300" href="">
                  <CiFacebook />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactus;
