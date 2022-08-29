import UserContext from "../UserContext";
import {useState, useContext} from "react";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap"; 
import {Link} from "react-router-dom";
import { faHome, faUser, faLocationDot, faAddressBook, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AppNavbar(){

	const {user} = useContext(UserContext);

	return(
				    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="animate-navbar nav-theme justify-content-between">
	          <Container>
	           	<Navbar.Toggle aria-controls="responsive-navbar-nav" />
	            <Navbar.Collapse id="responsive-navbar-nav">
	              	<Nav className="me-auto" defaultActiveKey="/">
	              	<Nav.Link as={Link} to="/" eventKey="/"><FontAwesomeIcon icon={faLocationDot} className="ms-1"></FontAwesomeIcon>&nbsp;MBCToda</Nav.Link>
	              	
	           	</Nav>
	            <Nav className="text-center">
	            	<Nav.Link as={Link} to="/" eventKey="/" className="nav-theme" defaultActiveKey><FontAwesomeIcon icon={faHome} className="ms-1"></FontAwesomeIcon>&nbsp;Home </Nav.Link>
	            	
	              	{
	              	(user.isAdmin)
	              			? //if admin is true
			              		<Nav.Link as={Link} to="/admin" eventKey="/admin" active >AdminDashboard</Nav.Link>
			              	: //If not admin
			              	<>
			              		<Nav.Link as={Link} to="/products" eventKey="/products" className="nav-theme"><FontAwesomeIcon icon={faAddressCard} className="ms-1"></FontAwesomeIcon>&nbsp;About Us</Nav.Link>
			              	</>
	              	}

	                {	
	                (user.id !== null)
	                    ?	//true
	                    <>
	                       	<Nav.Link as={Link} to="/products" eventKey="/products">Dashboard</Nav.Link>
	                       	<Nav.Link as={Link} to="/logout" eventKey="/logout">Logout</Nav.Link>
	                    </>
	                       	
	                    :   //false
	                		<>	
	                			<Nav.Link as={Link} to="/register" eventKey="/register"><FontAwesomeIcon icon={faAddressBook} className="ms-1"></FontAwesomeIcon>&nbsp;Contact Us</Nav.Link>
	                			<Nav.Link as={Link} to="/login" eventKey="/login" className="nav-theme"><FontAwesomeIcon icon={faUser} className="ms-1"></FontAwesomeIcon>&nbsp;Login</Nav.Link>

	                        	
	                	  </>
	                }

	                {
	                
                                (user.isAdmin)
                                ?
                                  <Nav.Link as={Link} to="/cartview" eventKey="/cartview"> </Nav.Link>
                                :
                                  <Nav.Link as={Link} to="/cartview" eventKey="/cartview"> {} </Nav.Link>
                                 
                 
	                }

	            </Nav>
	            </Navbar.Collapse>
	          </Container>
	        </Navbar>
		)

}
