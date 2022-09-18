import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
export default function MemberList(){
	return(
	<>
		<div className="container">
		<Button as={Link} to="/" eventKey="/" className="mt-2">Back To Home</Button>
		<h2 className="text-center mt-2 fw-bold text-danger">Registered Driver's</h2>
	    <Table striped bordered hover className="text-center mt-3">
			      <thead className="mt-5">
			        <tr className="text-primary">
			          <th>User Id</th>
			          <th>Complete Name</th>
			          <th>Contact Number</th>
			        </tr>
			      </thead>
			      <tbody>
			        <tr>
			          <td>0001</td>
			          <td>Ben Baring</td>
			          <td>09000000000</td>
			        </tr>
			      </tbody>
			    </Table>
		</div>
	</>

		)
}