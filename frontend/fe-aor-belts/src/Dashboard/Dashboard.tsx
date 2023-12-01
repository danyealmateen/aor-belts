import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className='dashboard-content-container'>
      <button
        className='knatte-btn'
        onClick={() => {
          navigate('/knattar');
          console.log('knatteknappen tryckt');
        }}
      >
        Visa knatte
      </button>
      <button
        className='barn-btn'
        onClick={() => {
          navigate('/');
          console.log('barnknappen tryckt');
        }}
      >
        Visa barn
      </button>
      <hr />
    </div>
  );
}

export default Dashboard;
