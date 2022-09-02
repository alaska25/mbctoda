import { useState, useEffect, useContext } from 'react';
import { Navigate, Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserContext from '../UserContext';
import { Form, Button, Container } from 'react-bootstrap';

export default function AddMember() {

	const {user} = useContext(UserContext);

	const navigate = useNavigate();

	// State hooks to store the values of the input fields
	const [imageURL, setImageURL] = useState('');
	const [firstname, setFirstName] = useState('');
	const [lastname, setLastName] = useState('');
	const [description, setDescription] = useState('');
	const [address, setAddress] = useState('');
	const [licenseNumber, setLicenseNumber] = useState('');

    // State to determine whether submit button is enabled or not
    const [isActive, setIsActive] = useState(false);

    // This function will be trigger upon clicking the Save button, and will save the new course in the database
	function addMember(e) {

		// Prevents page redirection via form submission
	    e.preventDefault();

	    fetch(`${process.env.REACT_APP_API_URL}/products/`, {
	    	method: "POST",
	    	headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify({
				imageURL: imageURL,
			    firstname: firstname,
			    lastname: lastname,
			    address: address,  
			    licenseNumber: licenseNumber

			})
	    })
	    .then(res => res.json())
	    .then(data => {
	    	console.log(data);

	    	if(data){
	    		Swal.fire({
	    		    title: "Product succesfully Added",
	    		    icon: "success",
	    		    text: `${firstname} is now added`
	    		});

	    		navigate("/admin");
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
	    setImageURL('');
	    setFirstName('');
	    setLastName('');
	    setDescription(''); 
	    setAddress('');   
	    setLicenseNumber('');

	}

	// Submit button validation
	useEffect(() => {

        // Validation to enable submit button when all fields are populated and set a price and stock greater than zero.
        if(imageURL !== "" && firstname !== "" && lastname !== "" && description !== "" && address !== "" &&licenseNumber !== "" ){
            setIsActive(true);
        } else {
            setIsActive(false);
        }

    }, [imageURL, firstname, lastname, address, licenseNumber]);

    return (
    	user.isAdmin
    	?
			<>
			 <Container className="mt-5 pt-4">
		    	<h1 className="my-5 text-center fw-bold">Add New Driver</h1>
		        <Form onSubmit={(e) => addMember(e)}>
    	        	<Form.Group controlId="imageURL" className="mb-3">
    	                <Form.Label>Image URL</Form.Label>
    	                <Form.Control 
    		                type="text" 
    		                placeholder="Image URL" 
    		                value = {imageURL}
    		                onChange={e => setImageURL(e.target.value)}
    		                required
    	                />
    	            </Form.Group>

		        	<Form.Group controlId="name" className="mb-3">
		                <Form.Label>Driver First Name</Form.Label>
		                <Form.Control 
			                type="text" 
			                placeholder="Enter Driver First Name" 
			                value = {firstname}
			                onChange={e => setFirstName(e.target.value)}
			                required
		                />
		            </Form.Group>

		            <Form.Group controlId="description" className="mb-3">
		                <Form.Label>Driver Last Name</Form.Label>
		                <Form.Control 
			                type="text" 
			                placeholder="Enter Driver Last Name" 
			                value = {lastname}
			                onChange={e => setLastName(e.target.value)}
			                required
		                />
		            </Form.Group>

                    <Form.Group controlId="stocks" className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control 
        	                type="text" 
        	                placeholder="Enter Driver Address" 
        	                value = {address}
        	                onChange={e => setAddress(e.target.value)}
        	                required
                        />
                    </Form.Group>

		            <Form.Group controlId="price" className="mb-3">
		                <Form.Label>License Number</Form.Label>
		                <Form.Control 
			                type="text" 
			                placeholder="Enter License Number" 
			                value = {licenseNumber}
			                onChange={e => setLicenseNumber(e.target.value)}
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
    	    <Navigate to="/products" />
	    	
    )

}
