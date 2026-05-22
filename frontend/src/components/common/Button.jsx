export default function Button({ text }) {
  return (
    <button className="px-8 py-4 rounded-2xl bg-linear-to-r from-cyan-400 to-blue-500 text-black font-bold hover:scale-105 transition">
      {text}
    </button>
  );
}