import { Card, Button, Collapse } from "react-bootstrap";
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import { faPhone, faArrowLeft, faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img10 from "./images/book.png"
import img11 from "./images/3star.png"
import img12 from "./images/4star.png"
export default function LamintakNorte(){
	const [open, setOpen] = useState(false);
	return(
			<>
			      <Button
			        onClick={() => setOpen(!open)}
			        aria-controls="example-collapse-text"
			        aria-expanded={open}
			        className="w-100 rounded-0 square square border-top text-start bg-primary"
			      >
			        Lamintak Norte
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
			          		        </tr>
			          		      </thead>
			          		      <tbody>
			          		        <tr>
			          		          <td>1</td>
			          		          <td>Rolando Cabagte</td>
			          		          <td>09319196196</td>
			          		          <td><a href="tel:09319196196"><img src={img10} width="100" fluid/></a></td>
			          		        </tr>
			          		        <tr>
			          		          <td>2</td>
			          		          <td>Paulino Ursonal</td>
			          		          <td>09511347137</td>
			          		          <td><a href="tel:09511347137"><img src={img10} width="100" fluid/></a></td>
			          		        </tr>
			          		        <tr>
			          		          <td>3</td>
			          		          <td>Fred Cortes</td>
			          		          <td>09973853491</td>
			          		          <td><a href="tel:09973853491"><img src={img10} width="100" fluid/></a></td>
			          		        </tr>
			          		        <tr>
			          		          <td>4</td>
			          		          <td>Dario Yuson</td>
			          		          <td>09551578464</td>
			          		          <td><a href="tel:09551578464"><img src={img10} width="100" fluid/></a></td>
			          		        </tr>

			          		      </tbody>
			          		    </Table>
			        </div>
			        </div>
			      </Collapse>
			</>
		)
}