import { forwardRef, useImperativeHandle, useRef } from "react"

export interface VideoHandle {
    play: () => void
    pause: () => void
}

const Video = forwardRef<VideoHandle>((_, ref) => {
    const videoRef = useRef<HTMLVideoElement>(null)

    useImperativeHandle(ref, () => {
        return {
            play: () => {
                videoRef.current?.play()
            },
            pause: () => {
                videoRef.current?.pause()
            }

        }
    })
    return (
        <video ref={videoRef} src="https://www.w3schools.com/html/mov_bbb.mp4">
        </video>
    )
})
export default Video