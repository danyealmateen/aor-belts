import React, { useState, useEffect } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import BeltSystem from '../BeltSystem/BeltSystem';

type Student = {
  _id: string;
  name: string;
  belt: string;
  group: string;
  graduated: boolean;
};

function DisplayKnattar() {
  const [knattar, setKnattar] = useState<Student[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  async function getData() {
    try {
      const response = await fetch(
        'https://aor-belts-main.onrender.com/api/knatte/'
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const fetchedData = await response.json();
      setKnattar(fetchedData);
      setIsLoading(false);
    } catch (err) {
      setError('Failed to fetch data');
      setIsLoading(false);
    }
  }

  async function updateData(updatedStudent: Student) {
    try {
      const response = await fetch(
        `https://aor-belts-main.onrender.com/api/knatte/${updatedStudent._id}`,
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

      const updatedKnattar = knattar.map((knatte) =>
        knatte._id === updatedStudent._id ? updatedStudent : knatte
      );
      setKnattar(updatedKnattar);
    } catch (error) {
      console.error('Error updating student:', error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Dashboard />
      <h1 className='knatte-title'>Knattegruppen</h1>
      <div>
        {knattar.map((student) => (
          <div
            className={`kids-div ${
              student.graduated && student.graduated === true
                ? 'graduated graduated-true'
                : ''
            }`}
            key={student._id}
          >
            <BeltSystem
              student={student}
              onBeltChange={(updatedStudent) => updateData(updatedStudent)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayKnattar;
