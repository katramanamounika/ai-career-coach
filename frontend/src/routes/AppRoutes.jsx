import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/Register";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import Dashboard from "../pages/Dashboard";
import ResumeAnalyzer from "../pages/ResumeAnalyzer";
import MockInterview from "../pages/MockInterview";
import Analytics from "../pages/Analytics";
import InterviewSession from "../pages/InterviewSession";

export default function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<LandingPage />} />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/register" element={<RegisterPage />} />

      <Route
        path="/forgot-password"
        element={<ForgotPasswordPage />}
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/resume-analyzer"
        element={<ResumeAnalyzer />}
      />

      <Route
        path="/mock-interview"
        element={<MockInterview />}
      />

      <Route
        path="/analytics"
        element={<Analytics />}
      />

      <Route
        path="/interview-session"
        element={<InterviewSession />}
      />

    </Routes>
  );
}