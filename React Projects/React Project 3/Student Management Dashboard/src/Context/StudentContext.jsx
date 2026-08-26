import { createContext, useContext, useEffect, useState } from "react";

const StudentContext = createContext();

export function StudentProvider({ children }) {

  const [students, setStudents] = useState(() => {

    const savedStudents = localStorage.getItem("students");

    return savedStudents
      ? JSON.parse(savedStudents)
      : [];

  });


  // SAVE STUDENTS

  useEffect(() => {

    localStorage.setItem(
      "students",
      JSON.stringify(students)
    );

  }, [students]);


  // ADD
const addStudent = (student) => {

  console.log("ADD STUDENT CALLED:", student);

  setStudents((prevStudents) => [

      ...prevStudents,

      {
        ...student,
        id: Date.now(),
        status: "Active"
      }

    ]);

  };


  // DELETE

  const deleteStudent = (id) => {

    setStudents((prevStudents) =>
      prevStudents.filter(
        (student) => student.id !== id
      )
    );

  };


  // UPDATE

  const updateStudent = (updatedStudent) => {

    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === updatedStudent.id
          ? updatedStudent
          : student
      )
    );

  };


  // CHANGE STATUS

  const toggleStatus = (id) => {

    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id
          ? {
              ...student,
              status:
                student.status === "Active"
                  ? "Inactive"
                  : "Active"
            }
          : student
      )
    );

  };


  return (

    <StudentContext.Provider
      value={{
        students,
        addStudent,
        deleteStudent,
        updateStudent,
        toggleStatus
      }}
    >

      {children}

    </StudentContext.Provider>

  );

}


export function useStudents() {
  return useContext(StudentContext);
}