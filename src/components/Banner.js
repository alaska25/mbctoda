import {Row, Col, Button, Container, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function Banner({data}){
	// Destructuring refer to errorjs
	const {title, content, destination, label} = data;

	return(
    <>

       	
	       <Col className="p-3 text-center">
					<h2 className="text-light fw-bold h2">We're making your everyday better.</h2>
					<p></p>
					<Button as={Link} to="/MemberList" eventKey="/MemberList">Book Now</Button>
	       </Col>
    		
	</>
	)
}
