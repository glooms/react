import React from 'react';
import ProductListing from './ProductListing';
import Cart from './Cart';

class Layout extends React.Component
{
    constructor() {
        super();
        this.buyProduct = this.buyProduct.bind(this);
    }

    render()
    {
        return (
            <div>
                <h1>Köp för fan!</h1>
                <Cart />
                <ProductListing />
            </div>
        );
    }
    
   buyProduct()
   {
       this.setState({}); 
   } 
}

export default Layout;
