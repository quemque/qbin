import React from "react";
import { Routes, Route } from "react-router-dom";
import LeftSidebar from "./components/layout/LeftSidebar/LeftSidebar";
import { ThemeProvider } from "./context/ThemeContext";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <ThemeProvider>
      <div style={{ display: "flex" }}>
        <LeftSidebar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
