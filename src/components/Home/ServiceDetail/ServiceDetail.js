import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceDetail = (props) => {
    const {name, image, description} = props.products;
    console.log(name);
    return (
        <div className="col-md-4 text-center">
            <img style={{height: '50px'}} src={image} alt="" />
            <h5 className="mt-3 mb-3">{name}</h5>
            <p className="text-secondary">{description}</p>
            <Button as={Link} to={`/order/${name}`}>Order Now</Button>
        </div>
    );
};

export default ServiceDetail;