import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import fade from '../videos/fade.mp4';
import pan from '../videos/pan.mp4';
import zoom from '../videos/zoom.mp4';
export default function VideoTrackContainerSplit({onEffect}) {
    const [sliderValue, setSliderValue] = useState('100')
    const [audioValue, setAudioValue] = useState('100')
    const ChangeVid = () => {
        const videoElement = document.getElementById('vid');
        videoElement.src = fade;
    }
    function AudioBox() {
            return (
                <div className='audio-box'>
                    <div className='opacity-slider'>
                        <input type="range" className='opacity-slider-range-split' defaultValue={audioValue}/>
                    </div>
                    <div className='audio-control-container'>
                        <div className='audio-control-first-split'>
                            <div className='splitIcon'></div>
                            <div className='split-toggle'>
                            <label class="switch">
                                <input type="checkbox"/>
                                <span class="slider-round"></span>
                            </label>
                            </div>
                        </div>
                        <Popup trigger=
                            {<div className='audio-control-split' id='volumebtn'></div>}
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
                        <div className='audio-control-split' id='fxbtn' onClick={onEffect}></div>
                    </div>
                </div>
            );
    }
    function OpacityBox() {
            return (
                <div className='opacity-box'>
                    <div className='opacity-slider'>
                        <input type="range" className='opacity-slider-range-split' defaultValue={sliderValue}/>
                    </div>
                    <div className='video-control-container'>
                        <div className='video-control-first-split'>
                            <div className='splitIcon'></div>
                            <div className='split-toggle'>
                                <label class="switch">
                                    <input type="checkbox"/>
                                    <span class="slider-round"></span>
                                </label>
                            </div>
                        </div>
                        <Popup trigger=
                            {<div className='video-control-split' id='opacitybtn'></div>}
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
                                                    alert(`Opacity set to ${textBox.toString()}`)
                                                }
                                                else {
                                                    setSliderValue('100');
                                                    alert(`Opacity set to 100`)
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
                        <div className='video-control-split' id='fadebtn' onClick={ChangeVid}></div>
                        <Popup trigger=
                            {<div className='video-control-split' id='cropbtn'></div>}
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
                        <div className='video-control-split' id='fxbtn' onClick={onEffect}></div>
                    </div>
                </div>
                
                
            );
    }

    return (
        <div className='video-track-container'>
            <div className='video-container'>
                <div className='opacity-container'>
                    <div className='opacity-track-num'>
                        <div className='video-num'>1</div>
                        <div className='video-symbol'></div>
                    </div>
                    <div className='video-track-controls'>
                        <div className='video-track-controls-top'>
                            <div className='mute' onClick={()=> {alert('feature not yet implemented.')}}>

                            </div>
                            <div className='solo' onClick={()=> {alert('feature not yet implemented.')}}>

                            </div>                            
                        </div>
                        <div className='video-track-controls-bottom'>
                            <div className='opacity-label'>Opacity</div>
                            <div className='opacity-track-slider'>
                                <input type="range" className='opacity-track-slider-range' defaultValue='100'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='audio-container'>
                    <div className='audio-track-num'>
                        <div className='audio-num'>2</div>
                        <div className='audio-symbol'></div>
                    </div>
                    <div className='audio-track-controls'>
                        <div className='audio-track-controls-top'>
                        <div className='mute' onClick={()=> {alert('feature not yet implemented.')}}>

                        </div> 
                        <div className='solo' onClick={()=> {alert('feature not yet implemented.')}}>

                        </div>    
                        </div>
                        <div className='audio-track-controls-bottom'>
                            <div className='audio-label'>Spacial-Positioning</div>
                            <div className='spacial-track-slider'>
                                <input type="range" className='opacity-track-slider-range' defaultValue='50'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='video-container-right'>
                <div className='video-track'>
                    <OpacityBox/>
                    <OpacityBox/>
                </div>
                <div className='audio-track'>
                    <AudioBox/>
                    <AudioBox/>
                </div>
            </div>
        </div>
    );
}