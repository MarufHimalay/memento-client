import React from 'react';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Header from '../Header/Header';
import Footer from '../../Shared/Footer/Footer';
import FeaturedService from '../FeaturedService/FeaturedService';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
           <Header></Header>
           <Services></Services>
           <FeaturedService></FeaturedService>
           <Testimonials></Testimonials>
           <Subscribe></Subscribe>
           <Footer></Footer>
        </div>
    );
};

export default Home;