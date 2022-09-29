import {Card, CardGroup, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
export default function Services(){
	
	return(
		<>
		<div className="container">
			<h2 className="text-center fw-bold">Our Services Available</h2>
			<div className="d-flex align-items-center justify-content-center">
			         <Button as={Link} to="/MemberList" eventKey="/MemberList" className="m-2 w-100 h-30 b-size">
			         <h3>Book A Ride</h3>
			         <p>MBCToda app is a ride hailing that connects commuters to available drivers.</p>
			         </Button>
			         <Button as={Link} to="/MemberList" eventKey="/MemberList" className="m-2 w-100 h-30">
			         <h3>Buy/Delivery Service</h3>
			         <p> Do you need to buy something? MBCToda drivers will be your personal shoppers.</p>
			         </Button>
			 </div>
		</div>
		</>
		)
}