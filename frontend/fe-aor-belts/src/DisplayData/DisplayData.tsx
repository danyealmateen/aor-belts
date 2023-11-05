import { useState, useEffect } from 'react';
import './DisplayData.css';
import BeltSystem from '../BeltSystem/BeltSystem';

function DisplayData() {
  type Student = {
    _id: string;
    name: string;
    belt: string;
    group: string;
    graduated: boolean;
  };

  async function updateData(updatedStudent: Student) {
    setData((prevData) => {
      if (prevData) {
        return prevData.map((s) =>
          s._id === updatedStudent._id ? updatedStudent : s
        );
      }
      return prevData;
    });

    try {
      //PRODUKTION
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

      // //LOKALA
      // const response = await fetch(
      //   `http://localhost:3000/api/students/${updatedStudent._id}`,
      //   {
      //     method: 'PUT',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(updatedStudent),
      //   }
      // );

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
      // PRODUKTION
      const result = await fetch(
        'https://aor-belts-main.onrender.com/api/show'
      );

      // //LOKALA
      // const result = await fetch('http://localhost:3000/api/show');

      const fetchedData = await result.json();
      setData(fetchedData);
      console.log(fetchedData);
    } catch (error) {
      console.log('Error fetching data', error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const [data, setData] = useState<Student[] | null>(null);

  return (
    <>
      <h1 className='header'>Barngruppens gradering November 2023</h1>
      {data &&
        data.map((student) => (
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
