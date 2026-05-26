import { useNavigate } from "react-router-dom";

export default function HeroSection() {

  const navigate = useNavigate();

  return (
    <section id="home" className="min-h-[92vh] flex items-center">

      <div className="w-[88%] max-w-[1400px] mx-auto">

        <div className="max-w-[620px]">

          <h2 className="text-5xl md:text-6xl lg:text-[72px] leading-none lg:leading-[72px] font-bold tracking-tight">

            Your AI-Powered

            <br />

            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Career Companion
            </span>

          </h2>

          <p className="mt-4 text-gray-400 text-xl md:text-2xl leading-relaxed max-w-[700px]">

            From resume analysis to mock interviews,
            we help you get placed in your dream role.

          </p>

          {/* Buttons */}
          <div className="flex gap-6 mt-8">

            <button
              onClick={() => navigate("/register")}
              className="bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3 rounded-xl text-black text-lg font-semibold hover:scale-105 transition duration-300"
            >
             Get Started
            </button>

            <button
              onClick={() => navigate("/register")}
              className="border border-cyan-500/30 text-cyan-400 px-7 py-3 rounded-xl text-lg hover:bg-cyan-500/10 transition duration-300"
            >
            ▶ Try Mock Interview
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}