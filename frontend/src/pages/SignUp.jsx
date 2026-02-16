import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

function SignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user); // ✅ fixed typo and syntax

  const handleSignUp = async (e) => {
    e.preventDefault(); // prevent page reload
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/auth/signup`, // ✅ use env variable
        { userName, email, password },
        { withCredentials: true }
      );

      console.log(result.data);

      // ✅ Example: dispatch action to update Redux store
      dispatch({ type: "SET_USER", payload: result.data });

    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mb-6">Join us today</p>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?
          <span className="text-indigo-600 font-semibold cursor-pointer ml-1">
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;