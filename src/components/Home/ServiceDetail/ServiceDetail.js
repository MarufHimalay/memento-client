import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServiceDetail.css'

const ServiceDetail = (props) => {
    const {name, image, description, price} = props.products;
    console.log(name);
    return (
        <div className="col-md-4 text-center mt-3 div">
            <img style={{height: '50px'}} src={image} alt="" />
            <h4 className="mt-3 mb-3">{name}</h4>
            <p className="text-secondary">{description}</p>
            <h5>{price}</h5>
            <Button as={Link} to={`/order/${name}`}>Order Now</Button>
        </div>
    );
};

export default ServiceDetail;