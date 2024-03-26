import React, { useState, useEffect } from 'react';
export default function TimeContainer({ wasDropped }) {
    const [curTime, setCurrentTime] = useState('00:00:000');
    function Slider() {
        const [curVal, setCurVal] = useState(0);
        const [videoDuration, setVideoDuration] = useState(0);
        useEffect(() => {
            const video = document.getElementById('vid');
            if (video && wasDropped) {
                const updateSlider = () => {
                    setCurVal((video.currentTime / video.duration) * 100);
                    setCurrentTime(formatTime(video.currentTime));
                };
                const updateVideoDuration = () => {
                    setVideoDuration(video.duration);
                };
    
                updateSlider();
                updateVideoDuration();
                let currentTime = video.currentTime;
                video.addEventListener('timeupdate', updateSlider);
                video.addEventListener('loadedmetadata', updateVideoDuration);
                return () => {
                    video.removeEventListener('timeupdate', updateSlider);
                    video.removeEventListener('loadedmetadata', updateVideoDuration);
                };
            }
        }, [wasDropped]);
        function formatTime(timeInSeconds) {
            const minutes = Math.floor(timeInSeconds / 60);
            const seconds = Math.floor(timeInSeconds % 60);
            const milliseconds = Math.floor((timeInSeconds - Math.floor(timeInSeconds)) * 1000);
            return `0${minutes}:${seconds < 10 ? '0' + seconds : seconds}:${milliseconds < 10 ? '00' + milliseconds : milliseconds}`;
        }
        const handleSliderChange = (event) => {
            const seekTo = (videoDuration * event.target.value) / 100;
            const videoElement = document.getElementById('vid');
            videoElement.currentTime = seekTo;
            setCurVal(event.target.value);
        };

        if (wasDropped) {
            return (
                <input type='range' className='slider' id='range-slider' min='1' max={99} value={curVal} onChange={handleSliderChange} step='.1'/>
            );
        }
        return null;
    }

    return (
        <div className='time-container'>
            <div className='time-left-container' id='timer'>{curTime}</div>
            <div className='time-right-container'>
                <Slider />
            </div>
        </div>
    );
}