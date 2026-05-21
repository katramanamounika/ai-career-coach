import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {
  return (
    <section className="pt-8 pb-20">

      <div className="w-[88%] max-w-[1400px] mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">

          <h2 className="text-6xl font-bold">
            Everything You Need to Succeed
          </h2>

          <p className="text-gray-400 text-2xl mt-3">
            All the tools you need in one platform
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-4 gap-5">

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