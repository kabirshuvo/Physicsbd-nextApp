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
    <div>
      <h3 className="flex flex-col justify-center items-center text-center text-3xl min-h-screen">
        Signup Page
      </h3>
      <br />
      <label htmlFor="username">username</label>
      <input
        type="text"
        id="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
      />
    </div>
  );
};

export default SignupPage;
