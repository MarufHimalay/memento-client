import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const infosData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: '#FF69B4'
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn, NY 10003 USA',
        icon: faMapMarker,
        background: '#FF69B4'
    },
    {
        title: 'Call us now',
        description: '+15697854124',
        icon: faPhone,
        background: '#FF69B4'
    }
]
const BusinessInfo = () => {
    return (
        <section style={{backgroundColor:"#FF1493"}} className="d-flex justify-content-center mt-5">
            <div className="row">
                {
                    infosData.map(info => <InfoCard info={info} key={info.title}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;