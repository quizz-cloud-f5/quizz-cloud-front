import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css";
import LoginPage from "./modules/auth/login-page";
import HomePage from "./modules/home/home-page";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
