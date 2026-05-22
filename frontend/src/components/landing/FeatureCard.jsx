export default function FeatureCard({
  icon,
  title,
  description,
}) {
  return (
    <div className="bg-[#050816]/90 border border-cyan-500/10 rounded-3xl p-8 hover:border-cyan-400/40 transition duration-300 hover:-translate-y-2">

      {/* Icon */}
      <div className="text-4xl mb-8 text-cyan-400">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-semibold mb-5">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-xl leading-relaxed">
        {description}
      </p>

    </div>
  );
}