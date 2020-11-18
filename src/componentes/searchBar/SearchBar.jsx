import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

export default function SearchBar() {
    return (
        <div>
            <Form inline>
                <FormControl style={{ width: '550px', height: '40px' }} type="text" placeholder="Busca tu producto" className="mr-sm-2" />
                <Button style={{height: '40px' }}>Buscar</Button>
            </Form>
        </div>
    )
}