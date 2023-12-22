import React from 'react';
import { BeltSystemProps } from '../Interfaces';
import { Table, Button, Container, Row, Col } from 'react-bootstrap';
import "../styles/global.styling.css";

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
    <Container className='student-container'>
      <Row>
        <Col>
          <Table striped bordered hover variant="light" className="table-centered">
            <thead>
              <tr>
                <th>Namn</th>
                <th>Bältesgrad</th>
                <th>Åtgärder</th>
                <th>Senaste Uppdatering</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{student.name}</td>
                <td>{student.belt}</td>
                <td>
                  <Button className='level-btns' onClick={increaseBelt} variant="success">Gradera</Button>
                  {' '}
                  <Button className='level-btns' onClick={decreaseBelt} variant="danger">Nedgrada</Button>
                </td>
                <td>
                  {student.graduated ? `Uppdaterad: ${month} ${year}` : 'Ej Uppdaterad'}
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};
export default BeltSystem;
