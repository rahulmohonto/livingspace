import React from "react";
import Financing from "../../../images/affordable 1.png";
import Property from "../../../images/apartment 1.png";
import Trusted from "../../../images/lessee 1.png";
import ServiceDetail from "../ServiceDetail/ServiceDetail";

const servicesData = [
  {
    name: "Financing Made Easy",
    img: Financing,
    description:
      "Our stress-free finance department that can find financial solutions to save your money",
  },
  {
    name: "Wide Range of Properties",
    img: Property,
    description:
      "With a robust selection of popular properties on hand as well as leading properties from experts",
  },
  {
    name: "Trusted by Thousands",
    img: Trusted,
    description:
      "10 new offers everyday. 350 offers on site, trusted by a community of thousands of users",
  },
];

const Services = () => {
  return (
    <div id="services">
      <section className="Services-container my-5">
        <div className="text-center">
          <h6>SERVICES</h6>
          <h3 style={{ color: "#1C423D" }}>
            We're an agency tailored to all <br />
            clients' needs that always delivers{" "}
          </h3>
        </div>
        <div className="d-flex justify-content-center mt-5 mb-5">
          <div className="w-75 row">
            {servicesData.map((service) => (
              <ServiceDetail service={service}></ServiceDetail>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};


export default Services;