import { Card, Button, Collapse } from "react-bootstrap";
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import { faPhone, faArrowLeft, faAnglesDown, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img10 from "./images/book.png"
import img11 from "./images/3star.png"
import img12 from "./images/4star.png"
import img13 from "./images/5star.png"
export default function Bogo(){
	const [open, setOpen] = useState(false);
	return(
			<>
			      <Button
			        onClick={() => setOpen(!open)}
			        aria-controls="example-collapse-text"
			        aria-expanded={open}
			        className="w-100 rounded-0 square square border-top text-start bg-primary"
			      >
			        Bogo
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
			          		          <td>1</td>
			          		          <td>Dennis Bulawan</td>
			          		          <td>09655866689</td>
			          		          <td>
			          		          	<a href="tel:09655866689"><button className="bg-danger p-1 text-light w-100 border">Book&nbsp;Now</button></a>
			          		          	<a href="tel:09655866689"><button className="bg-primary p-1 text-light w-100 border">Pay Gcash</button></a>
			          		          </td>
			          		          <td className="d-flex justify-content-around p-4">
			          		          		<FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
			          		          		<FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
			          		          		<FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
			          		          		<FontAwesomeIcon icon={faStar} className=""></FontAwesomeIcon>
			          		          		<FontAwesomeIcon icon={faStar} className=""></FontAwesomeIcon>
			          		          </td>
			          		        </tr>
			          		        <tr>
			          		          <td>2</td>
			          		          <td>Quirico Camay</td>
			          		          <td>09561135550</td>
			          		          <td>
			          		          	<a href="tel:09561135550"><button className="bg-danger p-1 text-light w-100 border">Book&nbsp;Now</button></a>
			          		          	<a href="tel:09561135550"><button className="bg-primary p-1 text-light w-100 border">Pay Gcash</button></a>
			          		          </td>
			          		          <td className="d-flex justify-content-around p-4">
			          		          		<FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
			          		          		<FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
			          		          		<FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
			          		          		<FontAwesomeIcon icon={faStar} className=""></FontAwesomeIcon>
			          		          		<FontAwesomeIcon icon={faStar} className=""></FontAwesomeIcon>
			          		          </td>
			          		        </tr>
			          		        <tr>
			          		          <td>3</td>
			          		          <td>Joel Estorba</td>
			          		          <td>09263102985</td>
			          		          <td>
			          		          	<a href="tel:09263102985"><button className="bg-danger p-1 text-light w-100 border">Book&nbsp;Now</button></a>
			          		          	<a href="tel:09263102985"><button className="bg-primary p-1 text-light w-100 border">Pay Gcash</button></a>
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