import React from 'react';
import store from '../store.js';

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            'store': [],
        };
        this.addProduct = this.addProduct.bind(this);
        this.storeToReact = this.storeToReact.bind(this);
        this.total = 0;
        store.addProduct = this.addProduct; 
    }

    render() {
        this.total = 0;
        return (<div>
                <ul> {this.state.store.map(this.storeToReact)} </ul>
                <span id='total'> Total: {this.total} </span> </div>);
    }

    addProduct(product) {
        var store = this.state.store;
        var found = false;
        for (var i = 0; i < store.length; i++){
            if (store[i].id == product.id) {
                found = true;
                store[i].quantity++;
            }
        }
        if (!found) {
            product.quantity = 1;
            store.push(product);
        }
        this.setState({'store': store});
    }

    storeToReact(prod, i) {
        this.total += prod.quantity * prod.price;
        return (<li key={i}>
                {prod.title} || {prod.quantity} x {prod.price} = {prod.quantity * prod.price}
                </li>);
    }

    removeFromCart() {

    }
}

export default Cart;
