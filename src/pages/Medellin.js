import { Card, Button, Collapse } from "react-bootstrap";
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import { faPhone, faArrowLeft, faAnglesDown} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Medellin(){
	const [open, setOpen] = useState(false);
	return(
		<>
		      <Button
		        onClick={() => setOpen(!open)}
		        aria-controls="example-collapse-text"
		        aria-expanded={open}
		        className="w-100 rounded-0 square square border-top text-start bg-primary"
		      >
		        Poblacion
		        <FontAwesomeIcon icon={faAnglesDown} className="float-end"></FontAwesomeIcon>
		      </Button>
		      <Collapse in={open}>
		        <div id="example-collapse-text">
		        <div className="container" style={{overflow:"auto"}}>
		           <Table striped bordered hover className="text-center mt-3 col-sm-3">
		          			      <thead className="mt-5">
		          			        <tr className="text-dark fw-bold">
		          			          <th>I.D&nbsp;#</th>
		          			          <th>Names</th>
		          			          <th>Contact #</th>
		          			          <th>Action</th>
		          			          <th>Ratings</th>
		          			        </tr>
		          			      </thead>
		          			      <tbody>
		          			      
		          			        <tr>
		          			          <td>001</td>
		          			          <td>Wilson</td>
		          			          <td></td>
		          			          <td><a href="tel:09494135052"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
		          			           <td><img src="./images/4star.png" alt="ratings" className="img-fluid h-20"/></td>
		          			        </tr>
		          			        <tr>
		          			          <td>002</td>
		          			          <td>Rogelio</td> 
		          			          <td></td>
		          			          <td><a href="tel:09494135052"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
		          			           <td><img src="./images/4star.png" alt="ratings" className="img-fluid h-20"/></td>
		          			        </tr>
		          			        <tr>
		          			          <td>003</td>
		          			          <td>Roselma</td> 
		          			          <td></td>
		          			          <td><a href="tel:09494135052"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
		          			           <td><img src="./images/4star.png" alt="ratings" className="img-fluid h-20"/></td>
		          			        </tr>
		          			        <tr>
		          			          <td>004</td>
		          			          <td>Mateo</td> 
		          			          <td></td>
		          			          <td><a href="tel:09494135052"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
		          			           <td><img src="./images/4star.png" alt="ratings" className="img-fluid h-20"/></td>
		          			        </tr>
		          			        <tr>
		          			          <td>005</td>
		          			          <td>Pedro</td> 
		          			          <td></td>
		          			          <td><a href="tel:09494135052"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
		          			           <td><img src="./images/4star.png" alt="ratings" className="img-fluid h-20"/></td>
		          			        </tr>
		          			        <tr>
		          			          <td>006</td>
		          			          <td>Bienes</td> 
		          			          <td></td>
		          			          <td><a href="tel:09494135052"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
		          			           <td><img src="./images/4star.png" alt="ratings" className="img-fluid h-20"/></td>
		          			        </tr>
		          			      </tbody>
		          			    </Table>
		        </div>
		        </div>
		      </Collapse>
		</>
		)
}