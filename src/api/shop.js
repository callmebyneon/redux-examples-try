/*
 * Mocking client-server processing
 */
import _products from "./products.json";

const TIMEOUT = 100; // Number (ms)

const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

export default {
	getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
	buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT),
};
