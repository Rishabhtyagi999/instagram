import React from 'react'
import {Link} from 'react-router-dom'
const Signup =()=>{
    return(
<div class="myCard">
            <div className="card auth-card ">
            <h2>
            Instagram
            </h2>
          
          <input type="text"placeholder="Name">    
            </input>
            <input type="text"placeholder="Email Address">    
            </input>
            <input type="password"placeholder="Password">    
            </input>
            
            <button class="btn waves-effect waves-light #64b5f6 blue lighten-2 ma">SignUp 
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