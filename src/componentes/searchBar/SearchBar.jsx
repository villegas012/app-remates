import React from 'react';
import {Button} from 'react-bootstrap';

export default function SearchBar(){
    return (
        <div>
            <input type="text"/>
            <Button style={{marginLeft:'10px'}}>Buscar</Button>
        </div>
        )
}