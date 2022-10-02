import Banner from "../components/Banner";
import Highlights from "../components/Highlights";
import Content from "../components/Content";
import Footer from "../components/Footer";
import SubContent from "../pages/SubContent";
import AboutUs from "../pages/AboutUs";
import Services from "../pages/Services";

export default function Home(){
	const data = {
		title: "",
		content: "",
		destination: "/MemberList",
		label: ""
	}
	return(
	<>
	<div className="body">	
		<Highlights />		
		<Banner data = {data} />
		<SubContent />
		<AboutUs />
		<hr/>
		<Services />
		<hr/>
		<Content />
		<Footer />
	</div>
	</>
 		
 	)
}