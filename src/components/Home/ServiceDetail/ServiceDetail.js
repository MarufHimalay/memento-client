import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServiceDetail.css'

const ServiceDetail = (props) => {
    const { name, image, description, price } = props.products;
    console.log(name);
    return (
        <div  className="col-md-4 text-center mt-2">
            <div id="div" style={{border:"3px dashed #FF1493", borderRadius:"10px"}} className="w-80 p-3">
                <img style={{ height: '120px' }} src={image} alt="" />
                <h4 style={{ color: '#FF1493' }} className="mt-3 mb-3">{name}</h4>
                <p style={{ color: '#4B0082' }} >{description}</p>
                <h4 style={{ color: '#FFD700' }} >{price}</h4>
                <Button style={{ backgroundColor: "#FF00FF", border: "none", color: 'white' }} as={Link} to={`/order/${name}`}>Order Now</Button>
            </div>
        </div>
    );
};

export default ServiceDetail;