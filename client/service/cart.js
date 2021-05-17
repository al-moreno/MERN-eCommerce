import {Subject} from "rxjs";

const cartTotal = new Subject();

const checkCart = () => {
	cartTotal.next(getCartCount());
}

const getCartFromMemory = () => {
	const rawCart = localStorage.getItem('cart');
	return rawCart ? JSON.parse(rawCart) : [];
}

const saveCartToMemory = (cart) => {
	localStorage.setItem("cart", JSON.stringify(cart));
}

const addToCart = (item) => {
	const cart = getCartFromMemory();
	const existingItem = cart.find(x => x._id === item._id);
	if (existingItem){
		existingItem.quantity++;
	}else{
		item.quantity = 1;
		cart.push(item);
	}

	alert(`Added ${item.name} to the cart.`)
	saveCartToMemory(cart);

	cartTotal.next(getCartCount());
}

const removeFromCart = (item) => {
	const cart = getCartFromMemory();
	saveCartToMemory(cart);
}

const getCart = () => {
	return getCartFromMemory();
}

const getCartCount = () => {
	const cart = getCartFromMemory();
	return cart.reduce((acc, singleItem) => {
		return acc + singleItem.quantity;
	}, 0);
}

const cartCount = () => {
	return cartTotal.asObservable();
}

export default {
	addToCart,
	removeFromCart,
	getCart,
	cartCount,
	checkCart
}
