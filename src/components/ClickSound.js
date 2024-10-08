'use client'
import { useEffect, useRef } from "react";

export default function ClickSound({ soundFile, children }) {
  const clickSoundRef = useRef(null);

  useEffect(() => {
    // Load the sound file
    clickSoundRef.current = new Audio(soundFile);
  }, [soundFile]);

  const handleClick = () => {
    if (clickSoundRef.current) {
      clickSoundRef.current.play();
    }
  };

  return (
    <div onClick={handleClick}>
      {children}
    </div>
  );
}