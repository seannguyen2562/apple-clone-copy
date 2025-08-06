import React, {useEffect, useRef, useState } from "react";

import { pauseImg, playImg, replayImg } from "../assets";
import { highlightsSlides } from "../constants";

const VideoCarousel = () => {
    const videoRef = useRef([]);
    const videoSpanRef = useRef([]);
    const videoDivRef = useRef([]);

    const [video, setVideo] = useState({
        isEnd: false,
        startPlay: false,
        videoId: 0,
        isLastVideo: false,
        isPlaying: false,
    });
    const [loadedData, setLoadedData] = useState([]);

    const { isEnd, isLastvideo, startPlay, videoid, isPlaying } = video;

    useEffect(() => {
        if (loadedData.length > 3) {
            if (!isPlaying) videoRef.current[videoId].pause();
            else startPlay && videoRef.current[videoId].play();
        }
    }, [startPlay, videoId, isPlaying, loadedData]);

    const handleLoadedMetadata = (i, e) => setLoadedData((pre) => [...pre, e]);

    const handleProcess = (type, i) => {
        switch (type) {
            case "video-end":
                setVideo((pre) => ({ ...pre, isEnd: true, videoId: i + 1}));
                break;
            case "video-last":
                setVideo((pre) => ({ ...pre, isLastVideo: true}));
                break;
            case "video-reset":
                setVideo((pre) => ({ ...pre, isLastVideo: false, videoId: 0}));
                break;
            case "play":
            case "pause":
                setVideo((pre)=> ({ ...pre, isPlaying: !pre.isPlaying }));
                break;
            default:
                return video;
        }
    };

    return (
        <>
            <div>
            {highlightsSlides}
            </div>
            <div>

                <div>
                {videoRef}
                </div>
                <button>
                    <img/>
                </button>

            </div>
        </>
    )

};

export default VideoCarousel;
