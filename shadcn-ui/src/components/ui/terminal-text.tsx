import React, { useState, useEffect, useRef } from 'react';

interface TerminalTextProps {
  lines: string[];
  prompt?: string;
  typingSpeed?: number;
  className?: string;
  onComplete?: () => void;
  startDelay?: number;
}

export function TerminalText({
  lines,
  prompt = '>',
  typingSpeed = 30,
  className = "",
  onComplete,
  startDelay = 0
}: TerminalTextProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  
  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);
  
  // Typing effect
  useEffect(() => {
    if (lineIndex >= lines.length) {
      if (onComplete) onComplete();
      return;
    }
    
    const timer = setTimeout(() => {
      if (!isTyping) {
        setIsTyping(true);
        return;
      }
      
      if (charIndex < lines[lineIndex].length) {
        setCurrentLine(prev => prev + lines[lineIndex][charIndex]);
        setCharIndex(prev => prev + 1);
      } else {
        setDisplayedLines(prev => [...prev, currentLine]);
        setCurrentLine("");
        setCharIndex(0);
        setLineIndex(prev => prev + 1);
      }
    }, charIndex === 0 ? startDelay : typingSpeed);
    
    return () => clearTimeout(timer);
  }, [lineIndex, charIndex, lines, currentLine, isTyping, onComplete, startDelay, typingSpeed]);
  
  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [displayedLines, currentLine]);
  
  return (
    <div 
      ref={terminalRef}
      className={`font-mono text-green-400 bg-black/30 border border-green-500/30 rounded p-4 overflow-y-auto ${className}`}
    >
      {displayedLines.map((line, i) => (
        <div key={i} className="mb-1">
          <span className="text-green-500 mr-2">{prompt}</span>
          <span>{line}</span>
        </div>
      ))}
      {lineIndex < lines.length && (
        <div>
          <span className="text-green-500 mr-2">{prompt}</span>
          <span>{currentLine}</span>
          <span className={`w-2 h-4 ml-0.5 inline-block bg-green-400 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}></span>
        </div>
      )}
    </div>
  );
}