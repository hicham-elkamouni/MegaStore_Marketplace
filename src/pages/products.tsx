import React from 'react'
import { Product } from '../components/Product'

const Products = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center h-16 bg-slate-100 text-center">
        <h3 className="text-sm font-light">Home</h3>
        <h3 className="before:h-1 before:content-[''] before:mx-4 before:w-5 before:bg-red-400 text-sm font-meduim rounded">Shop Grid Layout</h3>
      </div>
      <div className="flex items-center justify-center text-2xl font-semibold my-12">
        <h1>Shop Grid Layout</h1>
      </div>
      <div className="flex justify-center">
        <div className="w-4/6 flex justify-between flex-col">
          <div className="w-full flex justify-between mb-10">
            <div className="text-sm">we found <span className="font-bold">95</span> products available for you</div>
            <div className="flex justify-end items-center w-18">
              <div>See</div>
              <div className="w-6 h-6 ml-4"><img className="w-full h-full" src="https://img.icons8.com/ios/50/000000/health-data.png"/></div>
              <div className="w-6 h-6 ml-4"><img className="w-full h-full" src="https://img.icons8.com/ios-filled/50/000000/menu-rounded.png"/></div>
              <div className="ml-6 h-full">
                <select className="w-full h-full bg-slate-100 p-2 text-sm" name="" id="">
                  <option value="" hidden selected>Default Sorting</option>
                  <option value="">lowest price</option>
                  <option value="">highest price</option>
                  <option value="">Random</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex ">
              {/* CATEGORIES SECTION */}
              <div className="w-1/5">
                <h2 className="font-semibold text-lg">Categories</h2>
                <div className="ml-4">
                  <h4 className="text-sm mt-2 text-gray-400 hover:text-current transition ease-in-out delay-100 tracking-widest">BODY CARE</h4>
                  <h4 className="text-sm mt-2 text-gray-400 hover:text-current transition ease-in-out delay-100 tracking-widest">SKIN CARE</h4>
                  <h4 className="text-sm mt-2 text-gray-400 hover:text-current transition ease-in-out delay-100 tracking-widest">HAIR CARE</h4>
                  <h4 className="text-sm mt-2 text-gray-400 hover:text-current transition ease-in-out delay-100 tracking-widest">ACCESSOIRES</h4>
                </div>
                <h2 className="font-semibold mt-2">Price</h2>
                <div className="ml-4 flex items-center justify-between w-4/6 mb-2">
                  <input type="text" name="" id="" placeholder="min" className="pl-2 py-1 border border-slate-400 outline-none w-16 text-sm rounded-md mt-1" />
                  <p>to</p>
                  <input type="text" name="" id="" placeholder="min" className="pl-2 py-1 border border-slate-400 outline-none w-16 text-sm rounded-md" />
                </div>
                <h2 className="font-semibold text-lg">Highlight</h2>
                <div className="ml-4">
                  <h4 className="text-sm mt-2 text-gray-400 hover:text-current hover:underline transition ease-in-out delay-100 tracking-widest">Best Seller</h4>
                  <h4 className="text-sm mt-2 text-gray-400 hover:text-current hover:underline transition ease-in-out delay-100 tracking-widest">New Arrivals</h4>
                  <h4 className="text-sm mt-2 text-gray-400 hover:text-current hover:underline transition ease-in-out delay-100 tracking-widest">Sale</h4>
                  <h4 className="text-sm mt-2 text-gray-400 hover:text-current hover:underline transition ease-in-out delay-100 tracking-widest">Hot Items</h4>
                </div>
              </div>
              {/* PRODUCTS SECTION */}
              <div className="w-4/5 flex-1 grid grid-cols-4 gap-4 h-96">
                {/* SINGLE PRODUCT */}
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>  

              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products