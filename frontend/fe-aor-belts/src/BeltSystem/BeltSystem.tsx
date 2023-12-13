import React from 'react';
import { BeltSystemProps } from '../Interfaces';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.toLocaleString('default', { month: 'long' });

const BeltSystem: React.FC<BeltSystemProps> = ({ student, onBeltChange }) => {
  const belts = [
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

    console.log('currentIndex:', currentIndex);

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
      <div className='content-container-belt-system'>
        <Container>
          <Row>
            <Col className='student-column'>
              <p>
                Namn: {student.name}
                <br />
                Bälte: {student.belt}
              </p>
              <div className='btn-container-beltsystem'>
                <Button
                  className='asc-btn'
                  onClick={() => {
                    console.log('increase knappen klickad');
                    increaseBelt();
                  }}
                  variant='success'
                >
                  +
                </Button>
                <Button
                  className='desc-btn'
                  onClick={() => {
                    decreaseBelt();
                    console.log('decrease knappen klickad');
                  }}
                  variant='danger'
                >
                  -
                </Button>
              </div>
              {student.graduated === true ? (
                <p className='graduated'>
                  Uppdaterad: {month} {year}
                </p>
              ) : null}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default BeltSystem;
