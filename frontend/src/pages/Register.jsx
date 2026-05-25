import RegisterForm from "../components/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden flex items-center justify-center px-4">

      {/* Base Gradient */}
      <div className="absolute inset-0-bg-gradient-to-br from-black via-slate-950 to-cyan-950"></div>

      {/* Full Screen Ambient Glow */}
      <div className="absolute inset-0 bg-cyan-500/10 blur-[180px]"></div>

      <div className="absolute inset-0 bg-blue-500/10 blur-[220px]"></div>

      {/* Top Glow */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-cyan-500/10 blur-[150px]"></div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-blue-500/10 blur-[150px]"></div>

      {/* Left Ambient */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-cyan-400/10 blur-[150px]"></div>

      {/* Right Ambient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-400/10 blur-[150px]"></div>

      {/* Cyber Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px]"></div>

      {/* Radial Focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,black_85%)]"></div>

      {/* Moving Glow */}
      <div className="absolute inset-0-bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 animate-pulse"></div>

      {/* Blur Layer */}
      <div className="absolute inset-0 backdrop-blur-[2px]"></div>

      {/* Register Form */}
      <div className="relative z-10">
        <RegisterForm />
      </div>

    </div>
  );
};

export default RegisterPage;