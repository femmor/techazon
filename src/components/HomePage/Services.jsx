import React, { Component } from 'react';
import { FaShippingFast, FaTag, FaRegMoneyBillAlt } from "react-icons/fa"
import styled from "styled-components"

class Services extends Component {
    state = {
        services: [
            {
                id: 1,
                icon: <FaShippingFast className="service-icon"/>,
                title: "fastest shipping",
                desc: "Discover the fastest product shipping service from world’s leading brands."
            },
            {
                id: 2,
                icon: <FaTag className="service-icon"/>,
                title: "deals & discounts",
                desc: "Access our discounts and deals exclusive to Gadget Flow users."
            },
            {
                id: 3,
                icon: <FaRegMoneyBillAlt className="service-icon"/>,
                title: "multiple currencies",
                desc: "Choose from 58 different currencies to view products in local prices."
            }
        ]
    }
    render() {
        const {services} = this.state

        return (
            <>
               <ServicesWrapper className="py-5">
                   <div className="container">
                       <div className="row">
                           {services.map(service => (
                               <div className="col-10 col-md-4 col-sm-12 mx-auto text-center my-3" key={service.id}>
                                   <div>{service.icon}</div>
                                   <div className="service-title my-3 text-capitalize">{service.title}</div>
                                    <div className="text-muted mt-3">{service.desc}</div>
                               </div>
                           ))}
                       </div>
                   </div>
               </ServicesWrapper>
            </>
        );
    }
}

const ServicesWrapper = styled.section`
    background: rgba(95,183,234,0.5);
    
    .service-icon {
        font-size: 2.2rem;
        color: var(--primary-color);
    }

    .service-title {
        font-size: 1.2rem;
    }

    p {
        color: var(--darkGray);
    }
`;

export default Services;
