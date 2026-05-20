import { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
  e.preventDefault();

  // Validation
  if (!email || !password) {
    alert("All fields are required");
    return;
  }

  console.log({
    email,
    password,
  });

  alert("Login Submitted");
};

  return (

    
    <form
      onSubmit={handleSubmit}
      className="relative z-10 bg-black/40 backdrop-blur-2xl border border-cyan-400/50 shadow-2xl rounded-3xl px-10 py-7 w-full max-w-lg"
    >

      {/* Heading */}
      <div className="text-center mb-4">
        <h2 className="text-4xl font-bold text-white mb-2">
          Welcome Back
        </h2>

        <p className="text-gray-300">
          Login to continue your journey
        </p>
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="text-gray-300 text-sm block mb-2">
          Email
        </label>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-black/30 text-white border border-cyan-400/30 focus:border-cyan-400 outline-none p-4 rounded-xl placeholder:text-gray-400 transition duration-300"
        />
      </div>

      {/* Password */}
      <div className="mb-3">
        <label className="text-gray-300 text-sm block mb-2">
          Password
        </label>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-black/30 text-white border border-purple-400/30 focus:border-purple-400 outline-none p-4 rounded-xl placeholder:text-gray-400 transition duration-300"
          />

          {/* Show Password Button */}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-400 hover:text-cyan-300 text-sm"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      {/* Forgot Password */}
      <div className="flex justify-end mb-4">
        <button
          type="button"
          className="text-cyan-400 text-sm hover:text-cyan-300"
        >
          Forgot Password?
        </button>
      </div>

      {/* Login Button */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-black py-3 rounded-xl font-semibold text-lg hover:scale-105 transition duration-300"
      >
        Login
      </button>

      {/* Divider */}
      <div className="flex items-center my-3">
        <div className="flex-1 border-t border-white/10"></div>

        <span className="px-4 text-gray-400 text-sm">
          OR
        </span>

        <div className="flex-1 border-t border-white/10"></div>
      </div>

      {/* Google Button */}
      <button
        type="button"
        className="w-full bg-white/5 border border-white/10 text-white py-2 rounded-xl hover:bg-white/10 transition duration-300"
      >
        Continue with Google
      </button>

      {/* Signup */}
      <p className="text-center text-gray-400 mt-8">
        Don't have an account?{" "}
        <Link
            to="/register"
            className="text-cyan-400 hover:text-cyan-300"
        >
        Sign Up
        </Link>
      </p>
    </form>
  
)
};

export default LoginForm;