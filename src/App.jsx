import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import RegisterStudent from './pages/RegisterStudent';
import StudentList from './pages/StudentList';
import About from './pages/About';

import './App.css';

function App() {
  // State to store all registered students
  const [students, setStudents] = useState([]);

  // Function to add a new student
  const addStudent = (student) => {
    setStudents((prevStudents) => [...prevStudents, student]);
  };

  return (
    <BrowserRouter>
      <Navbar />

      <div className="container">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Register Student Page */}
          <Route
            path="/register"
            element={<RegisterStudent addStudent={addStudent} />}
          />

          {/* Student List Page */}
          <Route
            path="/students"
            element={<StudentList students={students} />}
          />

          {/* About Page */}
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;