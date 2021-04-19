import React from 'react';

const Testimonial = (props) => {
    const {name, designation, description} = props.testimonial;
    return (
        <div  className="col-md-4">
            <div style={{border: '1px solid gray'}}>
            <div>
                <h5>{name}</h5>
            </div>
            <p>{description}</p>
            <div></div>
            </div>
        </div>
    );
};

export default Testimonial;