import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AuthContext from "./components/AuthContext";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContext>
      <div className="header">
        <a href="/">
          <img src="/img/logo.png" />
          Twitter
        </a>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </AuthContext>
  </React.StrictMode>
);
