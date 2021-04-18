import React from 'react';

const Testimonial = (props) => {
    const {name, email, description} = props.testimonial;
    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <p className="card-text text-center">{description}</p>
            </div>
            <div className="card-footer d-flex  align-items-center">
                <div>
                    <h6 className="text-primary">{name}</h6>
                    <p className="m-0">{email}</p>
                </div>
            </div>
       </div>
    );
};

export default Testimonial;