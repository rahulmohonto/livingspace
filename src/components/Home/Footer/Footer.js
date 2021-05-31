import React from 'react';
import './Footer.css';
// import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterCol from '../FooterCol/FooterCol';

const Footer = () => {
    const noNamed = [
        { name: "H#340(4th Floor). Road #24, New DOHS, Mohakhali, Dhaka, Bangladesh" },
        { name: "Phone: 018xxxxxxxxx" },
        { name: "Email: info@company.com" },

    ]
    const aboutUs = [
        { name: "We are the top real estate agency in Sydney, with agents available to answer any question 24/7", link: "//google.com/map" },
        { name: "", link: "//google.com/map" },

    ]
    const quickLinks = [
        { name: "Quick Links", link: "/#" },
        { name: "Rentals", link: "/#" },
        { name: "Sales", link: "/#" },
        { name: "Contact", link: "/#" },
        { name: "Terms & Conditions", link: "/#" },
        { name: "Our Blog", link: "/#" },
    ]
    const Company = [
        { name: "About", link: "/#" },
        { name: "Site Map", link: "/#" },
        { name: "Support Center", link: "/#" },
        { name: "Terms Conditions", link: "/#" },
        { name: "Submit Listing", link: "/#" },
    ]
    return (
        <footer id="contact" className="footer-area clear-both">
            <div className="container pt-3">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={""} menuItems={noNamed} />
                    <FooterCol key={2} menuTitle="Company" menuItems={Company} />
                    <FooterCol key={3} menuTitle="Quick Links" menuItems={quickLinks} />
                    <FooterCol key={4} menuTitle="About Us" menuItems={aboutUs}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                    </FooterCol>
                </div>
            </div>
        </footer>

    );
};

export default Footer;