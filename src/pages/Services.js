import {useEffect, useState, useContext} from "react";
import ProductCard from "../components/ProductCard";
import {Container, Row} from "react-bootstrap";
import {Navigate} from "react-router-dom";
import UserContext from "../UserContext";
import { CartProvider } from "react-use-cart";
import Cart from "../pages/Cart";


export default function Services(){

	const [products, setProducts]= useState([]);

	// To be used for validating the "role" of the user.
	const {user} = useContext(UserContext);

	//Retrieve the products from the database upon initial render of the product component.
	useEffect(() =>{
		fetch(`${process.env.REACT_APP_API_URL}/products`)
		.then(res => res.json())
		.then(data => {
			// console.log(data);

			setProducts(data.map((product) => {
				// console.log(product._id)
				
				return(
					<ProductCard key={product._id} id={product._id} image={product.imageURL} title={product.name} description={product.description} price={product.price} stocks={product.stocks} productProp={product} />
				)
			}))
		})
	},[])

	return(
			(user.isAdmin)
				? // it means admin is true
					<Navigate to="/admin"/>
				:
					<>

						<div className="container-fluid bg">
							<div className="container">	
								<CartProvider>
										<h1 className="text-center fw-bold">Featured Products</h1>
										<Row className="">
													{products}
										</Row>
									<br/><br/>
									
									
									<Cart />
								</CartProvider>
							</div>
						</div>	
					</>
		)
}