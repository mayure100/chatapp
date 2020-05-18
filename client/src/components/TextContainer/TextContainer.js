import React from 'react'
import '../TextContainer/TextContainer.css'
const TextContainer = ({users})=>{
return(
    <div className="activeContainer">
        <h2 className="head">Currently Active Users</h2>
      {
          users ?
      users.map(({name})=><div className="users" key={name}>{name}</div> ):
      null
      }
    </div>
)}

export default TextContainer

