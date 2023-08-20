import { useRef } from "react";
function Delete(){
    const idInput=useRef('idInput')

    const callApi=()=>{
        let data={
            "id":idInput.current.value
        }
        fetch("http://localhost:8080/delete",{
            "method":"post",
            "headers":{"content-type":"application/json"},
            "body":JSON.stringify(data)
            
        })

    }
     const handler =(event)=>{
        if(event.keyCode===13){
            callApi ()
        }
     }


    return(
        <>
        <div class="container-fluid position-relative p-0">
        <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
            <a href="" class="navbar-brand p-0">
                <h1 class="text-primary m-0"><i class="fa fa-map-marker-alt me-3"></i>Tourist</h1>
                 <img src="img/logo.png" alt="Logo"/>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="fa fa-bars"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto py-0">
                    <a href="home" class="nav-item nav-link active">Home</a>
                    <a href="about" class="nav-item nav-link">About</a>
                    <a href="service" class="nav-item nav-link">Services</a>
                    <a href="package" class="nav-item nav-link">Packages</a>
                    <a href="Update" className="nav-item nav-link">Update</a>
                    <a href="Delete" className="nav-item nav-link">Delete</a>
                    <a href="Login" className="nav-item nav-link">Login</a>
                    <a href="Register" className="nav-item nav-link">Register</a>
                    <div class="nav-item dropdown">
                        
                        <div class="dropdown-menu m-0">
                            <a href="destination.html" class="dropdown-item">Destination</a>
                            <a href="booking.html" class="dropdown-item">Booking</a>
                            <a href="team.html" class="dropdown-item">Travel Guides</a>
                            <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                            <a href="404.html" class="dropdown-item">404 Page</a>
                        </div>
                    </div>
                    <a href="contact.html" class="nav-item nav-link">Contact</a>
                </div>
                <a href="" class="btn btn-primary rounded-pill py-2 px-4">TuristRegister</a>
            </div>
        </nav>

        <div class="container-fluid bg-primary py-5 mb-5 hero-header">
            <div class="container py-5">
                <div class="row justify-content-center py-5">
                    <div class="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                        <h1 class="display-3 text-white mb-3 animated slideInDown">Enjoy Your Vacation With Us</h1>
                        <p class="fs-4 text-white mb-4 animated slideInDown">Tempor erat elitr rebum at clita diam amet diam et eos erat ipsum lorem sit</p>
                        <div class="position-relative w-75 mx-auto animated slideInDown">
                            <input class="form-control border-0 rounded-pill w-50 py-3 ps-4 pe-5" type="text" ref={idInput} placeholder="Enter ID"  onKeyUp={(e) => handler(e)} />
                            <button type="button" class="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2" onClick={()=>callApi()} >Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}
export default Delete;