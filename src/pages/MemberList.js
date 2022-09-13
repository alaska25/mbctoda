import Table from 'react-bootstrap/Table';
export default function MemberList(){
	return(
	<>
		<div className="container">
		<h2 className="text-center mt-2">Members List</h2>
	    <Table striped bordered hover className="text-center mt-3">
			      <thead className="mt-5">
			        <tr>
			          <th>User Id</th>
			          <th>First Name</th>
			          <th>Last Name</th>
			          <th>Address</th>
			        </tr>
			      </thead>
			      <tbody>
			        <tr>
			          <td>0001</td>
			          <td>Ben</td>
			          <td>Baring</td>
			          <td>Poblacion, Medellin, Cebu</td>
			        </tr>
			      </tbody>
			    </Table>
		</div>
	</>

		)
}