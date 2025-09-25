import React from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

function Contact() {
  const URL = "http://localhost:3000";
  const [cData, setCdata] = useState([]);

  const getAllCdata = async () => {
    try {
      let res = await axios.get(`${URL}/contacts`);
      let data = res.data.contcats;
      setCdata(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllCdata();
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
                <th>Email</th>
                <th>Number</th>
                <th>Address</th>
                <th>Message</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cData.map((item, index) => {
                return (
                  <tr className="text-xl">
                    <th>{index + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.address}</td>
                    <td>{item.message}</td>
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
                              axios.delete(`${URL}/delete-contact/${item._id}`);
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

export default Contact;
