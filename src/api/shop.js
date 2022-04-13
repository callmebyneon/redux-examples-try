/*
 * Mocking client-server processing
 */
import _products from "./products.json";

const TIMEOUT = 100; // Number (ms)

const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

export default {
	getProducts: async function () {
		await sleep(TIMEOUT);
		return _products;
	},
	buyProducts: async function (payload, cb, timeout) {
		await sleep(timeout || TIMEOUT);
		return () => cb();
	},
};
