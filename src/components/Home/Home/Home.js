import React from 'react';
import Cards from '../Cards/Cards';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
// import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>

            {/* <Navbar /> */}
            <Header />
            <Cards />
            <Services></Services>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;