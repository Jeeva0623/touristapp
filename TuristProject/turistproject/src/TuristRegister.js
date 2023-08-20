import { useRef } from "react";
import Header from "./Header"
function TuristRegister(){

    const countryInput = useRef('countryInput');
    const placeInput = useRef('placeInput');
    const descInput = useRef('descInput');

    const callApi=()=>{
        
        let data ={
            "country":countryInput.current.value,
            "placeName":placeInput.current.value,
            "discription":descInput.current.value
        }
    
    
        fetch("http://localhost:8080/CreateTuristPlaces",{
            "method":"post",
            "headers":{"content-type":"application/json"},
            "body":JSON.stringify(data)
        });
    };


    return(

        <>
        
    <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
            <a href="" className="navbar-brand p-0">
                <h1 className="text-primary m-0"><i className="fa fa-map-marker-alt me-3"></i>Tourist</h1>
                <img src="img/logo.png" alt="Logo"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                <a href="Home" className="nav-item nav-link active">Home</a>
                    <a href="About" className="nav-item nav-link">About</a>
                    <a href="Services" className="nav-item nav-link">Services</a>
                    <a href="Package" className="nav-item nav-link">Package</a>
                    <a href="Update" className="nav-item nav-link">Update</a>
                    <a href="Delete" className="nav-item nav-link">Delete</a>
                    <a href="Login" className="nav-item nav-link">Login</a>
                    <a href="Register" className="nav-item nav-link">Register</a>
                    
                    <div className="nav-item dropdown">
                    
                        <div className="dropdown-menu m-0">
                            <a href="destination" className="dropdown-item">Destination</a>
                            <a href="booking" className="dropdown-item">Booking</a>
                            <a href="travel guides" className="dropdown-item">Travel Guides</a>
                            <a href="testimonial" className="dropdown-item">Testimonial</a>
                            <a href="404 page" className="dropdown-item">404 Page</a>
                        </div>
                    </div>
                    <a href="contact" className="nav-item nav-link">Contact</a>
                </div>
                <a href="TuristRegister" className="btn btn-primary rounded-pill py-2 px-4">TuristRegister</a>
            </div>
        </nav>
        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
            <div className="container py-5">
                <div className="row justify-content-center py-5">
                    <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                        <h1 className="display-3 text-white mb-3 animated slideInDown">Enjoy Your Vacation With Us</h1>
                        <p className="fs-4 text-white mb-4 animated slideInDown">Tempor erat elitr rebum at clita diam amet diam et eos erat ipsum lorem sit</p>
                        <div className="position-relative w-75 mx-auto animated slideInDown">
                            <input className="form-control border-0 rounded-pill w-50 py-3 ps-4 pe-5" type="text" placeholder="Country" ref={countryInput} />
                            <input className="form-control border-0 rounded-pill w-50 py-3 ps-4 pe-5" type="text" placeholder="PlaceName"  ref={placeInput} />
                            <input className="form-control border-0 rounded-pill w-50 py-3 ps-4 pe-5" type="text" placeholder="Discription" ref={descInput} />
                            <button type="button" className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2" onClick={()=>callApi()}>Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        {/* <input type="text" placeholder="Country" ref={countryInput}/><>  </>
        <input type="text" placeholder="PlaceName" ref={placeInput}/><>  </>
        <input type="text" placeholder="Discription" ref={descInput}/><>  </>
        <button onClick={()=>callApi()}>create</button> */}

    
        
        </>
    )
}

export default TuristRegister;