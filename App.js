import React from 'react'; 
import Cart form './containers/Cart'; 
import ProductList from './containers/ProductList'; 

const App = () => 
{
	return (
		<div className="container">
		<div className="row">
	   		<div className="col-md-12"> 
	    		<h1>Shopping Glasses example</h1> 
	    	</div>
		 	<div className="row">
		  		<div className="col-md-8">
		   			<ProductList /> 
		  		</div> 
			<div className="col-md-4">
			 		<Cart /> 
				</div>
		</div>


		<footer>
			<small>
			  Some contact information.
			</small>
		</footer>
	</div>  
	);
}

export default App;