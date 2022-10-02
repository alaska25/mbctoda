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
                                    src={img4}
                                    alt="First slide" img-fluid
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={img3}
                                    alt="Second slide" img-fluid
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={img2}
                                    alt="Third slide" img-fluid
                                />
                            </Carousel.Item>
                       </Carousel>
                 
           

          </>
		            	
		)
}