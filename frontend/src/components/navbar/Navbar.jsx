import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <div className="pt-8 flex justify-center">

      <nav className="w-[88%] max-w-[1400px] border border-cyan-500/20 rounded-2xl px-6 py-4 flex items-center justify-between bg-[#050816]/70 backdrop-blur-xl shadow-[0_0_20px_rgba(0,150,255,0.08)]">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="text-cyan-400 text-3xl">🤖</div>

          <h1 className="text-2xl font-semibold">
            AI Career Coach
          </h1>
        </div>

        <NavLinks />

        {/* Buttons */}
        <div className="flex items-center gap-5">

          <button className="border border-cyan-500/30 text-cyan-400 px-7 py-3 rounded-xl hover:bg-cyan-500/10 transition">
            Login
          </button>

          <button className="bg-linear-to-r from-cyan-400 to-blue-500 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition">
            Get Started
          </button>

        </div>

      </nav>

    </div>
  );
}