import { Link, useHistory } from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';


const Signup = () => {
    axios.defaults.withCredentials = true;

    let history = useHistory();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const[registerStatus, setRegisterStatus] = useState("");
    
    const linkStlye = {
        color:'black',
        textDecoration: "none",
        border: '2px solid black'

    };

    const submitSignup = () => {
        axios.post("https://comp426-marshallbettler.herokuapp.com/api/insert", {
            username: username, 
            password: password
        }).then((response) => {
            if(response.data.message) {
                setRegisterStatus(response.data.message);
            } else {
                history.push('/');
            }
        });
    };

    return (
        <div>
            <h1>Signup!</h1>
            <form>
                <label>Create a Username:</label><br></br>
                <input type="text" placeholder="username" name="username" onChange={(e) => {
                    setUsername(e.target.value);
                }}/><br></br>
                <label>Create a Password:</label><br></br>
                <input type="password" placeholder="password" name="password" onChange={(e) => {
                    setPassword(e.target.value);
                }}/><br></br>
                <button type="button" onClick={submitSignup}>Create Account</button>
                
            </form>
            <h1>{registerStatus}</h1>
            <h3>Already Signed Up?</h3>
            <Link style={linkStlye} to='/login'>Log in here!</Link><br></br>
            <br></br>

            <Link style={linkStlye} to ='/'>Go Back to Homepage</Link>
        </div>
    )
}

export default Signup
