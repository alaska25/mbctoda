import Table from 'react-bootstrap/Table';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Card, Button, Collapse, Container } from "react-bootstrap";
import { faPhone, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Antipolo from "../pages/Antipolo";
import Bogo from "../pages/Bogo";
import Panugnawan from "../pages/Panugnawan";
import Curva from "../pages/Curva";
import Daanlungsod from "../pages/Daanlungsod";
import Mahawak from "../pages/Mahawak";
import LamintakNorte from "../pages/LamintakNorte";
import LamintakSur from "../pages/LamintakSur";
import Medellin from "../pages/Medellin";
import CaputatanSur from "../pages/CaputatanSur";
import Kawit from "../pages/Kawit";
import SanRemegio from "../pages/SanRemegio";
import {Navigate} from "react-router-dom";
import UserContext from "../UserContext";
import {useContext} from "react";

export default function MemberList(){
	// To be used for validating the "role" of the user.
	const {user} = useContext(UserContext);

	return(
		(user.isAdmin) ? <Navigate to="/admindashboard"/> : 	
			<>	
				<div className="container">
					<Button as={Link} to="/" eventKey="/" className=" bg-primary"><FontAwesomeIcon icon={faArrowLeft} className="ms-1"></FontAwesomeIcon>&nbsp;Back</Button>
					<h3 className="text-center fw-bold">Please Select Driver's Location</h3><br/>
				  <Antipolo /><br/>
				  <Bogo /><br/>
				  <Curva /><br/>
				  <CaputatanSur/><br/>
				  <Daanlungsod /><br/>
				  <Kawit /><br/>
				  <LamintakNorte /><br/>
				  <LamintakSur /><br/>
			      <Medellin /><br/>
			      <Mahawak /><br/>
			      <Panugnawan /><br/>
			      <SanRemegio />
			      <br/><br/><br/>
			      <h4 className="pt-2 text-start fw-bold">Step By Step Guide:</h4>
			      <ol>
			      	<li>Select drivers based on your current location.</li>
			        <li>Book an appointment via call and text messages.</li>
			        <li>Pricing may depends upon your destination. Please negotiate properly with our drivers.</li>
			        <li>For your feedback and concerns feel free to contact our customer service. Thank you!</li>
			      </ol>
			    </div>
			</>

		)
}
