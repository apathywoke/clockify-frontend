import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import '../../../index.css'

const AuthForm = () => {
  const { login, error } = useAuth();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");  // Add state for email
  const [emailError, setEmailError] = useState(""); // Add email error state

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple email validation regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError(""); // Reset error if email is valid
    }

    // Proceed with the login process if validation passes
    login(email, password);
  };

  return (
        <form onSubmit={handleSubmit} className="py-[4vh] flex-col space-y-5 text-[#c7c7c7] flex items-center">
      <div>
        <input
          id="email"
          type="email"  // Set the input type to email
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="
          bg-[#191919] h-[6vh] w-[25vw] px-3 rounded-[5px]
          focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300
          transition-all duration-300 ease-in-out"
        />
      </div>
      <div>
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="
          bg-[#191919] h-[6vh] w-[25vw] px-3 rounded-[5px]
          focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300
          transition-all duration-300 ease-in-out"
        />
      </div>
      {error && <p className="text-red-400">{error}</p>}
      {emailError && <p className="text-red-400">{emailError}</p>} {/* Display error message if email is invalid */}
      <button 
        type="submit"
        className="
        bg-[#191919] h-[6vh] w-[10vw] rounded-[5px] font-bold cursor-pointer
        hover:ring-2 hover:ring-gray-500 hover:ring-offset-0.5
        transition-all duration-300 ease-in-out"
      >
        LOG IN
      </button>
    </form>
  );
};

export default AuthForm;