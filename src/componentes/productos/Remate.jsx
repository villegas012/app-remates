import React from 'react';
import { Container, Row, Col, Image, Button, InputGroup, FormControl } from 'react-bootstrap';
import fondo from '../../imagenes/fondo.jpg'
import NavBar from '../navBar/NavBar';



export default function Remate() {
    
    const styleCol = { margin: '0 10px 5px 0px' };
    const styleContainer = { marginTop: '50px' };    
    const styleRow = { marginTop: '20px' };
    const styleH1 = { margin: '10px', fontSize: '80px', textAlign: 'center' };


    return (
        <div>
            <h1 style={styleH1}>Remate Nro: Dato</h1>
            <Row>
                <Col>
                    <NavBar />
                </Col>
            </Row>
            <Container style={styleContainer}>
                <Row>
                    <Col sm={4} style={styleCol}>
                        <Image src={fondo} style={{ height: '300px', width: '350px' }} rounded />
                    </Col>
                    <Col sm={7} style={styleCol}>
                        <Row>
                            <Col>
                                <h1>Titulo</h1>
                                <h3>Descripcion: Dato</h3>
                                <h3>Precio actual: Dato</h3>
                                <h3>Finaliza: Dato</h3>
                            </Col>
                        </Row>
                        <Row style={styleRow}>
                            <Col sm={5} style={{ backgroundColor: 'grey' }}>
                                <h5>Fecha inicial: Dato</h5>
                            </Col>
                            <Col sm={4} style={{ backgroundColor: 'yellow' }}>
                                <h5>Precio inicial: Dato</h5>
                            </Col>
                            <Col style={{ backgroundColor: 'grey' }}>
                                <h5>Estado: Dato</h5>
                            </Col>
                        </Row>
                        <Row style={{width:'300px', marginTop:'20px'}}>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Realizar nueva oferta"
                                    aria-label="Realizar nueva oferta"
                                    aria-describedby="basic-addon2"
                                    type='number'
                                />
                                <InputGroup.Append>
                                    <Button variant="outline-secondary">Enviar</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}