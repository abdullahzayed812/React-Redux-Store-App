import React from "react";
import { connect } from "react-redux";
import CartItem from "../Components/CartItem";
import { clearCart } from "../store/actions/actions";

class Cart extends React.Component {

    constructor(props) {
        super(props);
        this.addCartToServer = this.addCartToServer.bind(this);
    }

    addCartToServer() {
        // Add the cart to server ( Send the request to the server)
        // Implement action
        this.props.clearCart();
        alert("We recieved your order");
    }

    render() {
        return (
            <div>
                <h1>Cart</h1>
                <div className="container-items">
                    {
                        this.props.cartItem.map(
                            (item, index) => {
                                return (
                                    <div key={index}>
                                        <CartItem
                                            product={item.product}
                                            quantity={item.quantity}
                                            index={index}
                                        />
                                    </div>
                                ) 
                            }
                        )
                    }
                </div>
                <h2 className="total">Total: {this.props.total} </h2>
                <button className="pay-button" onClick={this.addCartToServer}>Pay</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    let total = 0;
    let cart = state.cart;
    for (let i = 0; i < cart.length; i += 1) {
        total += cart[i].quantity * cart[i].product.Price
    }
    return {
        cartItem: cart,
        total
    }
}

function mapDispatchToProps(dispatch) {
    return {
        clearCart: () => dispatch(clearCart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);