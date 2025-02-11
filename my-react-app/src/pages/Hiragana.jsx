import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Flashcard from '../components/Flashcard';

const allHiragana = [
  { character: 'あ', romaji: 'a' },
  { character: 'い', romaji: 'i' },
  { character: 'う', romaji: 'u' },
  { character: 'え', romaji: 'e' },
  { character: 'お', romaji: 'o' },
  { character: 'か', romaji: 'ka' },
  { character: 'き', romaji: 'ki' },
  { character: 'く', romaji: 'ku' },
  { character: 'け', romaji: 'ke' },
  { character: 'こ', romaji: 'ko' },
  { character: 'さ', romaji: 'sa' },
  { character: 'し', romaji: 'shi' },
  { character: 'す', romaji: 'su' },
  { character: 'せ', romaji: 'se' },
  { character: 'そ', romaji: 'so' },
  { character: 'た', romaji: 'ta' },
  { character: 'ち', romaji: 'chi' },
  { character: 'つ', romaji: 'tsu' },
  { character: 'て', romaji: 'te' },
  { character: 'と', romaji: 'to' },
  { character: 'な', romaji: 'na' },
  { character: 'に', romaji: 'ni' },
  { character: 'ぬ', romaji: 'nu' },
  { character: 'ね', romaji: 'ne' },
  { character: 'の', romaji: 'no' },
  { character: 'は', romaji: 'ha' },
  { character: 'ひ', romaji: 'hi' },
  { character: 'ふ', romaji: 'fu' },
  { character: 'へ', romaji: 'he' },
  { character: 'ほ', romaji: 'ho' },
  { character: 'ま', romaji: 'ma' },
  { character: 'み', romaji: 'mi' },
  { character: 'む', romaji: 'mu' },
  { character: 'め', romaji: 'me' },
  { character: 'も', romaji: 'mo' },
  { character: 'や', romaji: 'ya' },
  { character: 'ゆ', romaji: 'yu' },
  { character: 'よ', romaji: 'yo' },
  { character: 'ら', romaji: 'ra' },
  { character: 'り', romaji: 'ri' },
  { character: 'る', romaji: 'ru' },
  { character: 'れ', romaji: 're' },
  { character: 'ろ', romaji: 'ro' },
  { character: 'わ', romaji: 'wa' },
  { character: 'を', romaji: 'wo' },
  { character: 'ん', romaji: 'n' }
];

// Group the Hiragana into families. (Here we group ん with the "N" family for simplicity.)
const groups = {
  Vowels: allHiragana.filter(card => ['あ', 'い', 'う', 'え', 'お'].includes(card.character)),
  K: allHiragana.filter(card => ['か', 'き', 'く', 'け', 'こ'].includes(card.character)),
  S: allHiragana.filter(card => ['さ', 'し', 'す', 'せ', 'そ'].includes(card.character)),
  T: allHiragana.filter(card => ['た', 'ち', 'つ', 'て', 'と'].includes(card.character)),
  N: allHiragana.filter(card => ['な', 'に', 'ぬ', 'ね', 'の', 'ん'].includes(card.character)),
  H: allHiragana.filter(card => ['は', 'ひ', 'ふ', 'へ', 'ほ'].includes(card.character)),
  M: allHiragana.filter(card => ['ま', 'み', 'む', 'め', 'も'].includes(card.character)),
  Y: allHiragana.filter(card => ['や', 'ゆ', 'よ'].includes(card.character)),
  R: allHiragana.filter(card => ['ら', 'り', 'る', 'れ', 'ろ'].includes(card.character)),
  W: allHiragana.filter(card => ['わ', 'を'].includes(card.character))
};

const Hiragana = () => {
  // Initialize each group's visibility to true.
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
          <h1>Practice Hiragana</h1>
          <Link className="home-link" to="/">Back to Home</Link>
        </header>
        <main className="practice-main">
          {/* Toggle sliders for each group */}
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
          
          {/* Render flashcards for each group if toggled on */}
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

export default Hiragana;
