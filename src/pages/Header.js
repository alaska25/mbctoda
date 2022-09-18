import { Carousel } from "react-bootstrap";
export default function Header() {
	return(
		<>	
           <div className="container-fluid ">
               <div className="row">
               <div className="col-sm-12">
                   <h2 className="fw-bold text-center text-light">WELCOME TO OUR WEBSITE</h2>
               </div><br/>
                   <div className="col-12">
                       <Carousel>

                           <Carousel.Item>
                               <img
                                   className="d-block w-100"
                                   src="https://i.ytimg.com/vi/QodsJPQNHNs/maxresdefault.jpg"
                                   alt="First slide"
                               />
                               <Carousel.Caption>
                                   <h3></h3>
                                   <p></p>
                               </Carousel.Caption>
                           </Carousel.Item>

                           <Carousel.Item>
                               <img
                                   className="d-block w-100"
                                   src="https://i.ytimg.com/vi/EdrmjD5j7Mc/maxresdefault.jpg"
                                   alt="Second slide"
                               />

                               <Carousel.Caption>
                                   <h3></h3>
                                   <p></p>
                               </Carousel.Caption>
                           </Carousel.Item>

                       </Carousel>
                   </div>
               </div>
           </div>

          </>
		            	
		)
}