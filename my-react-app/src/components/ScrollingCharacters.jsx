import React from 'react';
import './ScrollingCharacters.css';

const characters = [
  'あ', 'い', 'う', 'え', 'お',
  'か', 'き', 'く', 'け', 'こ',
  'さ', 'し', 'す', 'せ', 'そ',
  'た', 'ち', 'つ', 'て', 'と',
  'な', 'に', 'ぬ', 'ね', 'の',
  'は', 'ひ', 'ふ', 'へ', 'ほ',
  'ま', 'み', 'む', 'め', 'も',
  'や', 'ゆ', 'よ',
  'ら', 'り', 'る', 'れ', 'ろ',
  'わ', 'を', 'ん'
];

const ScrollingCharacters = () => {
  return (
    <div className="scroll-container">
      <div className="scrolling-row">
        {characters.map((char, idx) => (
          <span key={idx} className="scroll-char">{char}</span>
        ))}
        {/* Duplicate for a seamless scroll */}
        {characters.map((char, idx) => (
          <span key={`dup-${idx}`} className="scroll-char">{char}</span>
        ))}
      </div>
    </div>
  );
};

export default ScrollingCharacters;
