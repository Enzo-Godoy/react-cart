import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem'; 

const Cart = ({ items, total, currency, removeFromCart }) => {
	return ( 
		<div> 
			<h3>Shopping Class</h3> 
			<div className="cart">
				<div className="panel panel-default"> 
					<div className="panel-body">
					{items.length > 0 && (
						<div cllasName="cart__body">
							{items.map(item => ( 
									<CartItem key={item.id} {...item} onClick={() => removeFromCart(item.id)} /> 
							))}
						</div>
					)}
					<div className="cart__total"> Total: {total} {currency}</div>
				</div>
			</div>
		</div>
	</div>
	);
}

Cart.propTypes = {
	items : PropTypes.array,
	total: PropTypes.number,
	currency: PropTypes.string,
	removeFromCart: PropTypes.func.isRequired
}

export default Cart;