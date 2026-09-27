import React, { useState } from 'react';
import { Sparkles, Cookie, Heart, Smile } from 'lucide-react';
import { sound } from '../utils/audio';
import { CHOCOBI_FACTS } from '../data/shinchanData';

export const AboutUs: React.FC = () => {
  const [activeRule, setActiveRule] = useState(0);

  const rules = [
    {
      title: "Rule #1: Chocobi Comes First",
      emoji: "🍪",
      desc: "Breakfast, lunch, or snack time—if there are star-shaped chocolate biscuits in a hexagonal green box, nothing else matters.",
      soundAction: () => sound.playChocobiCrunch()
    },
    {
      title: "Rule #2: The Buri-Buri Solution",
      emoji: "🍑",
      desc: "Whenever you are in trouble with Mom or the teachers, drop your trousers and start shaking those hips with confidence!",
      soundAction: () => sound.playBuriBuri()
    },
    {
      title: "Rule #3: Duck When Mom Drills",
      emoji: "💢",
      desc: "When Misae charges up the legendary 'Giri-Giri' fist drill on both sides of your head, apologize quickly or run to Hiroshi!",
      soundAction: () => sound.playGiriGiri()
    },
    {
      title: "Rule #4: Action Kamen Never Quits",
      emoji: "⚡",
      desc: "Stand tall, cross your arms into an 'X', and shout 'Action Beam! Wahaha!' Evil monsters won't stand a chance.",
      soundAction: () => sound.playActionBeam()
    }
  ];

  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        {/* Header */}
        <div className="section-header text-center">
          <span className="clay-pill clay-pill-yellow">
            ✨ The Kasukabe Chronicles
          </span>
          <h2 className="section-title">
            About the Show: <span className="highlight-red">Crayon Shin-chan</span>
          </h2>
          <p className="section-desc">
            Created in 1990 by Yoshito Usui, Crayon Shin-chan (クレヨンしんちゃん) has captivated generations worldwide with its fearless slapstick comedy, genuine family warmth, and the unforgettable antics of 5-year-old Shinnosuke Nohara in Kasukabe, Japan.
          </p>
        </div>

        {/* 4 Interactive Clay Stats */}
        <div className="about-stats-grid">
          <div 
            className="clay-card clay-card-red stat-card"
            onClick={() => sound.playPop(520)}
          >
            <div className="stat-icon-wrapper">
              <Smile size={32} />
            </div>
            <h3 className="stat-number">34+</h3>
            <p className="stat-label">Years of Laughter</p>
            <span className="stat-sub">Premiered manga in 1990</span>
          </div>

          <div 
            className="clay-card clay-card-yellow stat-card"
            onClick={() => sound.playChocobiCrunch()}
          >
            <div className="stat-icon-wrapper">
              <Cookie size={32} />
            </div>
            <h3 className="stat-number">1,200+</h3>
            <p className="stat-label">Anime Episodes</p>
            <span className="stat-sub">Over 3 decades of TV</span>
          </div>

          <div 
            className="clay-card clay-card-green stat-card"
            onClick={() => sound.playActionBeam()}
          >
            <div className="stat-icon-wrapper">
              <Sparkles size={32} />
            </div>
            <h3 className="stat-number">31</h3>
            <p className="stat-label">Theatrical Movies</p>
            <span className="stat-sub">Epic worldwide adventures</span>
          </div>

          <div 
            className="clay-card clay-card-orange stat-card"
            onClick={() => sound.playShiroBoing()}
          >
            <div className="stat-icon-wrapper">
              <Heart size={32} />
            </div>
            <h3 className="stat-number">10M+</h3>
            <p className="stat-label">Beloved Fans</p>
            <span className="stat-sub">Across 45+ countries</span>
          </div>
        </div>

        {/* Interactive Feature Grid: Shinchan Life Rules & Chocobi Spotlight */}
        <div className="about-interactive-grid">
          {/* Left: Shinchan Golden Rules */}
          <div className="clay-card rules-card">
            <div className="rules-header">
              <span className="rules-badge">Shinchan's Code</span>
              <h3 className="rules-title">Four Golden Rules of Kasukabe</h3>
            </div>

            <div className="rules-nav">
              {rules.map((rule, idx) => (
                <button
                  key={rule.title}
                  type="button"
                  className={`clay-pill ${activeRule === idx ? 'clay-pill-red' : 'clay-pill-yellow'}`}
                  onClick={() => {
                    setActiveRule(idx);
                    rule.soundAction();
                  }}
                >
                  <span>{rule.emoji}</span>
                  <span>Rule #{idx + 1}</span>
                </button>
              ))}
            </div>

            <div className="clay-inset rule-content-box">
              <div className="rule-content-title">
                <span className="rule-big-emoji">{rules[activeRule].emoji}</span>
                <h4>{rules[activeRule].title}</h4>
              </div>
              <p className="rule-content-desc">
                {rules[activeRule].desc}
              </p>
              <button
                type="button"
                className="clay-btn clay-btn-yellow"
                style={{ marginTop: '16px' }}
                onClick={rules[activeRule].soundAction}
              >
                <span>Trigger Rule Sound</span>
                <span>🔊</span>
              </button>
            </div>
          </div>

          {/* Right: The Chocobi Legend Spotlight */}
          <div className="clay-card chocobi-spotlight-card">
            <div className="chocobi-spotlight-header">
              <span className="clay-pill clay-pill-green">
                🐊 Shinchan’s Ultimate Snack
              </span>
              <h3>The Chocobi (チョコビ) Phenomenon</h3>
              <p>
                No episode of Shinchan is complete without the iconic green hexagonal box! Packed with chocolate star biscuits and the lovable pink crocodile mascot Wani-san.
              </p>
            </div>

            <div className="chocobi-facts-list">
              {CHOCOBI_FACTS.map((fact) => (
                <div 
                  key={fact.title}
                  className="clay-card chocobi-fact-item"
                  onClick={() => sound.playChocobiCrunch()}
                >
                  <span className="fact-star">⭐</span>
                  <div>
                    <strong>{fact.title}</strong>
                    <p>{fact.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="clay-btn clay-btn-green"
              style={{ width: '100%', marginTop: '20px' }}
              onClick={() => sound.playChocobiCrunch()}
            >
              <span>Eat a Virtual Chocobi Star! 🍪</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
