import React, { useState } from 'react';
import { Zap, Users, Sparkles, Volume2, ArrowRight } from 'lucide-react';
import { sound } from '../utils/audio';
import { SHINCHAN_QUOTES } from '../data/shinchanData';
import confetti from 'canvas-confetti';

interface HeroProps {
  isWiggling: boolean;
  triggerWiggle: () => void;
}

export const Hero: React.FC<HeroProps> = ({ isWiggling, triggerWiggle }) => {
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [isShootingBeam, setIsShootingBeam] = useState(false);
  const [tapCount, setTapCount] = useState(0);

  const currentQuote = SHINCHAN_QUOTES[quoteIdx];

  const handleNextQuote = () => {
    sound.playPop(480);
    setQuoteIdx((prev) => (prev + 1) % SHINCHAN_QUOTES.length);
  };

  const handleActionBeam = () => {
    sound.playActionBeam();
    setIsShootingBeam(true);
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 60,
      origin: { x: 0.2, y: 0.6 },
      colors: ['#FFD100', '#FF3B30', '#4CAF50']
    });
    setTimeout(() => setIsShootingBeam(false), 800);
  };

  const handleShinchanTap = () => {
    sound.playBuriBuri();
    triggerWiggle();
    setTapCount(c => c + 1);
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        {/* Left Column: Story & Controls */}
        <div className="hero-content">
          <div className="hero-badge-row">
            <span className="clay-pill clay-pill-yellow anim-float">
              ⭐ 5-Year-Old Trouble Master
            </span>
            <span className="clay-pill clay-pill-red">
              Kasukabe, Japan
            </span>
          </div>

          <h1 className="hero-title">
            Hey! I’m <span className="highlight-red">Shinnosuke</span> Nohara!
          </h1>
          <p className="hero-subtitle-jp">
            オラは野原しんのすけだゾ！ (Crayon Shin-chan)
          </p>

          <p className="hero-lead">
            Welcome to the tactile, squishy 3D clay world of Kasukabe! Dive into daily chaos with the Nohara family, fight evil alongside Action Kamen, crunch on star-shaped Chocobi, and master the legendary Buri-Buri dance!
          </p>

          {/* Interactive Speech Bubble */}
          <div className="clay-card speech-bubble-card">
            <div className="speech-header">
              <span className="speech-author">Shinnosuke says:</span>
              <span className="clay-pill clay-pill-orange speech-tag">
                {currentQuote.tag}
              </span>
            </div>
            <p className="speech-text">"{currentQuote.text}"</p>
            <div className="speech-actions">
              <button
                type="button"
                className="clay-btn clay-btn-white speech-btn"
                onClick={() => {
                  sound.playBuriBuri();
                }}
              >
                <Volume2 size={16} />
                <span>Hear Voice</span>
              </button>
              <button
                type="button"
                className="clay-btn clay-btn-yellow speech-btn"
                onClick={handleNextQuote}
              >
                <span>Next Quote</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Action Button Row */}
          <div className="hero-cta-group">
            <button
              type="button"
              className={`clay-btn clay-btn-red hero-main-btn ${isShootingBeam ? 'anim-beam-glow' : ''}`}
              onClick={handleActionBeam}
            >
              <Zap size={20} />
              <span>Action Beam! ⚡</span>
            </button>

            <a
              href="#family"
              className="clay-btn clay-btn-yellow hero-sub-btn"
              onClick={() => sound.playPop(520)}
            >
              <Users size={18} />
              <span>Meet Family 👨‍👩‍👧‍👦</span>
            </a>

            <button
              type="button"
              className="clay-btn clay-btn-orange hero-sub-btn"
              onClick={handleShinchanTap}
            >
              <Sparkles size={18} />
              <span>Buri Dance 🍑</span>
            </button>
          </div>

          {/* Quick Stats Pills */}
          <div className="hero-stats-row">
            <div className="clay-pill clay-pill-yellow">
              🍪 <strong>10,000+</strong> Chocobi Devoured
            </div>
            <div className="clay-pill clay-pill-green">
              ⚡ <strong>347</strong> Action Kamen Wins
            </div>
            <div className="clay-pill clay-pill-red">
              🚫 <strong>0%</strong> Blue & Purple
            </div>
          </div>
        </div>

        {/* Right Column: 3D Clay Figurine Showcase */}
        <div className="hero-visual">
          <div className="clay-stage-wrapper">
            {/* The 3D Figurine Frame */}
            <div 
              className={`clay-card hero-image-stage ${isWiggling ? 'anim-buri' : ''}`}
              onClick={handleShinchanTap}
              title="Click on Shinchan to make him dance!"
            >
              <div className="stage-lighting-glow"></div>
              <img
                src="/shinchan-hero.jpg"
                alt="3D Clay Figurine of Crayon Shinchan Shinnosuke Nohara"
                className="hero-clay-img"
              />

              {/* Tap to tickle interactive overlay badge */}
              <div className="clay-pill clay-pill-yellow tap-badge anim-float">
                <span>👈 Tap me to dance! ({tapCount})</span>
              </div>
            </div>

            {/* Floating Clay Elements */}
            {/* 1. Floating Chocobi Star Biscuit */}
            <div
              className="clay-card floating-item chocobi-floating anim-float"
              onClick={() => sound.playChocobiCrunch()}
              title="Click to crunch a Chocobi biscuit!"
            >
              <span className="float-icon">⭐</span>
              <div className="float-info">
                <strong>Chocobi</strong>
                <span>Crunch!</span>
              </div>
            </div>

            {/* 2. Floating Action Kamen Mask */}
            <div
              className="clay-card floating-item action-floating anim-float-rev"
              onClick={() => sound.playActionBeam()}
              title="Click for Action Kamen Beam!"
            >
              <span className="float-icon">🦸</span>
              <div className="float-info">
                <strong>Action Beam</strong>
                <span>Wahaha!</span>
              </div>
            </div>

            {/* 3. Floating Shiro Cloud */}
            <div
              className="clay-card floating-item shiro-floating anim-float"
              onClick={() => sound.playShiroBoing()}
              title="Click for Shiro's Cotton Candy Roll!"
            >
              <span className="float-icon">🐶</span>
              <div className="float-info">
                <strong>Shiro</strong>
                <span>Cotton Candy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
