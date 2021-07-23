import React,{useEffect,useState} from 'react'
import {useHistory} from 'react-router-dom'
import Header from '../Header'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory('/add');
    useEffect(()=>{
        if(localStorage.getItem("user-info"))
        {
            history.push('./add')
        }
    },[])

    async function login(){
        let item ={username,password}
        let result = await fetch("http://api.kgblog.xyz/api/v1/login",{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                "Accept":'application/json'
            },
            body:JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem('user-info',JSON.stringify(result));
        history.push('/add')
    }
    return (
        <>
        <Header />
            <div className = "loginform">
                <div className="logincontainer">
                    <h3>Login Here</h3>
                    <input type="username" placeholder="Enter Your Mobile No."
                    onChange={(e)=>{setUsername(e.target.value)}}
                    />
                    <br/><br/>
                    <input type="password" placeholder="Enter Your Password" 
                    onChange={(e)=>{setPassword(e.target.value)}} 
                    />
                    <br/><br/>
                    <button className="btn btn-primary"
                    onClick={login}
                    >Login Here</button>
                </div>
            </div>
        </>
    )
}

export default Login
