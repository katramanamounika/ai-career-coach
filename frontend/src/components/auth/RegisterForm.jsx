import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] =
    useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      name,
      email,
      password,
      confirmPassword,
    } = formData;

    // Validation
    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      alert("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log(formData);

    alert("Registration Successful");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative z-10 bg-black/50 backdrop-blur-2xl border border-cyan-400/50 shadow-2xl rounded-3xl px-10 py-6 w-full max-w-lg"
    >

      {/* Heading */}
      <div className="text-center mb-5">
        <h2 className="text-4xl font-bold text-white mb-2">
          Create Account
        </h2>

        <p className="text-gray-300">
          Join your AI career journey
        </p>
      </div>

      {/* Name */}
      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-black/30 text-white border border-cyan-400/30 focus:border-cyan-400 outline-none p-4 rounded-xl placeholder:text-gray-400"
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-black/30 text-white border border-cyan-400/30 focus:border-cyan-400 outline-none p-4 rounded-xl placeholder:text-gray-400"
        />
      </div>

      {/* Password */}
      <div className="mb-4">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full bg-black/30 text-white border border-purple-400/30 focus:border-purple-400 outline-none p-4 rounded-xl placeholder:text-gray-400"
        />
      </div>

      {/* Confirm Password */}
      <div className="mb-4">
        <input
          type={showPassword ? "text" : "password"}
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full bg-black/30 text-white border border-purple-400/30 focus:border-purple-400 outline-none p-4 rounded-xl placeholder:text-gray-400"
        />
      </div>

      {/* Show Password */}
      <div className="mb-4">
        <button
          type="button"
          onClick={() =>
            setShowPassword(!showPassword)
          }
          className="text-cyan-400 text-sm"
        >
          {showPassword
            ? "Hide Password"
            : "Show Password"}
        </button>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-black py-3 rounded-xl font-semibold text-lg hover:scale-105 transition duration-300"
      >
        Create Account
      </button>

      {/* Login Link */}
      <p className="text-center text-gray-400 mt-6">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-cyan-400 cursor-pointer">
          Login
        </Link>
      </p>

    </form>
  );
};

export default RegisterForm;