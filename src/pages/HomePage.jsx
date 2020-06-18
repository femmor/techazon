import React from 'react';
import { Link } from "react-router-dom"

// Components
import Hero from '../components/Hero';

const HomePage = () => {
    return (
        <>
           <Hero title="innovative gadgets" max description="Best gadgets with unique designs">
               <Link to="/products" className="main-link" style={{
                   margin: "1.5rem"
               }}>Products</Link>
           </Hero>
        </>
    );
}

export default HomePage;
