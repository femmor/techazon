import React from 'react';
import Hero from "../components/Hero"
import aboutBcg from "../images/about.jpeg"
import { Link } from "react-router-dom"
import Info from '../components/AboutPage/Info';

const AboutPage = () => {
    return (
        <>
            <Hero title="About Us" description="your friendly neighborhood tech store" img={aboutBcg}/>
            <Info/>
        </>
    );
}

export default AboutPage;
