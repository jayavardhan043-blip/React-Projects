import { useState } from "react";
import { useStudents } from "../Context/StudentContext";

function AddStudent() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [gender, setGender] = useState("");

  const { addStudent } = useStudents();

 const handleSubmit = (e) => {
  e.preventDefault();

  console.log("FORM SUBMITTED");

    if (!name || !email || !age || !course || !gender) {
      alert("Please fill all fields");
      return;
    }

    const newStudent = {
      name,
      email,
      age,
      course,
      gender
    };

    addStudent(newStudent);

    alert("Student added successfully!");

    setName("");
    setEmail("");
    setAge("");
    setCourse("");
    setGender("");
  };

  return (
    <div className="add-student-container">

      <h1>Add New Student</h1>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Student Name</label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter student name"
          />
        </div>

        <div className="form-group">
          <label>Email</label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Age</label>

          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter age"
          />
        </div>

        <div className="form-group">
          <label>Course</label>

          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="">Select Course</option>
            <option value="React">React</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="SQL">SQL</option>
          </select>
        </div>

        <div className="form-group">
          <label>Gender</label>

          <div className="gender-options">

            <label>
              <input
                type="radio"
                value="Male"
                checked={gender === "Male"}
                onChange={(e) => setGender(e.target.value)}
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                value="Female"
                checked={gender === "Female"}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>

          </div>
        </div>

        <button type="submit" className="submit-btn">
          Add Student
        </button>

      </form>

    </div>
  );
}

export default AddStudent;