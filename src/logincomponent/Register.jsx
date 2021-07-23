import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Header from '../Header'

const Register = () => {
    const history = useHistory('/add');
    useEffect(() => {
        if(localStorage.getItem('user-info')){
            history.push('./add')
        }
    }, [])
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [mobile,setMobile] = useState("")
   

   

    const  signUp = async ()=>{
        if(name&&email&&password&&mobile)
        {
            let field = {name,email,password,mobile}
            let result =  await fetch("http://api.kgblog.xyz/api/v1/singup",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application.json/"
                },
                body:JSON.stringify(field)
            });
            result = await result.json()
            console.log("result",result)
            localStorage.setItem("user-info",JSON.stringify(result));
            
            setName("")
            setEmail("")
            setPassword("")
            setMobile("")
            history.push('./add')
            
        }
        else{
            alert("empty required")
        }
       
        
    }
    return (
        <>
         <Header />
        <div className="col-sm-6 offset-sm-3">
            
            <h1>User Sign Up</h1>
            <form onSubmit={(e)=>e.preventDefault()} className="form-controls py-5">
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-controls" placeholder="enter your Name" /><br/>
            <input type="text" value={mobile} onChange={(e)=>setMobile(e.target.value)} className="form-controls" placeholder="enter your Mobile Number" /><br/>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-controls" placeholder="enter your E - mail" /><br/>
            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-controls" placeholder="enter your Password" /><br/>
            <button className="btn btn-primary" onClick={signUp}>Sign Up</button>
            </form>
        </div>
        </>
       
    )
}

export default Register
