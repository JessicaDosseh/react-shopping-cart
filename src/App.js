import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// Context
import ProductContext from './context/ProductContext';
import CartContext from './context/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		console.log('add Item: ', item);
		setCart(cart => [...cart, item])
	};

	return (
		<ProductContext.Provider value={{ products, addItem }}>
			<CartContext.Provider value={cart}>
				<div className="App">
					{/* <Navigation cart={cart} /> */}
					<Navigation />

					{/* Routes */}
					{/* <Route
						exact
						path="/"
						render={() => (
							<Products
								products={products}
								addItem={addItem}
							/>
						)}
					/> */}
					<Route exact path="/" component={Products} />

					{/* <Route
						path="/cart"
						render={() => <ShoppingCart cart={cart} />}
					/> */}
					<Route path='/cart' component={ShoppingCart} />
				</div>
			</CartContext.Provider>
		</ProductContext.Provider>
		
	);
}

export default App;
