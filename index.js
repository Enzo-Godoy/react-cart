import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { CombineReducers, createStore } from 'redux';
import cartReducer from './ducks/cart';
import productsReducer from './data/prodcuts';
import App from './App';
import productsData from './data/products'; 
import 'bootstrap/dist/css/bootstrap.'; 

const rootReducer = combineReducers ({
	cart: cartReducer,
	product: productsReducer
}); 

let store = createStore( 
	rootReducer, 
	{
		products: productsData // initial store values
	}, 
	window._REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


render(
	<Provider store={store}>
		<App /> 
	</Provider>, 
	document.getElementById('root')
);