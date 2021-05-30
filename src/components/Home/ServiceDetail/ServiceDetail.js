import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height:'80px'}} src={service.img} alt=""/>
            <h5 style={{ color: "#1C423D" }} className="mt-3 mb-4">{service.name}</h5>
            <p className="text-secondary">{service.description}</p>
        </div>
    );
};

export default ServiceDetail;