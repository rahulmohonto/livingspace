import React from 'react';
import Cards from '../Cards/Cards';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
// import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';
import Subscribe from '../Subscribe/Subscribe';
import Reveal from 'react-reveal/Reveal';
import Bounce from 'react-reveal/Bounce';
const Home = () => {
    return (
        <div>

            {/* <Navbar /> */}
            <Bounce top duration={3000} delay={2000} effect="fadeInUp" effectOut="fadeOutLeft">
                <Header />
            </Bounce>

            <Reveal duration={3000} delay={2000} effect="fadeInUp" effectOut="fadeOutLeft">
                <Cards />
            </Reveal>
            <Reveal duration={3000} delay={2000} effect="fadeInUp" effectOut="fadeOutLeft">
                <Services></Services>
            </Reveal>
            <Reveal right duration={3000} delay={3000} effectOut="fadeOutLeft">
                <Subscribe></Subscribe>
            </Reveal>
            <Bounce left duration={3000} delay={3000} effect="fadeInUp" effectOut="fadeOutLeft">
                <Footer></Footer>
            </Bounce>


        </div>
    );
};

export default Home;