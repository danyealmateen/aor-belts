
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const Dashboard = () => {
    const [show, setShow] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleLogin = async (e: any) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://aor-belts-main.onrender.com/api/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({ username, password })
            }
            );

            if (response.ok) {
                console.log('You are logged in!');
            } else {
                console.log('Username or password wrong!');
            }

        } catch (e) {
            console.log('Couldnt login', e);
        }
    };

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">Art Of Roll Kids</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Button variant='success' onClick={() => handleShow()}>Logga in</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Logga in</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleLogin}>
                        <Form.Label htmlFor="username">Användarnamn</Form.Label>
                        <Form.Control
                            type="text"
                            id="username"
                            onChange={(e) => setUsername(e.target.value)} />
                        <Form.Label htmlFor="password">Lösenord</Form.Label>
                        <Form.Control
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)} />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Avbryt
                    </Button>

                    <Button type='submit' variant="primary" onClick={handleLogin}>Logga in</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Dashboard;





