import { useState } from 'react';

function RegisterStudent({ addStudent }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    course: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addStudent(formData);

    console.log('Student Added:', formData);

    setFormData({
      name: '',
      age: '',
      course: ''
    });
  };

  return (
    <div>
      <h1>Register Student</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={formData.name}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="text"
          name="course"
          placeholder="Course"
          value={formData.course}
          onChange={handleChange}
        />

        <br />
        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterStudent;