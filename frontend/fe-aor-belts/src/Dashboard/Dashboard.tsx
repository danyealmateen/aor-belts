import DisplayKnattar from '../DisplayKnattar/DisplayKnattar';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className='dashboard-content-container'>
      <h3 className='dashboard-title'>Välkommen admin</h3>
      <button className='knatte-btn'
        onClick={() => {
          navigate('/knattar');
          console.log('knatteknappen tryckt');
        }}
      >
        Visa knatte
      </button>
      <button className='barn-btn'
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
