import React from "react";

function Formmodal({ item }) {
  return (
    <>
      <div>
        <dialog id="detail_modal" className="modal">
          <div className="modal-box">
            <h3 className="font-bold  font-inter text-xl">{item?.title}</h3>
            <p className="py-4">{item?.about}</p>
            <p className="text-blue-500">
              For this form we need some documents-
            </p>
            <h1 className="text-red-500">{item?.document}</h1>{" "}
            <h1 className="text-2xl mt-8 font-inter text-green-600">
              Price ₹{item?.price}{" "}
            </h1>
            <h1 className="text-2xl mt-6 font-inter text-blue-500">
              Call Now - 7985500628
            </h1>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Formmodal;
