import {Link} from "react-router-dom"


const Homepage = () => {
    return (
        <div>
            <h1>{(localStorage.getItem("auth") === "true") && (<h3>You are logged in!</h3>)}</h1>
            {(localStorage.getItem("auth") === "false") && (<h1>You are not currently logged in!</h1>)}
            {(localStorage.getItem("auth") === "false") && (<h3>You must be logged in to view the Map and Video Pages!</h3>)}
            <h1>Hope everyone's end of the semester is going well!</h1>
            <h2>So, I started this project with a theme in mind, but clearly that was thrown out the window early on. So, enjoy my jumble of Google, YouTube, Yoda, and fixing Boredom!</h2>
            <h3>Click <Link to = '/videos'>here</Link> to watch some YouTube videos</h3>
            <h3>Click <Link to = '/googleSearch'>here</Link> to browse Google for whatever your heart desires</h3>

        </div>
    )
}

export default Homepage
