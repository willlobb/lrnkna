import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';
import './TimedTest.css';

const katakanaData = [
  { character: 'ア', romaji: 'a' },
  { character: 'イ', romaji: 'i' },
  { character: 'ウ', romaji: 'u' },
  { character: 'エ', romaji: 'e' },
  { character: 'オ', romaji: 'o' },
  { character: 'カ', romaji: 'ka' },
  { character: 'キ', romaji: 'ki' },
  { character: 'ク', romaji: 'ku' },
  { character: 'ケ', romaji: 'ke' },
  { character: 'コ', romaji: 'ko' }
  // ... add more as needed
];

const hiraganaData = [
  { character: 'あ', romaji: 'a' },
  { character: 'い', romaji: 'i' },
  { character: 'う', romaji: 'u' },
  { character: 'え', romaji: 'e' },
  { character: 'お', romaji: 'o' },
  { character: 'か', romaji: 'ka' },
  { character: 'き', romaji: 'ki' },
  { character: 'く', romaji: 'ku' },
  { character: 'け', romaji: 'ke' },
  { character: 'こ', romaji: 'ko' }
  // ... add more as needed
];

const TimedTest = () => {
  const [testType, setTestType] = useState('katakana'); // 'katakana' or 'hiragana'
  const [testStarted, setTestStarted] = useState(false);
  const [timer, setTimer] = useState(30);
  const [score, setScore] = useState(0);
  const [currentChar, setCurrentChar] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState(""); // "correct" or "incorrect"
  const [gameOver, setGameOver] = useState(false);
  const timerRef = useRef(null);

  // Select a random character from the chosen dataset.
  const getRandomCharacter = () => {
    const data = testType === 'katakana' ? katakanaData : hiraganaData;
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
  };

  // Start the test.
  const startTest = () => {
    setTestStarted(true);
    setGameOver(false);
    setTimer(10);
    setScore(0);
    setCurrentChar(getRandomCharacter());
    setUserInput('');
  };

  // Start a countdown timer.
  useEffect(() => {
    if (testStarted && timer > 0) {
      timerRef.current = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [testStarted, timer]);

  // When time runs out, stop the test.
  useEffect(() => {
    if (timer <= 0 && testStarted) {
      setTestStarted(false);
      setGameOver(true);
      clearInterval(timerRef.current);
    }
  }, [timer, testStarted]);

  // Clear feedback after a short delay.
  useEffect(() => {
    if (feedback !== "") {
      const timeout = setTimeout(() => {
        setFeedback("");
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [feedback]);

  // Handle answer submission.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentChar) return;
    const correctAnswer = currentChar.romaji.toLowerCase();
    if (userInput.trim().toLowerCase() === correctAnswer) {
      setScore(prev => prev + 1);
      setTimer(prev => prev + 1); // Add one second for correct answer.
      setFeedback("correct");
    } else {
      setFeedback("incorrect");
    }
    setCurrentChar(getRandomCharacter());
    setUserInput('');
  };

  return (
    <div className="page-container">
      <div className="timed-test">
        <header className="test-header">
          <h1>Timed Test</h1>
          <Link className="home-link" to="/">Back to Home</Link>
        </header>
        {/* Test Setup (Before Start) */}
        {!testStarted && !gameOver ? (
          <div className="test-setup">
            <div className="test-options">
              <label>
                <input
                  type="radio"
                  value="katakana"
                  checked={testType === 'katakana'}
                  onChange={() => setTestType('katakana')}
                />
                Katakana
              </label>
              <label>
                <input
                  type="radio"
                  value="hiragana"
                  checked={testType === 'hiragana'}
                  onChange={() => setTestType('hiragana')}
                />
                Hiragana
              </label>
            </div>
            <button className="start-btn" onClick={startTest}>Start Test</button>
          </div>
        ) : testStarted ? (
          // Test In-Progress
          <div className="test-area">
            <div className="test-info">
              <span>Time Left: {timer} seconds</span>
              <span>Score: {score}</span>
            </div>
            {currentChar && (
              <div className="test-character">
                <span className="character-display">{currentChar.character}</span>
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter romaji..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                autoFocus
                className={feedback === "incorrect" ? "shake" : ""}
              />
              <button type="submit" className="submit-btn">Submit</button>
            </form>
            {feedback === "correct" && <div className="feedback correct">✓ Correct!</div>}
            {feedback === "incorrect" && <div className="feedback incorrect">✗ Incorrect!</div>}
          </div>
        ) : (
          // Game Over
          <div className="test-area">
            <h2>Time's Up!</h2>
            <p>Your final score is: {score}</p>
            <button className="start-btn" onClick={startTest}>Try Again</button>
            <Confetti width={window.innerWidth} height={window.innerHeight} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TimedTest;
