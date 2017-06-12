import React from 'react';
import Cart from './Cart';
import store from '../store.js';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.handleBuy = this.handleBuy.bind(this);
        this.cart = null; 
    }
    
    render() {
        const product = this.props.product;
        return (<div class='product'>
               <span class='title'> {product.title} </span>
               <img src={product.image}/>
               <span class='price'> Price: {product.price} SEK </span>
               <div class='buy'>
                    <button class='butbutton' onClick={this.handleBuy}>Buy</button>
               </div>
               </div>);
    }

    handleBuy() {
        store.addProduct(this.props.product);
    }
}

export default Product;
