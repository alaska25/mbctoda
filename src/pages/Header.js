import { Carousel } from "react-bootstrap";
export default function Header() {
	return(
		<>	
           <div className="container-fluid ">
               <div className="row">
               <div className="col-sm-12">
                   <h1 className="fw-bold text-center text-light">WELCOME TO MBCTODA</h1>
               </div><br/>
                   <div className="col-12">
                       <Carousel>
                           
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://img.freepik.com/premium-vector/online-food-delivery-service-your-home-ordering-food-delivery-through-mobile-application-tracking-location-order-online-payment-via-phone-bank-card-time-vector-illustration_608021-1406.jpg?w=1060"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://img.freepik.com/premium-vector/online-food-delivery-service-your-home-order-food-delivery-through-phone-app-courier-electric-scooter-map-route-hand-phone-app-eat-menu-timer-stopwatch-vector-illustration_608021-1414.jpg?w=1060"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://img.freepik.com/free-vector/people-planning-trip-around-world-they-are-pointing-map-using-app-mobile-phone-travel-vacations-concept_1150-51089.jpg?w=1060&t=st=1663599289~exp=1663599889~hmac=d0a7dc5a7872f4e5bc299cd6f6b8f8383c2c7cd51ffafb1618be08afffec3027"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                       </Carousel>
                   </div>
               </div>
           </div>

          </>
		            	
		)
}