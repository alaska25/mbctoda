import { Navbar, Container, Nav } from "react-bootstrap";
import {Link} from "react-router-dom";
import { faCheck, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function SubFooter(){

	return(
	<>
		<footer className="container-fluid footer subfooter">
		  <div className="container text-light">
		    <div className="row">
		      <div className="col-sm-3">
		        <div className="footer-widget">
		        <div className="p-1">
		          <h3 className="space"><FontAwesomeIcon icon={faLocationDot} className="ms-1"></FontAwesomeIcon><a className="text-danger text ms-1">MBCT</a><a className="text-warning text">oda</a></h3>
		          	<p>We deliver passenger to each destination with love.</p>
		          	<p>Send Email:&nbsp;<a href="mailto:mbctoda@gmail.com">mbctoda@gmail.com</a></p>
		        </div>
		          <div className="footer-widget-content">
		            <div className="footer-social">
		            	<ul className="image text-center">
		              		<li><a href="#"><img src="./images/facebook.png"/></a></li>
		              		<li><a href="#"><img src="./images/twitter.png"/></a></li>
		              		<li><a href="#"><img src="./images/youtube.png"/></a></li>
		            	</ul>
		            </div>
		          </div>
		        </div>
		      </div>
		      <div className="col-sm-3">
		      <div className="footer-widget">
		        <div className="p-1">
		          <h3 className="space">Latest Events</h3>
		        </div>
		        <div className="footer-widget-content">
		              <div className="open-time ">
		                <ul className="opening-time">
		                  <li><span><FontAwesomeIcon icon={faCheck} className="ms-1"></FontAwesomeIcon></span><a href="#"><strong>July 30, 2022</strong></a></li>
		                  <li><span><FontAwesomeIcon icon={faCheck} className="ms-1"></FontAwesomeIcon></span><a href="#"><strong>August 27, 2022</strong></a></li>
		                </ul>
		              </div>
		          <div className="media">        
		           </div>
		        </div>
		        </div>
		      </div>
		      <div className="col-sm-3">
		      <div className="footer-widget">
		        <div className="p-1">
		          <h3 className="space">Opening Hours</h3>
		        </div>
		        <div className="footer-widget-content">
		        <div className="open-time ">
		          <ul className="opening-time">
		            <li><span><FontAwesomeIcon icon={faCheck} className="ms-1"></FontAwesomeIcon></span><p><strong>Monday - Friday :</strong> 6am - 6pm</p></li>
		            <li><span><FontAwesomeIcon icon={faCheck} className="ms-1"></FontAwesomeIcon></span><p><strong>Saturday :</strong> 6am - 12pm</p></li>
		            <li><span><FontAwesomeIcon icon={faCheck} className="ms-1"></FontAwesomeIcon></span><p><strong>Sunday :</strong> Closed </p></li>
		          </ul>
		        </div>
		        </div>
		        </div>
		        </div>
		      
		      <div className="col-sm-3">
		      <div className="footer-widget">
		        <div className="p-1">
		          <h3 className="space">Address</h3>
		        </div>
		        <div className="footer-widget-content">
		            <ul className="opening-time">
		              <li>Poblacion, Medellin, Cebu <br/> Philippines, 6012</li>
		            </ul>
		        </div>
		        </div>
		      </div>
		    </div>
		  </div><br/>
		</footer>
		<div className="p-4 bgdark">
		<hr/>	
				<Nav.Link>
		        		<p className="text-muted text-center"> &copy;&nbsp;<strong>MBCToda</strong> 2018 - 2022.</p>
		        </Nav.Link>
		</div>
	</>
	)
}