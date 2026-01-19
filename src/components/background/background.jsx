import React, { useEffect, useState } from 'react';

const ReactIcon = ({ size, posX, posY, color, duration, delay }) => (
  <svg
    viewBox="0 0 841.9 595.3"
    className={`react-icon ${size}`}
    style={{
      position: 'absolute',
      left: posX,
      top: posY,
      color: color,
      fill: color,
      animationDuration: `${duration}s`,
      animationDelay: `-${delay}s`,
      width: size === 'small' ? '28px' : size === 'medium' ? '56px' : '84px',
    }}>
    <g fill="none" stroke="currentColor" strokeWidth="16">
      <ellipse cx="420.9" cy="297.6" rx="45.6" ry="149.4" />
      <ellipse cx="420.9" cy="297.6" rx="45.6" ry="149.4" transform="rotate(60 420.9 297.6)" />
      <ellipse cx="420.9" cy="297.6" rx="45.6" ry="149.4" transform="rotate(120 420.9 297.6)" />
    </g>
    <circle cx="420.9" cy="297.6" r="24" fill="currentColor" />
  </svg>
);

const colors = ['#4dc0ff', '#38a9ff', '#1e90ff', '#00bfff'];
const sizes = ['small', 'medium', 'large', 'largest'];

const generateIcons = (setIcons, screenWidth, screenHeight) => {
  const iconCount = Math.floor((screenWidth * screenHeight) / 9000);
  const sizeValue = Math.random() * (90 - 30) + 30;

  const newIcons = Array.from({ length: iconCount }).map((_, i) => ({
    id: i,
    size: sizes[Math.floor(Math.random() * sizes.length)],
    posX: Math.random() * screenWidth - sizeValue / 2,
    posY: Math.random() * screenHeight - sizeValue / 2,
    color: colors[Math.floor(Math.random() * colors.length)],
    duration: 20 + Math.random() * 80,
    delay: Math.random() * 20,
  }));

  setIcons(newIcons);
};

export function PatternBackground({ resizingCounter }) {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    generateIcons(setIcons, window.innerWidth, window.innerHeight);
  }, []);

  useEffect(() => {
    generateIcons(setIcons, window.innerWidth, window.innerHeight);
  }, [resizingCounter]);

  return (
    <div className={`fixed top-0 left-0 -z-4 w-full h-full grayscale-100 opacity-8 overflow-hidden`} id="pattern">
      {icons.map((icon) => (
        <ReactIcon key={icon.id} {...icon} />
      ))}
    </div>
  );
}
