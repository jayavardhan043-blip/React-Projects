import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Students from "./Pages/Students";
import AddStudent from "./Pages/AddStudent";
import About from "./Pages/About";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/students"
          element={<Students />}
        />

        <Route
          path="/add-student"
          element={<AddStudent />}
        />

        <Route
          path="/about"
          element={<About />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;