import {Row, Col, Button, Container, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function Banner({data}){
	console.log(data);

	// Destructuring refer to errorjs
	const {title, content, destination, label} = data;

	return(
    <>

       	<div className="container-fluid banner">
	            	

	       <Col className="p-5 text-center">
					<h3 className="text-warning fw-bold">{title}</h3>
					<p className="text-dark fw-bold">{content}</p>
					<Button as={Link} to="/MemberList" eventKey="/MemberList">BOOK NOW</Button>
	       </Col>
    	</div>	
	</>
	)
}
