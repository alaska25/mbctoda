import Banner from "../components/Banner";
import Highlights from "../components/Highlights";
import Content from "../components/Content";
import Footer from "../components/Footer";

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
		<Content />
		<Footer />
	</div>
	</>
 		
 	)
}