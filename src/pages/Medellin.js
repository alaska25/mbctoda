import { Card, Button, Collapse } from "react-bootstrap";
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import { faPhone, faArrowLeft, faAnglesDown, faStar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img11 from "./images/3star.png"
import img14 from "./images/4star.png"
import img13 from "./images/5star.png"
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
		        Poblacion - Medellin
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
		          			          <th>G-Cash #</th>
		          			          <th>Action</th>
		          			          <th>Payment&nbsp;Mode</th>
		          			          <th>Ratings</th>
		          			        </tr>
		          			      </thead>
		          			      <tbody>
		          			        <tr>
		          			          <td>1</td>
		          			          <td>Mateo Layson</td> 
		          			          <td>09073184406</td>
		          			          <td>
		          			          	<a href="tel:09073184406"><button className="bg-danger p-1 text-light w-100 border">Book&nbsp;Now</button></a>
		          			          </td>
		          			          <td>
			          		          	<p><a href="https://www.gcash.com" target="_blank" className="gcash">G-Cash</a> | Cash</p>
			          		          </td>
			          		          <td className="d-flex justify-content-around p-3">
			          		          		<FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
			          		          		<FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
			          		          		<FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
			          		          		<FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
			          		          		<FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
			          		          </td>

		          			        </tr>
		          			        <tr>
		          			          <td>2</td>
		          			          <td>Cordelicio Maños</td> 
		          			          <td>09225182451</td>
		          			          <td>
		          			          	<a href="tel:09225182451"><button className="bg-danger p-1 text-light w-100 border">Book&nbsp;Now</button></a>
		          			          </td>
		          			          <td>
			          		          	<p><a href="https://www.gcash.com" target="_blank" className="gcash">G-Cash</a> | Cash</p>
			          		          </td>
			          		          <td className="d-flex justify-content-around p-3">
			          		          		<FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
			          		          		<FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
			          		          		<FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
			          		          		<FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
			          		          		<FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
			          		          </td>

		          			        </tr>
		          			        <tr>
		          			          <td>3</td>
		          			          <td>Jackson Bienes</td> 
		          			          <td>09283436023</td>
		          			          <td>
		          			          	<a href="tel:09283436023"><button className="bg-danger p-1 text-light w-100 border">Book&nbsp;Now</button></a>
		          			          </td>
		          			          <td>
			          		          	<p><a href="https://www.gcash.com" target="_blank" className="gcash">G-Cash</a> | Cash</p>
			          		          </td>
			          		          <td className="d-flex justify-content-around p-3">
			          		          		<FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
			          		          		<FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
			          		          		<FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
			          		          		<FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
			          		          		<FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
			          		          </td>

		          			        </tr>
		          			        <tr>
		          			          <td>4</td>
		          			          <td>Noel Yubal</td> 
		          			          <td>09618156928</td>
		          			          <td>
		          			          	<a href="tel:09618156928"><button className="bg-danger p-1 text-light w-100 border">Book&nbsp;Now</button></a>
		          			          </td>
		          			          <td>
			          		          	<p><a href="https://www.gcash.com" target="_blank" className="gcash">G-Cash</a> | Cash</p>
			          		          </td>
			          		          <td className="d-flex justify-content-around p-3">
			          		          		<FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
			          		          		<FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
			          		          		<FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
			          		          		<FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
			          		          		<FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
			          		          </td>

		          			        </tr>

		          			        <tr>
		          			          <td>5</td>
		          			          <td>Leonilo Delacruz</td> 
		          			          <td>09213856899</td>
		          			          <td>
		          			          	<a href="tel:09213856899"><button className="bg-danger p-1 text-light w-100 border">Book&nbsp;Now</button></a>
		          			          </td>
		          			          <td>
			          		          	<p><a href="https://www.gcash.com" target="_blank" className="gcash">G-Cash</a> | Cash</p>
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