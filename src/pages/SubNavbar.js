import React from "react";
import {Link} from "react-router-dom";
import {  Nav, Navbar } from "react-bootstrap"; 
import { faPhone, faGear, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function SubNavbar(){
	return(
		<>
			<div id="mySidenav" className="sidenav">
			  <a href="http://localhost:3000/" id="home"><FontAwesomeIcon icon={faHome} className="ms-1"></FontAwesomeIcon></a>
			  <a href="http://localhost:3000/setting" id="projects"><FontAwesomeIcon icon={faGear} className="ms-1"></FontAwesomeIcon></a>
			  <a href="http://localhost:3000/contact" id="contact"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a>
			</div>
		</>
		)
}