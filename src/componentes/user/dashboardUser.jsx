import React from 'react';
import { Col, Row, Card, Button, Container } from 'react-bootstrap';
import NavBar from '../navBar/NavBar';




export default function DashboardUser() {

    const styleH1 = { margin: '10px', fontSize: '80px', textAlign: 'center' };
    const style1 = { display: 'flex', justifyContent: 'left', margin: '50px 0px 50px 50px' };
    const styleCard = { width: '200px', height:'150px' }

    return (
        <div>
            <h1 style={styleH1}>Bienvienido</h1>
            <Row>
                <Col>
                    <NavBar />
                </Col>
            </Row>
            <Container>
            <Row>
                <Col style={style1}>
                    <Card style={styleCard}>
                        <Card.Body>
                            <Card.Title>Crear remate</Card.Title> 
                            <Button variant="primary">Ver mas</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col style={style1}>
                    <Card style={styleCard}>
                        <Card.Body>
                            <Card.Title>Modificar remate</Card.Title>
                            <Button variant="primary">Ver mas </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col style={style1}>
                    <Card style={styleCard}>
                        <Card.Body>
                            <Card.Title>Pujas</Card.Title>
                            
                            <Button variant="primary">Ver mas</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col style={style1}>
                    <Card style={styleCard}>
                        <Card.Body>
                            <Card.Title>Historial</Card.Title>
                            <Button variant="primary">Ver mas</Button>
                        </Card.Body>
                    </Card>
                </Col>                 
            </Row>
            </Container>
        </div>
    )

}