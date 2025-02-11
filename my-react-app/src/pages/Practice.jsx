import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Flashcard from '../components/Flashcard';

const allKatakana = [
  { character: 'ア', romaji: 'A' },
  { character: 'イ', romaji: 'I' },
  { character: 'ウ', romaji: 'U' },
  { character: 'エ', romaji: 'E' },
  { character: 'オ', romaji: 'O' },
  { character: 'カ', romaji: 'KA' },
  { character: 'キ', romaji: 'KI' },
  { character: 'ク', romaji: 'KU' },
  { character: 'ケ', romaji: 'KE' },
  { character: 'コ', romaji: 'KO' },
  { character: 'サ', romaji: 'SA' },
  { character: 'シ', romaji: 'SHI' },
  { character: 'ス', romaji: 'SU' },
  { character: 'セ', romaji: 'SE' },
  { character: 'ソ', romaji: 'SO' },
  { character: 'タ', romaji: 'TA' },
  { character: 'チ', romaji: 'CHI' },
  { character: 'ツ', romaji: 'TSU' },
  { character: 'テ', romaji: 'TE' },
  { character: 'ト', romaji: 'TO' },
  { character: 'ナ', romaji: 'NA' },
  { character: 'ニ', romaji: 'NI' },
  { character: 'ヌ', romaji: 'NU' },
  { character: 'ネ', romaji: 'NE' },
  { character: 'ノ', romaji: 'NO' },
  { character: 'ハ', romaji: 'HA' },
  { character: 'ヒ', romaji: 'HI' },
  { character: 'フ', romaji: 'FU' },
  { character: 'ヘ', romaji: 'HE' },
  { character: 'ホ', romaji: 'HO' },
  { character: 'マ', romaji: 'MA' },
  { character: 'ミ', romaji: 'MI' },
  { character: 'ム', romaji: 'MU' },
  { character: 'メ', romaji: 'ME' },
  { character: 'モ', romaji: 'MO' },
  { character: 'ヤ', romaji: 'YA' },
  { character: 'ユ', romaji: 'YU' },
  { character: 'ヨ', romaji: 'YO' },
  { character: 'ラ', romaji: 'RA' },
  { character: 'リ', romaji: 'RI' },
  { character: 'ル', romaji: 'RU' },
  { character: 'レ', romaji: 'RE' },
  { character: 'ロ', romaji: 'RO' },
  { character: 'ワ', romaji: 'WA' },
  { character: 'ヲ', romaji: 'WO' },
  { character: 'ン', romaji: 'N' }
];

// Manually group the flashcards by family.
const groups = {
  Vowels: allKatakana.filter(card => ['ア', 'イ', 'ウ', 'エ', 'オ'].includes(card.character)),
  K: allKatakana.filter(card => ['カ', 'キ', 'ク', 'ケ', 'コ'].includes(card.character)),
  S: allKatakana.filter(card => ['サ', 'シ', 'ス', 'セ', 'ソ'].includes(card.character)),
  T: allKatakana.filter(card => ['タ', 'チ', 'ツ', 'テ', 'ト'].includes(card.character)),
  N: allKatakana.filter(card => ['ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ン'].includes(card.character)),
  H: allKatakana.filter(card => ['ハ', 'ヒ', 'フ', 'ヘ', 'ホ'].includes(card.character)),
  M: allKatakana.filter(card => ['マ', 'ミ', 'ム', 'メ', 'モ'].includes(card.character)),
  Y: allKatakana.filter(card => ['ヤ', 'ユ', 'ヨ'].includes(card.character)),
  R: allKatakana.filter(card => ['ラ', 'リ', 'ル', 'レ', 'ロ'].includes(card.character)),
  W: allKatakana.filter(card => ['ワ', 'ヲ'].includes(card.character))
};

const Practice = () => {
  // Initialize state for each group (true = visible)
  const initialVisibility = {};
  Object.keys(groups).forEach(group => {
    initialVisibility[group] = true;
  });
  const [groupVisibility, setGroupVisibility] = useState(initialVisibility);

  const toggleGroup = (group) => {
    setGroupVisibility(prev => ({
      ...prev,
      [group]: !prev[group]
    }));
  };

  return (
    <div className="page-container">
      <div className="practice">
        <header className="practice-header">
          <h1>Practice Katakana</h1>
          <Link className="home-link" to="/">Back to Home</Link>
        </header>
        <main className="practice-main">
          {/* Group Toggle Sliders */}
          <div className="group-toggle-container">
            {Object.keys(groups).map(group => (
              <div key={group} className="group-toggle">
                <span className="group-label">{group}</span>
                <label className="switch">
                  <input 
                    type="checkbox" 
                    checked={groupVisibility[group]} 
                    onChange={() => toggleGroup(group)}
                  />
                  <span className="slider"></span>
                </label>
              </div>
            ))}
          </div>
          
          {/* Render each group's flashcards if toggled on */}
          {Object.keys(groups).map(group => (
            groupVisibility[group] && (
              <div key={group} className="group-container">
                <h3>{group}</h3>
                <div className="flashcards-container">
                  {groups[group].map(card => (
                    <Flashcard 
                      key={card.character} 
                      katakana={card.character} 
                      romaji={card.romaji} 
                    />
                  ))}
                </div>
              </div>
            )
          ))}
        </main>
      </div>
    </div>
  );
};

export default Practice;
