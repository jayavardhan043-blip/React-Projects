import { useState } from 'react';

function StudentForm({ addStudent }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    course: '',
    dob: '',
    address: ''
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

    setFormData({
      name: '',
      email: '',
      phone: '',
      gender: '',
      course: '',
      dob: '',
      address: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Student Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
      />

      <div>
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === 'Male'}
            onChange={handleChange}
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === 'Female'}
            onChange={handleChange}
          />
          Female
        </label>
      </div>

      <select
        name="course"
        value={formData.course}
        onChange={handleChange}
      >
        <option value="">Select Course</option>
        <option>B.Tech</option>
        <option>B.Sc</option>
        <option>BCA</option>
        <option>MCA</option>
      </select>

      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
      />

      <textarea
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
      />

      <button type="submit">Register</button>
    </form>
  );
}

export default StudentForm;