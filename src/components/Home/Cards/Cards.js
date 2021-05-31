import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateApartments } from '../../../redux/actions/apartmentsActions';
import fakeData from '../../FakeData/FakeData.json';
import SingleCard from './SingleCard/SingleCard';

const Cards = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(updateApartments(fakeData));
    });

    const apartments = useSelector(state => state.apartmentsData.apartments);
    // console.log(apartments.apartments)

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', margin: '4rem' }}>
            {
                apartments && apartments.map(data => <SingleCard key={data.id} data={data}></SingleCard>)
            }
        </div>
    );
};

export default Cards;