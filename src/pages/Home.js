import Banner from "../components/Banner";
import Highlights from "../components/Highlights";
import Content from "../components/Content";
import SubFooter from "../components/SubFooter";
import Footer from "../components/Footer";

export default function Home(){
	const data = {
		title: "This Web is under construction!",
		content: "Please come back later",
		destination: "/register",
		label: ""
	}
	return(
	<>
		<Banner data = {data} />
		
	</>
 		
 	)
}