import { Link, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


const Login = () => {
    axios.defaults.withCredentials = true;

    let history = useHistory();

    

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const[loginStatus, setLoginStatus] = useState(false);

const login = async () => {
    await axios.post('https://comp426-marshallbettler.herokuapp.com/login', {
        username: username,
        password: password,
    }).then((response) => {
        
        if(!response.data.auth) {
            setLoginStatus(false);
        } else {
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("auth", "true")
            setLoginStatus(true);
            history.push('/');
        }
        
    });
};
useEffect( () => {
    axios.get("https://comp426-marshallbettler.herokuapp.com/login").then((response) => {
        if(response.data.loggedIn === true) {
            setLoginStatus('Currently signed in as: ' + response.data.user[0].username);
        }
      
    });
}, []);


    return (
        <div>
            <h1>Login</h1>
            <form >
                <label>Username:</label><br></br>
                <input type="text" onChange = {(e) => { setUsername(e.target.value)}}></input><br></br>
                <label>Password:</label><br></br>
                <input type ="password" onChange = {(e) => { setPassword(e.target.value)}}></input><br></br>
                <button type="button" onClick={login}>Login</button>
            </form>
            <h1>{(localStorage.getItem("auth") === "true") && (<h3>You are logged in!</h3>)}</h1>
            <h1>{(localStorage.getItem("auth") === "false") && (<h3>You are not currently logged in!</h3>)}</h1>
            <h3>Not signed up?</h3>
            <Link to='/signup'>Signup Here!</Link><br></br>
            <br></br>
            <Link to ='/'>Go Back to Homepage</Link>
        </div>
        
    )
}


export default Login
