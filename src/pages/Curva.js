import { Card, Button, Collapse } from "react-bootstrap";
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import { faPhone, faArrowLeft, faAnglesDown, faStar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img11 from "./images/3star.png"
import img14 from "./images/4star.png"
import img13 from "./images/5star.png"
export default function Curva(){
	const [open, setOpen] = useState(false);
	return(
			<>
			      <Button
			        onClick={() => setOpen(!open)}
			        aria-controls="example-collapse-text"
			        aria-expanded={open}
			        className="w-100 rounded-0 square square border-top text-start bg-primary"
			      >
			        Curva
			        <FontAwesomeIcon icon={faAnglesDown} className="float-end"></FontAwesomeIcon>
			      </Button>
			      <Collapse in={open}>
			        <div id="example-collapse-text">
			        <div className="container" style={{overflow:"auto"}}>
			              <Table className="text-center col-sm-3">
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
			          		          <td>1</td>
			          		          <td>Roger Mendiola</td>
			          		          <td>09068950312</td>
			          		           <td>
			          		           	<a href="tel:09068950312"><button className="bg-danger p-1 text-light w-100 border">Book&nbsp;Now</button></a>
			          		           	<a href="tel:09068950312"><button className="bg-primary p-1 text-light w-100 border">Pay Gcash</button></a>
			          		           </td>
			          		           <td className="d-flex justify-content-around p-4">
			          		           		<FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
			          		           		<FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
			          		           		<FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
			          		           		<FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
			          		           		<FontAwesomeIcon icon={faStar} className=""></FontAwesomeIcon>
			          		           </td>
			          		        </tr>

			          		      </tbody>
			          		    </Table>
			        </div>
			        </div>
			      </Collapse>
			</>
		)
}