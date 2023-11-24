import React from 'react';

type BeltSystemProps = {
  student: {
    _id: string;
    name: string;
    belt: string;
    group: string;
    graduated: boolean;
  };
  onBeltChange: (updateStudent: any) => void;
};

const BeltSystem: React.FC<BeltSystemProps> = ({ student, onBeltChange }) => {
  const belts = [
    'Nybörjare',
    'Vitbälte',
    'Vitbälte+1',
    'Vitbälte+2',
    'Gråvitbälte',
    'Gråvitbälte+1',
    'Gråvitbälte+2',
    'Gråbälte',
    'Gråbälte+1',
    'Gråbälte+2',
    'Gråsvartbälte',
    'Gråsvartbälte+1',
    'Gråsvartbälte+2',
    'Gulvitbälte',
    'Gulvitbälte+1',
    'Gulvitbälte+2',
    'Gulbälte',
    'Gulbälte+1',
    'Gulbälte+2',
    'Gulsvartbälte',
    'Gulsvartbälte+1',
    'Gulsvartbälte+2',
  ];

  function increaseBelt() {
    const currentIndex = belts.indexOf(student.belt);
  
    if (currentIndex < belts.length - 1) {
      const updatedStudent = {
        ...student,
        belt: belts[currentIndex + 1],
        graduated: true,
      };
      onBeltChange(updatedStudent);
    }
  }

  function decreaseBelt() {
    const currentIndex = belts.indexOf(student.belt);
    if (currentIndex > 0) {
      const updatedStudent = {
        ...student,
        belt: belts[currentIndex - 1],
        graduated: false,
      };
      onBeltChange(updatedStudent);
    }
  }

  return (
    <>
      <h4>Namn: {student.name}</h4>
      <h4>Bälte: {student.belt}</h4>
      <button className='asc-btn' onClick={increaseBelt}>
        Level-up
      </button>
      <button className='desc-btn' onClick={decreaseBelt}>
        Downgrade
      </button>
    </>
  );
};

export default BeltSystem;
