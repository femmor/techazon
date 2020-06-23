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
        // items in the cart
        cart: [],
        // Product state items
        cartItems: 0,
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0,
        // all products
        storeProducts: [],
        // filtered products
        filteredProducts: [],
        // featured products
        featuredProducts: [],
        singleProduct: {},
        loading: false
    }

    // Set Products
    setProducts = (products) => {
        // get all products
        let storeProducts = products.map(item => {
            const { id } = item.sys
            const image = item.fields.image.fields.file.url
            const product = { id, ...item.fields, image }
            return product
        })
        
        // featured products
        let featuredProducts = storeProducts.filter(item => item.featured) 
        
        // Set state
        this.setState({
            storeProducts,
            filteredProducts: storeProducts,
            featuredProducts,
            cart: this.getStorageCart(),
            singleProduct: this.getStorageProduct(),
            loading: false
        })
    }

    componentDidMount() {
        // from contentful
        this.setProducts(items)
    }

    // get cart from local storage
    getStorageCart = () => {
        return []
    }

    // get single product from local storage
    getStorageProduct = () => {
        return {}
    }

    // get totals 
    getTotals = () => {

    }

    // add totals 
    addTotals = () => {

    }

    // sync storage - called when we add item to cart
    syncStorage = () => {} 

    // add to cart
    addToCart = (id) => {
        // Get all the items from the cart
        let tempCart = [...this.state.cart]
        // Get all the products in the state
        let tempProducts = [...this.state.storeProducts]
        let tempItem = tempCart.find(item => item.id === id)
        
        // Check if the tempItem is not in the cart
        if(!tempItem) {
            tempItem = tempProducts.find(item => item.id === id)
            // set total to the price of the tempItem
            let total = tempItem.price
            let cartItem = {...tempItem, count : 1, total}
            tempCart = [...tempCart, cartItem]
        } else {
            // If the item is already in the cart
            tempItem.count++
            tempItem.total = tempItem.price * tempItem.count
            tempItem.total = parseFloat(tempItem.total.toFixed(2))
        }

        // Set the state
        this.setState(() => {
            return {
                cart: tempCart
            }
        }, () => {
            this.addTotals()
            this.syncStorage()
            this.openCart()
        })
    }

    // set single product
    setSingleProduct = (id) => {
        console.log("set single product "+id)
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
                    closeCart: this.closeCart,
                    addToCart: this.addToCart,
                    setSingleProduct: this.setSingleProduct,
                }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }
