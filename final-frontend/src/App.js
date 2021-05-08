import Header from "./components/pages/Header"
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from "./components/pages/Login"
import Signup from "./components/pages/Signup"
import axios from 'axios'
import YouTubePage from "./components/pages/YouTubePage"
import Homepage from "./components/pages/Homepage"
import Protected from "./components/Protected"
import SearchPage from "./components/pages/SearchPage"
import Yoda from "./components/pages/Yoda"
import Bored from "./components/pages/Bored"







export function App() {
  axios.defaults.withCredentials = true;
    
  return (
    
    <Router>
      
    
      <Header />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
       {<Route path = '/' exact render = {(props) => (
         <>
          <Homepage />
         </>
       )} /> }
        
      <Protected path = "/videos" component={YouTubePage}  /> 
      <Protected path = "/googleSearch" component={SearchPage}  />
      <Protected path = "/yoda" component={Yoda}  />
      <Protected path = "/bored" component={Bored}  />
    
    </Router>
  );
}

export default App;
