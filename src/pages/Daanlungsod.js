import { Card, Button, Collapse } from "react-bootstrap";
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import { faPhone, faArrowLeft, faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Daanlungsod(){
	const [open, setOpen] = useState(false);
	return(
			<>
			      <Button
			        onClick={() => setOpen(!open)}
			        aria-controls="example-collapse-text"
			        aria-expanded={open}
			        className="w-100 rounded-0 square square border-top text-start bg-primary"
			      >
			        Daanlungsod
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
			          		          <td>Ben Baring</td>
			          		          <td>09261263719</td>
			          		          <td><a href="tel:09261263719"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			          		           <td><img src="./images/4star.png" alt="ratings" className="img-fluid"/></td>
			          		        </tr>
			          		        <tr>
			          		          <td>002</td>
			          		          <td>Marvin Baring</td>
			          		          <td>09222090957</td>
			          		          <td><a href="tel:09222090957"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			          		           <td><img src="./images/4star.png" alt="ratings" className="img-fluid"/></td>
			          		        </tr>
			          		        <tr>
			          		          <td>003</td>
			          		          <td>Amando Villegas</td>
			          		          <td>09324711214</td>
			          		          <td><a href="tel:09324711214"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			          		           <td><img src="./images/4star.png" alt="ratings" className="img-fluid"/></td>
			          		        </tr>
			          		        <tr>
			          		          <td>004</td>
			          		          <td>Joselito Chua</td>
			          		          <td>09184789095</td>
			          		          <td><a href="tel:09184789095"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			          		           <td><img src="./images/4star.png" alt="ratings" className="img-fluid"/></td>
			          		        </tr>

			          		      </tbody>
			          		    </Table>
			        </div>
			        </div>
			      </Collapse>
			</>
		)
}