import React from 'react';

const Testimonial = (props) => {
    const { name, description, image, designation } = props.testimonial;
    return (
        <div id="testimonial" className="card  m-2" style={{ maxWidth: " 400px", backgroundColor: "", border: "3px dashed #FF1493" }}>
            <div className="  g-0">
                <div className="d-flex justify-content-center pt-2" >
                    <img style={{ borderRadius: "50%" }} src={image} alt="..." />
                </div>
                <div style={{ backgroundColor: "" }} >
                    <div className="card-body  ">
                        <h3 style={{backgroundColor: "black", width:"100%"}} className="text-white ps-2">{name}</h3>
                        <small>{designation}</small>
                        <p style={{ borderTop: "1px solid black" }} className="card-text p-1">{description}</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;