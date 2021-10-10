import Product from "./Product.json";

export function getAll() {
    return Promise.resolve(Product);
}

export function getById(id) {
    for (let i = 0; i < Product.length; i += 1) {
        if (Product[i].id.toString() === id) {
            return Promise.resolve(Product[i]);
        }
    }
}