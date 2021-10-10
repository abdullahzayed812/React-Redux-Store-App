import {createStore} from "redux";
import { cartReducer } from "./reducers/index";

function loadState() {
    try {
        const state = localStorage.getItem('cart');
    
        if(state !== null) {
            return JSON.parse(state);
        }
    } catch(e) {
        // Handle with error
    }

    return {
        cart: []
    }
}

function saveState(state) {
    console.log("Save The State >>>>")
    localStorage.setItem('cart', JSON.stringify(state));

}

const store = createStore(cartReducer, loadState());

// Don't forget to toggle subscibe functoin in throttle function imported from "lodash.throttle"
store.subscribe(/*Here*/() => {
    saveState(store.getState());
})

export default store;