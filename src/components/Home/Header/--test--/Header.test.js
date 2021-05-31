import react from 'react';
import ReactDOM, { unstable_renderSubtreeIntoContainer } from 'react-dom';
import Header from '../../Header/Header'
import { isTSAnyKeyword } from '@babel/types';
import { render } from '@testing-library/react'
import Login from '../../../Login/Login';
import Footer from '../../Footer/Footer';
import NavbarTop from '../../Navbar/Navbar';
import ApartmentDetails from '../../../ApartmentDetails/ApartmentDetails';
import Services from '../../Services/Services';



it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Header />, div)
})

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Footer />, div)
})
it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NavbarTop />, div)
})

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Services />, div)
})


