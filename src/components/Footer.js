import { Navbar, Container, Nav } from "react-bootstrap";
import {Link} from "react-router-dom";
export default function Footer(){

	return(
		<div className="container-fluid p-4 text-center flex bg-dark text-light" >	
	          	<div className="container">
	            	<span className="footer"><Nav.Link className="text-center" as={Link} to="/term-policies" eventKey="/term-policies" >Terms & Privacy Policy</Nav.Link></span><br/>
	            	<span className="text-muted"> &copy;&nbsp;<strong>MBCToda</strong> 2018 - 2022.</span>
	          	</div>
		</div>


	)
}