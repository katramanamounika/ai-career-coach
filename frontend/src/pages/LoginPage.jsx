import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden flex items-center justify-center">

      {/* Background Glow */}
      <div className="absolute top-0 left-0-w-[500px]-h-[500px] bg-cyan-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0-w-[500px]-h-[500px] bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)]-bg-[size:30px_30px]"></div>

      {/* Login Form */}
      <div className="relative z-10">
        <LoginForm />
      </div>

    </div>
  );
};

export default LoginPage;