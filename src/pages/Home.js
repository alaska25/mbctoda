import Banner from "../components/Banner";
import Highlights from "../components/Highlights";
import Content from "../components/Content";
import SubNavbar from "../pages/SubNavbar";
import Footer from "../components/Footer";

export default function Home(){
	const data = {
		title: "WE ARE HERE TO SERVE YOU AND BOOK A RIDE NOW!",
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
		<SubNavbar />
		<Content />
		<Footer />
	</>
 		
 	)
}