import { Navbar, Container, Nav } from "react-bootstrap";
import {Link} from "react-router-dom";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function SubFooter(){

	return(
	<>
		<footer className="container-fluid footer subfooter">
		  <div className="container text-light">
		    <div className="row">
		      <div className="col-sm-3">
		        <div className="footer-widget">
		          <h3 className="text-center space">Follow Us</h3>
		          <hr/>
		          <div className="footer-widget-content">
		            <div className="footer-social">
		            	<ul>
		              		<li><a href="#">Facebook</a></li>
		              		<li><a href="#">Twitter</a></li>
		              		<li><a href="#">Telegram</a></li>
		              		<li><a href="#">Youtube</a></li>
		            	</ul>
		            </div>
		          </div>
		        </div>
		      </div>
		      <div className
		      ="col-sm-3">
		      <div className
		      ="footer-widget">
		        <h3 className="text-center space">Latest Events</h3>
		        <hr/>
		        <div className="footer-widget-content">
		          <div className="media">
		              <div className="media-body">
		                 <span>July 30, 2022</span>
		                 <a href="#">Click here </a>
		              </div>
		              <div className="media-body">
		                 <span>August 27, 2022</span>
		                 <a href="#">Click here </a>
		              </div>
		           </div>
		          <div className="media">
		              
		             
		           </div>
		        </div>
		        </div>
		      </div>
		      <div className
		      ="col-sm-3">
		      <div className
		      ="footer-widget">
		        <h3 className="text-center space">Opening Hour</h3>
		        <hr/>
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
		        <h3 className="text-center space">Upcoming Events</h3>
		        <hr/>
		        <div className="footer-widget-content">
		          <div className="images-gellary">
		            <ul>
		              <li>Next Meeting Schedule:</li>
		              <p>September 24, 2022</p>
		            </ul>
		          </div>
		        </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</footer>
		<div className="p-4 bgdark">	
				<Nav.Link>
		        		<p className="text-muted text-center"> &copy;&nbsp;<strong>MBCToda</strong> 2018 - 2022.</p>
		        </Nav.Link>
		</div>
	</>
	)
}