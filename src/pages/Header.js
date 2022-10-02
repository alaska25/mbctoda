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
                                    alt="Third slide" fluid
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={img3}
                                    alt="Third slide" fluid
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={img2}
                                    alt="Third slide" fluid
                                />
                            </Carousel.Item>
                       </Carousel>
                 
           

          </>
		            	
		)
}