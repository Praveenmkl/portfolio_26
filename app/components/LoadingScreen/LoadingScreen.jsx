'use client';

import { useState, useEffect } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentProgress = 0;
    
    const interval = setInterval(() => {
      // Increment progress by a random amount between 5 and 20 for a realistic loading feel
      currentProgress += Math.floor(Math.random() * 15) + 5; 
      
      if (currentProgress > 100) {
        currentProgress = 100;
      }
      
      setProgress(currentProgress);

      if (currentProgress === 100) {
        clearInterval(interval);
        // Wait briefly at 100% before removing the loading screen
        setTimeout(() => {
          onComplete();
        }, 600);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  const getLoadingText = (prog) => {
    if (prog < 15) return "SYSTEM START";
    if (prog < 30) return "Loading Identity...";
    if (prog < 45) return "Loading Experience...";
    if (prog < 60) return "Loading Projects...";
    if (prog < 75) return "Loading Skills...";
    if (prog < 90) return "Loading Creativity...";
    if (prog < 100) return "Portfolio Ready.";
    return "Enjoy the Journey.";
  };

  return (
    <div className="simple-loading-screen">
      <div className="loading-content">
        <h1 className="loading-name">{getLoadingText(progress)}</h1>
        <div className="simple-progress-container">
          <div 
            className="simple-progress-fill" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span className="loading-percentage">{progress}%</span>
      </div>
    </div>
  );
}
