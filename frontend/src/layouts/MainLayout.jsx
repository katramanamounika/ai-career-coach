import Navbar from "../components/navbar/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-cyan-500/20 blur-[180px] rounded-full"></div>

      <div className="relative z-10">
        <Navbar />
        {children}
      </div>

    </div>
  );
}