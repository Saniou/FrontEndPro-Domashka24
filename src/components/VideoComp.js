import React from "react";
import videoBg from './video/video1.mp4'

function VideoComp() {
    return (
        <div className="video-containers">
            <video src = {videoBg} autoPlay loop muted/>
            <h1>Adventure time</h1>
            <p>What are you waiting for?</p>
        </div>
    )
}

export default VideoComp