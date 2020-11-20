import React from 'react'
import './style.css'

const UserCards = (props) => {
    return(
        <div className="user-card">
            <img src={props.picUrl}/>
            <span>{props.firstName} {props.lastName}</span>
            <span>{props.email}</span>
        </div>
    );
}

export default UserCards