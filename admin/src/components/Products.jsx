import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import toast, { Toaster } from "react-hot-toast";

function Products() {
  const URL = "http://localhost:3000";
  const [products, setProducts] = useState([]);
  const [formdata, setFormdata] = useState({
    title: "",
    about: "",
    price: "",
    id: "",
  });
  const [file, setfile] = useState(null);

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setfile(e.target.files[0]);
  };

  const handleUpdate = async (upId) => {
    const newData = await axios.get(`${URL}/one-product/${upId}`);
    const updatedata = newData.data.PrRes;
    setFormdata({
      title: updatedata.title,
      about: updatedata.about,
      price: updatedata.price,
      id: updatedata._id,
    });
  };

  const handleUpdateSubmit = async (upId) => {
    await axios.put(`${URL}/update-product/${upId}`, formdata);
    Swal.fire({
      title: "Updated successfully!",
      icon: "success",
      draggable: true,
    });
    setFormdata({
      title: "",
      about: "",
      price: "",
      id: "",
    });
    getAllproducts();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please upload a file!",
      });
      return;
    }

    const data = new FormData();
    data.append("file", file);
    data.append("title", formdata.title);
    data.append("about", formdata.about);
    data.append("price", formdata.price);

    await toast.promise(
      axios.post(`${URL}/upload-product`, data),

      {
        loading: "Uploading...",
        success: <b>Successfully uploaded!</b>,
        error: <b>Upload failed.</b>,
      }
    );

    getAllproducts();
    setFormdata({
      title: "",
      about: "",
      price: "",
    });
    setfile(null);
  };

  const getAllproducts = async () => {
    try {
      const res = await axios.get(`${URL}/all-products`);
      const data = res.data.products;
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllproducts();
  }, []);
  return (
    <>
      <div>
        <Navbar />
        <Toaster />
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Title</th>
                  <th>About</th>
                  <th>Price</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {products.map((item) => {
                  return (
                    <tr>
                      <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img src={item.path} alt="img" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{item.title}</div>
                          </div>
                        </div>
                      </td>
                      <td>{item.about}</td>
                      <td>{item.price}</td>
                      <th>
                        <button
                          className="btn btn-ghost btn-xs border-2 border-blue-500"
                          onClick={() => {
                            handleUpdate(item._id);
                          }}
                        >
                          Edit
                        </button>
                      </th>
                      <th>
                        <button
                          className="btn btn-ghost btn-xs border-2 border-red-200"
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
                                axios.delete(
                                  `${URL}/delete-product/${item._id}`
                                );
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
        <h1 className="text-4xl font-bold text-center mt-8">UPLOAD PRODUCT</h1>
        <div className="flex items-center justify-center border border-gray-400 rounded shadow-lg  bg-white  my-3 p-2 md:mx-3">
          <div className=" flex flex-col items-center justify-center border border-gray-100 rounded shadow-lg m-3 bg-white md:w-250 space-y-4 text-left p-4">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <h1 className="text-xl my-1">Title:</h1>
              <input
                type="text"
                name="title"
                value={formdata.title}
                onChange={handleChange}
                placeholder="Enter your text"
                className="input input-neutral"
                required
              />

              <h1 className="text-xl my-1">About:</h1>
              <textarea
                type="text"
                name="about"
                value={formdata.about}
                onChange={handleChange}
                placeholder="Enter your text"
                className="input input-neutral h-20"
                required
              />

              <h1 className="text-xl my-1">Price:</h1>
              <input
                type="number"
                name="price"
                value={formdata.price}
                onChange={handleChange}
                placeholder="Enter your text"
                className="input input-neutral"
                required
              />

              <input
                type="file"
                onChange={handleFileChange}
                className="file-input file-input-neutral my-2"
              />
              <br />
              {!formdata.id && (
                <button
                  type="submit"
                  className="btn btn-outline btn-primary mt-3 w-80"
                >
                  Upload
                </button>
              )}
            </form>

            {formdata.id && (
              <button
                className="btn btn-outline btn-success w-80 md:mr-34 mr-8"
                onClick={() => {
                  handleUpdateSubmit(formdata.id);
                }}
              >
                Update
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
