import React, { useEffect, useState } from 'react';
import babyIcon from '../../../images/baby-book.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("http://localhost:5055/products")
        .then(res => res.json())
        .then( data => setProducts(data))
    },[])
    console.log(products);
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{color:"tomato"}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    products.map(products => <ServiceDetail products={products} key={products.name}></ServiceDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;