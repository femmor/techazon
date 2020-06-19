import React from 'react';
import { Link } from "react-router-dom"

// Components
import Hero from '../components/Hero';
import Services from '../components/HomePage/Services';
import FeaturedProducts from '../components/HomePage/FeaturedProducts';

const HomePage = () => {
    return (
        <>
           <Hero title="innovative gadgets" max="true" description="Best gadgets with unique designs">
               <Link to="/products" className="main-link" style={{
                   margin: "1.5rem"
               }}>Products</Link>
           </Hero>
           <Services/>
           <FeaturedProducts/>
        </>
    );
}

export default HomePage;
