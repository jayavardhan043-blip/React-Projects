
function StudentList({ students }) {
  return (
    <div className="student-list">
      <h2>Registered Students</h2>

      {students.length === 0 ? (
        <p>No students registered yet.</p>
      ) : (
        students.map((student, index) => (
          <div key={index} className="student-card">
            <h3>{student.name}</h3>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Phone:</strong> {student.phone}</p>
            <p><strong>Gender:</strong> {student.gender}</p>
            <p><strong>Course:</strong> {student.course}</p>
            <p><strong>DOB:</strong> {student.dob}</p>
            <p><strong>Address:</strong> {student.address}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default StudentList;