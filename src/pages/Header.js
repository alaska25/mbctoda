import { Carousel } from "react-bootstrap";
import img2 from "./images/pc1.png";
import img3 from "./images/pc2.png";
import img4 from "./images/pc3.png";
export default function Header() {
	return(
		<>	
          
               
                       <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://img.freepik.com/premium-vector/fast-online-delivery-service-package-bedroom-home-by-courier-smartphone-illustration_176350-32.jpg?w=1380"
                                    alt="Second slide" img-fluid
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://img.freepik.com/premium-vector/fast-delivery-package-by-scooter-mobile-phone-order-package-e-commerce-by-app-tracking-courier-by-map-application-three-dimensional-concept-vector-illustration_176350-3.jpg?w=1380"
                                    alt="Third slide" img-fluid
                                />
                            </Carousel.Item>
                       </Carousel>
                 
           

          </>
		            	
		)
}