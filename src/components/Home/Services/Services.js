import React, { useEffect, useState } from 'react';
import babyIcon from '../../../images/baby-book.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("https://shrouded-beach-88196.herokuapp.com/products")
        .then(res => res.json())
        .then( data => setProducts(data))
    },[])
    console.log(products);
    return (
        <section style={{backgroundColor:"#FAFAFB"}} className="services-container pb-5 pt-5">
            <div className="text-center">
                <h4 style={{color:"#FFD700"}}>OUR SERVICES</h4>
                <h2 style={{color:"#FF1493"}}>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-3 pt-3">
                {
                    products.map(products => <ServiceDetail products={products} key={products.name}></ServiceDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;