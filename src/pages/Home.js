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
		<div className="container p-3">
			<Highlights />		
		</div>
		<Banner data = {data} />
		<Content />
		<Footer />
	</div>
	</>
 		
 	)
}