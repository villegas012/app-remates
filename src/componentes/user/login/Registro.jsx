import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';



export default function Registro() {

    const history = useHistory();

    const styleH1 = { margin: '10px', fontSize: '80px', textAlign: 'center' };
    const style1 = { marginTop: '60px' };

    const handleClick = (e) => {
        e.preventDefault();
        if (e.target.value === 'regresarHome') {
            history.push(`/`);
        }
    }

    return (
        <div>
            <h1 style={styleH1}>Registro</h1>
            <Container style={{ width: '800px' }}>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Correo:</Form.Label>
                                <Form.Control type="email" placeholder="Digita tu correo electronico" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Tipo ID:</Form.Label>
                                <Form.Control type="TipoID" placeholder="Tipo de identificaion" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Identificaion:</Form.Label>
                                <Form.Control type="Identificaion" placeholder="Digita tu identificaion" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Nombre:</Form.Label>
                                <Form.Control type="Nombre" placeholder="Digita tu nombre" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Apellido:</Form.Label>
                                <Form.Control type="Apellido" placeholder="Digita tu apellido" />
                            </Form.Group>

                        </Col>
                        <Col>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Edad:</Form.Label>
                                <Form.Control type="Edad" placeholder="Digita tu edad" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Contraseña:</Form.Label>
                                <Form.Control type="Contrasena" placeholder="Digita tu contraseña" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Confirmar contraseña:</Form.Label>
                                <Form.Control type="CContrasena" placeholder="Confirma tu contraseña" />
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={handleClick}>Registrarse</Button>
                        </Col>
                    </Row>
                </Form>
                <div style={style1}>
                    <Button value='regresarHome' onClick={handleClick}>Volver al Home</Button>
                </div>
            </Container>
        </div>
    )
}