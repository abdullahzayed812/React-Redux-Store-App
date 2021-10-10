import React from "react";

export class Product extends React.Component {
    render() {
        const product = this.props.product
        return (
            <div className="card">
                <img src={product.image} alt="" />
                <div className="card-info">
                    <h5>{product.name}</h5>
                    <p>Price {product.Price}$</p>
                    <a href={"products/" + product.id}>Details</a>
                </div>
            </div>
        )
    }
}
