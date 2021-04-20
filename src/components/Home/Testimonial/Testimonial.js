import React from 'react';

const Testimonial = (props) => {
    const { name,  description, image, designation } = props.testimonial;
    return (
        // <div classNameName="col-md-4">
        //     <div classNameName="p-2 m-2" style={{border: '2px solid gray', borderRadius:"5px"}}>
        //     <div>
        //         <h5>{name}</h5>
        //     </div>
        //     <p>{description}</p>
        //     <div></div>
        //     </div>
        // </div>
        <div className="card  m-2" style={{maxWidth:" 400px"}}>
            <div className="row align-items-center g-0">
                <div className="col-md-4 ">
                    <img src={image} alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h3 className="card-title">{name}</h3>
                        <small>{designation}</small>
                        <p style={{border:"1px solid gray"}} className="card-text p-1">{description}</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;