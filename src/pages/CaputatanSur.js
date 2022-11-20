import { Card, Button, Collapse } from "react-bootstrap";
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import { faPhone, faArrowLeft, faAnglesDown, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img11 from "./images/3star.png"
import img14 from "./images/4star.png"
import img13 from "./images/5star.png"
export default function CaputatanSur(){
	const [open, setOpen] = useState(false);
	return(
			<>
			      <Button
			        onClick={() => setOpen(!open)}
			        aria-controls="example-collapse-text"
			        aria-expanded={open}
			        className="w-100 rounded-0 square square border-top text-start bg-primary"
			      >
			        Caputatan Sur
			        <FontAwesomeIcon icon={faAnglesDown} className="float-end"></FontAwesomeIcon>
			      </Button>
			      <Collapse in={open}>
			        <div id="example-collapse-text">
			        <div style={{overflow:"auto"}}>
			              <Table bordered responsive="sm" variant="transparent" className="text-center mt-3 w-100">
			          		      <thead className="mt-5">
			          		        <tr className="text-dark fw-bold">
			          		          <th>I.D&nbsp;#</th>
			          		          <th>Names</th>
			          		          <th>Contact No.</th>
			          		          <th>Action</th>
			          		          <th>Payment&nbsp;Mode</th>
			          		          <th>Availability</th>
			          		          <th>Ratings</th>
			          		        </tr>
			          		      </thead>
			          		      <tbody>
			          		       
			          		        <tr>
			          		          <td>1</td>
			          		          <td>Tito&nbsp;Bacus</td>
			          		          <td>09554096855</td>
			          		          <td>
			          		          	<a href="tel:09554096855"><button className="bg-danger p-1 text-light w-100 border">Book&nbsp;Now</button></a>
			          		          </td>
			          		          <td>
			          		          	<p><a href="https://www.gcash.com" target="_blank" className="gcash">G-Cash</a> | Cash</p>
			          		          </td>
			          		          <td>
			          		          	<p>5am - 8pm</p>
			          		          </td>
			          		          <td className="d-flex justify-content-around p-3">
			          		          		<FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
			          		          		<FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
			          		          		<FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
			          		          		<FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
			          		          		<FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
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