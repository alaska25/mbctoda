import {useState, useEffect, useContext} from "react";
import UserContext from "../UserContext";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { Nav, Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";

import React from "react";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";

export default function Login(){

	const {user, setUser} = useContext(UserContext);

	//State hooks to store the values of the input fields
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	//State to determine whether the button is enabled or not
	const [isActive, setIsActive] = useState(false);

	function login(e){
		//prevents the page redirection via form submit
		e.preventDefault();

		// Process a fetch request to the corresponding backend API.
			//Syntax:
				// fetch("url", {options})
					// Convert the information retrieved from the backend into a JavaScript object.
				// .then(res => res.json())
					// Capture the converted data.
				// .then(data => {})
		fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"mode" : "no-cors"
			},
			body: JSON.stringify({
				// values are coming from our State hooks
				email: email,
				password: password
			})
		})
		.then(res => res.json())
		.then(data =>{

			if(typeof data.access !== "undefined"){
				localStorage.setItem("token", data.access);
				retrieveUserDetails(data.access);

				Swal.fire({
					title: "Login Successful",
					icon: "success",
					text: "Welcome Back User!"
				});
			}
			else{
				Swal.fire({
					title: "Authentication Failed",
					icon: "error",
					text: "Check your login details and try again."
				});
			}

		})

		//Clear input fields
		setEmail("");
		setPassword("");

		// alert(`${email} has been verified! Welcome back!`);

	}

	//Retrieve user details
	// we will get the payload from the token.
	const retrieveUserDetails = (token) => {
		fetch(`${process.env.REACT_APP_API_URL}/users/details`,{
			headers:{
				Authorization: `Bearer ${token}`
			}
		})
		.then(res => res.json())
		.then(data => {
			
			//This will be set to the user state.
			setUser({
				id: data._id,
				isAdmin: data.isAdmin
			})
		})
	}

	useEffect(() =>{
		// Validation to enable the submit button when all fields are populated.
		if(email !== "" && password !== ""){
			setIsActive(true)
		}
		else{
			setIsActive(false)
		}
	}, [email, password])

	return(
		// Conditional rendering is applied in the Login pages that will determine which component/page will be loaded if the user is already login.
		(user.id !== null)
		?	
			// Redirected to the /products endpoint.
			<Navigate to="/MemberList" />
		:
		<>
			<div className="container-fluid">
				<div>
					<h1 className="p-2 text-center text-dark">MBCToda Login</h1>
				</div>
				<div className="d-flex justify-content-center container align-items-center my-5">
					<Form className="rounded p-2 border-1 fw-bold bg-light" onSubmit ={(e) => login(e)}>
						<Form.Group className="p-3 text-dark" controlId="userEmail">
						  <Form.Label>Email Address</Form.Label>
						  <Form.Control type="email" placeholder="Type your email address" value={email} onChange={e => setEmail(e.target.value)}/>
						  <Form.Text className="text-muted">
						    We'll never share your email with anyone else.
						  </Form.Text>
						</Form.Group>

						<Form.Group className="p-3 text-dark" controlId="password">
						  <Form.Label>Password</Form.Label>
						  <Form.Control type="password" placeholder="Type your password" value={password} onChange={e => setPassword(e.target.value)}/>
						</Form.Group>
							
						{
							isActive
							?
							<div className="d-grid gap-2 p-3">
								<Button variant="success" type="submit" id="submitBtn">
								  Log In
								</Button>
							</div>
							:
							<div className="d-grid gap-2 p-3">
								<Button variant="primary" type="submit" id="submitBtn" size="sm" disabled>
								  Log In
								</Button>
							</div>
						}
						<p className="mt-2 text-center">Not a member yet? Join <a href="/register">here</a></p>
						<p className="mt-2 text-end"><a href="/forgottenpassword">Forgotten Password?</a></p>

						<Button as={Link} to="/" type="submit" variant="danger" id="submitBtn" size="sm" className="mt-1 p-2">
						  Cancel
						</Button>
				
					</Form>
				</div>
			</div>
		</>
	
	)
}