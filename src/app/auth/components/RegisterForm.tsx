import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import "../../../index.css";

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
    <form
      onSubmit={handleSubmit}
      className="py-6 flex flex-col space-y-4 text-[#c7c7c7] items-center w-full max-w-xl mx-auto px-6 sm:px-8 lg:px-10"
    >
      <div className="w-full">
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-[#191919] h-14 w-full px-4 rounded-lg focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-300 ease-in-out"
        />
      </div>
      <div className="w-full">
        <input
          id="displayName"
          type="text"
          placeholder="Display Name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          required
          className="bg-[#191919] h-14 w-full px-4 rounded-lg focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-300 ease-in-out"
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
          className="bg-[#191919] h-14 w-full px-4 rounded-lg focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-300 ease-in-out"
        />
      </div>
      <div className="w-full">
        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="bg-[#191919] h-14 w-full px-4 rounded-lg focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-300 ease-in-out"
        />
      </div>
      {error && <p className="text-red-400 text-center text-sm">{error}</p>}
      {emailError && (
        <p className="text-red-400 text-center text-sm">{emailError}</p>
      )}

      <button
        type="submit"
        className="bg-[#191919] h-12 w-32 max-w-xs rounded-lg font-bold cursor-pointer hover:ring-2 hover:ring-gray-500 hover:ring-offset-0.5 transition-all duration-300 ease-in-out"
      >
        SIGN UP
      </button>
    </form>
  );
};

export default RegisterForm;
