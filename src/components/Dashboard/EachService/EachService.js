import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import {  faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EachService = (props) => {
    const deleteProduct = (id) => {
        fetch(`https://shrouded-beach-88196.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
            })
    }
    const { name, price, _id } = props.product;
    console.log(props.product);
    return (
        <tr>
            <td style={{fontWeight: "600"}}>{name}</td>
            <td>{price}</td>
            <td>
                <Button className="btn btn-danger mx-2" onClick={() => deleteProduct(_id)} ><FontAwesomeIcon icon={faTrashAlt} /></Button>
                <Button className="btn btn-success" onClick={() => deleteProduct(_id)} ><FontAwesomeIcon icon={faEdit} /></Button>
                </td>
            <Redirect
                to={{
                    pathname: `/dashboard`,
                    state: { from: "/login" }
                }}
            />
        </tr>


    );
};

export default EachService;