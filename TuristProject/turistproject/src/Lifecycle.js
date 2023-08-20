import React, { useEffect } from "react";

//  function Lifecycle(){
//     useEffect(()=>{
//         console.log("this is function");
//     },[])
//     return(
//         <h1>this is function</h1>
//     )
// };

 class Lifecycle extends React.Component{
    myName="jeeva";
    nameList=[
       {"name":"test1","address":"sample1 address"},
       {"name":"test2","address":"sample2 address"},
       {"name":"test3","address":"sample3 address"},
       {"name":"test4","address":"sample4 address"}
    ];
    constructor(){
       super();
       console.log("this is contructor");
    }
    render(){
        return(
<h1> this is class component</h1>
            )
    }
        
    
}
export default Lifecycle;