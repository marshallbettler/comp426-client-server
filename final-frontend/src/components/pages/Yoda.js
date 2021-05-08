import React from 'react'
import YodaReq from '../APIS/YodaReq'
import {useState} from 'react'
import {withRouter} from 'react-router-dom'

const Yoda = () => {

    const[yodaWisdom, setYodaWisdom] = useState("");
    const[currentSearch, setCurrentSearch] = useState("");

    const onSubmit = (e) => {
        e.preventDefault()
        yodaHandler(currentSearch);
    }

    const yodaHandler = async (keyword) => {
        await YodaReq.get('/', {
            params: {
                text: keyword,
            },
        }
        ).then((response) => {
                setYodaWisdom(response.data.contents.translated);
            }).catch((error) => {
                console.log(error.response);
            })
    }


    return (
        <div>
            <h1>Hello!</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Yoda Translator:</label>
                    <br></br>
                    <input onChange={(e) => { setCurrentSearch(e.target.value)}}  type ="text" placeholder="Enter Translation Here" />
                </div>
            </form>
            <h2>You said: {currentSearch}</h2>
            <h2>Yoda says: {yodaWisdom}</h2>
            <p>Note: Five requests per hour. Yoda gets tired quickly</p>
        </div>
    )
}

export default withRouter(Yoda)
