import { useStudents } from "../Context/StudentContext";
import { Link } from "react-router-dom";

function Dashboard() {
  const { students } = useStudents();
  console.log("Dashboard students:", students);

  const totalStudents = students.length;

  const totalCourses = new Set(
    students.map((student) => student.course)
  ).size;

  const activeStudents = students.filter(
    (student) => student.status === "Active" || !student.status
  ).length;

  return (
    <div className="dashboard">

      <div className="dashboard-header">
        <h1>Student Management Dashboard</h1>

        <p>
          Manage your students and their information easily.
        </p>
      </div>

      <div className="dashboard-cards">

        {/* Total Students */}
        <div className="dashboard-card">
          <div className="card-icon">👨‍🎓</div>

          <h2>{totalStudents}</h2>

          <p>Total Students</p>
        </div>

        {/* Total Courses */}
        <div className="dashboard-card">
          <div className="card-icon">📚</div>

          <h2>{totalCourses}</h2>

          <p>Total Courses</p>
        </div>

        {/* Active Students */}
        <div className="dashboard-card">
          <div className="card-icon">✅</div>

          <h2>{activeStudents}</h2>

          <p>Active Students</p>
        </div>

      </div>

      {/* BUTTONS */}
     <div className="dashboard-buttons">

  <button
    className="add-btn"
    onClick={() => navigate("/add-student")}
  >
    + Add Student
  </button>

  <button
    className="view-btn"
    onClick={() => navigate("/students")}
  >
    View Students
  </button>

</div>
      </div>

  );
}

export default Dashboard;