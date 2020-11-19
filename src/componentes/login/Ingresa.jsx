import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';


export default function Ingresa() {

    const history = useHistory();

    const styleH1 = { margin: '10px', fontSize: '80px', textAlign: 'center' };
    const style1 = { marginTop:'60px' };

    const handleClick = (e) => {
        e.preventDefault();
        if(e.target.value === 'regresarHome'){
            history.push(`/`);
        }
        if(e.target.value === 'Entro'){
            history.push(`/dashboardUser`);
        } 
            
    }

    return (
        <div>
            <h1 style={styleH1}>Ingresa</h1>
            <Container style={{width:'400px'}}>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Correo:</Form.Label>
                        <Form.Control type="email" placeholder="Digita tu correo electronico" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Digita tu contraseña" />
                    </Form.Group>
                    <Button variant="primary" type="submit" value='Entro' onClick={handleClick}>Ingresar</Button>
                </Form>
                <div style={style1}>
                    <Button  value='regresarHome' onClick={handleClick}>Volver al Home</Button>
                </div>
                
            </Container>
        </div>
    )
}