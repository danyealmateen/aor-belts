import { useState, useEffect, useContext } from 'react';
import { DataContext } from './DataContext';
import BeltSystem from '../BeltSystem/BeltSystem';
import { Student } from '../Interfaces';
import { updateData } from './UpdateKidsFunction';
import "../styles/global.styling.css";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function DisplayKids() {
  const [filterStudents, setFilterStudents] = useState<Student[]>([]);
  const [lastSearchTerm, setLastSearchTerm] = useState('');
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
    setLastSearchTerm(inputValue);
    applyFilter(inputValue);
  };

  const applyFilter = (inputValue: string) => {
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

  useEffect(() => {
    if (data) {
      applyFilter(lastSearchTerm);
    }
  }, [data]);

  return (
    <>
      <FloatingLabel
        controlId="floatingInput"
        label="Sök..."
        className="mb-3"
      >
        <Form.Control
          type="text"
          placeholder="Sök..."
          onChange={filterStudent}

        />
      </FloatingLabel>


      {/* <input
        type='text'
        placeholder='Sök...'
        onChange={filterStudent}
        className='search-bar'
      /> */}



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
