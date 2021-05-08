import React from 'react'
import BoredReq from "../APIS/BoredReq"
import {withRouter} from 'react-router-dom'
import {useState} from 'react'

const Bored = () => {

    const[activity, setActivity] = useState("");
    const[link, setLink] = useState("");
    const[participants, setParticipants] = useState(0);
    const[price, setPrice] = useState(0);
    const[type, setType] = useState("");
    const[accessibility, setAccessibility] = useState(0);

    const handleBored =  async () => {
         BoredReq.get("/activity/").then((response) => {
            setActivity(response.data.activity);
            setLink(response.data.link);
            setParticipants(response.data.participants);
            setPrice(response.data.price);
            setType(response.data.type);
            setAccessibility(response.data.accessibility);
        }).catch((error) => {
            console.log(error)
        })
    }


    return (
        <div>
           <h1>Are you bored?</h1> 
           <button onClick={handleBored} >If so, click here!</button>
           <h2>Here's what you can do to not be bored:</h2>
           <h4>{activity}</h4>
           <a href={link} target="_blank" rel="noreferrer">{link}</a>
           <h4>Participants: {participants}</h4>
           <h4>Type of activity: {type}</h4>
           <h4>Price: {price} out of 1</h4>
           <h4>Accessibility: {accessibility} out of 1</h4>
        </div>
    )
}

export default withRouter(Bored)
