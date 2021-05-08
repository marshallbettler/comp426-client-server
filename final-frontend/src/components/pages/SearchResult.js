import React from 'react'

const SearchResult = ({title, snippet, link}) => {
    if(title.length === 0) {
        return (
            <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>Please make a Google Search</p>
        )
    }
        return (
            <div>
                <h1>{title[0]}</h1>
                <h2>{snippet[0]}</h2>
                <a href={link[0]} target="_blank" rel="noreferrer">{link[0]}</a>
                <br></br>


                <h1>{title[1]}</h1>
                <h2>{snippet[1]}</h2>
                <a href={link[1]} target="_blank" rel="noreferrer">{link[1]}</a>
                <br></br>


                <h1>{title[2]}</h1>
                <h2>{snippet[2]}</h2>
                <a href={link[2]} target="_blank" rel="noreferrer">{link[2]}</a>
                <br></br>


                <h1>{title[3]}</h1>
                <h2>{snippet[3]}</h2>
                <a href={link[3]} target="_blank" rel="noreferrer">{link[3]}</a>
                <br></br>

                
                <h1>{title[4]}</h1>
                <h2>{snippet[4]}</h2>
                <a href={link[4]} target="_blank" rel="noreferrer">{link[4]}</a>
                <br></br>


                <h1>{title[5]}</h1>
                <h2>{snippet[5]}</h2>
                <a href={link[5]} target="_blank" rel="noreferrer">{link[5]}</a>
                <br></br>


                <h1>{title[6]}</h1>
                <h2>{snippet[6]}</h2>
                <a href={link[6]} target="_blank" rel="noreferrer">{link[6]}</a>
                <br></br>


                <h1>{title[7]}</h1>
                <h2>{snippet[7]}</h2>
                <a href={link[7]} target="_blank" rel="noreferrer">{link[7]}</a>
                <br></br>


                <h1>{title[8]}</h1>
                <h2>{snippet[8]}</h2>
                <a href={link[8]} target="_blank" rel="noreferrer">{link[8]}</a>
                <br></br>


                <h1>{title[9]}</h1>
                <h2>{snippet[9]}</h2>
                <a href={link[9]} target="_blank" rel="noreferrer">{link[9]}</a>
                <br></br>


                
            </div>
            
        )
    
}

export default SearchResult
