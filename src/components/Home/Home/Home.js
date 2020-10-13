import React from 'react';
import Carousel from '../Carousel/Carousel';
import Header from '../Header/Header';
import HeaderMain from '../HeaderMain/HeaderMain';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <HeaderMain></HeaderMain>
            <Services></Services>
            <Carousel></Carousel>
            <Testimonials></Testimonials>
            
        </div>
    );
};

export default Home;