import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap"; 
export default function SubContent(){

	return(
		<>	
			<button className="tablink"><Nav.Link as={Link} to="/MemberList" eventKey="/MemberList" className="fw-bold">Book A Ride</Nav.Link>
			</button>
		</>
		)
}