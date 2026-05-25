import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import AuthButton from "../common/AuthButton";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
  e.preventDefault();

  let newErrors = {};

  // Email Validation
  if (!email.trim()) {
    newErrors.email =
      "Email is required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
  ) {
    newErrors.email =
      "Enter valid email";
  }

  setErrors(newErrors);

  if (
    Object.keys(newErrors).length > 0
  ) {
    return;
  }

  setLoading(true);

setTimeout(() => {

  console.log(email);

  setLoading(false);

  toast.success("Reset link sent successfully");

}, 2000);
};

  return (
    <form
      onSubmit={handleSubmit}
      className="relative z-10 bg-black/50 backdrop-blur-2xl border border-cyan-400/50 shadow-2xl rounded-3xl px-10 py-7 w-full max-w-lg"
    >

      {/* Heading */}
      <div className="text-center mb-5">

        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Reset Password
        </h2>

        <p className="text-gray-300 mb-2">
          Enter your email to receive reset link
        </p>

      </div>

      {/* Email Input */}
      <div className="mb-5">

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full bg-black/30 text-white border border-cyan-400/20 focus:border-cyan-400 outline-none p-4 rounded-xl placeholder:text-gray-400 transition duration-300"
        />
        {errors.email && (
        <p className="text-red-400 text-sm mt-2">
        {errors.email}
        </p>
        )}
      </div>

      {/* Submit Button */}
      <AuthButton
        type="submit"
        text="Send Reset Link"
        loadingText="Sending link..."
        loading={loading}
      />

      {/* Divider */}
      <div className="flex items-center my-5">

        <div className="flex-1 border-t border-white/10"></div>

        <span className="px-4 text-gray-400 text-sm">
          OR
        </span>

        <div className="flex-1 border-t border-white/10"></div>

      </div>

      {/* Back To Login */}
      <p className="text-center text-gray-400">

        Remember your password?{" "}

        <Link
          to="/login"
          className="text-cyan-400 hover:text-cyan-300"
        >
          Login
        </Link>

      </p>

    </form>
  );
};

export default ForgotPasswordForm;