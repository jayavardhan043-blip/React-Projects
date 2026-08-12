function StudentList({ students }) {
  return (
    <div>
      <h1>Registered Students</h1>

      {students.length === 0 ? (
        <p>No students registered yet.</p>
      ) : (
        students.map((student, index) => (
          <div
            key={index}
            style={{
              border: '1px solid black',
              padding: '10px',
              marginBottom: '10px'
            }}
          >
            <h3>{student.name}</h3>
            <p>Age: {student.age}</p>
            <p>Course: {student.course}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default StudentList;