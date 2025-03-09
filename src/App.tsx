import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css";
import LoginPage from "./modules/auth/login-page";
import HomePage from "./modules/home/home-page";
import DashboardPage from "./modules/dashboard/dashboard-page";
import Overview from "./modules/overview/overview-page";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <DashboardPage />
          }
        >
          <Route index element={<Overview />} />
          {/* <Route path="documents" element={<DocumentsPage />} />
          <Route path="chat" element={<Chat />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
