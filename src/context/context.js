import React, { Component, createContext } from 'react';

const ProductContext = createContext()

// Provider
// Consumer

class ProductProvider extends Component {
    state = {
        sidebarOpen: false,
        cartOpen: false,
        cartItems: 11
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