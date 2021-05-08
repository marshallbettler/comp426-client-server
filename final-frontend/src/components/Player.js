import React from "react";

const Videoplayer = ({ videoId, title }) => {
  if (videoId.length === 0) {
    return (
      <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>
        Search for a video
      </p>
    );
  }
  return (
    <div >
      <h1>{title[0]}</h1>
      <iframe
      title="Hello"
        src={`https://www.youtube.com/embed/${videoId[0]}`}
      />
      <br></br><br></br>
      <h1>{title[1]}</h1>
      <iframe
      title="Hello"
        src={`https://www.youtube.com/embed/${videoId[1]}`}
      />
      <br></br><br></br>
      <h1>{title[2]}</h1>
      <iframe
      title="Hello"
        src={`https://www.youtube.com/embed/${videoId[2]}`}
      />
      <br></br><br></br>
      <h1>{title[3]}</h1>
      <iframe
      title="Hello"
        src={`https://www.youtube.com/embed/${videoId[3]}`}
      />
      <br></br><br></br>
      <h1>{title[4]}</h1>
      <iframe
      title="Hello"
        src={`https://www.youtube.com/embed/${videoId[4]}`}
      />
    </div>
  );
};

export default Videoplayer;