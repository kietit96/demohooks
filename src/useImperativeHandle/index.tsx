import { useRef } from "react";
import Video, { VideoHandle } from "./video";
import './style.css'
export default function DemoUseImperativeHandle() {
    const refVideo = useRef<VideoHandle>(null)
    const playVideo = () => {
        refVideo.current?.play()
    }
    const pauseVideo = () => {
        refVideo.current?.pause()
    }
    return (
        <div className="boxVideo">
            <Video ref={refVideo} />
            <div className="control">
                <button onClick={pauseVideo}>Stop</button>
                <button onClick={playVideo}>Play</button>
            </div>
        </div>
    )
}