import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Reveal from 'react-reveal/Reveal';
import { useHistory } from 'react-router-dom';
const SingleCard = (props) => {
    console.log(props);
    const { apartmentName, id, image, apartmentPrice, type } = props.data;

    const history = useHistory()
    const handleSelectApartment = id => {
        history.push(`/details/${id}`)
    }

    return (
        <Reveal duration={3000}>
            <Card onClick={() => handleSelectApartment(id)} style={{ width: '18rem', marginBlock: '1rem' }}>
                <Card.Img variant="top" src={props.data.image} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                </Card.Text>
                    <Button variant="warning">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Reveal>

    );
};

export default SingleCard;