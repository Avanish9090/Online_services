import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

function Review() {
  const URL = "http://localhost:3000";
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getAllreviews = async () => {
      let res = await axios.get(`${URL}/all-reviews`);
      let data = res.data.reviews;
      setReviews(data);
    };
    getAllreviews();
  }, []);
  return (
    <>
      <div>
        <Navbar />
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr className="text-xl">
                <th></th>
                <th>Name</th>
                <th>Says</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((item, index) => {
                return (
                  <tr className="text-xl">
                    <th>{index + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.says}</td>
                    <th>
                      <button
                        className="btn btn-outline btn-error"
                        onClick={() => {
                          Swal.fire({
                            title: "Are you sure?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, delete it!",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              axios.delete(`${URL}/delete-review/${item._id}`);
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                              });
                            }
                          });
                        }}
                      >
                        Delete
                      </button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Review;
