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
    password
  });

  alert("Login Submitted");
};

  return (
    <form
      onSubmit={handleSubmit}
      className="relative z-10 bg-black/40 backdrop-blur-2xl border border-cyan-400/50 shadow-2xl rounded-3xl px-8 py-5 w-full max-w-lg"
    >

      {/* Heading */}
      <div className="text-center mb-3">
        <h2 className="text-4xl font-bold text-white mb-2">
          Welcome Back
        </h2>

        <p className="text-gray-300">
          Login to continue your journey
        </p>
      </div>

      {/* Email */}
      <div className="mb-3">
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
            className="w-full bg-black/30 text-white border border-cyan-400/30 focus:border-cyan-400 outline-none p-4 rounded-xl placeholder:text-gray-400 transition duration-300"
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
        <Link
          to="/forgot-password"
          className="text-cyan-400 text-sm hover:text-cyan-300">
          Forgot Password?
        </Link>
      </div>

      {/* Login Button */}
      <button
  type="submit"
  className="w-full mt-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black py-3 rounded-2xl font-semibold text-xl hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(6,182,212,0.35)] transition-all duration-300 border border-cyan-300/10"
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
      <a
  href="https://accounts.google.com"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white py-2.5 rounded-xl hover:bg-white/10 transition duration-300"
>

  <img
    src="https://www.svgrepo.com/show/475656/google-color.svg"
    alt="Google"
    className="w-5 h-5"
  />

    Continue with Google

    </a>

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
);
};

export default LoginForm;