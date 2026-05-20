import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Email is required");
      return;
    }

    console.log(email);

    alert("Reset link sent successfully");
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

      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-black py-3 rounded-xl font-semibold text-lg hover:scale-105 transition duration-300 shadow-lg"
      >
        Send Reset Link
      </button>

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