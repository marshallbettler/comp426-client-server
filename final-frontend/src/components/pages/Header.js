import {useHistory, useLocation} from 'react-router-dom'

const Header = () => {
    const history = useHistory();
    const location = useLocation()



    const handleLoginButton = () => {
        history.push('/login')
    }

    const handleSignupButton = () => {
        history.push('/signup')
    }
    const handleSearchButton = () => {
        history.push('/googleSearch')
    }
    const handleVideoButton = () => {
        history.push('/videos')
    }
    const handleHomeButton = () => {
        history.push('/')
    }
    const handleYodaButton = () => {
        history.push('/yoda')
    }
    const handleBoredButton = () => {
        history.push('/bored')
    }
    const handleLogoutButton = () => {
        localStorage.setItem("auth", "false")
        history.push('/login')
    }

    return (
        <header>
            
            {(localStorage.getItem("auth") === "false")  && (<button onClick={handleLoginButton}>Login</button>)}
            {(localStorage.getItem("auth") === "true") && (<button onClick={handleLogoutButton}>Logout</button>)}
            {(location.pathname !== '/signup')  && (<button onClick={handleSignupButton}>Signup</button>)}
            {(location.pathname !== '/googleSearch')  && (<button onClick={handleSearchButton}>Search</button>)}
            {(location.pathname !== '/videos')  && (<button onClick={handleVideoButton}>Videos</button>)}
            {(location.pathname !== '/')  && (<button onClick={handleHomeButton}>Homepage</button>)}
            {(location.pathname !== '/yoda')  && (<button onClick={handleYodaButton}>Star Wars Fans Click Here</button>)}
            {(location.pathname !== '/bored')  && (<button onClick={handleBoredButton}>Bored?</button>)}
            


        </header>
    )
}

export default Header
