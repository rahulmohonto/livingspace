import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import Reveal from 'react-reveal/Reveal';
import './SingleCard.css'
import { useHistory } from 'react-router-dom';
import home from '../../../../images/home.png';
import bed from '../../../../images/bed.png';



const SingleCard = (props) => {
    console.log(props);
    const { apartmentName, image, apartmentPrice, type, _id, address, details } = props.data;

    console.log(_id);
    const history = useHistory()
    const handleSelectApartment = _id => {
        history.push(`/details/${_id}`)
    }


    return (
        <Reveal duration={3000}>

            <Card onClick={() => handleSelectApartment(_id)} style={{ width: '18rem', height: '25rem', marginBlock: '1rem' }} className="shadow">
                <Card.Img variant="top" src={image} style={{ height: '12rem' }} />
                <Card.Body>
                    <Card.Title style={{ height: '2rem' }}>{apartmentName}</Card.Title>
                    <Card.Text>

                        <img className="img-fluid homeIcon" src={home} alt="/" />   {address}<br />
                        <img className="img-fluid homeIcon" src={bed} alt="/" />    {type}

                    </Card.Text>
                    <Card.Footer style={{ height: '3rem' }}>


                        <h5 className="text-success priceText">{apartmentPrice}</h5>

                    </Card.Footer>
                </Card.Body>
            </Card>

        </Reveal >

    );
};

export default SingleCard;