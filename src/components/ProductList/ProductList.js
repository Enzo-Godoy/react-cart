import React from 'react'; 
import PropTypes from 'prop-types';
import Product from '../../containers/Products';

const ProductList = ({ products }) => {
	return (
		<div>
			<h3>Products</h3> 
			<ul className="product-list">
			{product.map(product => ( 
				<li key={product.id} className="product-list__item">
					<Product {...product} /> 
				</li>
			))}
			</ul>
		</div>
	);
}


ProductList.propTypes = {
	products: PropTypes.array,
}

export default ProductList; 
