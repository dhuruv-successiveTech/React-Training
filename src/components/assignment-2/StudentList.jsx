'use client';

import React, { useState, useMemo } from 'react';

const StudentList = () => {
  const [students, setStudents] = useState(['Alice', 'Bob', 'Charlie']);
  const [newStudent, setNewStudent] = useState('');

  const memoizedStudents = useMemo(() => students, [students]);

  const addStudent = () => {
    const trimmedName = newStudent.trim();
    if (trimmedName) {
      setStudents([...students, trimmedName]);
      setNewStudent(''); // Clear input after adding
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Student List</h2>

      <ul>
        {memoizedStudents.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>

      <div style={{ marginTop: '20px' }}>
        <input
          type="text"
          placeholder="Enter student name"
          value={newStudent}
          onChange={(e) => setNewStudent(e.target.value)}
          style={{ padding: '5px', marginRight: '10px' }}
        />
        <button onClick={addStudent}>Add Student</button>
      </div>
    </div>
  );
};

export default StudentList;
