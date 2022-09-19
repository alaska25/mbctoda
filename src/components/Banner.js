import {Row, Col, Button, Container, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function Banner(){
	return(
    <>

       	<div className="container-fluid banner">
	       <Col className="p-5 text-center">
					<h2 className="text-light fw-bold">Making your everyday better. </h2>
					<p></p>
					<Button as={Link} to="/MemberList" eventKey="/MemberList">Book Now</Button>
	       </Col>
    	</div>	
	</>
	)
}
