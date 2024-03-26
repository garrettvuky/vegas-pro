import video from '../videos/testVideo.mp4'
import React, { useState } from 'react';
export default function MenuPreviewContainer( {wasDropped} ) {
    const playVideo = () => {
        const videoElement = document.getElementById('vid');
        videoElement.play();
    }
    const pauseVideo = () => {
        const videoElement = document.getElementById('vid');
        videoElement.pause();
    }
    const stopVideo = () => {
        const videoElement = document.getElementById('vid');
        videoElement.currentTime = 0;
        videoElement.pause();
    }
    function AddVideo() {
        if(wasDropped) {
            return(
                <video id='vid' src={video} type="video/mp4" width="100%" height="100%"></video>
            );            
        }
        return null;

    }
    function PreviewControls() {
        if(wasDropped) {
            return(
                <div className='preview-controls'>
                  <div className='control' onClick={playVideo}></div>
                  <div className='pause' onClick={pauseVideo}></div>
                  <div className='stop' onClick={stopVideo}></div>
              </div>
            );
        }
    }
    function FileContainer() {
        return (
            <div className='file-container-right'>
                <div className='video-file' draggable='true' id='draggableVideo'>
                    <div className='video-file-left'></div>
                    <div className='video-file-right'>vid.mp4</div>
                </div>
            </div>
        );
    }
    return(
        <div className='menu-preview-container'>
          <div className='menu-container'>
            <div className='file-container-left'>
              <div className='file'></div>
              <div className='file'></div>
              <div className='file'></div>
            </div>
            <FileContainer/>
          </div>
          <div className='preview-container'>
            <div className='preview-box'>
              <div className='preview'>
                    <AddVideo/>
              </div>
                    <PreviewControls/>
            </div>
          </div>
        </div>
    );
}