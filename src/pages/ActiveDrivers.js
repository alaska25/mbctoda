import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function ActiveDrivers() {
	return(
		<>
			<div className="container">
			<Button as={Link} to="/admindashboard" className="mt-3" size="sm"> Return Admin Dashboard </Button><br/>
			<h2 className="text-center">Active Drivers</h2>
			    <Table striped bordered hover className="text-center mt-5">
					      <thead className="mt-5">
					        <tr>
					          <th>#</th>
					          <th>First Name</th>
					          <th>Last Name</th>
					          <th>Address</th>
					          <th>License Number</th>
					        </tr>
					      </thead>
					      <tbody>
					        <tr>
					          <td>1</td>
					          <td>Ben</td>
					          <td>Baring</td>
					          <td>Medellin</td>
					          <td>0000000</td>
					        </tr>
					        <tr>
					          <td>2</td>
					          <td>Arman</td>
					          <td>Villegas</td>
					          <td>Medellin</td>
					          <td>0000000</td>
					        </tr>
					      </tbody>
					</Table>
			</div>
		</>
					
		)
}