import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import { useDispatch } from "react-redux";
import { setAuth } from "../../Redux/slice/authSlice";
import { useNavigate } from "react-router-dom";
import {loginApi} from '../../Api/index'
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    function start() {
      gapi.auth2.init({
        clientId:process.env.REACT_APP_CLIENTID,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
   
  }, []);
  const handleChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const handleSubmit =async (e) => {
    e.preventDefault()
    const {data}  = await loginApi(formData)
    localStorage.setItem("auth", data.token);
    navigate("/");
    console.log(data);
  };
  const googleSuccess = async (response) => {
    const result = response?.profileObj;
    const token = response?.tokenId;
    console.log(result);
    dispatch(setAuth(token));
    localStorage.setItem("auth", token);
    navigate("/");
  };
  const googleFailure = (err) => {
    console.log(err);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <div className="flex justify-center">
          <img src="imgs/logo.svg" alt="not found" />
        </div>
        <h3 className="text-2xl font-bold text-center">
          Login to your account
        </h3>
        <form action="">
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
              <label className="block">Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="flex items-baseline justify-end">
              <Link
                to="#"
                className="text-sm text-blue-600 hover:underline font-bold no-underline text-[12px]"
              >
                Forgot password?
              </Link>
            </div>
            <div className="flex items-center justify-between  ">
              <button
                className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900 w-full"
                onClick={handleSubmit}
              >
                Login
              </button>
            </div>
            <div className="flex items-baseline justify-center my-2">
              <GoogleLogin
                clientId="674211032311-olctd50j1k1hgsa18jtomkbtoaggnpg1.apps.googleusercontent.com"
                render={(renderProps) => (
                  <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className="flex items-center justify-center boxshadowForAll px-3 py-2 mt-3 w-full"
                  >
                    Login with Google
                    <img
                      src="imgs/google.png"
                      alt="not found"
                      className="w-4 mx-1"
                    />
                  </button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy={"single_host_origin"}
              />
            </div>
            <div className="flex justify-center items-center">
              <Link
                to="/signup"
                className="text-sm text-blue-600 hover:underline"
              >
                <span className=" text-[12px]">Dont have Account </span>
                <span className="font-bold">SignUp</span>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
