import { useEffect, useState } from "react";
import { useRef } from "react";

function Header(){
    const [country, setCountry] = useState(null);
    const countryInput = useRef('countryInput');
    const[search,setsearch]=useState();// state var creation for storing data
    const getTuristPlacesBycountry=()=>{
        fetch("http://localhost:8080/getTuristPlacesBycountry?country="+countryInput.current.value,{
            "method":"GET",
            Headers:{
                'content-type':"application/json"
            }
        })
        .then(res=>res.json())
        .then(ser_data=>{
            console.log(ser_data);
            countryInput.current.value="";
            setsearch(ser_data); //storing the api responce in variable
        })
           
        }
        //enter key
        
            
            const handler = (event) => {
                console.log(event.keyCode)
                if (event.keyCode === 13) {
                    getTuristPlacesBycountry();
                    
         
                }
        }
    
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
                            <input className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Eg: Thailand" ref={countryInput} onKeyUp={(e) => handler(e)} />
                            <button type="button" className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2" onClick={()=>getTuristPlacesBycountry()}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {
    search && search.length==0?<h1>No data found</h1>:""
}
        {
search && search.map((placeobj,index)=>{
return(
    
<div key={index} className="col-lg-6 col-md-12 wow zoomIn" >
                            <a className="position-relative d-block overflow-hidden" href="">
                                <img className="img-fluid" src="img/destination-3.jpg" alt=""/>
                                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">35% OFF</div>
                                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">{placeobj.country}-{placeobj.placeName}</div>
                            </a>
                        </div>
)

})
                       }
   
        </>
    )
}

export default Header;