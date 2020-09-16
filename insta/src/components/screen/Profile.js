import React from 'react'

const Profile =()=>{
    return(<div style={{maxWidth:"550px",margin:"0px auto"}}>
        <div style={{
            display:"flex",
            justifyContent:"space-around",
            margin:"18px 0px",
            borderBottom:"1px solid gray"
        }}>
        <div>
            <img style={{width:"160px" ,height:"160px",borderRadius:"80px"}}
                src="https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />
        </div>
           
        <div>
            <h4>Aniket Kumar</h4>
            <div style={{
                display:"flex",
                justifyContent:"space-between",
                width:"108%"
                
               
            }}>
                <h6>40 Post</h6>
                <h6>20 followers</h6>
                <h6>100 following</h6>
            </div>

            </div>
        </div>
    
    <div className="gallery">
    <img className="item"  src="https://images.unsplash.com/photo-1598968333180-9b4f6bc2bf52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE0MDUwMH0&auto=format&fit=crop&w=500&q=60"/>
    <img className="item"  src="https://images.unsplash.com/photo-1598900052717-9d5bcbc71160?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
    <img className="item"  src="https://images.unsplash.com/photo-1598955234950-acf50bf3dc9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
    <img className="item"  src="https://images.unsplash.com/photo-1598952813544-d90814c77db8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
    <img className="item"  src="https://images.unsplash.com/photo-1598951092651-653c21f5d0b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
    <img className="item"  src="https://images.unsplash.com/photo-1598932567039-89dcd18b5ee0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
    
        </div>
    
    </div>
    )
}

export default Profile