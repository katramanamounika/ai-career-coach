export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Upload Resume",
      description:
        "Upload your resume and get AI-powered ATS analysis with improvement suggestions.",
    },
    {
      number: "02",
      title: "Practice Interviews",
      description:
        "Attend mock interviews with AI-generated questions tailored to your role.",
    },
    {
      number: "03",
      title: "Track Performance",
      description:
        "Analyze interview performance and identify areas that need improvement.",
    },
    {
      number: "04",
      title: "Get Placed",
      description:
        "Apply confidently with improved skills, resume score, and interview readiness.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-12 bg-slate-950"
    >
      <div className="w-[88%] max-w-[1400px] mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-4xl lg:text-5xl font-bold">
            How It Works
          </h2>

          <p className="text-gray-400 text-lg mt-4">
            Simple steps to accelerate your career journey
          </p>

        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-black border border-cyan-500/40 rounded-3xl p-8 hover:border-cyan-400 transition duration-300"
            >

              <div className="text-cyan-400 text-5xl font-bold mb-6">
                {step.number}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {step.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}