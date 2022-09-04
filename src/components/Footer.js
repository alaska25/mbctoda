import {Navbar, Container} from "react-bootstrap";

export default function Footer(){

	return(
		<div className="container-fluid p-4 text-center flex bg-dark text-light" >	
	          	<div>
	            	<span className="footer"><a href="">Terms and Policies</a> | <a href="">Privacy Notice</a> </span> <br/><br/>
	            	<span> &copy;&nbsp;<strong>MBCToda</strong> 2018 - 2022.</span>
	          	</div>
		</div>


	)
}