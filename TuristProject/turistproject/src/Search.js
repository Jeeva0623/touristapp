import { useEffect, useState } from "react";
import Header from "./Header";
import { useRef } from "react";
function Search(){
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
            setsearch(ser_data); //storing the api responce in variable
        })
           
        }
    return(
        <>
        <Header/>
       
        <div className="container-fluid  py-5 mb-5 ">
            <div className="container py-5">
                <div className="row justify-content-center py-5">
                    <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                        <h1 className="display-3 text-white mb-3 animated slideInDown">Enjoy Your Vacation With Us</h1>
                        <p className="fs-4 text-white mb-4 animated slideInDown">Tempor erat elitr rebum at clita diam amet diam et eos erat ipsum lorem sit</p>
                        <div className="position-relative w-75 mx-auto animated slideInDown">
                            <input className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Eg: Thailand" ref={countryInput}/>
                            <button type="button" className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2" onClick={()=>getTuristPlacesBycountry()}>Search</button>
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

export default Search;