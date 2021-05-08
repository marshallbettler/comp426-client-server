import YouTube from '../APIS/YouTube'
import {useState} from 'react'
import {withRouter} from 'react-router-dom'

import Player from "../Player"




const YouTubePage = () => {
    const[currentSearch, setCurrentSearch] = useState("");
    const[currentTitle, setCurrentTitle] = useState([]);
    const[currentList, setCurrentList] = useState([]);
    const searchArr = [];
    


    const onSubmit = (e) => {
        e.preventDefault()
        setCurrentList([]);
        setCurrentTitle([]);
        onSearch(currentSearch);
        
        
    }
    const onSearch = async (keyword) => {
        await YouTube.get("/search", {
            params: {
                q: keyword,
            }
        }).then((response) => {
            
            for(let i = 0; i < 5; i++) {
                const currentId = {
                    id: response.data.items[i].id.videoId,
                    title: response.data.items[i].snippet.title
                }
                searchArr.push(currentId);
            }
           
            
            for(let i = 0; i < 5; i++) {
                setCurrentList(prevArray => [...prevArray, searchArr[i].id])
                setCurrentTitle(prevArray1 => [...prevArray1, searchArr[i].title])
            }
            
        }).catch((error) => {
            console.log(error.response);
        })
    }
    

    return (
        <div>
           <h1>Wooooo YouTube!</h1> 
           <form onSubmit={onSubmit}>
                <div>
                    <label>Search for Videos:</label><br></br>
                    <input onChange={(e) => { setCurrentSearch(e.target.value)}}  type ="text" placeholder="Enter Search Here" />
                </div>
                <br></br>
                <Player videoId={currentList} title={currentTitle}/>

            </form>
        </div>
    )
}

export default withRouter(YouTubePage)
