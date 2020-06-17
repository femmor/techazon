import React from 'react';
import { Switch, Route } from "react-router-dom"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

// Pages
import Home from "./pages/HomePage"
import About from "./pages/AboutPage"
import Cart from "./pages/CartPage"
import Contact from "./pages/ContactPage"
import Products from "./pages/ProductsPage"
import SingleProduct from "./pages/SingleProductPage"
import Default from "./pages/DefaultPage"

function App() {
  return (
    // Navbar, Sidebar, Cart, Footer
    <>
      <Switch>
        <Route exact component={Home} path="/"/>
        <Route component={About} path="/about"/>
        <Route component={Contact} path="/contact-us"/>
        <Route component={Products} path="/products"/>
        <Route component={SingleProduct} path="/product/:id"/>
        <Route component={Default} />
    </Switch>
    </>
  );
}


export default App;
