import { useStudents } from "../Context/StudentContext";

function StudentCard({ student, onEdit }) {

  const {
    deleteStudent,
    toggleStatus
  } = useStudents();


  const handleDelete = () => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (confirmDelete) {
      deleteStudent(student.id);
    }

  };


  return (

    <div className="student-card">

      <h2>👤 {student.name}</h2>

      <p>📧 {student.email}</p>

      <p>🎂 Age: {student.age}</p>

      <p>📚 Course: {student.course}</p>

      <p>⚧ Gender: {student.gender}</p>


      <p>
        Status:

        <span
          className={
            student.status === "Active"
              ? "active-status"
              : "inactive-status"
          }
        >
          {student.status}
        </span>

      </p>


      <div className="student-actions">

        <button
          className="edit-btn"
          onClick={() => onEdit(student)}
        >
          Edit
        </button>


        <button
          className="delete-btn"
          onClick={handleDelete}
        >
          Delete
        </button>


        <button
          className="status-btn"
          onClick={() => toggleStatus(student.id)}
        >
          Toggle Status
        </button>

      </div>

    </div>

  );
}

export default StudentCard;