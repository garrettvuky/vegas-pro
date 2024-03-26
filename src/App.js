import logo from './logo.svg';
import './App.css';
import FileNav from './components/FileRow';
import TopRowButtonNav from './components/topRowButtons';
import ActionButtonNav from './components/actionButtons';
import MenuPreviewContainer from './components/menuPreview';
import TimeContainer from './components/time';
import VideoTrackContainer from './components/videoTrack';
import VideoTrackContainerSplit from './components/videoTrackSplit';
import React, { useState } from 'react';
import MenuPreviewEffectContainer from './components/menuPreviewEffect';

function App() {
  const [wasDropped, setWasDropped] = useState(false);
  const [wasSplit, setWasSplit] = useState(false);
  const [wasEffect, setWasEffect] = useState(false);
  const handleDrop = () => {
    setWasDropped(true);
  };
  const handleSplit = () => {
    setWasSplit(true);
  }
  const handleEffect = () => {
    console.log('handling effect')
    setWasEffect(true);
  }
  if(wasSplit && !wasEffect) {
    return (
      <div className="App">
      <FileNav/>
      <TopRowButtonNav onEffect={handleEffect}/>
      <ActionButtonNav onSplit={handleSplit}/>
      <MenuPreviewContainer wasDropped={wasDropped}/>
      <TimeContainer wasDropped={wasDropped} />
      <VideoTrackContainerSplit onEffect={handleEffect}/>
    </div>
    );
  }
  if(wasEffect) {
    return (
      <div className="App">
      <FileNav/>
      <TopRowButtonNav onEffect={handleEffect}/>
      <ActionButtonNav onSplit={handleSplit}/>
      <MenuPreviewEffectContainer wasDropped={wasDropped}/>
      <TimeContainer wasDropped={wasDropped} />
      <VideoTrackContainerSplit onEffect={handleEffect}/>
    </div>
    );
  }
  return (
    <div className="App">
        <FileNav/>
        <TopRowButtonNav/>
        <ActionButtonNav onSplit={handleSplit}/>
        <MenuPreviewContainer wasDropped={wasDropped}/>
        <TimeContainer wasDropped={wasDropped} />
        <VideoTrackContainer onDrop={handleDrop}/>
    </div>
  );
}

export default App;