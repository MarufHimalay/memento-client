import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import EachService from '../EachService/EachService';

const ManageServices = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://shrouded-beach-88196.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])
    return (
        <div className="text-center">
            <h3>Manage Products</h3>
            
            <Table striped bordered hover>
            <thead>
                <tr style={{fontSize:"1.2em"}}>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
                <tbody>
            
                {
                    products.map(pd => <EachService product={pd}></EachService>)
                }
                 </tbody>
            </Table>
            
        </div>
    );
};

export default ManageServices;