import React, { useState } from "react";
import Profile from "../assets/images/p-profile.jpg";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function Login() {
  const Navigate = useNavigate();
  const [logData, setLogdata] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    let oldData = { ...logData };
    oldData[name] = value;
    setLogdata(oldData);
  };
  const handleLogin = () => {
    if (
      logData.email === "princejais2782000@gmail.com" &&
      logData.password === "prince@123"
    ) {
      localStorage.setItem("token", "dummy-token");
      toast.success("Successfully login!");
      Navigate("/latest");
      return;
    }
    alert("not autherized");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Toaster />
      <img
        className="h-30 w-30 rounded-full border-1 border-blue-600 shadow-lg"
        src={Profile}
        alt="profile"
      />
      <h1 className="text-3xl font-inter text-red-600">Welcome Admin!</h1>
      <h1 className="text-2xl text-slate-500">Login Please</h1>
      <div className="mt-10">
       
          <h1 className="text-xl mb-1">Email</h1>
          <input
            type="text"
            name="email"
            value={logData.email}
            onChange={handleChange}
            placeholder="example@123"
            className="border-1 w-80 h-10 rounded-xl pl-2"
            required
          />

          <h1 className="text-xl mb-1 mt-3">Password</h1>
          <input
            type="password"
            name="password"
            value={logData.password}
            onChange={handleChange}
            placeholder="password"
            className="border-1 w-80 h-10 rounded-xl pl-2"
            required
          />

          <br />
          <button
           onClick={handleLogin}
            className="text-xl border-1 w-80 h-10 mt-5 rounded-xl bg-blue-400 hover:bg-blue-300"
          >
            Login
          </button>
  
      </div>
    </div>
  );
}

export default Login;
