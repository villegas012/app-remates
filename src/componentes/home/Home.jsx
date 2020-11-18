import React from 'react';
import { Col, Row } from 'react-bootstrap';
import fondo from '../../imagenes/fondo.jpg'
import NavBar from '../navBar/NavBar.jsx';




export default function Home() {

    const style1 = { display: 'flex', justifyContent: 'center' };
    const styleDiv = { display: 'flex', justifyContent: 'center', marginTop: '20px' };
    const styleH1 = { margin: '10px', fontSize: '80px', textAlign: 'center' };

    return (
        <div>
            <h1 style={styleH1}>Remapp</h1>
            <Row>                
                <Col>
                    <NavBar/>
                </Col>
            </Row>
            <Row>
                <Col style={style1}>
                    <div style={styleDiv}>
                        <img src={fondo} style={{ width: '48%' }}></img>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

