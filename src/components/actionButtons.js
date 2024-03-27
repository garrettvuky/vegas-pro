import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import fade from '../videos/fade.mp4';
import pan from '../videos/pan.mp4';
import zoom from '../videos/zoom.mp4';
export default function ActionButtonNav({ onSplit }) {
    const ChangeVid = () => {
        const videoElement = document.getElementById('vid');
        videoElement.src = fade;
    }
    const ChangeVidZoom = () => {
        const videoElement = document.getElementById('vid');
        videoElement.src = zoom;
    }
    const AlertUser = () => {
        alert('Feature Not Yet Implemented.');
    }
    return (
        <div className='action-top-btns-nav'>
        <div className='search-btn' id='normal-edit' onClick={AlertUser}></div>
        <div className='search-btn' id='select-region' onClick={AlertUser}></div>
        <div className='search-btn' id='zoom-edit' onClick={ChangeVidZoom}></div>
        <div className='search-btn' id='splitbtn' onClick={onSplit}></div>
        <div className='search-btn' id='lock-event' onClick={AlertUser}></div>
        <div className='search-btn' id='insert-marker' onClick={AlertUser}></div>
        <div className='search-btn' id='insert-region' onClick={AlertUser}></div>
        <div className='search-btn' id='snapping-tool' onClick={AlertUser}></div>
        <div className='search-btn' id='cross-fade' onClick={AlertUser}></div>
        <div className='search-btn' id='fade' onClick={ChangeVid}></div>
        <div className='search-btn' id='link-plus' onClick={()=> {alert('Audio Linked From Video')}}></div>
        <div className='search-btn' id='link-minus' onClick={()=> {alert('Audio Unlinked From Video')}}></div>
        <div className='search-btn' id='auto-ripple' onClick={AlertUser}></div>
        <Popup trigger=
            {<div className='search-btn' id='text-btn'></div>}
        modal nested>
        {
            close => (
                <div className='modal'>
                    <div className='content'>
                        Sample Text
                    </div>
                <div>
                    <button className='contentbtn'onClick=
                        {() => {
                            const video = document.getElementById('vid');
                            video.src = 'http://localhost:3000/static/media/sampleText.466e63eec72e759b3c79.mp4';
                            close()
                            }}>
                            Add Text
                    </button>
                </div>
            </div>
            )
        }
        </Popup>
        <Popup trigger=
            {<div className='search-btn' id='crop-btn'></div>}
        modal nested>
        {
            close => (
                <div className='modal-pan'>
                    <div>
                        <button className='contentbtn-pan'onClick=
                            {() => {
                                const videoElement = document.getElementById('vid');
                                videoElement.src = zoom;
                                close()
                                }}>
                                Zoom Video
                        </button>
                        <button className='contentbtn-pan'onClick=
                            {() => {
                                const videoElement = document.getElementById('vid');
                                videoElement.src = pan;
                                close()
                                }}>
                                Pan Video Across Screen
                        </button>
                    </div>
                </div>
            )
        }
        </Popup>
        <div className='search-btn' onClick={AlertUser}></div>
        <div className='search-btn' onClick={AlertUser}></div>
        <div className='search-btn' onClick={AlertUser}></div>
        <div className='search-btn' onClick={AlertUser}></div>
        <div className='search-btn' onClick={AlertUser}></div>
        <div className='search-btn' onClick={AlertUser}></div>
        <div className='search-btn' onClick={AlertUser}></div>
        <div className='search-btn' onClick={AlertUser}></div>
        <div className='search-btn' onClick={AlertUser}></div>
        <div className='search-btn' onClick={AlertUser}></div>
        <div className='search-btn-last' onClick={AlertUser}></div>
      </div>
    );
}