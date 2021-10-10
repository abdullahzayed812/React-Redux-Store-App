import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class CartIcon extends React.Component {
    render() {
        return (
            <Link to="/cart">
                <div className="cart-icon">
                    <span className="cart-number">{this.props.totalQuantity}</span>
                </div>
            </Link>
        )
    }
}

const mapStateToProps = (state) => {
    let totalQuantity = 0;
    for (let i = 0; i < state.cart.length; i += 1) {
        totalQuantity += parseInt(state.cart[i].quantity);
    }
    return {
        totalQuantity
    }
}

export default connect(mapStateToProps)(CartIcon);