import React from 'react'
import {useState} from 'react'
import {withRouter} from 'react-router-dom'
import GoogleSearch from "../APIS/GoogleSearch"
import SearchResult from './SearchResult'

const SearchPage = () => {

    const[currentSearch, setCurrentSearch] = useState("");
    const[currentTitle, setCurrentTitle] = useState([]);
    const[currentSnippet, setCurrentSnippet] = useState([]);
    const[currentLink, setCurrentLink] = useState([]);
    let resultArr = [];

    

    const onSubmit = (e) => {

        e.preventDefault()
        setCurrentTitle([]);
        setCurrentSnippet([]);
        setCurrentLink([]);

        onSearch(currentSearch);
        
        
    }
    const onSearch = async (keyword) => {
        await GoogleSearch.get("/", {
            params: {
                q: keyword,
            },
            
        }).then((response) => {
            
            for(let i = 0; i < 10; i++) {
                const newItem = {
                    title: response.data.items[i].title,
                    snippet: response.data.items[i].snippet,
                    link: response.data.items[i].link,
                }
                resultArr.push(newItem);
            }
            
            for(let i = 0; i < 10; i++) {
                setCurrentTitle(prevArray => [...prevArray, resultArr[i].title])
                setCurrentSnippet(prevArray1 => [...prevArray1, resultArr[i].snippet])
                setCurrentLink(prevArray2 => [...prevArray2, resultArr[i].link])
            }
            
        }).catch((error) => {
            console.log(error.response);
        })
    }






    return (
        <div>
        <h1>Let's make a Search with Google!</h1> 
        <form onSubmit={onSubmit}>
                <div>
                    <label>Search Google:</label><br></br>
                    <input onChange={(e) => { setCurrentSearch(e.target.value)}}  type ="text" placeholder="Enter Search Here" />
                </div>
            </form>
            <SearchResult title={currentTitle} snippet={currentSnippet} link={currentLink}  />
        </div>
    )
    
}

export default withRouter(SearchPage)