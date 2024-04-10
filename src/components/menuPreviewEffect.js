import video from '../videos/sampleText.mp4'
import React, { useState } from 'react';
export default function MenuPreviewEffectContainer( {wasDropped} ) {
    let effectElements = [];
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
    const effectClick = (element) => {
        const effect = document.getElementById(element.target.id);
        effectElements.push(element.target.id);
        if(effect.style.background == 'green') {
            effect.style.background = 'red';
        }
        else if(effect.style.background == 'grey') {
            effect.style.background = '#cccccc';
        }
        else {
            effect.style.background = 'grey';
        }
    }
    const effectAdd = () => {
        for(let i = 0; i < effectElements.length; i++) {
            const effect = document.getElementById(effectElements[i]);
            effect.style.background = 'green';
        }
        effectElements = [];
        alert('Selected Effects Added');
    }
    const effectRemove = () => {
        for(let i = 0; i < effectElements.length; i++) {
            const effect = document.getElementById(effectElements[i]);
            effect.style.background = '#cccccc';
        }
        effectElements = [];
        alert('Selected Effects Removed');
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
                <div className='visual-effects-container'>
                    <div className='visual-effects-left'>
                        <div className='visual-effects-box'>
                            <div className='visual-effect' id='eff1' onClick={effectClick}>Effect 1</div>
                            <div className='visual-effect' id='eff2' onClick={effectClick}>Effect 2</div>
                            <div className='visual-effect' id='eff3' onClick={effectClick}>Effect 3</div>
                        </div>
                        <div className='visual-effects-box'>
                            <div className='visual-effect' id='eff4' onClick={effectClick}>Effect 4</div>
                            <div className='visual-effect' id='eff5' onClick={effectClick}>Effect 5</div>
                            <div className='visual-effect' id='eff6' onClick={effectClick}>Effect 6</div>
                        </div>
                        <div className='visual-effects-box'>
                            <div className='visual-effect' id='eff7' onClick={effectClick}>Effect 7</div>
                            <div className='visual-effect' id='eff8' onClick={effectClick}>Effect 8</div>
                            <div className='visual-effect' id='eff9' onClick={effectClick}>Effect 9</div>
                        </div>
                    </div>
                    <div className='visual-effects-right'>
                            <button className='visual-effects-btn' id='addEff' onClick={effectAdd}>Add+</button>
                            <button className='visual-effects-btn' id='remEff' onClick={effectRemove}>Remove-</button>
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