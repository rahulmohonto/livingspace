import React from 'react';
import './Header.css';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Typical from 'react-typical';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Jump from 'react-reveal/Jump';

const Header = () => {
    const getText = (name) => {
        const serachHouse = document.getElementById('form-apart').value;
        console.log('clicked', serachHouse == name);
    }

    return (
        <section className="header">
            <div className="header-container text-white">
                <div className="row">
                    <div className="col-12">
                        <div className="info-container">
                            <Fade top cascade> <h1 className="text-center firstText">Find The Best Spot To Live
                            <Typical loop={Infinity} steps={['At Villa', 3000, 'At Palace', 3000, 'At Avenue', 3000, 'At Studio', 3000, 'At Convertible', 3000,]} />
                            </h1></Fade>
                            <Zoom delay={600} effect="fadeInUp">  <h4 className="text-center secondText">Living Organization at Your Doorstep</h4></Zoom>
                            <div className="search-container align-content-center">
                                <Jump delay={900} effect="easeIn">
                                    <Form id="form-apart" className="d-flex">
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