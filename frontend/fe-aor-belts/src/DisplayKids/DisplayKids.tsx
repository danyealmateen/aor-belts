import { useState, useEffect, useContext } from 'react';
import { DataContext } from './DataContext';
import BeltSystem from '../BeltSystem/BeltSystem';
import { Student } from '../Interfaces';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { updateData } from './UpdateKidsFunction';
import "../styles/global.styling.css";

function DisplayKids() {
  const [filterStudents, setFilterStudents] = useState<Student[]>([]);
  const { data, setData } = useContext(DataContext);

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
      ? data.filter((student: any) => {
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
      <FloatingLabel label='Sök...' className='mb-3 custom-search-label'>
        <Form.Control
          type='text'
          placeholder='Sök...'
          onChange={filterStudent}
          className='form-control'
        />
      </FloatingLabel>
      {filterStudents &&
        filterStudents.map((student) => (
          <div
            className={`kids-div ${student.graduated && student.graduated === true
              ? 'graduated'
              : student.graduated === false
              }`}
            key={student._id}
          >
            <BeltSystem
              student={student}
              onBeltChange={(updatedStudent) => updateData(updatedStudent, setData)}
            />
          </div>
        ))}
    </>
  );
}
export default DisplayKids;
