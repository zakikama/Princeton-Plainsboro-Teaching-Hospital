
import React from 'react'
import '../assets/styles/Profile.css'

const Profile = ({name, age, add}) => {
    return (
        <div className= "profile">
            <div className="container">
                <p><span className="big-weight">{name}</span> {age} <br/>
                {add}
                </p>
            </div>
        </div>
    )
}

export default Profile
