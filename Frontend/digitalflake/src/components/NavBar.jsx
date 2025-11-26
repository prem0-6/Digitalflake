import React, { useState } from "react";
import admin from "../assets/images/admin.png";
import logo from "../assets/images/logo.png";

function LogOut({ onClose }) {
  return (
    <div className="flex flex-col items-center bg-white rounded-3xl p-2 w-[400px] h-[200px] border border-gray-600">
      <div className="m-3">
        <p className="font-bold text-3xl">Log Out</p>
      </div>
      <div className="m-3">
        <p className="text-lg text-gray-600">Are you sure you want to log out?</p>
      </div>
      <div className="flex gap-3 m-3">
        <button className="bg-white text-gray-600 p-3 rounded-3xl border border-gray-600">
          Delete
        </button>
        <button
          onClick={onClose}
          className="bg-purple-600 text-white p-3 rounded-3xl"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

function NavBar() {
  const [showLogout, setShowLogout] = useState(false);

  return (
    <>
      <div className="bg-[#662671] flex justify-between p-3">
        <div>
          <img src={logo} alt="logo" className="w-40" />
        </div>

        <div>
          <button onClick={() => setShowLogout(true)}>
            <img src={admin} alt="admin" className="w-10 h-10" />
          </button>
        </div>
      </div>
      {showLogout && (
        <div className="flex justify-center mt-5">
          <LogOut onClose={() => setShowLogout(false)} />
        </div>
      )}
    </>
  );
}

export default NavBar;