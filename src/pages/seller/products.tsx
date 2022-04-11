import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Swal from "sweetalert2";
import Dashboard from "./dashboard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

function Products() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  interface FormValues {
    name: string;
    price: string;
    status: string;
    category: string;
    brand: string;
  }
  let data: FormValues[] = [
    {
      name: "product1",
      price: "200 dh",
      status: "active",
      category: "category1",
      brand: "Nike",
    },
    {
      name: "product1",
      price: "200 dh",
      status: "active",
      category: "category1",
      brand: "Nike",
    },
    {
      name: "product1",
      price: "200 dh",
      status: "active",
      category: "category1",
      brand: "Nike",
    },
    {
      name: "product1",
      price: "200 dh",
      status: "active",
      category: "category1",
      brand: "Nike",
    },
    {
      name: "product1",
      price: "200 dh",
      status: "active",
      category: "category1",
      brand: "Nike",
    },
    {
      name: "product1",
      price: "200 dh",
      status: "active",
      category: "category1",
      brand: "Nike",
    },
    {
      name: "product1",
      price: "200 dh",
      status: "active",
      category: "category1",
      brand: "Nike",
    },
    {
      name: "product1",
      price: "200 dh",
      status: "active",
      category: "category1",
      brand: "Nike",
    },
    {
      name: "product1",
      price: "200 dh",
      status: "active",
      category: "category1",
      brand: "Nike",
    },
    {
      name: "product1",
      price: "200 dh",
      status: "active",
      category: "category1",
      brand: "Nike",
    },
    {
      name: "product1",
      price: "200 dh",
      status: "active",
      category: "category1",
      brand: "Nike",
    },
    {
      name: "product1",
      price: "200 dh",
      status: "active",
      category: "category1",
      brand: "Nike",
    },
  ];

  return (
    <div className="flex flex-col w-full ml-10 mt-10 ">
      {/* button add manager */}

      <div className=" flex  mb-10 	">
        <button
          className="btn "
          style={{ backgroundColor: "#0F172A" }}
          type="button"
          onClick={handleOpen}
        >
          Add new Responsable
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 ml-2 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
      {/* <!-- Main modal --> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* title of modal */}
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Manager
          </Typography>

          {/* content of modal */}

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* formik */}
      
          </Typography>
        </Box>
      </Modal>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Brand
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((item) => (
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {item.name}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.price}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.brand}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a
                        onClick={() => {}}
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
// Products.PageLayout = Dashboard;
export default Products;
