import React, { useEffect, useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "./Navbar";
import axios from "axios";

function Latest() {
  const URL = "http://localhost:3000";
  const [banner, setBaners] = useState([]);
  const [file, setfile] = useState(null);

  const handleFileChange = (e) => {
    setfile(e.target.files[0]);
  };

  const handleFileSubmit = async () => {
    if (!file) {
      toast.error("Upload a file.");
      return;
    }
    let maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      toast.error("Size should be less than 5MB.");
      return;
    }

    const formdata = new FormData();
    formdata.append("file", file);
    await toast.promise(
      axios.post(`${URL}/upload`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
      {
        loading: "Uploading...",
        success: <b>Successfully uploaded!</b>,
        error: <b>Upload failed.</b>,
      }
    );
  };
  const getBanner = async () => {
    try {
      const res = await axios.get(`${URL}/banners`);
      const item = res.data.items;
      setBaners(item);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBanner();
  }, []);
  return (
    <>
      <div>
        <Navbar />
        <Toaster />
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr className="text-xl">
                <th></th>
                <th>Banner</th>
                <th>Image-name</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {banner.map((item, index) => {
                return (
                  <tr className="text-xl">
                    <th>{index + 1}</th>
                    <img
                      className="h-[100px] w-[200px]"
                      src={item.path}
                      alt="banner"
                    />
                    <td>{item.name}</td>
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
                              axios.delete(`${URL}/delete-banner/${item._id}`);
                              getBanner();
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

        <div className="flex justify-center mt-10 gap-2">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Pick a file</legend>
            <input
              type="file"
              onChange={handleFileChange}
              className="file-input border-2 border-blue-500"
            />
            <label className="label">Max size 5MB</label>
          </fieldset>
          <button
            className="btn btn-outline btn-primary mt-8.5"
            onClick={handleFileSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Latest;
