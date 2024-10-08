'use client'
import React, { useState, useRef } from 'react';
import { FaMusic } from 'react-icons/fa';

const MusicPlayer = ({ src, iconSize = 40 }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 1000 }}>
      <FaMusic 
        size={iconSize} 
        color={isPlaying ? 'green' : 'black'} 
        onClick={togglePlay} 
        style={{ cursor: 'pointer' }}
      />
      <audio ref={audioRef}>
        <source src={src} type="audio/mp4" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MusicPlayer;