import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    handleLogin(email, password);
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#191913]">
      <div className="w-[400px] p-10 bg-[#2e2e2e] rounded-2xl shadow-xl">
        <h2 className="text-3xl font-semibold text-[#ffffc7] text-center mb-6">Welcome Back</h2>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col space-y-5"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="w-full px-6 py-3 text-lg text-[#676747] border border-[#548687] rounded-full outline-none transition focus:border-[#548687] placeholder-[#8f8f65]"
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="w-full px-6 py-3 text-lg text-[#676745] border border-[#548687] rounded-full outline-none transition focus:border-[#548687] placeholder-[#8f8f64]"
            type="password"
            placeholder="Password"
          />
          <button className="w-full py-3 text-lg font-semibold text-white transition bg-[#548687] rounded-full hover:bg-[#2e2e2e] focus:outline-none focus:ring-4 focus:ring-[#548687]">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

