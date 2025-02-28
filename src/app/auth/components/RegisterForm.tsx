import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import '../../../index.css';

const RegisterForm = () => {
  const { register, error } = useAuth();
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState(""); // Separate state for display name
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState(""); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple email validation regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError(""); 
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setEmailError("Passwords do not match.");
      return;
    }

    // Check if display name is provided
    if (!displayName) {
      setEmailError("Please enter a display name.");
      return;
    }

    // Proceed with registration process
    register(email, password, displayName); // Assuming register function accepts displayName
  };

  return (
    <form onSubmit={handleSubmit} className="py-[4vh] flex-col space-y-5 text-[#c7c7c7] flex items-center">
      <div>
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-[#191919] h-[6vh] w-[25vw] px-3 rounded-[5px] focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all duration-300 ease-in-out"
        />
      </div>
      <div>
        <input
          id="displayName"
          type="text"
          placeholder="Display Name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          required
          className="bg-[#191919] h-[6vh] w-[25vw] px-3 rounded-[5px] focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all duration-300 ease-in-out"
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
          className="bg-[#191919] h-[6vh] w-[25vw] px-3 rounded-[5px] focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all duration-300 ease-in-out"
        />
      </div>
      <div>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="bg-[#191919] h-[6vh] w-[25vw] px-3 rounded-[5px] focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all duration-300 ease-in-out"
        />
      </div>
      {error && <p className="text-red-400">{error}</p>}
      {emailError && <p className="text-red-400">{emailError}</p>} {/* Email validation error */}

      <button 
        type="submit"
        className="bg-[#191919] h-[6vh] w-[10vw] rounded-[5px] font-bold cursor-pointer hover:ring-2 hover:ring-gray-500 hover:ring-offset-0.5 transition-all duration-300 ease-in-out"
      >
        SIGN UP
      </button>
    </form>
  );
};

export default RegisterForm;