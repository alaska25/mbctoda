
export default function ContentSection(){
	const data = {
		title: "We are here to serve you, despite this time of pandemic",
		content: "",
		destination: "/register",
		label: ""
	}
	return(
	<>
		<div className="bgdark container-fluid">
			<div className="submenu container fw-bold">
			  <a href="http://localhost:3000/memberlist" Active>Driver</a>
			  <a href="#news">Merchant</a>
			  <a href="#contact">Consumer</a>
			</div>
		</div>
	</>
		)
}