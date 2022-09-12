import { useState, useEffect, useContext } from 'react';
import { Navigate, Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserContext from '../UserContext';
import { Form, Button, Container } from 'react-bootstrap';

export default function AddMember() {

	const {user} = useContext(UserContext);

	const navigate = useNavigate();

	// State hooks to store the values of the input fields
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [address, setAddress] = useState('');
	const [mobileNo, setMobileNo] = useState('');

    // State to determine whether submit button is enabled or not
    const [isActive, setIsActive] = useState(false);

    // This function will be trigger upon clicking the Save button, and will save the new course in the database
	function addMember(e) {

		// Prevents page redirection via form submission
	    e.preventDefault();

	    fetch(`${process.env.REACT_APP_API_URL}/users/addMember/`, {
	    	method: "POST",
	    	headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify({
			    firstName: firstName,
			    lastName: lastName,
			    address: address,
			    mobileNo: mobileNo
			})
	    })
	    .then(res => res.json())
	    .then(data => {
	    	console.log(data);

	    	if(data){
	    		Swal.fire({
	    		    title: "Member succesfully Added",
	    		    icon: "success",
	    		    text: `${firstName} is now added`
	    		});

	    		navigate("/admindashboard");
	    	}
	    	else{
	    		Swal.fire({
	    		    title: "Error!",
	    		    icon: "error",
	    		    text: `Something went wrong. Please try again later!`
	    		});
	    	}

	    })

	    // Clear input fields
	    setFirstName('');
	    setLastName('');
	    setAddress('');   
	    setMobileNo('');

	}

	// Submit button validation
	useEffect(() => {

        // Validation to enable submit button when all fields are populated and set a price and stock greater than zero.
        if(firstName !== "" && lastName !== "" && address !== "" && mobileNo !== "" ){
            setIsActive(true);
        } else {
            setIsActive(false);
        }

    }, [firstName, lastName, address, mobileNo]);

    return (
    	user.isAdmin
    	?
			<>
			 <Container className="mt-5 pt-4">
		    	<h1 className="my-5 text-center fw-bold">Add New Driver</h1>
		        <Form onSubmit={(e) => addMember(e)}>
		        	<Form.Group controlId="name" className="mb-3">
		                <Form.Label>First Name</Form.Label>
		                <Form.Control 
			                type="text" 
			                placeholder="Enter First Name" 
			                value = {firstName}
			                onChange={e => setFirstName(e.target.value)}
			                required
		                />
		            </Form.Group>

		            <Form.Group controlId="description" className="mb-3">
		                <Form.Label>Last Name</Form.Label>
		                <Form.Control 
			                type="text" 
			                placeholder="Enter Last Name" 
			                value = {lastName}
			                onChange={e => setLastName(e.target.value)}
			                required
		                />
		            </Form.Group>

                    <Form.Group controlId="stocks" className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control 
        	                type="text" 
        	                placeholder="Enter Address" 
        	                value = {address}
        	                onChange={e => setAddress(e.target.value)}
        	                required
                        />
                    </Form.Group>

		            <Form.Group controlId="price" className="mb-3">
		                <Form.Label>Mobile Number</Form.Label>
		                <Form.Control 
			                type="text" 
			                placeholder="Mobile Number" 
			                value = {mobileNo}
			                onChange={e => setMobileNo(e.target.value)}
			                required
		                />
		            </Form.Group>

		            {/* conditionally render submit button based on isActive state */}
	        	    { isActive 
	        	    	? 
	        	    	<Button variant="primary" type="submit" id="submitBtn">
	        	    		Save
	        	    	</Button>
	        	        : 
	        	        <Button variant="danger" type="submit" id="submitBtn" disabled>
	        	        	Save
	        	        </Button>
	        	    }
	        	    	<Button className="m-2" as={Link} to="/admindashboard" variant="success" type="submit" id="submitBtn">
	        	    		Cancel
	        	    	</Button>
		        </Form>
		    </Container>
	    	</>
    	:
    	    <Navigate to="/services" />
	    	
    )

}
