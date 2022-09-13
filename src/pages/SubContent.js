export default function SubContent(){

	return(
		<>	
			<button className="tablink" onclick="openCity('London', this, 'red')" id="defaultOpen">Drivers</button>
			<button className="tablink" onclick="openCity('Paris', this, 'green')">Industry</button>
			<button className="tablink" onclick="openCity('Tokyo', this, 'blue')">Merchant</button>
			<button className="tablink" onclick="openCity('Oslo', this, 'orange')">Consumer</button>
		</>
		)
}