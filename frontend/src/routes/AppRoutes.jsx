import { Routes, Route, Link } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/Register";

function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">
        Frontend Connected to Backend
      </h1>

      <Link
        to="/login"
        className="mt-10 bg-green-500 px-6 py-3 rounded-xl text-xl hover:bg-green-700"
      >
        Go to Login
      </Link>
    </div>
  );
}

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};


export default AppRoutes;