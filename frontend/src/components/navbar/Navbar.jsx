import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="pt-6 px-6 md:px-10 flex justify-center">

      <nav className="w-full max-w-[1350px] border border-cyan-500/20 rounded-2xl px-10 py-5 flex items-center justify-between bg-[#050816]/70 backdrop-blur-xl">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <div className="text-cyan-400 text-[30px]">
            🤖
          </div>

          <h1 className="text-[26px] font-semibold text-white">
            AI Career Coach
          </h1>

        </div>

        <NavLinks />

        {/* Buttons */}
        <div className="flex items-center gap-4">

          <Link
            to="/login"
            className="border border-cyan-500/30 text-cyan-400 px-6 py-2.5 rounded-xl hover:bg-cyan-500/10 transition text-base"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-linear-to-r from-cyan-500 to-blue-500 text-black px-6 py-2.5 rounded-xl font-semibold text-base hover:scale-105 transition duration-300"
          >
            Get Started
          </Link>

        </div>

      </nav>

    </div>
  );
}