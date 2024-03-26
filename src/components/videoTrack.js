import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
export default function VideoTrackContainer({onDrop}) {
    const [wasDropped, setWasDropped] = useState(false);
    const [sliderValue, setSliderValue] = useState('100')
    const [audioValue, setAudioValue] = useState('100')

    const handleDragOver = (event) => {
        event.preventDefault();
    };
    const ChangeVid = () => {
        const video = document.getElementById('vid');
        video.src = 'http://localhost:3000/static/media/fade.f4221a8eee721a9ae459.mp4';
    }
    const handleDrop = (event) => {
        event.preventDefault();
        setWasDropped(true);
        if (onDrop) {
            onDrop();
        }
    };

    function AudioBox({ dropped }) {
        if (dropped === true) {
            return (
                <div className='audio-box'>
                    <div className='opacity-slider'>
                    <input type="range" className='opacity-slider-range' defaultValue={audioValue} draggable='false'/>
                    </div>
                    <div className='audio-control-container'>
                        <div className='audio-control-first'>
                            <div className='splitIcon'></div>
                            <div className='split-toggle'>
                            <label class="switch">
                                <input type="checkbox"/>
                                <span class="slider-round"></span>
                            </label>
                            </div>
                        </div>
                        <Popup trigger=
                            {<div className='audio-control' id='volumebtn'></div>}
                            modal nested>
                            {
                            close => (
                                <div className='modal-opacity'>
                                    <div>
                                        <input type='text' placeholder='Enter an Integer 1-100' maxlength='3' className='textbox' id='textbox'></input>
                                        <button className='contentbtn'onClick=
                                            {() => {
                                                const textBox = document.getElementById('textbox').value
                                                if(textBox <= 100 && textBox >= 1) {
                                                    setAudioValue(textBox.toString());
                                                }
                                                else {
                                                    setAudioValue('100');
                                                }
                                                close()
                                                }}>
                                                Change Volume
                                        </button>
                                    </div>
                                </div>
                            )
                        }
                        </Popup>
                        <div className='audio-control' id='fxbtn'></div>
                    </div>
                </div>
            );
        }
        return null;
    }
    function OpacityBox({ dropped }) {
        if (dropped === true) {
            return (
                <div className='opacity-box'>
                    <div className='opacity-slider'>
                        <input type="range" className='opacity-slider-range' defaultValue={sliderValue}/>
                    </div>
                    <div className='video-control-container'>
                        <div className='video-control-first'>
                            <div className='splitIcon'></div>
                            <div className='split-toggle'>
                                <label class="switch">
                                    <input type="checkbox"/>
                                    <span class="slider-round"></span>
                                </label>
                            </div>
                        </div>
                        <Popup trigger=
                            {<div className='video-control' id='opacitybtn'></div>}
                            modal nested>
                            {
                            close => (
                                <div className='modal-opacity'>
                                    <div>
                                        <input type='text' placeholder='Enter an Integer 1-100' maxlength='3' className='textbox' id='textbox'></input>
                                        <button className='contentbtn'onClick=
                                            {() => {
                                                const textBox = document.getElementById('textbox').value
                                                if(textBox <= 100 && textBox >= 1) {
                                                    setSliderValue(textBox.toString());
                                                }
                                                else {
                                                    setSliderValue('100');
                                                }
                                                close()
                                                }}>
                                                Change Opacity
                                        </button>
                                    </div>
                                </div>
                            )
                        }
                        </Popup>
                        <div className='video-control' id='fadebtn' onClick={ChangeVid}></div>
                        <Popup trigger=
                            {<div className='video-control' id='cropbtn'></div>}
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
                        <div className='video-control' id='fxbtn'></div>
                    </div>
                </div>
                
                
            );
        }
        return null;
    }

    return (
        <div className='video-track-container' onDragOver={handleDragOver} onDrop={handleDrop}>
            <div className='video-container'>
                <div className='opacity-container'>
                    <div className='opacity-track-num'>
                        <div className='video-num'>1</div>
                        <div className='video-symbol'></div>
                    </div>
                </div>
                <div className='audio-container'>
                    <div className='audio-track-num'>
                        <div className='audio-num'>2</div>
                        <div className='audio-symbol'></div>
                    </div>
                </div>
            </div>
            <div className='video-container-right'>
                <div className='video-track'>
                    <OpacityBox dropped={wasDropped} />
                </div>
                <div className='audio-track'>
                    <AudioBox dropped={wasDropped} />
                </div>
            </div>
        </div>
    );
}