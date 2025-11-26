import React from "react";

function Info() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-bold">
        <span className="text-[#5C218B]">digital</span>
        <span className="text-gray-800">flake</span>
      </h1>

      <p className="text-lg text-gray-500 font-medium mt-2">
        Welcome to Digitalflake admin
      </p>
    </div>
  );
}

function InputField() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <input
        type="text"
        placeholder="Email-id"
        className="border border-gray-300 p-3 rounded-xl w-full outline-none"
      />
      <input
        type="password"
        placeholder="Password"
        className="border border-gray-300 p-3 rounded-xl w-full outline-none"
      />
    </div>
  );
}

function LoginBtn() {
  return (
    <button className="bg-[#5C218B] text-white w-full py-3 rounded-xl font-semibold text-lg">
      Log In
    </button>
  );
}

function LoginDiv() {
  return (
    <div className="w-[450px] h-[600px] bg-white rounded-2xl shadow-xl border border-blue-200 p-10 flex flex-col items-center gap-6">
      <Info />

      <InputField />

      <p className="text-[#5C218B] text-sm font-medium self-end cursor-pointer">
        Forgot Password?
      </p>

      <LoginBtn />
    </div>
  );
}

function Login() {
  return (
    <div className="bg-[#EDE6F7] h-screen flex justify-center items-center">
      <LoginDiv />
    </div>
  );
}

export default Login;