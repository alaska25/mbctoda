import { Card, Button, Collapse } from "react-bootstrap";
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import { faPhone, faArrowLeft, faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img10 from "./images/book.png"
import img11 from "./images/3star.png"
import img12 from "./images/4star.png"
export default function Polambato(){
	const [open, setOpen] = useState(false);
	return(
			<>
			      <Button
			        onClick={() => setOpen(!open)}
			        aria-controls="example-collapse-text"
			        aria-expanded={open}
			        className="w-100 rounded-0 square square border-top text-start bg-primary"
			      >
			        Polambato
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
			          		          <th>Contact No.</th>
			          		          <th>Action</th>
			          		        </tr>
			          		      </thead>
			          		      <tbody>
			          		        <tr>
			          		          <td>001</td>
			          		          <td>Unknown</td>
			          		          <td>09000000000</td>
			          		          <td><a href="tel:09065549009"><button className="bg-danger p-1 text-light w-100 border">Book&nbsp;Now</button></a></td>
			          		        </tr>

			          		      </tbody>
			          		    </Table>
			        </div>
			        </div>
			      </Collapse>
			</>
		)
}