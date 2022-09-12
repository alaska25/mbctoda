import Banner from "../components/Banner";
import Highlights from "../components/Highlights";
import Content from "../components/Content";
import SubNavbar from "../pages/SubNavbar";
import ContentSection from "../pages/ContentSection";
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
		<div className="container p-3">
			<Highlights />		
		</div>
		<Banner data = {data} />
		<ContentSection />
		<SubNavbar />
		<Content />
		<Footer />
	</>
 		
 	)
}