import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Practice from './pages/Practice';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Hiragana from './pages/Hiragana';
import TimedTest from './pages/TimedTest';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/hiragana" element={<Hiragana />} />
          <Route path="/timedtest" element={<TimedTest />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
