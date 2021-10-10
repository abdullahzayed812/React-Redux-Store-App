import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../actions/types";

export function cartReducer(state, action) {
    switch(action.type) {
        case ADD_TO_CART: {
            return {
                cart: [
                    ...state.cart,
                    {
                        product: action.productInfo,
                        quantity: action.quantity
                    }
                ]
            }
        }

        case REMOVE_FROM_CART: {
            const newState = {...state};
            newState.cart.splice(action.index, 1);
            return newState;
        }

        case CLEAR_CART: {
            const newState = {...state};
            newState.cart = [];
            return newState;
        }

        default: 
            return state;
    }
}