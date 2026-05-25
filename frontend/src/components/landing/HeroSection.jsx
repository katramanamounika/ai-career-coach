import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="min-h-[70vh] flex items-center px-6 md:px-10">

      <div className="w-full max-w-[1350px] mx-auto  px-8 md:px-16">

        <div className="max-w-[760px]">

          <h1 className="text-5xl md:text-6xl lg:text-[72px] leading-tight lg:leading-[82px] font-bold tracking-tight">

            Your AI-Powered

            <br />

            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Career Companion
            </span>

          </h1>

          <p className="mt-6 text-gray-400 text-xl md:text-2xl leading-relaxed max-w-[700px]">

            From resume analysis to mock interviews,
            we help you get placed in your dream role.

          </p>

          {/* Buttons */}
          <div className="flex gap-6 mt-8 flex-wrap">

            <Link
              to="/register"
              className="bg-linear-to-r from-cyan-400 to-blue-500 px-10 py-4 rounded-2xl text-black text-lg font-bold hover:scale-105 transition inline-flex items-center justify-center"
            >
              Get Started
            </Link>

            <Link
              to="/login"
              className="border border-cyan-500/30 text-cyan-400 px-10 py-4 rounded-2xl text-lg hover:bg-cyan-500/10 transition inline-flex items-center justify-center"
            >
              ▶ Try Mock Interview
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}