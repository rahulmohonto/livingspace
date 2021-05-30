import React from 'react';
import './ApartmentDetails.css';
// import outsideImage from '../../images/outsideImage.gif';
import inside1 from '../../images/inside1.jpg';
import inside2 from '../../images/inside2.jpg';
import inside3 from '../../images/inside3.jpg';
import inside4 from '../../images/inside4.jpg';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';

import Bounce from 'react-reveal/Bounce';


const ApartmentDetails = () => {
    function sendMeEmail(e) {
        init("user_ktBBG3kmWwHAVHbd1y3Pz");
        e.preventDefault();

        emailjs.sendForm('service_brpql3f', 'template_se3cumu', e.target, 'user_ktBBG3kmWwHAVHbd1y3Pz')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <section className="detail-container mt-5">
            <Bounce bottom duration={4000} delay={3000} effect="fadeInUp" effectOut="fadeOutLeft">
                <div className="apartmentImage">
                    <h2 className="text-center d-flex justify-content-center align-items-center">Apartment</h2>
                </div>
            </Bounce>

            <Bounce right duration={2000} delay={4000} effect="fadeInUp" effectOut="fadeOutLeft">
                <div className="container info-container mt-3">
                    <div className="row">
                        <div className="col-sm-8 col-md-8 col-lg-8">
                            <div className="outside-image">
                                {/* <img className="img-fluid outSideImage" src={outsideImage} alt="/" /> */}
                            </div>
                            <div className="">
                                <div className="row mt-4 insideImage-container">
                                    <div className="col-12 d-flex">
                                        <div className="col-3 inside">
                                            <img className="img-fluid" src={inside1} alt="/" />
                                        </div>

                                        <div className="col-3 inside">
                                            <img className="img-fluid" src={inside2} alt="/" />
                                        </div>
                                        <div className="col-3 inside">
                                            <img className="img-fluid" src={inside3} alt="/" />
                                        </div>
                                        <div className="col-3 ">
                                            <img className="img-fluid" src={inside4} alt="/" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-lg-3 col-sx-12 fadeInLeft shadow rounded p-2" data-wow-offset="50" data-wow-delay="0.9s">
                            <form onSubmit={sendMeEmail} action="#" method="post">
                                <label>NAME</label>
                                <input name="fullname" type="text" class="form-control" id="fullname" />

                                <label>EMAIL</label>
                                <input name="email" type="email" class="form-control" id="email" />

                                <label>MESSAGE</label>
                                <textarea name="message" rows="4" class="form-control" id="message"></textarea>

                                <input type="submit" value="send" />
                            </form>
                        </div>
                    </div>
                </div>
            </Bounce>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <Bounce left duration={4000} delay={2000} effect="fadeInUp" effectOut="fadeOutLeft">
                            <h2 className="mt-3">Apartment Name : Villa</h2>
                            <p className="text-justify shadow p-2 rounded">Large 2 bedroom 1 master bedroom, 1 dining hall, 1 large kitchen with dressing room, 5 minutes walks from sea beach, Washer & Dryer, No Smoking, TV, Children Welcome, Satellite or cable, Internet, Air Conditioning, Parking, Heater, Pets Welcome. Garden with pool and personal parking space, high society neighbourhood.</p>
                        </Bounce>
                        <Bounce bottom duration={4000} delay={2000} effect="fadeInUp" effectOut="fadeOutLeft">
                            <h2 className="mt-4">Price Concept-</h2>
                            <div className="shadow p-2 rounded">

                                <p> Rent/Month: </p>
                                <p>Lease: </p>
                                <p>Security Charge: </p>
                                <p>Flat Leaving Policy: </p>
                            </div>
                        </Bounce>
                        <Bounce right duration={2000} delay={6000} effect="fadeInUp" effectOut="fadeOutLeft">
                            <h2 className="mt-5">Location & Details</h2>
                            <div className="shadow p-2 rounded">
                                <p>Type: </p>
                                <p>Address : </p>
                                <p className="mb-5">Apartment Size : </p>
                            </div>

                        </Bounce>
                    </div>
                    <div className="col mb-5">

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApartmentDetails;