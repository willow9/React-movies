import React from 'react'

 const UserProfile = (props) => {
     console.log(props);
     
    return (
        
    <div className="col s4 green">{props.user.id}</div>
        
    )
}
export default UserProfile
