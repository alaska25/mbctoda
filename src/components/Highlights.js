import {Row, Col, Button, Container, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
export default function Highlights(){
	return(
		       	<div className="container-fluid bg-image">
			            	
					            <Carousel>
								      <Carousel.Item>
								       <Col className="p-5 text-center">
						       				<h1 className="text-success fw-bold carousel1"></h1>
						       				
								       </Col>
								      </Carousel.Item>
								      <Carousel.Item>
								        <Col className="p-5 text-center">
					        				<h1 className="text-success fw-bold carousel1"></h1>
					        				
								        </Col>

								      </Carousel.Item>
								      <Carousel.Item>
								        <Col className="p-5 text-center">
					        				
					        				<h1 className="text-success fw-bold carousel1"></h1>
								        </Col>
								      </Carousel.Item>
								</Carousel>

			    </div>	
		)
}