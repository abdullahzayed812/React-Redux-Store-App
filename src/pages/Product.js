import React from "react";
import { getById } from "../api/ProductInfo";
import ProductInfo from "../Components/ProductInfo";

export class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            quantity: 0,
            product: {}
        };
        this.handleQuantity = this.handleQuantity.bind(this);
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        getById(id)
            .then(
                (product) => {
                    setTimeout(() => {
                        this.setState({
                            product,
                            loading: false
                        });
                    }, 500);
                }
            )
    }

    handleQuantity(event) {
        let value = event.target.value;
        if (value < 0) {
            return;
        }
        this.setState({
            quantity: value
        })
    }

    render() {

        if (this.state.loading) {
            return <h1>Loading...</h1>
        }

        return (
            <ProductInfo
                product={this.state.product}
                quantity={this.state.quantity}
                onChange={this.handleQuantity}
            />
        )
    }
}
