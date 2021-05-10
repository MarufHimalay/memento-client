import React from 'react';
import './Featured.css'

const Featured = (props) => {
    const { title, description, image } = props.data;
    return (
        <div className="col-md-6">
            <div style={{ backgroundImage: `url(${image})` }} className="d-flex justify-content-center text-center m-3 featured">
                <div id="featuredDetail" style={{ margin: "auto", width: "100%", backgroundColor:"#101010", color:"white", opacity:"0.5" }}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Featured;