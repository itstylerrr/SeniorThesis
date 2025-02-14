import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import theme from "./styles/Theme";
import "./styles/App.css";
import "./assets/fonts/Vonique_64_Bold.ttf";
import Thesis from "./pages/Thesis";
import NotFound from "./pages/NotFound";
import Presentation from "./pages/Presentation";

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thesis" element={<Thesis />} />
          <Route path="/presentation" element={<Presentation />} />
          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
