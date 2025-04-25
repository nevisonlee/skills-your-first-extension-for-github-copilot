import React from 'react';

const StudentProgress = ({ student }) => {
  return (
    <div className="student-progress">
      <h2>{student.name}'s Progress</h2>
      <h3>Grades</h3>
      <ul>
        {student.grades.map((grade, index) => (
          <li key={index}>
            {grade.subject}: {grade.score}
          </li>
        ))}
      </ul>
      <h3>Attendance</h3>
      <p>{student.attendance} days attended</p>
    </div>
  );
};

export default StudentProgress;