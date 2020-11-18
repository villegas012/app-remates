import React from 'react';
import { Container, Row, Col, Image, Button, InputGroup, FormControl } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import fondo from '../../imagenes/fondo.jpg'



export default function Productos() {
    const history = useHistory();
    const styleCol = { margin: '0 10px 5px 0px' };
    const styleContainer = { marginTop: '50px' };
    const style1 = { display: 'flex', justifyContent: 'center', marginTop: '50px' };
    const styleRow = { marginTop: '20px'};


    const handleClick = (e) => {
        e.preventDefault();
        if(e.target.value === 'regresar'){
            history.push(`/productos`);
        }
        

    }
    return (
        <div>
            <Container style={styleContainer}>
                <Row>
                    <Col sm={7} style={styleCol}>
                        <Button value='regresar' onClick={handleClick}>Regresar</Button>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <h1 style={style1}>Articulo #: Dato</h1>
                    </Col>
                </Row>
            </Container>

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
                                <h5>Precio base: Dato</h5>
                            </Col>
                            <Col style={{ backgroundColor: 'grey' }}>
                                <h5>Estado: Dato</h5>
                            </Col>
                        </Row>
                        <Row style={styleRow}>
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