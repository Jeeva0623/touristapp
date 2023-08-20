import { useRef ,useEffect} from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
function Login(){
    const mailInput=useRef('mailInput');
    const passInput=useRef("passInput");
    const navigate = useNavigate();
    
    useEffect(()=>{
        let value = localStorage.getItem("login_status");
        if(value !=""&&  value=="1"){
            navigate('/Home ')
        }
    },[]);

    const callApi=()=>{
        
        
        let data ={
            "email":mailInput.current.value,
            "password":passInput.current.value
        }
        fetch("http://localhost:8080/login",{
            "method":"post",
            "headers":{"content-type":"application/json"},
            "body":JSON.stringify(data)

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
             alert(data['message']);
             if(data['message']=='Login succussful'){  
                localStorage.setItem("login_status","1");
                navigate('/Home');
             }
            
        })
       
       

    }

    const handler=(event)=>{
        if(event.keyCode==13){
            callApi()
        }
    }



    return(
        <>
          <div classname="container-fluid position-relative p-0">
        <nav classname="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
            <a href="" classname="navbar-brand p-0">
                <h1 classname="text-primary m-0"><i classname="fa fa-map-marker-alt me-3"></i>Tourist</h1>
                 <img src="img/logo.png" alt="Logo"/>
            </a>
            <button classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span classname="fa fa-bars"></span>
            </button>
            <div classname="collapse navbar-collapse" id="navbarCollapse">
                <div classname="navbar-nav ms-auto py-0">
                    <a href="home" classname="nav-item nav-link active">Home</a>
                    <a href="about" classname="nav-item nav-link">About</a>
                    <a href="service" classname="nav-item nav-link">Services</a>
                    <a href="package" classname="nav-item nav-link">Packages</a>
                    <a href="Update" classnameName="nav-item nav-link">Update</a>
                    <a href="Delete" classnameName="nav-item nav-link">Delete</a>
                    <a href="Login" classnameName="nav-item nav-link">Login</a>
                    <a href="Register" classnameName="nav-item nav-link">Register</a>
                    <div classname="nav-item dropdown">
                        
                        <div classname="dropdown-menu m-0">
                            <a href="destination.html" classname="dropdown-item">Destination</a>
                            <a href="booking.html" classname="dropdown-item">Booking</a>
                            <a href="team.html" classname="dropdown-item">Travel Guides</a>
                            <a href="testimonial.html" classname="dropdown-item">Testimonial</a>
                            <a href="404.html" classname="dropdown-item">404 Page</a>
                        </div>
                    </div>
                    <a href="contact.html" classname="nav-item nav-link">Contact</a>
                </div>
                <a href="" classname="btn btn-primary rounded-pill py-2 px-4">TuristRegister</a>
            </div>
        </nav>

        <div classname="container-fluid bg-primary py-5 mb-5 hero-header">
            <div classname="container py-5">
                <div classname="row justify-content-center py-5">
                    <div classname="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                        <h1 classname="display-3 text-white mb-3 animated slideInDown">Enjoy Your Vacation With Us</h1>
                        <p classname="fs-4 text-white mb-4 animated slideInDown">Tempor erat elitr rebum at clita diam amet diam et eos erat ipsum lorem sit</p>
                        <div classname="position-relative w-75 mx-auto animated slideInDown">
                            <input classname="form-control border-0 rounded-pill w-50 py-3 ps-4 pe-5" type="text" ref={mailInput} placeholder="Enter email"/>
                            
                            <input classname="form-control border-0 rounded-pill w-50 py-3 ps-4 pe-5" type="password" ref={passInput} onKeyUp={(e)=>handler(e)} placeholder="enter password"/>
 
                            <button type="button" classname="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2" onClick={()=>callApi()} >Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

        
    
export default Login;