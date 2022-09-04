import {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {UserProvider} from "./UserContext";
import './App.css';
import AppNavbar from "./components/AppNavbar";
import AboutUs from "./pages/AboutUs";
import AdminDashboard from "./pages/AdminDashboard";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import AddMember from "./pages/AddMember";
import MemberList from "./pages/MemberList";
import Register from "./pages/Register";
import Services from "./pages/Services";
import TermPolicies from "./pages/TermPolicies";
import AddService from "./pages/AddService";
import ActiveDrivers from "./pages/ActiveDrivers";


function App() {

  // To store the user information and will be used for validating if a user is already logged in on the app or not.
  const [user, setUser] = useState({
    // email: localStorage.getItem("email")
    id: null,
    isAdmin: null
  })

  // We can check the changes in our User State.
  console.log(user);


  //Function for clearing local storage on logout.
    const unsetUser = () =>{
      localStorage.clear();
    }

    useEffect(()=>{
      console.log(user);
      console.log(localStorage);

      //user act as dependency
    }, [user])


  // To update the User State upon page load if a user already exist.
  useEffect(()=>{
    fetch(`${process.env.REACT_APP_API_URL}/users/details`,{
      headers:{
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data)

      // Set the user states values with the user details upon successful login.
      if(typeof data._id !== "undefined"){

         //This will be set to the user state.
        setUser({
          id: data._id,
          isAdmin: data.isAdmin
        })
      }
      else{
        // set back to the initial state of the user.
        // Undefined
        setUser({
          id: null,
          isAdmin: null
        })
      }
     
    })
  }, [])



  return (
    <>
      <UserProvider value={{user, setUser, unsetUser}}>
          <Router>

            <AppNavbar />

                <Routes>

                    <Route exact path ="/" element={<Home />} />
                    <Route exact path ="/aboutus" element={<AboutUs />} />
                    <Route exact path ="/contact" element={<Contact />} />
                    <Route exact path ="/dashboard" element={<Dashboard />} />
                    <Route exact path ="/login" element={<Login />} />
                    <Route exact path ="/logout" element={<Logout />} />
                    <Route exact path ="/addmember" element={<AddMember />} />
                    <Route exact path ="/memberlist" element={<MemberList />} />
                    <Route exact path ="/register" element={<Register />} />
                    <Route exact path ="/admindashboard" element={<AdminDashboard />} />
                    <Route exact path ="/services" element={<Services />} />
                    <Route exact path ="/term-policies" element={<TermPolicies />} />
                    <Route exact path ="/add-service" element={<AddService />} />
                    <Route exact path ="/active-driver" element={<ActiveDrivers />} />
                    
                </Routes>


          </Router>
      </UserProvider>
    </> 
  );
}

export default App;
