import React,{useEffect, useState} from 'react';
import './App.css';
import Video from './components/Video';

function App() {
  const API_URL="https://raw.githubusercontent.com/codedamn-classrooms/tiktok-react-material/main/data.json"
  const [videos,setVideos]=useState([])

useEffect(() => {
  fetch(API_URL).then(t => t.json()).then(data => setVideos(data))

}, [])
  return (
    <div className="App">
        <div className="container">
				{videos.map((video) =>{ 
          console.log(video)
				return (
        <Video 
        channel={video.channel}
        description={video.description}
        likes={video.likes}
        shares={video.shares}
        messages={video.messages}
        song={video.song}
        url={video.url}
        
        />
        )
                })}
</div>
    </div>

  );
}

export default App;
