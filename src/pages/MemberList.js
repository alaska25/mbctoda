import Table from 'react-bootstrap/Table';
export default function MemberList(){
	return(
		<div className="container">
		<h2 className="text-center mt-2">Members List</h2>
	    <Table striped bordered hover className="text-center mt-3">
			      <thead className="mt-5">
			        <tr>
			          <th>User Id</th>
			          <th>First Name</th>
			          <th>Last Name</th>
			          <th>Address</th>
			          <th>License #</th>
			        </tr>
			      </thead>
			      <tbody>
			        <tr>
			          <td>1</td>
			          <td>Ben</td>
			          <td>Baring</td>
			          <td>Poblacion, Medellin, Cebu</td>
			          <td>00000000</td>
			        </tr>
			        <tr>
			          <td>2</td>
			          <td>Arman</td>
			          <td>Villegas</td>
			          <td>Lamintak Norte, Medellin, Cebu</td>
			          <td>00000000</td>
			        </tr>
			      </tbody>
			    </Table>
		</div>
			

		)
}