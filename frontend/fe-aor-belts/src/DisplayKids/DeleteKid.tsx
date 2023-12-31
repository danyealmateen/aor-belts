import { useContext } from 'react';
import { DataContext } from './DataContext';
import { Student } from '../Interfaces';
import Button from 'react-bootstrap/Button';

const DeleteKid = ({ id }: any) => {
  const { data, setData } = useContext(DataContext);

  const handleDelete = async () => {
    setData((prevData) => {
      if (!prevData) return null;
      const newData = prevData.filter((student: Student) => student._id !== id);
      return newData;
    });

    try {
      const response = await fetch(
        `https://aor-belts-main.onrender.com/api/barn/${id}`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) {
        throw new Error(`Network response was not ok`);
      }

      console.log('Barnet har tagits bort');
    } catch (error) {
      console.log('Sorry cant delete the kid', error);
    }
  };

  return (
    <>
      <Button
        variant='dark'
        className='delete-btn'
        onClick={() => {
          console.log('delete knappen klickad');
          handleDelete();
        }}
      >
        Ta bort
      </Button>
    </>
  );
};

export default DeleteKid;
