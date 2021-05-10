import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
// import './Testimonials.css';

const Testimonials = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch("https://shrouded-beach-88196.herokuapp.com/reviews")
        .then(res => res.json())
        .then( data => setReviews(data))
    },[])


    return (
       <section style={{backgroundColor:""}} className="testimonials py-5">
           <div className="container">
               <div className="text-center section-header">
                   <h5 style={{color:"#FFD700"}} className=" text-uppercase">Testimonial</h5>
                   <h2 style={{color:"#FF1493"}} >What Our Customers <br/> Says </h2>
               </div>
               <div  className="card-deck mt-5 d-flex justify-content-center row">
                    {
                        reviews.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;