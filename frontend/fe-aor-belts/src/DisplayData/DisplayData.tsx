import { useState, useEffect, useMemo } from 'react';
import BeltSystem from '../BeltSystem/BeltSystem';
import Dashboard from '../Dashboard/Dashboard';

function DisplayData() {
  type Student = {
    _id: string;
    name: string;
    belt: string;
    group: string;
    graduated: boolean;
  };

  useEffect(() => {
    getData();
  }, []);

  async function updateData(updatedStudent: Student) {
    console.log('före uppdatering:', updatedStudent._id);
    setData((prevData) => {
      if (prevData) {
        console.log('test');
        const newData = prevData.map((s) =>
          s._id === updatedStudent._id ? updatedStudent : s
        );
        console.log('efter uppdatering:', newData); // Logga efter uppdatering
        return newData;
      }
      return prevData;
    });

    try {
      // //LOKALA
      // `http://localhost:3000/api/students/${updatedStudent._id}`
      //PRODUKTION
      // `https://aor-belts-main.onrender.com/api/students/${updatedStudent._id}`
      const response = await fetch(
        `https://aor-belts-main.onrender.com/api/students/${updatedStudent._id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedStudent),
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      console.log('Data successfully updated:', responseData);
    } catch (error) {
      console.error('Error updating student:', error);
    }
  }

  async function getData() {
    try {
      // //LOKALA
      // const result = await fetch('http://localhost:3000/api/show');
      // PRODUKTION
      const result = await fetch(
        'https://aor-belts-main.onrender.com/api/show'
      );

      const fetchedData = await result.json();

      console.log(fetchedData);
      const sortedData = sortStudents(fetchedData);
      setData(sortedData);
    } catch (error) {
      console.log('Error fetching data', error);
    }
  }

  const [data, setData] = useState<Student[] | null>(null);

  function sortStudents(students: Student[]) {
    return [...students].sort((a, b) => {
      const firstNameA = a.name.split(' ')[0].toLowerCase();
      const firstNameB = b.name.split(' ')[0].toLowerCase();
      return firstNameA.localeCompare(firstNameB);
    });
  }

  const sortedData = useMemo(() => {
    return data ? sortStudents(data) : [];
  }, [data]);

  return (
    <>
      <Dashboard />
      <h1 className='login-title'>Barngruppen</h1>
      {sortedData &&
        sortedData.map((student) => (
          <div
            className={`kids-div ${
              student.graduated && student.graduated === true
                ? 'graduated'
                : student.graduated === false
            }`}
            key={student._id}
          >
            <BeltSystem
              student={student}
              onBeltChange={(updatedStudent) => updateData(updatedStudent)}
            />
          </div>
        ))}
    </>
  );
}
export default DisplayData;
