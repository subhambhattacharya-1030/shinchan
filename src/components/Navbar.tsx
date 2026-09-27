import React, { useState } from 'react';
import { Volume2, VolumeX, Music, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';
import confetti from 'canvas-confetti';

interface NavbarProps {
  onBuriBuri: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBuriBuri }) => {
  const [isMuted, setIsMuted] = useState(sound.isMuted);
  const [isBgmOn, setIsBgmOn] = useState(sound.isBgmPlaying);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMute = () => {
    const nextState = !isMuted;
    setIsMuted(nextState);
    sound.setMuted(nextState);
    if (!nextState) {
      sound.playPop(520);
    }
  };

  const toggleBgm = () => {
    const nextBgm = sound.toggleBgm();
    setIsBgmOn(nextBgm);
    if (nextBgm) {
      sound.playPop(640);
    }
  };

  const handleConfettiBuri = () => {
    sound.playBuriBuri();
    onBuriBuri();
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.2 },
      colors: ['#FF3B30', '#FFD100', '#4CAF50', '#FF7A00', '#FFFFFF']
    });
  };

  return (
    <header className="navbar-wrapper">
      <nav className="clay-card navbar-container">
        {/* Clay Logo */}
        <a 
          href="#home" 
          className="navbar-brand"
          onClick={() => sound.playPop(480)}
        >
          <div className="brand-clay-icon">
            <span className="brand-emoji">🍑</span>
          </div>
          <div className="brand-text-group">
            <span className="brand-title">SHINCHAN</span>
            <span className="brand-sub">Kasukabe 1990</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="nav-links-desktop">
          <a href="#about" onClick={() => sound.playPop(450)} className="nav-item">About Show</a>
          <a href="#family" onClick={() => sound.playPop(480)} className="nav-item">Nohara Family</a>
          <a href="#characters" onClick={() => sound.playPop(520)} className="nav-item">All Characters</a>
          <a href="#soundboard" onClick={() => sound.playPop(560)} className="nav-item">Soundboard</a>
          <a href="#discord" onClick={() => sound.playPop(600)} className="nav-item">Join Club</a>
        </div>

        {/* Action Controls */}
        <div className="nav-controls">
          {/* BGM Toggle */}
          <button
            type="button"
            className={`clay-btn-circle ${isBgmOn ? 'clay-btn-green' : 'clay-btn-white'}`}
            onClick={toggleBgm}
            title={isBgmOn ? "Mute Background Music" : "Play Kasukabe BGM"}
            aria-label="Toggle background music"
          >
            <Music size={18} className={isBgmOn ? "anim-squish" : ""} />
          </button>

          {/* Master SFX Mute */}
          <button
            type="button"
            className={`clay-btn-circle ${isMuted ? 'clay-btn-red' : 'clay-btn-yellow'}`}
            onClick={toggleMute}
            title={isMuted ? "Unmute Cartoon SFX" : "Mute Sound Effects"}
            aria-label="Toggle Sound Effects"
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>

          {/* Buri Buri CTA */}
          <button
            type="button"
            className="clay-btn clay-btn-red nav-cta"
            onClick={handleConfettiBuri}
          >
            <Sparkles size={16} />
            <span>Buri Buri!</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="clay-btn-circle clay-btn-white mobile-toggle"
            onClick={() => {
              sound.playPop(500);
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Open menu"
          >
            <span style={{ fontSize: '20px' }}>{mobileMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="clay-card mobile-drawer">
          <a href="#about" onClick={() => { sound.playPop(450); setMobileMenuOpen(false); }}>About Show</a>
          <a href="#family" onClick={() => { sound.playPop(480); setMobileMenuOpen(false); }}>Nohara Family</a>
          <a href="#characters" onClick={() => { sound.playPop(520); setMobileMenuOpen(false); }}>All Characters</a>
          <a href="#soundboard" onClick={() => { sound.playPop(560); setMobileMenuOpen(false); }}>Soundboard & Mini Game</a>
          <a href="#discord" onClick={() => { sound.playPop(600); setMobileMenuOpen(false); }}>Discord Club</a>
          <button
            type="button"
            className="clay-btn clay-btn-red"
            style={{ width: '100%', marginTop: '12px' }}
            onClick={() => {
              handleConfettiBuri();
              setMobileMenuOpen(false);
            }}
          >
            Buri Buri Dance! 🍑
          </button>
        </div>
      )}
    </header>
  );
};
