export default function HeroSection() {
  return (
    <section className="min-h-[92vh] flex items-center">

      <div className="w-[88%] max-w-[1400px] mx-auto">

        <div className="max-w-[620px]">

          <h1 className="text-5xl md:text-6xl lg:text-[72px] leading-tight lg:leading-[82px] font-bold tracking-tight">

            Your AI-Powered

            <br />

            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Career Companion
            </span>

          </h1>

          <p className="mt-8 text-gray-400 text-xl md:text-2xl leading-relaxed max-w-[700px]">

            From resume analysis to mock interviews,
            we help you get placed in your dream role.

          </p>

          {/* Buttons */}
          <div className="flex gap-6 mt-10">

            <button className="bg-linear-to-r from-cyan-400 to-blue-500 px-10 py-4 rounded-2xl text-black text-xl font-bold hover:scale-105 transition">

              Get Started

            </button>

            <button className="border border-cyan-500/30 text-cyan-400 px-10 py-4 rounded-2xl text-xl hover:bg-cyan-500/10 transition">

              ▶ Try Mock Interview

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}