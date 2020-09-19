import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'
const Signup =()=>{
  const History=useHistory()
  const [name,setName]=useState("")
  const [password,setPassword]=useState("")
  const [email,setEmail]=useState("")

  const PostData=()=>{
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
      M.toast({html:"Invalid Email ",classes:"#e040fb purple accent-2"})
      return
    }
    fetch("/signup",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,
        password,
        email
      })

    }).then(res=>res.json())
    .then(data=>{
      if(data.error){
        
  M.toast({html:data.error,classes:"#e040fb purple accent-2"})
      }
      else{
        M.toast({html:data.message,classes:"#afb42b lime darken-2"})
      History.push("/Login")
      }
    }).catch(err=>{
      console.log(err);
    })

  }
    return(
<div className="myCard">
            <div className="card auth-card ">
            <h2>
            Instagram
            </h2>
          
          <input type="text"placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}>    
            </input>
            <input type="text"placeholder="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)}>    
            </input>
            <input type="password"placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}>    
            </input>
            
            <button class="btn waves-effect waves-light #64b5f6 blue darken-2 ma" onClick={()=>PostData()}>SignUp 
  </button>
  <h6 >
  <Link to="/login">Already have an account?
  </Link>
  </h6>

        
      </div>
        </div>
    )
}

export default Signup
