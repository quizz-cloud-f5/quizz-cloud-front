import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import "./App.css";
import LoginPage from "./modules/auth/login-page";
import HomePage from "./modules/home/home-page";
import DashboardPage from "./modules/dashboard/dashboard-page";
import Overview from "./modules/overview/overview-page";
import { AuthProvider } from "./modules/auth/contexts/auth.context";
import { RequireAuth } from "./modules/auth/contexts/require-auth.context";



function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Protected routes with RequireAuth */}
          <Route path="/dashboard" element={<RequireAuth />}>
            <Route index element={<DashboardPage />} />
            <Route path="overview" element={<Overview />} />

            {/* Non existing protected route redirect to login */}
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Route>

          {/* Non existing route redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
