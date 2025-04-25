import React, { useEffect, useState } from 'react';
import { fetchTeachers } from '../services/api';

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTeachers = async () => {
      try {
        const data = await fetchTeachers();
        setTeachers(data);
      } catch (error) {
        console.error('Error fetching teachers:', error);
      } finally {
        setLoading(false);
      }
    };

    getTeachers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Teachers</h1>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher.id}>
            {teacher.name} - Assigned Students: {teacher.assignedStudents.length}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Teachers;