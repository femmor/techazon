import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

// Components
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import SideCart from "./components/SideCart"
import Footer from "./components/Footer"

// Pages
import Home from "./pages/HomePage"
import About from "./pages/AboutPage"
import Cart from "./pages/CartPage"
import Contact from "./pages/ContactPage"
import Products from "./pages/ProductsPage"
import SingleProduct from "./pages/SingleProductPage"
import Default from "./pages/DefaultPage"

class App extends Component {
  render() {
    return(
      // Navbar, Sidebar, Cart, Footer
      <>
      <Navbar/>
      <Sidebar/>
      <SideCart/>
        <Switch>
            <Route exact component={Home} path="/"/>
            <Route component={About} path="/about"/>
            <Route component={Contact} path="/contact-us"/>
            <Route component={Cart} path="/cart"/>
            <Route component={Products} path="/products"/>
            <Route component={SingleProduct} path="/product/:id"/>
            <Route component={Default} />
        </Switch>
      <Footer/>
    </>
    )
  }
}


export default App;
