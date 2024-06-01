
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Root from "./components/root/Root";

function App() {
 
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return (
   
      <Routes>

        <Route path="/" element={<Root />}>
          {isAuthenticated ? (
            <Route path="/home" element={<Home />} />
          ) : (
            <Route path="/" element={<Navigate to="/login" />} />
          )}
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    
  );
}

export default App;
