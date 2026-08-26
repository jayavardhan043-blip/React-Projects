import { useState } from "react";
import { useStudents } from "../Context/StudentContext";
import StudentCard from "../Components/StudentCard";

function Students() {

  const { students, updateStudent } = useStudents();

  const [search, setSearch] = useState("");
  const [courseFilter, setCourseFilter] = useState("All");

  const [editingStudent, setEditingStudent] = useState(null);


  // SEARCH + FILTER

  const filteredStudents = students.filter((student) => {

    const matchesSearch =
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.email.toLowerCase().includes(search.toLowerCase());

    const matchesCourse =
      courseFilter === "All" ||
      student.course === courseFilter;

    return matchesSearch && matchesCourse;
  });


  // EDIT

  const handleEdit = (student) => {
    setEditingStudent(student);
  };


  // UPDATE

  const handleUpdate = (e) => {

    e.preventDefault();

    updateStudent(editingStudent);

    setEditingStudent(null);
  };


  return (
    <div className="students-container">

      <h1>Students</h1>


      {/* SEARCH AND FILTER */}

      <div className="search-filter">

        <input
          type="text"
          placeholder="Search students..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />


        <select
          value={courseFilter}
          onChange={(e) => setCourseFilter(e.target.value)}
        >

          <option value="All">
            All Courses
          </option>

          <option value="React">
            React
          </option>

          <option value="Java">
            Java
          </option>

          <option value="Python">
            Python
          </option>

          <option value="SQL">
            SQL
          </option>

        </select>

      </div>


      {/* STUDENTS */}

      {filteredStudents.length === 0 ? (

        <p className="no-students">
          No students found.
        </p>

      ) : (

        <div className="students-grid">

          {filteredStudents.map((student) => (

            <StudentCard
              key={student.id}
              student={student}
              onEdit={handleEdit}
            />

          ))}

        </div>

      )}


      {/* EDIT FORM */}

      {editingStudent && (

        <div className="edit-form-container">

          <h2>Edit Student</h2>

          <form onSubmit={handleUpdate}>

            <input
              type="text"
              value={editingStudent.name}
              onChange={(e) =>
                setEditingStudent({
                  ...editingStudent,
                  name: e.target.value
                })
              }
            />

            <input
              type="email"
              value={editingStudent.email}
              onChange={(e) =>
                setEditingStudent({
                  ...editingStudent,
                  email: e.target.value
                })
              }
            />

            <input
              type="number"
              value={editingStudent.age}
              onChange={(e) =>
                setEditingStudent({
                  ...editingStudent,
                  age: e.target.value
                })
              }
            />

            <select
              value={editingStudent.course}
              onChange={(e) =>
                setEditingStudent({
                  ...editingStudent,
                  course: e.target.value
                })
              }
            >

              <option value="React">React</option>
              <option value="Java">Java</option>
              <option value="Python">Python</option>
              <option value="SQL">SQL</option>

            </select>


            <div>

              <label>
                <input
                  type="radio"
                  value="Male"
                  checked={editingStudent.gender === "Male"}
                  onChange={(e) =>
                    setEditingStudent({
                      ...editingStudent,
                      gender: e.target.value
                    })
                  }
                />

                Male
              </label>


              <label>
                <input
                  type="radio"
                  value="Female"
                  checked={editingStudent.gender === "Female"}
                  onChange={(e) =>
                    setEditingStudent({
                      ...editingStudent,
                      gender: e.target.value
                    })
                  }
                />

                Female
              </label>

            </div>


            <button type="submit">
              Update Student
            </button>


            <button
              type="button"
              onClick={() => setEditingStudent(null)}
            >
              Cancel
            </button>

          </form>

        </div>

      )}

    </div>
  );
}

export default Students;