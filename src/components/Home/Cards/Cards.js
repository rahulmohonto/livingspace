import React from 'react';
import fakeData from '../../FakeData/FakeData.json';
import SingleCard from './SingleCard/SingleCard';

const Cards = () => {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', margin: '4rem'}}>
            {
                fakeData.map(data => <SingleCard data={data}></SingleCard>)
            }
        </div>
    );
};

export default Cards;