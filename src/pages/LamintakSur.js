import { Card, Button, Collapse } from "react-bootstrap";
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import { faPhone, faArrowLeft, faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img11 from "./images/3star.png"
import img14 from "./images/4star.png"
import img13 from "./images/5star.png"
export default function LamintakSur(){
	const [open, setOpen] = useState(false);
	return(
			<>
			      <Button
			        onClick={() => setOpen(!open)}
			        aria-controls="example-collapse-text"
			        aria-expanded={open}
			        className="w-100 rounded-0 square square border-top text-start bg-primary"
			      >
			        Lamintak - Sur
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
			          		          <td>Joselito Ogatis</td>
			          		          <td>09973369633</td>
			          		          <td><a href="tel:09973369633"><button className="bg-danger p-1 text-light w-100 border">Book&nbsp;Now</button></a></td>
			          		          <td><img src={img13} fluid /></td>
			          		        </tr>
			          		        <tr>
			          		          <td>2</td>
			          		          <td>Guillermo Delarama</td>
			          		          <td>09362614196</td>
			          		          <td><a href="tel:09362614196"><button className="bg-danger p-1 text-light w-100 border">Book&nbsp;Now</button></a></td>
			          		          <td><img src={img13} fluid /></td>
			          		        </tr>
			          		        <tr>
			          		          <td>3</td>
			          		          <td>Jaime Otid</td>
			          		          <td>09065549009</td>
			          		          <td><a href="tel:09065549009"><button className="bg-danger p-1 text-light w-100 border">Book&nbsp;Now</button></a></td>
			          		          <td><img src={img13} fluid /></td>
			          		        </tr>

			          		      </tbody>
			          		    </Table>
			        </div>
			        </div>
			      </Collapse>
			</>
		)
}