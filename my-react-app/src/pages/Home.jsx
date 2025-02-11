import React from 'react';
import { Link } from 'react-router-dom';
import ScrollingCharacters from '../components/ScrollingCharacters';

const Home = () => {
  return (
    <div className="page-container">
      {/* Horizontally scrolling row of Japanese characters */}
      <ScrollingCharacters />

      <div className="home">
        <div className="home-flex">
          {/* Authentication Box */}
          <div className="auth-box">
            <header className="auth-header">
              <h2>Welcome Back!</h2>
            </header>
            <main className="auth-main">
              <p>Please log in or sign up to get the full experience.</p>
              <div className="auth-buttons">
                <Link className="auth-btn" to="/login">Login</Link>
                <Link className="auth-btn" to="/signup">Signup</Link>
              </div>
            </main>
          </div>
          {/* Katakana Practice Box */}
          <div className="home-box">
            <header className="home-header">
              <h1>Katakana Practice</h1>
            </header>
            <main className="home-main">
              <p>Practice Katakana flashcards and learn the characters.</p>
              <Link className="practice-link" to="/practice">Go to Katakana Practice</Link>
            </main>
          </div>
          {/* Hiragana Practice Box */}
          <div className="home-box">
            <header className="home-header">
              <h1>Hiragana Practice</h1>
            </header>
            <main className="home-main">
              <p>Practice Hiragana flashcards and learn the characters.</p>
              <Link className="practice-link" to="/hiragana">Go to Hiragana Practice</Link>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
