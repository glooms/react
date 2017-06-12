import React from 'react';
import request from 'superagent';
import Product from './Product';


class ProductListing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {'products': null};
        this.products = [];
    }

    componentDidMount(){
        console.log(this.cart);
        this.getProducts(); 
    }

    render() {
        const products = this.state.products;
        if (!products)
            return null;
        const reactProducts = products.map(this.getReactProduct.bind(this));
        return (<div> {reactProducts} </div>);
    }

    getReactProduct(prod, i){
        return <Product product={prod} key={i}/>;
    }

    getProducts(){
        request
            .get('/products.json')
            .end((err, res) => {
                const products = res.body.products;
                this.setState({'products': products});
            });
    }
}

export default ProductListing;
