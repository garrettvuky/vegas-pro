import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
export default function ActionButtonNav({ onSplit }) {
    const ChangeVid = () => {
        const video = document.getElementById('vid');
        video.src = 'http://localhost:3000/static/media/fade.f4221a8eee721a9ae459.mp4';
    }
    return (
        <div className='action-top-btns-nav'>
        <div className='search-btn' id='normal-edit'></div>
        <div className='search-btn' id='select-region'></div>
        <div className='search-btn' id='zoom-edit'></div>
        <div className='search-btn' id='splitbtn' onClick={onSplit}></div>
        <div className='search-btn' id='lock-event'></div>
        <div className='search-btn' id='insert-marker'></div>
        <div className='search-btn' id='insert-region'></div>
        <div className='search-btn' id='snapping-tool'></div>
        <div className='search-btn' id='cross-fade'></div>
        <div className='search-btn' id='fade' onClick={ChangeVid}></div>
        <div className='search-btn' id='link-plus'></div>
        <div className='search-btn' id='link-minus'></div>
        <div className='search-btn' id='auto-ripple'></div>
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
                                const video = document.getElementById('vid');
                                video.src = 'http://localhost:3000/static/media/zoom.474a23d6ceff3978e51f.mp4';
                                close()
                                }}>
                                Zoom Video
                        </button>
                        <button className='contentbtn-pan'onClick=
                            {() => {
                                const video = document.getElementById('vid');
                                video.src = 'http://localhost:3000/static/media/pan.8d98a5fa6ec1936e6bbe.mp4';
                                close()
                                }}>
                                Pan Video Across Screen
                        </button>
                    </div>
                </div>
            )
        }
        </Popup>
        <div className='search-btn'></div>
        <div className='search-btn'></div>
        <div className='search-btn'></div>
        <div className='search-btn'></div>
        <div className='search-btn'></div>
        <div className='search-btn'></div>
        <div className='search-btn'></div>
        <div className='search-btn'></div>
        <div className='search-btn'></div>
        <div className='search-btn'></div>
        <div className='search-btn-last'></div>
      </div>
    );
}