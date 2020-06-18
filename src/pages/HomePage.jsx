import React from 'react';
import { Link } from "react-router-dom"

// Components
import Hero from '../components/Hero';

const HomePage = () => {
    return (
        <>
           <Hero title="innovative gadgets" max>
               <Link to="/products">Products</Link>
           </Hero>
        </>
    );
}

export default HomePage;
