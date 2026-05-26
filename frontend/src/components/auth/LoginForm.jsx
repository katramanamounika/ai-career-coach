import { useState } from "react";
import toast from "react-hot-toast";
import AuthButton from "../common/AuthButton";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
  e.preventDefault();

  let newErrors = {};

  // Email Validation
  if (!email) {
    newErrors.email = "Email is required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
  ) {
    newErrors.email =
      "Invalid email address";
  }

  // Password Validation
  if (!password) {
    newErrors.password =
      "Password is required";
  } else if (password.length < 8) {
    newErrors.password =
      "Password must be at least 8 characters";
  } else if (
    !/(?=.*[a-z])/.test(password)
  ) {
    newErrors.password =
      "Password must contain lowercase letter";
  } else if (
    !/(?=.*[A-Z])/.test(password)
  ) {
    newErrors.password =
      "Password must contain uppercase letter";
  } else if (
    !/(?=.*[0-9])/.test(password)
  ) {
    newErrors.password =
      "Password must contain a number";
  } else if (
    !/(?=.*[!@#$%^&*])/.test(password)
  ) {
    newErrors.password =
      "Password must contain special character";
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length > 0)
    return;

  setLoading(true);

setTimeout(() => {

  console.log({
    email,
    password,
  });

  setLoading(false);

  const success = true;

if (success) {
  toast.success("Login Successful");

  setTimeout(() => {
    navigate("/dashboard");
  }, 1000);

} else {
  toast.error("Invalid Credentials");
}

}, 2000);
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
        {errors.email && (
        <p className="text-red-400 text-sm mt-2">
        {errors.email}
        </p>
      )}
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
          {errors.password && (
          <p className="text-red-400 text-sm mt-2">
          {errors.password}
          </p>
          )}
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
      <AuthButton
        type="submit"
        text="Login"
        loadingText="Logging in..."
        loading={loading}
      />
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