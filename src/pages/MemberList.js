import Table from 'react-bootstrap/Table';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Card, Button, Collapse, Container } from "react-bootstrap";
import { faPhone, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Medellin from "../pages/Medellin";
import Bogo from "../pages/Bogo";
import SanRemegio from "../pages/SanRemegio";
export default function MemberList(){
	return(
	<>
		
		<Container>
			<Button as={Link} to="/" eventKey="/" className="mt-2 bg-primary"><FontAwesomeIcon icon={faArrowLeft} className="ms-1"></FontAwesomeIcon>&nbsp;Back</Button>
			<h3 className="text-center fw-bold">Please select list of our active and trusted drivers.</h3>
	      <Medellin />
	      <br/>
	      <Bogo />
	      <br/>
	      <SanRemegio />
	      <br/><br/><br/>
	      <h4 className="pt-2 text-start fw-bold">Step By Step Guide:</h4>
	      <ol>
	        <li>Select your current location.</li>
	        <li>Look for driver nearest from your location.</li>
	        <li>Call and book an appointment.</li>
	        <li>Pricing may depends upon the situation. Please negotiate with the driver.</li>
	      </ol>
	    </Container>
	
	</>

		)
}
