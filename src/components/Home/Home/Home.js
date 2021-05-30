import React from 'react';
import Cards from '../Cards/Cards';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Subscribe from '../Subscribe/Subscribe';
import Reveal from 'react-reveal/Reveal';
const Home = () => {
    return (
        <div>
            <Header />
            
            <Reveal duration={3000} delay={2000} effect="fadeInUp" effectOut="fadeOutLeft">
                <Cards />
            </Reveal>
            
            <Reveal duration={3000} delay={4000} effect="fadeInUp" effectOut="fadeOutLeft">
                <Services></Services>
            </Reveal>

            <Subscribe></Subscribe>
            
            <Footer></Footer>

        </div>
    );
};

export default Home;