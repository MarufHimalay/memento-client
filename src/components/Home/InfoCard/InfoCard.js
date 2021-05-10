import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './infoCard.css'


const InfoCard = ({ info }) => {
    return (
        <div id="info" className="col-md-4 text-white info-card">
            <div>
            <div style={{backgroundColor:`${info.background}`}} className={`d-flex justify-content-center info-container p-3  m-2`}>
                <div className="">
                    <FontAwesomeIcon className="info-icon" icon={info.icon}></FontAwesomeIcon>
                </div>
                <div>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
            </div>
        </div>
    );
};

export default InfoCard;