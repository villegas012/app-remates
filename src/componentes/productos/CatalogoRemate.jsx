import React from 'react';
import { Row, Col, Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import fondo from '../../imagenes/fondo.jpg'
import NavBar from '../navBar/NavBar';


export default function CatalogoRemate() {

    const history = useHistory();
    
    const style1 = { display: 'flex', justifyContent: 'left', margin: '50px 0px 50px 50px' };
    const styleH1 = { margin: '10px', fontSize: '80px', textAlign: 'center' };

    const handleClick = (e) => {
        e.preventDefault();
        if (e.target.value === 'regresar') {
            history.push(`/`);
        }
        if(e.target.value === 'puja'){
            history.push(`/catalogo/1`);
        }
    }

    return (
        <div >
            <h1 style={styleH1}>Remates</h1>
            <Row>
                <Col>
                    <NavBar />
                </Col>
            </Row>
            <Row>
                {/* Inicia map */}
                <Col style={style1}>
                    <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src={fondo} />
                        <Card.Body>
                            <Card.Title>Nombre</Card.Title>                        
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Precio actual: Dato</ListGroupItem>
                            <ListGroupItem>Fecha de terminacion: Dato</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Button value='puja' onClick={handleClick}>Realizar puja</Button>
                        </Card.Body>
                    </Card>
                </Col>
                {/* Termina map */}
            </Row>
        </div>
    )
}