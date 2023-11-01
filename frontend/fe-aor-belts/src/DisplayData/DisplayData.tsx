import React, { useState, useEffect } from 'react';
import './DisplayData.css';

function DisplayData() {
  type Student = {
    _id: string;
    name: string;
    belt: string;
  };

  async function getData() {
    try {
      const result = await fetch('http://localhost:3000/api/show');
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
    <div>
      <h1>Barn</h1>
      {data &&
        data.map((student) => (
          <div key={student._id}>
            <h3>{student.name}</h3>
            <p>Bälte: {student.belt}</p>
          </div>
        ))}
    </div>
  );
}

export default DisplayData;
