export default function SubContent(){

	return(
		<>
	

			<div id="London" className="tabcontent">
			  <h1>London</h1>
			  <p>London is the capital city of England.</p>
			</div>

			<div id="Paris" className="tabcontent">
			  <h1>Paris</h1>
			  <p>Paris is the capital of France.</p> 
			</div>

			<div id="Tokyo" className="tabcontent">
			  <h1>Tokyo</h1>
			  <p>Tokyo is the capital of Japan.</p>
			</div>

			<div id="Oslo" className="tabcontent">
			  <h1>Oslo</h1>
			  <p>Oslo is the capital of Norway.</p>
			</div>

			<button className="tablink" onclick="openCity('London', this, 'red')" id="defaultOpen">Drivers</button>
			<button className="tablink" onclick="openCity('Paris', this, 'green')">Industry</button>
			<button className="tablink" onclick="openCity('Tokyo', this, 'blue')">Merchant</button>
			<button className="tablink" onclick="openCity('Oslo', this, 'orange')">Consumer</button>
		</>
		)
}