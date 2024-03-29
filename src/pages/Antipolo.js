import { Card, Button, Collapse } from "react-bootstrap";
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import { faPhone, faArrowLeft, faAnglesDown, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img10 from "./images/book.png"
import img11 from "./images/3star.png"
import img14 from "./images/4star.png"
import img13 from "./images/5star.png"
export default function Antipolo(){
	const [open, setOpen] = useState(false);
	return(
			<>
			      <Button
			        onClick={() => setOpen(!open)}
			        aria-controls="example-collapse-text"
			        aria-expanded={open}
			        className="w-100 rounded-0 square square border-top text-start bg-primary"
			      >
			        Antipolo
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
			          		        <tr className="mt-2">
			          		          <td>1</td>
			          		          <td>Arjon Moralde</td>
			          		          <td>09976997408</td>
			          		          <td>
			          		          	<a href="tel:09976997408"><button className="bg-danger p-1 text-light w-100 border">Book&nbsp;Now</button></a>
			          		          	
			          		          </td>
			          		          <td>
			          		          	<p><a href="https://www.gcash.com" target="_blank" className="gcash">G-Cash</a> | Cash</p>
			          		          </td>
			          		          <td>
			          		          	<p>6am - 10pm</p>
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
			          		          <td>Yonel Pable</td>
			          		          <td>09661884680</td>
			          		          <td>
			          		          	<a href="tel:09661884680"><button className="bg-danger p-1 text-light w-100 border">Book&nbsp;Now</button></a>
			          		          </td>
			          		          <td>
			          		          	<p><a href="https://www.gcash.com" target="_blank" className="gcash">G-Cash</a> | Cash</p>
			          		          </td>
			          		          <td>
			          		          	<p>5am - 6pm</p>
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
			          		          <td>Noel Monato</td>
			          		          <td>09661439506</td>
			          		          <td>
			          		          	<a href="tel:09661439506"><button className="bg-danger p-1 text-light w-100 border">Book&nbsp;Now</button></a>
			          		          </td>
			          		          <td>
			          		          	<p><a href="https://www.gcash.com" target="_blank"  className="gcash">G-Cash</a> | Cash</p>
			          		          </td>
			          		          <td>
			          		          	<p>5am - 6pm</p>
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
			          		          <td>Peter Onipig</td>
			          		          <td>09219587042</td>
			          		          <td>
			          		          	<a href="tel:09219587042"><button className="bg-danger p-1 text-light w-100 border">Book&nbsp;Now</button></a>
			          		          </td>
			          		          <td>
			          		          	<p><a href="https://www.gcash.com" target="_blank"  className="gcash">G-Cash</a> | Cash</p>
			          		          </td>
			          		          <td>
			          		          	<p>5am - 6pm</p>
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
			          		          <td>Lape Modesto</td>
			          		          <td>09224061800</td>
			          		          <td>
			          		          	<a href="tel:09224061800"><button className="bg-danger p-1 text-light w-100 border">Book&nbsp;Now</button></a>
			          		          </td>
			          		          <td>
			          		          	<p><a href="https://www.gcash.com" target="_blank"  className="gcash">G-Cash</a> | Cash</p>
			          		          </td>
			          		          <td>
			          		          	<p>5am - 6pm</p>
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