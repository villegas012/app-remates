import React from 'react';
import {Button, Col, Row, ButtonGroup, Dropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import SearchBar from '../searchBar/SearchBar';


export default function NavBar() {

    const history = useHistory();

    const style1 = { display: 'flex', justifyContent: 'center' };
    const styleDiv = { display: 'flex', justifyContent: 'center', marginTop: '20px' };
    const styleRowBotton = { margin: '20px 0px 0px 30px' };
    

    const handleClick = (e) => {
        e.preventDefault();
        if (e.target.value === 'Productos') {
            history.push(`/catalogo`)
        }
        if (e.target.value === 'Home') {
            history.push(`/`)
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

        </div>
    )

}