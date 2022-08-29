import Banner from "../components/Banner";
import Highlights from "../components/Highlights";
import Content from "../components/Content";
import SubFooter from "../components/SubFooter";
import Footer from "../components/Footer";

export default function Home(){
	const data = {
		title: "We are here to serve you, despite this time of pandemic",
		content: "",
		destination: "/register",
		label: ""
	}
	return(
	<>
		<Banner data = {data} />
		<div className="container">
			<Highlights />		
		</div><br/>
		<Content />
		<SubFooter />
		<Footer />
	</>
 		
 	)
}