import React from 'react';
import contactBcg from "../images/defaultBcg.jpeg"
import styled from "styled-components"
import Hero from "../components/Hero"
import Contact from "../components/ContactPage"

const ContactPage = () => {
    return (
        <>
            <ContactWrapper>
                <Hero title="contact us" img={contactBcg}/>
                <Contact/>
            </ContactWrapper>
        </>
    );
}

const ContactWrapper = styled.div`
    

`;

export default ContactPage;
