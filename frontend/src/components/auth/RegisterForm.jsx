import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import AuthButton from "../common/AuthButton";
const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  let newErrors = {};

  const {
    name,
    email,
    password,
    confirmPassword,
  } = formData;

  // Name Validation
  if (!name) {
    newErrors.name = "Name is required";
  } else if (name.length < 3) {
    newErrors.name =
      "Name must be at least 3 characters";
  } else if (!/^[A-Za-z ]+$/.test(name)) {
    newErrors.name =
      "Name should contain only letters";
  }

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

  // Confirm Password Validation
  if (!confirmPassword) {
    newErrors.confirmPassword =
      "Confirm your password";
  } else if (
    password !== confirmPassword
  ) {
    newErrors.confirmPassword =
      "Passwords do not match";
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length > 0)
    return;

  setLoading(true);

setTimeout(() => {

  console.log(formData);

  setLoading(false);

  toast.success("Registration Successful");

}, 2000);
};

  return (
    <form
      onSubmit={handleSubmit}
      className="relative z-10 bg-black/50 backdrop-blur-2xl border border-cyan-400/50 shadow-2xl rounded-3xl px-9 py-5 w-full max-w-lg"
    >

      {/* Heading */}
      <div className="text-center mb-3">
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
        {errors.name && (
        <p className="text-red-400 text-sm mt-2">
        {errors.name}
        </p>
        )}
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
        {errors.email && (
        <p className="text-red-400 text-sm mt-2">
        {errors.email}
        </p>
        )}
      </div>

      {/* Password */}
      <div className="mb-4">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full bg-black/30 text-white border border-cyan-400/30 focus:border-cyan-400 outline-none p-4 rounded-xl placeholder:text-gray-400"
        />
        {errors.password && (
        <p className="text-red-400 text-sm mt-2">
        {errors.password}
        </p>
        )}
      </div>

      {/* Confirm Password */}
      <div className="mb-4">
        <input
          type={showPassword ? "text" : "password"}
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full bg-black/30 text-white border border-cyan-400/30 focus:border-cyan-400 outline-none p-4 rounded-xl placeholder:text-gray-400"
        />
        {errors.confirmPassword && (
        <p className="text-red-400 text-sm mt-2">
        {errors.confirmPassword}
        </p>
        )}
      </div>

      {/* Show Password */}
      <div className="mb-3">
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
      <AuthButton
        type="submit"
        text="Create Account"
        loadingText="Creating Account..."
        loading={loading}
      />

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