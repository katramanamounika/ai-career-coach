export default function AboutSection() {
  const stats = [
    { value: "10K+", label: "Interviews" },
    { value: "95%", label: "Satisfaction" },
    { value: "5K+", label: "Resumes" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <section
      id="about"
      className="py-14 bg-black"
    >
      <div className="w-[88%] max-w-[1200px] mx-auto">

        {/* Heading */}
        <div className="text-center max-w-[700px] mx-auto mb-12">

          <h2 className="text-3xl lg:text-5xl font-bold leading-tight">

            Helping You Build{" "}

            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Career Confidence
            </span>

          </h2>

          <p className="text-gray-400 text-base mt-4 leading-relaxed">
            Resume analysis, AI interviews, and career guidance
            — all in one platform.
          </p>

        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div>

            <h3 className="text-2xl lg:text-3xl font-semibold leading-snug mb-5">
              Smart career preparation made simple.
            </h3>

            <p className="text-gray-400 text-base leading-relaxed mb-6">
              Improve resumes, practice interviews,
              and track progress using AI-powered tools.
            </p>

            {/* Bullet Points */}
            <div className="space-y-3">

              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>

                <p className="text-gray-300 text-sm">
                  Resume optimization
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>

                <p className="text-gray-300 text-sm">
                  AI mock interviews
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>

                <p className="text-gray-300 text-sm">
                  Career analytics
                </p>
              </div>

            </div>

          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-4">

            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-[#07101f] border border-cyan-500/20 rounded-2xl p-5 hover:border-cyan-400 transition duration-300"
              >

                <h4 className="text-3xl font-bold text-cyan-400 mb-2">
                  {item.value}
                </h4>

                <p className="text-gray-400 text-sm">
                  {item.label}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}