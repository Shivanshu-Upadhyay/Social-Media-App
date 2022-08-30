import React from "react";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <div className="flex justify-center">
          <img src="imgs/logo.svg" alt="not found" />
        </div>
        <h3 className="text-2xl font-bold text-center">
          Signup for new account
        </h3>
        <form action="">
          <div className="mt-4">
          <div>
              <label className="block" >
                Full Name
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block" >
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
              <label className="block">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            
            <div className="flex items-baseline justify-center flex-wrap">
              <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900 w-full">
                Login
              </button>
              <Link to="/login" className="text-sm text-blue-600 hover:underline my-2">
                <span className=" text-[14px]">Have Account </span>
                <span className="font-bold">Login</span>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
