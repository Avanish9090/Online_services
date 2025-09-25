import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import UploadFormMoadal from "./UploadFormModal";
import axios from "axios";

function Forms() {
  const URL = "http://localhost:3000";
  const [formDetail, setDetail] = useState([]);
  console.log(formDetail);

  useEffect(() => {
    const getAllDetails = async () => {
      try {
        let res = await axios.get(`${URL}/get-formdetails`);
        let data = res.data.details;
        setDetail(data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllDetails();
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
                <th>Title</th>
                <th>About</th>
                <th>Documents</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {formDetail.map((item, index) => {
                return (
                  <tr className="text-xl">
                    <th>{index + 1}</th>
                    <td>{item.title}</td>
                    <td>{item.about}</td>
                    <td>{item.document}</td>
                    <td>{item.price}</td>
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
                              axios.delete(`${URL}/delete-form/${item._id}`);
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
        <div className="flex items-center justify-center my-10">
          <button
            className="btn btn-outline btn-primary"
            onClick={() => {
              document.getElementById("form_modal").showModal();
            }}
          >
            Upload New +
          </button>
        </div>
        <UploadFormMoadal />
      </div>
    </>
  );
}

export default Forms;
