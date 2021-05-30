import React from 'react';
import './Header.css';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
// import { useForm } from "react-hook-form";

// import anime from 'anime.es.js';
// import anime from 'animejs/lib/anime.es.js'
import Typical from 'react-typical';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Jump from 'react-reveal/Jump';
import Reveal from 'react-reveal/Reveal';

const Header = () => {
    const getText = () => {
        const serachHouse = document.getElementById('form-apart').value;
        console.log('clicked', serachHouse);
    }
    // var textWrapper = document.querySelector('.firstText');
    // textWrapper.innerText = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    // anime.timeline({ loop: true })
    //     .add({
    //         targets: '.ml2 .letter',
    //         scale: [4, 1],
    //         opacity: [0, 1],
    //         translateZ: 0,
    //         easing: "easeOutExpo",
    //         duration: 950,
    //         delay: (el, i) => 70 * i
    //     }).add({
    //         targets: '.ml2',
    //         opacity: 0,
    //         duration: 1000,
    //         easing: "easeOutExpo",
    //         delay: 1000
    //     });
    return (
        <section className="header">
            <div className="header-container text-white">
                <div className="row">
                    <div className="col-12">
                        <div className="info-container">
                            {/* <Anime>  */}

                            <Fade top cascade> <h1 className="text-center firstText">Find The Best Spot To Live
                            <Typical loop={Infinity} steps={['At Villa', 3000, 'At Palace', 3000, 'At Avenue', 3000, 'At Studio', 3000, 'At Convertible', 3000,]} />
                            </h1></Fade>
                            <Zoom delay={600} effect="fadeInUp">  <h4 className="text-center secondText">Living Organization at Your Doorstep</h4></Zoom>
                            {/* </Anime> */}
                            <div className="search-container align-content-center">
                                <Jump delay={900} effect="easeIn">  <Form id="form-apart" className="d-flex">
                                    <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="mr-4"
                                        aria-label="Search"
                                    />
                                    <Button onClick={() => getText()} variant="outline-success pl-3">Search</Button>
                                </Form>
                                </Jump>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;