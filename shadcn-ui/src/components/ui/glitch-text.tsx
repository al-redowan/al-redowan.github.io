import React, { useEffect, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchFrequency?: number; // How often glitch occurs (lower = more frequent)
  glitchDuration?: number;  // How long glitch lasts in ms
}

export function GlitchText({
  text,
  className = "",
  glitchFrequency = 8,
  glitchDuration = 150
}: GlitchTextProps) {
  const [glitchedText, setGlitchedText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);
  
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[]|;:,.<>?';
  
  useEffect(() => {
    // Start regular glitching
    const intervalId = setInterval(() => {
      if (Math.random() > 1 / glitchFrequency) return; // Only glitch occasionally
      
      setIsGlitching(true);
      
      // Create a glitched version of the text
      const glitchText = () => {
        const originalChars = text.split('');
        return originalChars.map(char => {
          // 30% chance to replace with glitch character
          if (Math.random() < 0.3) {
            return characters.charAt(Math.floor(Math.random() * characters.length));
          }
          return char;
        }).join('');
      };
      
      // Run glitch effect for a short duration
      let glitchCount = 0;
      const glitchInterval = setInterval(() => {
        if (glitchCount > 5) {
          clearInterval(glitchInterval);
          setGlitchedText(text);
          setIsGlitching(false);
          return;
        }
        
        setGlitchedText(glitchText());
        glitchCount++;
      }, glitchDuration / 5);
      
    }, 2000); // Check every 2 seconds if we should glitch
    
    return () => {
      clearInterval(intervalId);
    };
  }, [text, glitchFrequency, glitchDuration]);
  
  return (
    <span className={`${className} ${isGlitching ? 'relative before:absolute before:content-[\'\'] before:top-0 before:left-0 before:w-full before:h-full before:bg-[#00ff00] before:opacity-30 before:animate-flicker' : ''}`}>
      {glitchedText}
    </span>
  );
}