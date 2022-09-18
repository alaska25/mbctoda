import UserContext from "../UserContext";
import {useState, useContext} from "react";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap"; 
import {Link} from "react-router-dom";
import { faHome, faUser, faLocationDot, faAddressBook, faAddressCard, faPhone, faUsers, faGears, facharttreemap, faDashboard, faTableList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AppNavbar(){

	const {user} = useContext(UserContext);

	return(
				    <Navbar collapseOnSelect expand="lg" variant="dark" className="animate-navbar nav-theme justify-content-between bgdark">
	          <Container>
	           	<Navbar.Toggle aria-controls="responsive-navbar-nav" />
	            <Navbar.Collapse id="responsive-navbar-nav">
	              	<Nav className="me-auto" defaultActiveKey="/">
	              	<Nav.Link as={Link} to="/" eventKey="/"><FontAwesomeIcon icon={faLocationDot} className="ms-1"></FontAwesomeIcon><strong><a className="text-danger text ms-1">MBCT</a><a className="text-warning text">oda</a></strong></Nav.Link>
	              	
	           	</Nav>
	            <Nav className="text-center">
	            	<Nav.Link as={Link} to="/" eventKey="/" className="nav-theme" active><FontAwesomeIcon icon={faHome} className="ms-1"></FontAwesomeIcon>&nbsp;Home </Nav.Link>
	            	<Nav.Link as={Link} to="/aboutus" eventKey="/aboutus"><FontAwesomeIcon icon={faUsers} className="ms-1"></FontAwesomeIcon>&nbsp;About Us</Nav.Link>
	              	{
	              		(user.isAdmin)
	              			? 
	              			
			              		<Nav.Link as={Link} to="/admindashboard" eventKey="/admindashboard" active ><FontAwesomeIcon icon={faDashboard} className="ms-1"></FontAwesomeIcon>&nbsp;AdminDashboard</Nav.Link>            
			              	: 
				              	<Nav.Link as={Link} to="/services" eventKey="/services"><FontAwesomeIcon icon={faGears} className="ms-1"></FontAwesomeIcon>&nbsp;Services</Nav.Link>
				        
	              	}
	              	
	                {	
	                (user.id !== null)
	                    ?
	                    <>
	                   		<Nav.Link as={Link} to="/memberlist" eventKey="/memberlist"><FontAwesomeIcon icon={faTableList} className="ms-1"></FontAwesomeIcon>&nbsp;Member List </Nav.Link>
	                    	<Nav.Link as={Link} to="/logout" eventKey="/logout">Logout</Nav.Link>	
	                    </>                
	                    : 
		                		<>	
		                			<Nav.Link as={Link} to="/contact" eventKey="/contact"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon>&nbsp;Contact Us</Nav.Link>
		                			<Nav.Link as={Link} to="/login" eventKey="/login"><FontAwesomeIcon icon={faUser} className="ms-1"></FontAwesomeIcon>&nbsp;Login</Nav.Link>
		                			         	
		                	  </>
	                }

	            </Nav>
	            </Navbar.Collapse>
	          </Container>
	        </Navbar>
		)

}

