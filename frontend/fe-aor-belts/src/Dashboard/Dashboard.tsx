import DisplayKnattar from '../DisplayKnattar/DisplayKnattar';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className='dashboard-content-container'>
      <h1 className='dashboard-title'>This is Dashboard</h1>
      <button
        onClick={() => {
          navigate('/knattar');
          console.log('knatteknappen tryckt');
        }}
      >
        Visa knatte
      </button>
      <button
        onClick={() => {
          navigate('/');
          console.log('barnknappen tryckt');
        }}
      >
        Visa barn
      </button>
    </div>
  );
}

export default Dashboard;
