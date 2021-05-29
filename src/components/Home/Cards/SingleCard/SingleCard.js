import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const SingleCard = (props) => {
    return (
        <Card style={{ width: '18rem', marginBlock: '1rem' }}>
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
    );
};

export default SingleCard;