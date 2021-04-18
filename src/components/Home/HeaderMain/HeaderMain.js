import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from '../../../images/banner.jpg'

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Capture your <br/> Smiles</h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                {/* <button className="btn btn-primary"></button> */}
                <Button as={Link} to="/order" className="btn btn-primary">Order Now</Button>
            </div>
            <div className="col-md-6">
                <img src={banner} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;