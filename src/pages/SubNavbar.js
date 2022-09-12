import React from "react";
import { faPhone, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function SubNavbar(){
	return(
		<>
			<div id="mySidenav" className="sidenav">
			  <a href="#" id="projects"><FontAwesomeIcon icon={faGear} className="ms-1"></FontAwesomeIcon></a>
			  <a href="#" id="contact"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a>
			</div>
		</>
		)
}