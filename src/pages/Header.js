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
                                    src="https://realestate.jcg.services/wp-content/uploads/2020/11/Barangay-Poblacion-Medellin.Map_.png"
                                    alt="Second slide" img-fluid
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://realestate.jcg.services/wp-content/uploads/2020/11/Barangay-Poblacion-Medellin.Map_.png"
                                    alt="Third slide" img-fluid
                                />
                            </Carousel.Item>
                       </Carousel>
                 
           

          </>
		            	
		)
}