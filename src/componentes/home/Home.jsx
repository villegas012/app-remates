import React from 'react';
import {Button, Col, Row, ButtonGroup, Dropdown } from 'react-bootstrap';
import SearchBar from '../searchBar/SearchBar.jsx'
import fondo from '../../imagenes/fondo.jpg'
import { useHistory } from 'react-router-dom';



export default function Home() {

    const style1 = { display: 'flex', justifyContent: 'center'};
    const styleDiv = { display: 'flex', justifyContent: 'center', marginTop: '40px' };


    const history = useHistory()


    const handleClick = (e) => {
       e.preventDefault();
        if(e.target.value === 'Productos'){
            history.push(`/productos`)
        }

    }

    return (
        <div>
            <Row className='headHome' >
                <Col style={style1}>
                    <div>
                        <h1 style={{ margin: '50px', fontSize: '80px' }}>Remapp</h1>
                        <ButtonGroup aria-label="Basic example">
                            <Button value='Productos' onClick={handleClick}>Productos</Button>
                            <Dropdown.Item>Categorias</Dropdown.Item>
                            <Button value='Ingresa'>Ingresa</Button>
                            <Button value='Registrate'>Registrate</Button>
                        </ButtonGroup>
                    </div>
                </Col>
            </Row>
            <Row className='bodyHome'>
                <Col style={style1}>
                    <div style={styleDiv}>
                        <SearchBar />
                    </div>
                </Col>  
            </Row>
            <Row>
            <Col style={style1}>
                    <div style={styleDiv}>
                        <img src={fondo} style={{width:'45%'}}></img>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

