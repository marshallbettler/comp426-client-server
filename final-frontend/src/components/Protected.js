import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const Protected = ({component: Component, ...rest}) => {


    return (
    <Route {...rest} 
    render ={(props) => {
        if(localStorage.getItem("auth") ==="true") {
            return <Component />
        } else {
            alert("You must login to view this page");
            return <Redirect to={{pathname: '/login', state: {from: props.location}}} />
        }

    }}
    
    
    />
    );
}

export default Protected
