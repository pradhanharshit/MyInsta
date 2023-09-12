/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [fName, setFname] = useState("");
  const [userName, setUserName] = useState("");

  const loginHelper = () => {
    console.log(email, " ", password);
  };

  const uploadProfileImage = () => {
    console.log("ran");
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-[320px] border-gray-300 border text-center">
          <div className="mt-10 mb-5">
            <h1 className="font-bold font-serif text-3xl mb-4">MyInsta</h1>
            <p className="p-1.5 text-gray-600 font-medium text-lg">
              Sign up to see photos and videos from your friends.
            </p>
          </div>
          <input
            className="text-center border-2 p-1 m-1 w-[250px]"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email"
          />
          <br />
          <input
            className="text-center border-2 p-1 m-1 w-[250px]"
            value={fName}
            onChange={(e) => {
              setFname(e.target.value);
            }}
            type="text"
            placeholder="Full Name"
          />
          <br />
          <input
            className="text-center border-2 p-1 m-1 w-[250px]"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            type="text"
            placeholder="Username"
          />
          <br />
          <input
            className=" text-center border-2 p-1  w-[250px] mb-1"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type={passwordType}
            placeholder="Password"
          />
          <br />
          <input
            className="mr-1 mb-6"
            type="checkbox"
            onClick={() => {
              passwordType === "password"
                ? setPasswordType("text")
                : setPasswordType("password");
            }}
            id="passType"
          />
          <label className="text-sm " htmlFor="passType">
            Show password
          </label>
          <br />
          <input
            type="file"
            id="input"
            className="hidden mb-4"
            onClick={uploadProfileImage}
          />
          <label
            htmlFor="input"
            className=" text-red-400 p-1.5  mb-2 hover:bg-red-400 hover:text-white border-2 border-red-400  rounded-md"
          >
            Upload Profile Image
          </label>
          <button
            className="bg-blue-400 p-1.5 w-[250px] rounded-md text-white mb-5 mt-5"
            onClick={loginHelper}
          >
            Sign Up
          </button>
          <div className="flex justify-center items-center space-x-4 mb-5">
            <div className="border-t border-gray-400 w-[100px] "></div>
            <p className="text-gray-400">OR</p>
            <div className="border-t border-gray-400 w-[100px]"></div>
          </div>
          <p className="mb-10">
            Have an account?{" "}
            <Link to="/login">
              <span className="text-blue-400">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUp;
