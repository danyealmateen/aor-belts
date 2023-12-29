import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const AddNewKid = () => {
  const [show, setShow] = useState(false);
  const [inputName, setInputName] = useState('');
  const [inputBelt, setInputBelt] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postNewKid();
    console.log(testObj);
  };

  const testObj = {
    name: inputName,
    belt: inputBelt,
  };

  const postNewKid = async () => {
    try {
      const response = await fetch(
        'https://aor-belts-main.onrender.com/api/addkid',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(testObj),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button onClick={handleShow}>Add new kid</Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new kid</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <FloatingLabel controlId='name' label='Namn' className='mb-3'>
              <Form.Control
                type='text'
                placeholder='Namn'
                onChange={(e) => {
                  setInputName(e.target.value);
                  console.log(inputName);
                }}
              />
            </FloatingLabel>

            <FloatingLabel controlId='belt' label='Bälte' className='mb-3'>
              <Form.Control
                type='text'
                placeholder='Bälte'
                onChange={(e) => {
                  setInputBelt(e.target.value);
                  console.log(inputBelt);
                }}
              />
            </FloatingLabel>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Avbryt
            </Button>
            <Button variant='primary' type='submit'>
              Lägg till
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default AddNewKid;
