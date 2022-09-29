import {Card, CardGroup, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
export default function Services(){
	
	return(
		<>
		<div className="container">
			<h1 className="text-center fw-bold">Our Services Available</h1>
			<div className="d-flex align-items-center justify-content-center">
			         <Button as={Link} to="/MemberList" eventKey="/MemberList" className="m-2 w-100 h-30 b-size">
			         <h2>Book A Ride</h2>
			         <p>MBCToda app is a ride hailing that connects commuters to available drivers.</p>
			         </Button>
			         <Button as={Link} to="/MemberList" eventKey="/MemberList" className="m-2 w-100 h-30">
			         <h2>Buy/Delivery Service</h2>
			         <p> Do you need to buy something? MBCToda drivers will be your personal shoppers.</p>
			         </Button>
			 </div>
		</div>
		</>
		)
}