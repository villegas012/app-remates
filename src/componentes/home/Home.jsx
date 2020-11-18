import React from 'react';
import { Container, Button, Col, Row, ButtonGroup, Dropdown } from 'react-bootstrap';
import SearchBar from '../searchBar/SearchBar.jsx'
import fondo from '../../imagenes/fondo.jpg'



export default function Home() {
    return (
        <div>            
            <Row className='headHome' >            
                <Col> 
                <h1 style={{margin: '50px', fontSize:'80px'}}>Remapp</h1>               
                <ButtonGroup aria-label="Basic example">
                    <Button>Productos</Button>
                    <Dropdown.Item>Categorias</Dropdown.Item>
                    <Button>Ingresa</Button>
                    <Button>Registrate</Button>
                    
                </ButtonGroup>
                </Col>
            </Row>
            <Container className='bodyHome' style={{ marginTop: '50px' }}>
                <div style={{display: "flex", justifyContent:'center'}}>
                    <SearchBar/>    
                </div>
                <div style={{marginTop: '20px'}}>
                    <img src={fondo} style={{width:'60%'}}></img>
                </div>
            </Container>
            <div className='botonesHome'>

            </div>
            <div className='footerHome'>

            </div>
        </div>
    )
}
