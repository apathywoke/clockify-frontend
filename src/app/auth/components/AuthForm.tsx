import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import '../../../index.css';

const AuthForm = () => {
  const { login, error } = useAuth();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError("");
    }
    login(email, password);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="py-6 flex flex-col space-y-4 text-[#c7c7c7] items-center w-full max-w-xl mx-auto px-6 md:px-8 lg:px-10"
    >
      <div className="w-full">
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="
          bg-[#191919] h-14 w-full px-4 rounded-lg
          focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300
          transition-all duration-300 ease-in-out"
        />
      </div>
      <div className="w-full">
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="
          bg-[#191919] h-14 w-full px-4 rounded-lg
          focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300
          transition-all duration-300 ease-in-out"
        />
      </div>
      {error && <p className="text-red-400 text-center text-sm">{error}</p>}
      {emailError && <p className="text-red-400 text-center text-sm">{emailError}</p>}
      <button 
        type="submit"
        className="
        bg-[#191919] h-12 w-30 max-w-xs rounded-lg font-bold cursor-pointer
        hover:ring-2 hover:ring-gray-500 hover:ring-offset-0.5
        transition-all duration-300 ease-in-out"
      >
        LOG IN
      </button>
    </form>
  );
};

export default AuthForm;