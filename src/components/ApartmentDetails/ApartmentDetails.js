import React from 'react';
import { useParams } from 'react-router-dom';
import './ApartmentDetails.css';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import Bounce from 'react-reveal/Bounce';
import { useSelector } from 'react-redux';


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

    let detailData;
    const { _id } = useParams();
    detailData = useSelector(state => state.apartmentsData.apartments);
    const result = detailData.filter(element => (element._id === _id));
    
    return (
        <section className="detail-container my-5">
            <Bounce bottom duration={4000} delay={3000} effect="fadeInUp" effectOut="fadeOutLeft">
                <div className="apartmentImage">
                    <h2 className="text-center d-flex justify-content-center align-items-center">{result[0] && result?.[0].apartmentName}</h2>
                </div>
            </Bounce>

            <Bounce right duration={2000} delay={4000} effect="fadeInUp" effectOut="fadeOutLeft">
                <div className="container info-container mt-3">
                    <div className="row mt-5">
                        <div className="col-sm-8 col-md-8 col-lg-8">
                            <div className="outside-image">
                                <img className="img-fluid outSideImage" src={result[0] && result?.[0].image} alt="/" />
                            </div>

                            <div className="insideImage-container">
                                <div className="col-12 d-flex">
                                    <div className="col-3 inside">
                                        <img className="img-fluid" src={result[0] && result?.[0].image1} alt="/" />
                                    </div>

                                    <div className="col-3 inside">
                                        <img className="img-fluid" src={result[0] && result?.[0].image2} alt="/" />
                                    </div>
                                    <div className="col-3 inside">
                                        <img className="img-fluid" src={result[0] && result?.[0].image3} alt="/" />
                                    </div>
                                    <div className="col-3 inside">
                                        <img className="img-fluid" src={result[0] && result?.[0].image4} alt="/" />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4 col-sm-4 col-lg-3 col-sx-12 fadeInLeft shadow rounded p-2 form-holder" data-wow-offset="50" data-wow-delay="0.9s">
                            <form onSubmit={sendMeEmail} action="#" method="post">
                                <label>NAME</label>
                                <input name="fullname" type="text" class="form-control" id="fullname" />

                                <label>EMAIL</label>
                                <input name="email" type="email" class="form-control" id="email" />

                                <label>MESSAGE</label>
                                <textarea name="message" rows="4" class="form-control" id="message"></textarea>
                                <br />
                                <input type="submit" value="send" />
                            </form>
                        </div>
                    </div>


                </div>
            </Bounce>

            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <Bounce left duration={4000} delay={2000} effect="fadeInUp" effectOut="fadeOutLeft">
                            <h2 className="mt-3">Apartment Name : {result[0] && result?.[0].apartmentName}</h2>
                            <p className="text-justify shadow p-2 rounded">{result[0] && result?.[0].details}</p>
                        </Bounce>
                        <Bounce bottom duration={4000} delay={2000} effect="fadeInUp" effectOut="fadeOutLeft">
                            <h2 className="mt-4">Price Concept-</h2>
                            <div className="shadow p-2 rounded">

                                <p> Rent/Month: {result[0] && result?.[0].monthlyRent}</p>
                                <p>Lease: {result[0] && result?.[0].priceDetails}</p>
                                <p>Security Charge: {result[0] && result?.[0].securityDeposit}</p>
                                <p>Flat Leaving Policy: {result[0] && result?.[0].leavingPolicy}</p>
                            </div>
                        </Bounce>
                        <Bounce right duration={2000} delay={3000} effect="fadeInUp" effectOut="fadeOutLeft">
                            <h2 className="mt-5">Location & Details</h2>
                            <div className="shadow p-2 rounded">
                                <p>Type: {result[0] && result?.[0].type}</p>
                                <p>Address : {result[0] && result?.[0].address}</p>
                                <p className="mb-5">Apartment Size : {result[0] && result?.[0].size}</p>
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