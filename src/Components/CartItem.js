import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../store/actions/actions";

class CartItem extends React.Component {
    render() {
        const style = {
            button: {
                border: "none",
                backgroundColor: "#e02424",
                borderRadius: "5px",
                padding: "15px 25px",
                fontWeight: "bold",
                color: "white",
                display: "block",
                marginTop: "20px",
                cursor: "pointer",
            }
        }
        const product = this.props.product;
        const quantity = this.props.quantity;
        return (
            <div className="card">
                <img src={product.image} alt="" />
                <div className="card-info">
                    <h5>{product.name}</h5>
                    <p>Price {product.Price}$</p>
                    <p>Quantity: {quantity}</p>
                    <p>Total: {product.Price * quantity} </p>
                    <button
                        style={style.button}
                        onClick={
                            () => this.props.removeFromCart(this.props.index)
                        }
                    >
                        Delete
                    </button>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: (index) => dispatch(removeFromCart(index))
    }
}

export default connect(null, mapDispatchToProps)(CartItem);
