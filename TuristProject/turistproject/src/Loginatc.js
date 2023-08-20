function Loginatc(){
    const SetLocalStorage=()=>{
        localStorage.setItem("login_status","ok local")
    }
    const RemoveLocalStorage=()=>{

        
    }
    const SetSessionStorage=()=>{
        sessionStorage.setItem("login_status","ok session")
        
    }
    const RemoveSessionStorage=()=>{
        
        
    }
    return(
        <>
        <button onClick={()=>SetLocalStorage()}>Set local storage</button>
        <button onClick={()=>RemoveLocalStorage()}>Remove local storage</button>
        <button onClick={()=>SetSessionStorage()}>set session storage</button>
        <button onClick={()=>RemoveSessionStorage()}>Remove session storage</button>
        </>
    )
}
export default Loginatc;