import React, { Component, createContext } from 'react';
import { linkData } from "./linkData"
import {socialData} from "./socialData"
import { items } from "./productData"

const ProductContext = createContext()

// Provider
// Consumer

class ProductProvider extends Component {
    state = {
        sidebarOpen: false,
        cartOpen: false,
        links: linkData,
        socialIcons: socialData,
        cart: [],
        // Product state items
        cartItems: 0,
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0,
        storeProducts: [],
        filteredProducts: [],
        featuredProducts: [],
        singleProduct: {},
        loading: true
    }

    // handleSidebar
    handleSidebar = () => {
        this.setState({
            sidebarOpen: !this.state.sidebarOpen
        })
    }

    // handleSidecart
    handleCart = () => {
        this.setState({
            cartOpen: !this.state.cartOpen
        })
    }

    // close cart
    closeCart = () => {
        this.setState({
            cartOpen: false
        })
    }

    // open cart
    openCart = () => {
        this.setState({
            cartOpen: true
        })
    }

    render() {
        return (
            <ProductContext.Provider 
                value={{
                    ...this.state,
                    handleSidebar: this.handleSidebar,
                    handleCart: this.handleCart,
                    openCart: this.openCart,
                    closeCart: this.closeCart
                }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }
