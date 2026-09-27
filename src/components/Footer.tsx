import React, { useState } from 'react';
import { ArrowUp, Sparkles, Send } from 'lucide-react';
import { sound } from '../utils/audio';
import { SHINCHAN_QUOTES } from '../data/shinchanData';
import confetti from 'canvas-confetti';

export const Footer: React.FC = () => {
  const [wisdomIdx, setWisdomIdx] = useState(0);
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNextWisdom = () => {
    sound.playPop(500);
    setWisdomIdx((prev) => (prev + 1) % SHINCHAN_QUOTES.length);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    sound.playChocobiCrunch();
    setSubscribed(true);
    confetti({
      particleCount: 40,
      spread: 60,
      colors: ['#FFD100', '#FF3B30', '#4CAF50']
    });
    setTimeout(() => {
      setEmailInput('');
      setSubscribed(false);
    }, 4000);
  };

  const scrollToTop = () => {
    sound.playShiroBoing();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container">
        {/* Clay Quote of the Day Generator */}
        <div className="clay-card footer-wisdom-box">
          <div className="wisdom-content">
            <span className="wisdom-pill clay-pill clay-pill-yellow">
              💡 Daily Shinchan Wisdom
            </span>
            <p className="wisdom-quote">
              "{SHINCHAN_QUOTES[wisdomIdx].text}"
            </p>
          </div>
          <button
            type="button"
            className="clay-btn clay-btn-yellow wisdom-btn"
            onClick={handleNextWisdom}
          >
            <Sparkles size={16} />
            <span>Spin Wisdom 🎲</span>
          </button>
        </div>

        {/* Main Clay Footer Container */}
        <div className="clay-card footer-main-card">
          <div className="footer-grid">
            {/* Column 1: Brand & Bio */}
            <div className="footer-col brand-col">
              <div className="brand-header">
                <span className="brand-clay-icon">
                  <span className="brand-emoji">🍑</span>
                </span>
                <span className="footer-brand-title">SHINCHAN</span>
              </div>
              <p className="footer-tagline">
                The unofficial tactile 3D clay tribute to Crayon Shin-chan (クレヨンしんちゃん), celebrating 34+ years of laughter, family warmth, and Kasukabe adventures!
              </p>
              <div className="clay-pill clay-pill-red zero-blue-badge">
                🚫 100% Guaranteed Zero Blue & Zero Purple
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-col">
              <h4 className="footer-heading">Kasukabe Navigation</h4>
              <ul className="footer-links">
                <li><a href="#home" onClick={() => sound.playPop(420)}>Hero Stage</a></li>
                <li><a href="#about" onClick={() => sound.playPop(450)}>About the Show</a></li>
                <li><a href="#family" onClick={() => sound.playPop(480)}>The Nohara Family</a></li>
                <li><a href="#characters" onClick={() => sound.playPop(510)}>All 15+ Characters</a></li>
                <li><a href="#soundboard" onClick={() => sound.playPop(540)}>Interactive Soundboard</a></li>
                <li><a href="#discord" onClick={() => sound.playPop(570)}>Discord Community</a></li>
              </ul>
            </div>

            {/* Column 3: Shiro's Doghouse Newsletter */}
            <div className="footer-col newsletter-col">
              <h4 className="footer-heading">Shiro’s Doghouse Letter</h4>
              <p className="newsletter-desc">
                Subscribe for secret Chocobi discount alerts, Kasukabe Defense Force news, and Shin-chan memes!
              </p>

              <form onSubmit={handleSubscribe} className="newsletter-form">
                <div className="newsletter-input-wrap">
                  <input
                    type="email"
                    placeholder="Enter your email..."
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="clay-inset newsletter-input"
                    required
                  />
                  <button
                    type="submit"
                    className="clay-btn clay-btn-red newsletter-submit-btn"
                  >
                    <Send size={16} />
                  </button>
                </div>
                {subscribed && (
                  <span className="clay-pill clay-pill-green sub-success-badge">
                    🐶 Shiro delivered your biscuit! Subscribed!
                  </span>
                )}
              </form>

              {/* Social Clay Circles */}
              <div className="social-clay-row">
                {['📺', '🐤', '📸', '🎵', '💬'].map((icon, i) => (
                  <button
                    key={i}
                    type="button"
                    className="clay-btn-circle clay-btn-white social-circle"
                    onClick={() => sound.playPop(440 + i * 30)}
                    aria-label={`Social link ${i + 1}`}
                  >
                    <span>{icon}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom-bar">
            <p className="footer-copyright">
              Honoring the genius of <strong>Yoshito Usui (1958–2009)</strong> & Futabasha / Shin-Ei Animation. Built with boundless affection for Shinchan fans worldwide.
            </p>

            <button
              type="button"
              className="clay-btn clay-btn-yellow back-to-top-btn"
              onClick={scrollToTop}
            >
              <span>Back to Top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
