import React from "react";
import videoBg from './video/video1.mp4'

function VideoComp() {
    return (
        <div className="video-containers">
            <video src = {videoBg} autoPlay loop muted/>
            
        </div>
    )
}

export default VideoComp