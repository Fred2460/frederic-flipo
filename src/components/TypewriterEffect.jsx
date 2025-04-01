import { useState, useEffect } from 'react';

function TypewriterEffect({ 
    text = "",
    speed = 100,
    children
}) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, speed);
      
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);

  // Si children est une fonction (render prop), appeler avec le texte
  if (typeof children === 'function') {
    return children(displayText, <span className="inline-block w-1 h-6 bg-black animate-pulse ml-1"></span>);
  }

  // Fallback au cas où children n'est pas une fonction
  return (
    <div>
      {displayText}
      <span className="inline-block w-1 h-6 bg-black animate-pulse ml-1"></span>
    </div>
  );
}

export default TypewriterEffect;
