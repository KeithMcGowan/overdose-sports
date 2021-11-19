import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Homepage } from "./pages/Homepage/Homepage";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element=<Homepage /> />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
