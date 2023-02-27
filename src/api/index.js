import axios from './axiosInstance';

export function getProducts(query, callback, finallyCallback) {
    axios.get(`/items?q=${query}`)
        .then(callback)
        .catch(console.error)
        .finally(finallyCallback);
}

export function getProductById(productId, callback, finallyCallback) {
    axios.get(`/items/${productId}`)
        .then(callback)
        .catch(console.error)
        .finally(finallyCallback)
}