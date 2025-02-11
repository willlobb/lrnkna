import React, { useState } from 'react';

const Flashcard = ({ katakana, romaji }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flashcard" onClick={() => setFlipped(!flipped)}>
      <div className={`flashcard-inner ${flipped ? 'flipped' : ''}`}>
        <div className="flashcard-front">{katakana}</div>
        <div className="flashcard-back">{romaji}</div>
      </div>
    </div>
  );
};

export default Flashcard;
