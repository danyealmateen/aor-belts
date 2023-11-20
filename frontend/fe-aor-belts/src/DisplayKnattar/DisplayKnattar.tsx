import { useState, useEffect } from 'react';
import Dashboard from '../Dashboard/Dashboard';

function DisplayKnattar() {
  type Student = {
    _id: string;
    name: string;
    belt: string;
    group: string;
    graduated: boolean;
  };

  const [knattar, setKnattar] = useState<Student[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  async function getData() {
    try {
      const response = await fetch(
        'https://aor-belts-main.onrender.com/api/show/knattar'
      );

      console.log(response);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const fetchedData = await response.json();
      setKnattar(fetchedData);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setError('Failed to fetch data');
      setIsLoading(false);
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
      <h2 className='knatte-title'>Knattar</h2>
      <ul className='knatte-ul'>
        {knattar.map((student) => (
          <li key={student._id}>
            {student.name} - {student.belt}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayKnattar;
