import React from "react";

function Reviewcard({ item }) {
  return (
    <>
      <div className=" m-4">
        <div className="card card-border bg-base-100 w-80 shadow-2xl hover:scale-105 duration-200 ">
          <div className="card-body">
            <div className="rating">
              <div className="mask mask-star" aria-label="1 star"></div>
              <div className="mask mask-star " aria-label="2 star"></div>
              <div className="mask mask-star " aria-label="3 star"></div>
              <div className="mask mask-star " aria-label="4 star"></div>
              <div
                className="mask mask-star"
                aria-label="5 star"
                aria-current="true"
              ></div>
            </div>
            <p className="text-xl">"{item.says} ! "</p>
            <div className="card-actions justify-end">
              <h1 className="text-xl font-bold text-blue-500">-{item.name}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviewcard;
