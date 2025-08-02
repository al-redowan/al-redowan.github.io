
import React, { useState, useRef, useEffect } from 'react';

interface MusicToggleProps {
  musicSrc: string;
}

const PlayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const PauseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


const MusicToggle: React.FC<MusicToggleProps> = ({ musicSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(error => {
          // Autoplay was prevented or another error occurred.
          console.warn("Audio play failed:", error);
          setIsPlaying(false);
        });
    }
  };
  
  useEffect(() => {
    if (audioRef.current) {
        audioRef.current.loop = true;
    }
  }, []);

  return (
    <>
      <audio ref={audioRef} src={musicSrc} preload="auto"></audio>
      <button
        onClick={togglePlayPause}
        className="fixed bottom-5 right-5 z-50 bg-gray-800/50 backdrop-blur-sm text-cyan-400 border border-cyan-600 rounded-full p-3 shadow-lg hover:bg-cyan-900/70 hover:scale-110 transition-all duration-300"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>
    </>
  );
};

export default MusicToggle;
