import React from 'react';
import {ProductConsumer} from "../context"

const HomePage = () => {
    return (
        <>
           <ProductConsumer>
                { value => { 
                    console.log(value)
                }}
            </ProductConsumer> 
            <h1>Homepage</h1>
        </>
    );
}

export default HomePage;
