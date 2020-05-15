import { getProduct } from '../ducjs/Products'; 

const CART_ADD = 'cart/ADD';
const CART_REMOVE = 'cart/REMOVE';

const initialState = {
	items: [],
	currency: 'EUR'
}; 

export default function cart(state = initialState, action = {}){
	switch(action.type){
		case CAST_ADD:
			return handleCartRemove(state, action.payload);
		case CAST_REMOVE:
			return handleCartRemove(state, action.payload);
		default:
			return state;
	}
}

function handleCartAdd(state, payload){
	return {
		...state,
		items: [...state.items, payload.productId ]
	};
}

function handleCartRemove(state, payload) {
	return { 
		...state,
		items: state.items.filter(id => id !== payload.productId)
	};
}

export function addToCart(productId){
	return {
		type: CART_ADD,
		payload: {
			productId
		}
	}
}


export function removeToCart(productId){
	return {
		type: CART_REMOVE,
		payload: {
			productId
		}
	}
}

export function idInCart(state, props) {
	return state.cart.item.indexOf(props.id) !== -1; 
}

export function getItems(state, props) {
	return state.cart.items.map(id => getProduct(state, { id}));
}

export function getCurrency(state, props) {
	return state.cart.currency;
}

export function getTotal(state, props){
	return state.cart.items.reduce((acc, id) => {
		const item = getProduct(state, { id  });
		return acc + item.price;
	}, 0);
}


