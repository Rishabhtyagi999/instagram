import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'
const Login =()=>{
  const History=useHistory()
  const [password,setPassword]=useState("")
  const [email,setEmail]=useState("")

  const PostData=()=>{
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
      M.toast({html:"Invalid Email ",classes:"#e040fb purple accent-2"})
      return
    }
    fetch("/Login",{
      method:"post",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify({
          email,
          password
        
      })
  }).then(res=>res.json())
  .then(data=>{
      console.log(data)
     if(data.error){
        M.toast({html: data.error,classes:"#e040fb purple accent-2"})
     }
     else{
         localStorage.setItem("jwt",data.token)
         localStorage.setItem("user",JSON.stringify(data.user))
         M.toast({html:"Login Success",classes:"#afb42b lime darken-2"})
         History.push('/')
     }
  }).catch(err=>{
      console.log(err)
  })
}
    return(

        <div className="myCard">
            <div className="card auth-card ">
            <h2>
            Instagram
            </h2>
          
            <input type="text"placeholder="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)}>    
            </input>
            <input type="password"placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}>    
            </input>
            
            <button className="btn waves-effect waves-light #64b5f6 blue darken-2 ma" onClick={()=>PostData()}>Login
  </button>
  <h6 >
  <Link to="/signup">Don't have an account?
  </Link>
  </h6>
  
      </div>
        </div>
    )
}
export default Login