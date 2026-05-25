import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {
  return (
    <section id="features" className="pt-15 pb-15">

      <div className="w-[88%] max-w-[1400px] mx-auto px-6 md:px-10">

        {/* Heading */}
        <div className="text-center mb-8">

          <h2 className="text-3xl lg:text-4xl font-bold">
            Everything You Need to Succeed
          </h2>

          <p className="text-gray-400 text-lg mt-3">
            All the tools you need in one platform
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-4 gap-8">

          <FeatureCard

            icon="📄"
            title="ATS Resume Scanner"
            description="Get detailed analysis and improve your resume score."
          />

          <FeatureCard
            icon="🤖"
            title="AI Mock Interviews"
            description="Practice with AI interviewers and boost your confidence."
          />

          <FeatureCard
            icon="📈"
            title="Performance Analytics"
            description="Track your progress and identify improvement areas."
          />

          <FeatureCard
            icon="🎓"
            title="Career Guidance"
            description="Get personalized suggestions for your career growth."
          />

        </div>

      </div>

    </section>
  );
}