export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Aarav Sharma",
      role: "Software Engineer Intern",
      feedback:
        "The AI mock interviews helped me gain confidence and improve my communication skills tremendously.",
    },
    {
      name: "Priya Reddy",
      role: "Frontend Developer",
      feedback:
        "The ATS resume scanner gave detailed suggestions that helped my resume stand out during applications.",
    },
    {
      name: "Rahul Verma",
      role: "Data Analyst",
      feedback:
        "Performance analytics made it easy to track my progress and prepare better for interviews.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-12 bg-black"
    >
      <div className="w-[88%] max-w-[1400px] mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-4xl lg:text-5xl font-bold">
            What Our Users Say
          </h2>

          <p className="text-gray-400 text-lg mt-4">
            Success stories from students and professionals
          </p>

        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-400 transition duration-300"
            >

              <div className="text-cyan-400 text-4xl mb-4">
                ★★★★★
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                "{item.feedback}"
              </p>

              <div>

                <h3 className="text-xl font-semibold">
                  {item.name}
                </h3>

                <p className="text-gray-400 text-sm mt-1">
                  {item.role}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}