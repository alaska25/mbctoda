import { Carousel } from "react-bootstrap";
export default function Header() {
	return(
		<>	
          
               
                       <Carousel>
                           
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://img.freepik.com/premium-vector/online-food-delivery-service-your-home-fast-delivery-by-courier-tracking-your-order-through-mobile-application-map-street-city-route-time-stopwatch-menu-app-phone-vector-illustration_608021-1434.jpg?w=1060"
                                    alt="Third slide" img-fluid
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://img.freepik.com/premium-vector/online-home-delivery-service-drone-delivering-package-food-tracking-location-order-map-future-technologies-home-courier-route-bank-card-vector-illustration_608021-1426.jpg?w=1060"
                                    alt="Third slide" img-fluid
                                />
                            </Carousel.Item>
                       </Carousel>
                 
           

          </>
		            	
		)
}