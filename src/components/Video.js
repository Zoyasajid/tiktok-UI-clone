import FooterLeft from "./FooterLeft ";
import FooterRight from "./FooterRight";
import React, { useRef } from 'react'
// import ReactPlayer from 'react-player/lazy';

// import React from "react"
function Video(props){
  const {url ,channel, description, song, likes , shares , message}=props
  const videoRef = useRef(null)

  const onVideoPress=()=>{
        if (videoRef.current.paused) {
		    videoRef.current.play()
	    } else {
		    videoRef.current.pause()
	    }
	}


    return <div className="Video">
      <video className="player" onClick={onVideoPress}
				// muted
				ref={videoRef} loop src={url}></video>
      <div className="controls">
      <div className="bottom-controls">
        <FooterLeft channel={channel} description={description} song={song} />
        <FooterRight likes={likes} shares={shares} message={message}/>
        </div>
        </div>
             </div>
}
export default Video