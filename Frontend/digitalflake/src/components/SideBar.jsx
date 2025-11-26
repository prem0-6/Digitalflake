import React from "react";
import { NavLink } from "react-router-dom";
import category from "../assets/images/category.png";
import home from "../assets/images/home.png";
import product from "../assets/images/product.png";
import subcategory from "../assets/images/subcategory.png";

function SideBar() {
  return (
    <div className="w-[300px] bg-[#F4F4F4] h-screen border-r border-gray-300">
      <div className="flex flex-col gap-2 mt-4">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive
              ? "bg-[#F4EDAF] flex items-center justify-between p-4 cursor-pointer"
              : "flex items-center justify-between p-4 cursor-pointer hover:bg-gray-200"
          }
        >
          <div className="flex items-center gap-4">
            <img src={home} alt="home" className="w-6 h-6" />
            <span className="text-lg font-medium">Home</span>
          </div>
          <span className="text-xl">▶</span>
        </NavLink>

        <NavLink
          to="/category"
          className={({ isActive }) =>
            isActive
              ? "bg-[#F4EDAF] flex items-center justify-between p-4 cursor-pointer"
              : "flex items-center justify-between p-4 cursor-pointer hover:bg-gray-200"
          }
        >
          <div className="flex items-center gap-4">
            <img src={category} alt="category" className="w-6 h-6" />
            <span className="text-lg font-medium">Category</span>
          </div>
          <span className="text-xl">▶</span>
        </NavLink>

        <NavLink
          to="/subcategory"
          className={({ isActive }) =>
            isActive
              ? "bg-[#F4EDAF] flex items-center justify-between p-4 cursor-pointer"
              : "flex items-center justify-between p-4 cursor-pointer hover:bg-gray-200"
          }
        >
          <div className="flex items-center gap-4">
            <img src={subcategory} alt="subcategory" className="w-6 h-6" />
            <span className="text-lg font-medium">Subcategory</span>
          </div>
          <span className="text-xl">▶</span>
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive
              ? "bg-[#F4EDAF] flex items-center justify-between p-4 cursor-pointer"
              : "flex items-center justify-between p-4 cursor-pointer hover:bg-gray-200"
          }
        >
          <div className="flex items-center gap-4">
            <img src={product} alt="product" className="w-6 h-6" />
            <span className="text-lg font-medium">Products</span>
          </div>
          <span className="text-xl">▶</span>
        </NavLink>
      </div>
    </div>
  );
}

export default SideBar;