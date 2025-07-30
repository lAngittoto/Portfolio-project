import Home from "./components/Home";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </>
  );
}

export default App;
