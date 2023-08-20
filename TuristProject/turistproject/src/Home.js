import { useEffect, useState } from "react";
import {
    useNavigate
  } from "react-router-dom";
import Header from "./Header";


function Home(){
 const navigate = useNavigate();

    useEffect(()=>{
            let value = localStorage.getItem("login_status");
            if(value ==""&&  value==undefined){
                navigate('/Login ')
            }
        
            
        
       // };
        // alert(checkLocalStorage['message']);
        // if(checkLocalStorage['message']=='Login succussful'){
        //    navigate('/Home');
        // }
    }
    ,[]);
    

   
//    let value= localStorage.setItem("login_status","ok_local storage");
//         if(value == undefined ||value == ""){
//             navigate('/home')
//             console.log('no token')
     //  }
    const[turistPlaces,settuistPlaces]=useState();// state var creation for storing data
    const getTuristPlaces=()=>{
        fetch("http://localhost:8080/getTuristPlaces",{
            "method":"GET",
            Headers:{
                'content-type':"application/json"
            }
        })
        .then(res=>res.json())
        .then(ser_data=>{
            console.log(ser_data);
            settuistPlaces(ser_data); //storing the api responce in variable
        })
           
        }
        //f
       
            
        
        useEffect(getTuristPlaces,[]);// for first time calling during page open
        

        
    return(
        <>
        <Header/>
 
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" >
                    <div className="position-relative h-100">
                        <img className="img-fluid position-absolute w-100 h-100" src="img/about.jpg" alt="" />
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                    <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
                    <h1 className="mb-4">Welcome to <span className="text-primary">Tourist</span></h1>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <div className="row gy-2 gx-4 mb-4">
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>First className Flights</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Handpicked Hotels</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>5 Star Accommodations</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Latest Model Vehicles</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>150 Premium City Tours</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>24/7 Service</p>
                        </div>
                    </div>
                    <a className="btn btn-primary py-3 px-5 mt-2" href="">Read More</a>
                </div>
            </div>
        </div>
    </div>
   
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Services</h6>
                <h1 className="mb-5">Our Services</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item rounded pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-globe text-primary mb-4"></i>
                            <h5>WorldWide Tours</h5>
                            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item rounded pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-hotel text-primary mb-4"></i>
                            <h5>Hotel Reservation</h5>
                            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item rounded pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-user text-primary mb-4"></i>
                            <h5>Travel Guides</h5>
                            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="service-item rounded pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-cog text-primary mb-4"></i>
                            <h5>Event Management</h5>
                            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item rounded pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-globe text-primary mb-4"></i>
                            <h5>WorldWide Tours</h5>
                            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item rounded pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-hotel text-primary mb-4"></i>
                            <h5>Hotel Reservation</h5>
                            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item rounded pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-user text-primary mb-4"></i>
                            <h5>Travel Guides</h5>
                            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="service-item rounded pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-cog text-primary mb-4"></i>
                            <h5>Event Management</h5>
                            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div className="container-xxl py-5 destination">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Destination</h6>
                <h1 className="mb-5">Popular Destination</h1>
            </div>
            <div className="row g-3">
                <div className="">
                    <div className="row g-3">
                      {/*looping the variable  */}
                       {
turistPlaces && turistPlaces.map((placeobj,index)=>{
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
                        
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Packages</h6>
                <h1 className="mb-5">Awesome Packages</h1>
            </div>
            <div className="row g-4 justify-content-center">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="package-item">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="img/package-1.jpg" alt=""/>
                        </div>
                        <div className="d-flex border-bottom">
                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2"></i>Thailand</small>
                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>3 days</small>
                            <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>2 Person</small>
                        </div>
                        <div className="text-center p-4">
                            <h3 className="mb-0">$149.00</h3>
                            <div className="mb-3">
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                            </div>
                            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>
                            <div className="d-flex justify-content-center mb-2">
                                <a href="#" className="btn btn-sm btn-primary px-3 border-end" >Read More</a>
                                <a href="#" className="btn btn-sm btn-primary px-3" >Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="package-item">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="img/package-2.jpg" alt=""/>
                        </div>
                        <div className="d-flex border-bottom">
                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2"></i>Indonesia</small>
                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>3 days</small>
                            <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>2 Person</small>
                        </div>
                        <div className="text-center p-4">
                            <h3 className="mb-0">$139.00</h3>
                            <div className="mb-3">
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                            </div>
                            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>
                            <div className="d-flex justify-content-center mb-2">
                                <a href="#" className="btn btn-sm btn-primary px-3 border-end" >Read More</a>
                                <a href="#" className="btn btn-sm btn-primary px-3" >Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="package-item">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="img/package-3.jpg" alt=""/>
                        </div>
                        <div className="d-flex border-bottom">
                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2"></i>Malaysia</small>
                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>3 days</small>
                            <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>2 Person</small>
                        </div>
                        <div className="text-center p-4">
                            <h3 className="mb-0">$189.00</h3>
                            <div className="mb-3">
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                            </div>
                            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>
                            <div className="d-flex justify-content-center mb-2">
                                <a href="#" className="btn btn-sm btn-primary px-3 border-end" >Read More</a>
                                <a href="#" className="btn btn-sm btn-primary px-3" >Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="booking p-5">
                <div className="row g-5 align-items-center">
                    <div className="col-md-6 text-white">
                        <h6 className="text-white text-uppercase">Booking</h6>
                        <h1 className="text-white mb-4">Online Booking</h1>
                        <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <a className="btn btn-outline-light py-3 px-5 mt-2" href="">Read More</a>
                    </div>
                    <div className="col-md-6">
                        <h1 className="text-white mb-4">Book A Tour</h1>
                        <form>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control bg-transparent" id="name" placeholder="Your Name"/>
                                        <label >Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="email" className="form-control bg-transparent" id="email" placeholder="Your Email"/>
                                        <label >Your Email</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating date" id="date3" data-target-input="nearest">
                                        <input type="text" className="form-control bg-transparent datetimepicker-input" id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                                        <label >Date & Time</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <select className="form-select bg-transparent" id="select1">
                                            <option value="1">Destination 1</option>
                                            <option value="2">Destination 2</option>
                                            <option value="3">Destination 3</option>
                                        </select>
                                        <label >Destination</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control bg-transparent" placeholder="Special Request" id="message" ></textarea>
                                        <label >Special Request</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-outline-light w-100 py-3" type="submit">Book Now</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Process</h6>
                <h1 className="mb-5">3 Easy Steps</h1>
            </div>
            <div className="row gy-5 gx-4 justify-content-center">
                <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="position-relative border border-primary pt-5 pb-4 px-4">
                        <div className="flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow" >
                            <i className="fa fa-globe fa-3x text-white"></i>
                        </div>
                        <h5 className="mt-4">Choose A Destination</h5>
                        <hr className="w-25 mx-auto bg-primary mb-1"/>
                        <hr className="w-50 mx-auto bg-primary mt-0"/>
                        <p className="mb-0">Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="position-relative border border-primary pt-5 pb-4 px-4">
                        <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow" >
                            <i className="fa fa-dollar-sign fa-3x text-white"></i>
                        </div>
                        <h5 className="mt-4">Pay Online</h5>
                        <hr className="w-25 mx-auto bg-primary mb-1"/>
                        <hr className="w-50 mx-auto bg-primary mt-0"/>
                        <p className="mb-0">Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="position-relative border border-primary pt-5 pb-4 px-4">
                        <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow" >
                            <i className="fa fa-plane fa-3x text-white"></i>
                        </div>
                        <h5 className="mt-4">Fly Today</h5>
                        <hr className="w-25 mx-auto bg-primary mb-1"/>
                        <hr className="w-50 mx-auto bg-primary mt-0"/>
                        <p className="mb-0">Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    


    
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Travel Guide</h6>
                <h1 className="mb-5">Meet Our Guide</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="img/team-1.jpg" alt=""/>
                        </div>
                        <div className="position-relative d-flex justify-content-center" >
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                        </div>
                        <div className="text-center p-4">
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="img/team-2.jpg" alt=""/>
                        </div>
                        <div className="position-relative d-flex justify-content-center" >
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                        </div>
                        <div className="text-center p-4">
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="img/team-3.jpg" alt=""/>
                        </div>
                        <div className="position-relative d-flex justify-content-center" >
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                        </div>
                        <div className="text-center p-4">
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="team-item">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="img/team-4.jpg" alt=""/>
                        </div>
                        <div className="position-relative d-flex justify-content-center" >
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                        </div>
                        <div className="text-center p-4">
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    


    
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="text-center">
                <h6 className="section-title bg-white text-center text-primary px-3">Testimonial</h6>
                <h1 className="mb-5">Our Clients Say!!!</h1>
            </div>
            <div className="owl-carousel testimonial-carousel position-relative">
                <div className="testimonial-item bg-white text-center border p-4">
                    <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="img/testimonial-1.jpg"/>
                    <h5 className="mb-0">John Doe</h5>
                    <p>New York, USA</p>
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                </div>
                <div className="testimonial-item bg-white text-center border p-4">
                    <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="img/testimonial-2.jpg" />
                    <h5 className="mb-0">John Doe</h5>
                    <p>New York, USA</p>
                    <p className="mt-2 mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                </div>
                <div className="testimonial-item bg-white text-center border p-4">
                    <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="img/testimonial-3.jpg" />
                    <h5 className="mb-0">John Doe</h5>
                    <p>New York, USA</p>
                    <p className="mt-2 mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                </div>
                <div className="testimonial-item bg-white text-center border p-4">
                    <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="img/testimonial-4.jpg" />
                    <h5 className="mb-0">John Doe</h5>
                    <p>New York, USA</p>
                    <p className="mt-2 mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                </div>
            </div>
        </div>
    </div>
    
    
    <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Company</h4>
                    <a className="btn btn-link" href="">About Us</a>
                    <a className="btn btn-link" href="">Contact Us</a>
                    <a className="btn btn-link" href="">Privacy Policy</a>
                    <a className="btn btn-link" href="">Terms & Condition</a>
                    <a className="btn btn-link" href="">FAQs & Help</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Contact</h4>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Gallery</h4>
                    <div className="row g-2 pt-2">
                        <div className="col-4">
                            <img className="img-fluid bg-light p-1" src="img/package-1.jpg" alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light p-1" src="img/package-2.jpg" alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light p-1" src="img/package-3.jpg" alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light p-1" src="img/package-2.jpg" alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light p-1" src="img/package-3.jpg" alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light p-1" src="img/package-1.jpg" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Newsletter</h4>
                    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                    <div className="position-relative mx-auto" >
                        <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                        <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="copyright">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved.

                        <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <div className="footer-menu">
                            <a href="">Home</a>
                            <a href="">Cookies</a>
                            <a href="">Help</a>
                            <a href="">FQAs</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 


        </>
    )
}
export default Home;