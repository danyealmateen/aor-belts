import { useState, useEffect } from 'react';
import BeltSystem from '../BeltSystem/BeltSystem';
import { Student } from '../Interfaces';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function DisplayData() {
  const [filterStudents, setFilterStudents] = useState<Student[]>([]);
  const [data, setData] = useState<Student[] | null>(null);

  // async function updateData(updatedStudent: Student) {
  //   setData((prevData) => {
  //     if (prevData) {
  //       const newData = prevData.map((s) =>
  //         s._id === updatedStudent._id ? updatedStudent : s
  //       );
  //       return newData;
  //     }
  //     return prevData;
  //   });

  //   try {
  //     const response = await fetch(
  //       `https://aor-belts-main.onrender.com/api/barn/${updatedStudent._id}`,
  //       {
  //         method: 'PUT',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(updatedStudent),
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }

  //     const responseData = await response.json();
  //     console.log('Data successfully updated:', responseData);
  //   } catch (error) {
  //     console.error('Error updating student:', error);
  //   }
  // }

  async function getData() {
    try {
      const result = await fetch(
        'https://aor-belts-main.onrender.com/api/barn/'
      );
      const fetchedData = await result.json();
      const sortedData = sortStudents(fetchedData);
      setData(sortedData);
      setFilterStudents(fetchedData);
    } catch (error) {
      console.log('Error fetching data', error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (data) {
      setFilterStudents(data);
    } else {
      setFilterStudents([]);
    }
  }, [data]);

  function sortStudents(students: Student[]) {
    return [...students].sort((a, b) => {
      const firstNameA = a.name.split(' ')[0].toLowerCase();
      const firstNameB = b.name.split(' ')[0].toLowerCase();
      return firstNameA.localeCompare(firstNameB);
    });
  }

  const filterStudent = (event: any) => {
    const inputValue = event.target.value.toLowerCase();
    const filtered = data
      ? data.filter((student) => {
          const lowerCaseStudentName = student.name
            .toLowerCase()
            .replace(/ /g, '');
          return lowerCaseStudentName.includes(inputValue);
        })
      : [];
    setFilterStudents(filtered);
  };

  return (
    <>
      <div className='filter-kids-container'>
        <FloatingLabel label='Sök...' className='mb-3'>
          <Form.Control
            className='search-bar'
            type='text'
            placeholder='Sök...'
            onChange={filterStudent}
          />
        </FloatingLabel>
      </div>

      {filterStudents &&
        filterStudents.map((student) => (
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
