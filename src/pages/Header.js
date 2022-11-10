import { Carousel } from "react-bootstrap";
import img2 from "./images/pc1.png";
import img3 from "./images/pc2.png";
import img4 from "./images/pc3.png";
import img5 from "./images/map.png";
import img6 from "./images/map_2.png";
import img7 from "./images/map_3.png";
import img8 from "./images/map_4.png";
export default function Header() {
	return(
		<>	
          
               
                       <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 card-image"
                                    src={img4}
                                    alt="Third slide" img-fluid
                                />
                            </Carousel.Item>
                            
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 card-image"
                                    src={img3}
                                    alt="Third slide" img-fluid
                                />
                            </Carousel.Item>

                       </Carousel>
                 
           

          </>
		            	
		)
}