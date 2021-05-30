import React from 'react';
import Card from 'react-bootstrap/Card';
import Reveal from 'react-reveal/Reveal';
import { useHistory } from 'react-router-dom';
import './SingleCard.css';

const SingleCard = (props) => {
    console.log(props);
    const { apartmentName, id, size, monthlyRent, address, image, apartmentPrice, type } = props.data;

    const history = useHistory()
    const handleSelectApartment = id => {
        history.push(`/details/${id}`)
    }

    return (
        <Reveal duration={3000}>
            <Card onClick={() => handleSelectApartment(id)} className='apartment-card' style={{ width: '18rem', marginBlock: '1rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Title style={{textAlign: 'center', marginTop: '10px'}}>{apartmentName}</Card.Title>
                <Card.Body>
                    <Card.Text>{type} | {size}</Card.Text>
                    <Card.Text>{address}</Card.Text>
                    <Card.Text>Apartment Price: {apartmentPrice} | Monthly Rent: {monthlyRent}</Card.Text>
                </Card.Body>
            </Card>
        </Reveal>

    );
};

export default SingleCard;