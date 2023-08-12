"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { axios } from "axios";

import React from "react";

const SignupPage = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {};

  return (
    <div className="flex flex-col justify-center items-center text-center min-h-screen backgroundImage">
      <h3 className="flex justify-center items-center text-center text-3xl">
        Signup Page
      </h3>
      <br />
      <div className="">
        <label htmlFor="username">username</label>
        <input
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-700"
          type="text"
          id="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="username"
        />
      </div>

      <div>
        <label htmlFor="email">email</label>
        <input
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-700"
          type="text"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="email"
        />
      </div>

      <div>
        <label htmlFor="password">password</label>
        <input
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-700"
          type="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
        />
      </div>

      <button 
      onClick={onSignup}
      className="p-2 border border-gray-400 rounded-lg focus:outline-none focus:border-gray-600"
      >
        signup
      </button>
      <Link href='/login' className="py-4"> switch to login</Link>
    </div>
  );
};

export default SignupPage;
