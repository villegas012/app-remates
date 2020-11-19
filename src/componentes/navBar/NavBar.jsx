import React from 'react';
import {Button, Col, Row, ButtonGroup, Dropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import SearchBar from '../searchBar/SearchBar';


export default function NavBar() {

    const history = useHistory();

    const style1 = { display: 'flex', justifyContent: 'center' };
    const styleDiv = { display: 'flex', justifyContent: 'center', marginTop: '20px' };
    
    

    const handleClick = (e) => {
        e.preventDefault();
        if (e.target.value === 'Productos') {
            history.push(`/catalogo`)
        }
        if (e.target.value === 'Home') {
            history.push(`/`)
        }
        if (e.target.value === 'Ingresa') {
            history.push(`/ingresa`)
        }
        if (e.target.value === 'Registrate') {
            history.push(`/registrate`)
        }
    }


    return (
        <div>
            <Row className='headHome' >
                <Col style={style1}>
                    <div> 
                        <ButtonGroup aria-label="Basic example">
                            <Button value='Home' onClick={handleClick}>Home</Button>
                            <Button value='Productos' onClick={handleClick}>Productos</Button>
                            <Dropdown.Item>Categorias</Dropdown.Item>
                            <Button value='Ingresa' onClick={handleClick}>Ingresa</Button>
                            <Button value='Registrate' onClick={handleClick}>Registrate</Button>
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

        </div>
    )

}