import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../store/actions/actions";

class ProductInfo extends React.Component {
    render() {
        const productInfo = this.props.product;
        const quantity = this.props.quantity
        return (
            <div className="product-container">
                <div className="product-image">
                    <img src={productInfo.image} alt="" />
                </div>
                <div>
                    <h1>
                        {productInfo.name}
                    </h1>
                    <p>
                        Price: {productInfo.Price}$
                    </p>
                    <p>
                        {productInfo.discription}
                    </p>
                    <input
                        type="number"
                        value={quantity}
                        onChange={this.props.onChange}
                        />
                    <p>
                        Total: {productInfo.Price * quantity}$
                    </p>
                    <button onClick={
                        () => this.props.addToCart(productInfo, quantity)
                    }>
                        Add To Cart
                    </button>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (productInfo, quantity) =>
            dispatch(addToCart(productInfo, quantity))
    }
}

export default connect(null, mapDispatchToProps)(ProductInfo);
