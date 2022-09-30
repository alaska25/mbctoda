import image from "react-bootstrap";
import SubContent from "../pages/SubContent";
import AboutUs from "../pages/AboutUs";
import Services from "../pages/Services";
export default function Content(){
	return(
		<>
		<SubContent />
		<AboutUs />
		<hr/>
		<Services /><br/>
			<div className="text-center text-dark bg-light">
				<div className="container p-3">
					<h3 className="fw-bold">Customer Support 24/7</h3>
					<p>We are real people, we love our work, and we care about helping you. <br/> MBCToda is not your ordinary association. Expect extraordinary support around the clock.</p>
				</div>
		    	<div className="container">
		    		<img src="https://2.bp.blogspot.com/-CzgjimbxOZ8/V7ZXqmMYOhI/AAAAAAAAAHw/-oKsvfG_aKUzqw0IR9gX--SlGfrANSUNgCLcB/s1600/call-center-consulting.jpg" alt="image" className="img-fluid p-1"/>
			    </div>
		    </div>
	    </>


	)
}