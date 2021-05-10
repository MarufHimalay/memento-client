import React from 'react';
import Featured from '../Featured/Featured';
import './FeaturedService.css'

const FeaturedService = () => {
    const FeaturedData = [
        {
            title: "Friends and Family",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In tempore nam autem?",
            image:"https://i.ibb.co/q1ng3vH/friends.jpg"
        },
        {
            title: "Flowers are to share love",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In tempore nam autem?",
            image:"https://i.ibb.co/gV35zVx/flower-Top.jpg"
        },
        {
            title: "Plan your events in the best way",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In tempore nam autem?",
            image:"https://i.ibb.co/FY2bGJK/event.jpg"
        },
        {
            title: "Share your most precious moment",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In tempore nam autem?",
            image:"https://i.ibb.co/Jv5Gm1r/hand-Inhand.jpg"
        }
    ]
    return (
        <div className="container mt-5 mb-5 ">
            <div className="text-center pb-2">
                <h3 style={{color:"gold"}} >Featured Services</h3>
                <h2 style={{color:"#FF1493"}}>Choose the best one</h2>
            </div>
            <div className="row featured-service">
            {
                FeaturedData.map(fd => <Featured data={fd} key={fd.title}></Featured>)
            }
            </div>
            
            
        </div>
    );
};

export default FeaturedService;