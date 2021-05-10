import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from '../../../images/banner.jpg'
import './HeaderMain.css'
const HeaderMain = () => {
    return (
        <div id="header" style={{ height: '600px' }} className=" d-flex  justify-content-center align-items-center">
            <div className="text-center">
                <h4 className="text-white">WEDDING</h4>
                <h1 style={{color:"#FF1493",  border: "5px dashed #FF69B4", padding:"5px"}}>Capture your moments with us</h1>
                <br/>
                <Button style={{backgroundColor:"#FF69B4", border:"none"}} as={Link} to="/order" className="btn">Get Started</Button>
            </div>

        </div>
    );
};

export default HeaderMain;