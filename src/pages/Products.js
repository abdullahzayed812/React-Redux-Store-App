import React from "react";
import { Product } from "../Components/Product";
import { getAll } from "../api/ProductInfo";

export class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        getAll()
            .then( data => {
                this.setState({
                    products: data
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <h1>Produts</h1>
                <div className="container-items">
                    {
                        this.state.products.map(
                            (product) =>
                                <div key={product.id}>
                                    <Product product={product} />
                                </div>
                        )
                    }
                </div>
            </div>
        )
    }
}