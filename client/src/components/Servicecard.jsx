import React from "react";

function Servicecard({ item }) {
  return (
    <div
      id="slider-boxes"
      className="px-4 py-6 rounded-xl flex flex-col justify-center items-center border-b-[8px] border-blue-400"
    >
      <div className="card bg-blue-200 w-full max-w-[280px] transform transition-transform duration-300 hover:scale-105">
        <figure className="mt-5">
          <img
            src={item.path}
            alt="sweet"
            className="w-[100px] h-[100px] rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-inter text-lg">{item.title}</h2>
          <p className="text-sm text-gray-600">{item.about}</p>
          <div className="card-actions mt-4">
            <button className="btn btn-outline btn-primary rounded-2xl">
              Price ₹{item.price}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicecard;
