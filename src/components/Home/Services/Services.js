import React from "react";
import Financing from "../../../images/affordable 1.png";
import Property from "../../../images/apartment 1.png";
import Trusted from "../../../images/lessee 1.png";
import ServiceDetail from "../ServiceDetail/ServiceDetail";

const servicesData = [
  {
    id: "1",
    name: "Flat Booking Made Easy",
    img: Financing,
    description:
      "Our stress-free flat booking service that can find economic apartments to save your money",
  },
  {
    id: "2",
    name: "Wide Range of Properties",
    img: Property,
    description:
      "With a robust selection of popular properties on hand as well as leading properties from experts",
  },
  {
    id: "3",
    name: "Trusted by Thousands",
    img: Trusted,
    description:
      "10 new offers everyday. 350 offers on site, trusted by a community of thousands of users",
  },
];

const Services = () => {
  return (
    <div id="services">
      <section className="Services-container my-5 py-5">
        <div className="text-center">
          <h2>SERVICES</h2>
          <br />
          <h3 style={{ color: "#1C423D" }}>
            We're an agency tailored to all <br />
            clients' needs that always delivers{" "}
          </h3>
        </div>
        <div className="d-flex justify-content-center mt-5 pt-4">
          <div className="w-75 row">
            {servicesData.map((service) => (
              <ServiceDetail key={service.id} service={service}></ServiceDetail>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};


export default Services;