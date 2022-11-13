import {Row, Col, Button, Container, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function Banner({data}){
	// Destructuring refer to errorjs
	const {title, content, destination, label} = data;

	return(
    <>
	       <Col className="p-3 text-center">
					<h2 className="fw-bold">We're Making <br/>Your Everyday Better</h2>
					<Button as={Link} to="/Register" eventKey="/Register">Get Started</Button>
	       </Col>
    		
	</>
	)
}
