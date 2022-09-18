import Banner from "../components/Banner";
import Highlights from "../components/Highlights";
import Content from "../components/Content";
import SubNavbar from "../pages/SubNavbar";
import Footer from "../components/Footer";

export default function Home(){
	const data = {
		title: "WE ARE HERE AND HAPPY TO SERVE YOU !",
		content: "",
		destination: "/MemberList",
		label: ""
	}
	return(
	<>
	<div className="body">
		<div className="container p-3">
			<Highlights />		
		</div>
		<Banner data = {data} />
		<SubNavbar />
		<Content />
		<Footer />
	</div>
	</>
 		
 	)
}