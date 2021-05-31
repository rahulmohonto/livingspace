import react from 'react';
import ReactDOM, { unstable_renderSubtreeIntoContainer } from 'react-dom';
import Header from '../../Header/Header'
import { isTSAnyKeyword } from '@babel/types';
import { render } from '@testing-library/react'
import Login from '../../../Login/Login';



it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Header />, div)
})

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Login />, div)
})



