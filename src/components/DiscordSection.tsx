import React, { useState } from 'react';
import { Sparkles, Copy, Check, MessageSquare } from 'lucide-react';
import { sound } from '../utils/audio';
import { DISCORD_PERKS } from '../data/shinchanData';
import confetti from 'canvas-confetti';

export const DiscordSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    sound.playPop(580);
    navigator.clipboard.writeText('https://discord.gg/kasukabe-shinchan');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleJoinClub = () => {
    sound.playActionBeam();
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.7 },
      colors: ['#FF3B30', '#FFD100', '#4CAF50', '#FF7A00']
    });
  };

  return (
    <section id="discord" className="section-padding discord-section">
      <div className="container">
        {/* Main Clay Card Container */}
        <div className="clay-card discord-main-card">
          <div className="discord-header-row">
            <div className="discord-title-col">
              <span className="clay-pill clay-pill-red">
                🏰 The Kasukabe Defense HQ
              </span>
              <h2 className="discord-title">
                Join the <span className="highlight-red">Shin-chan</span> Discord Community!
              </h2>
              <p className="discord-desc">
                Become an official member of the Kasukabe Defense Force (春日部防衛隊)! Hang out with thousands of Shin-chan fans, share memes, join weekly watch parties, and earn your Action Kamen badge!
              </p>
            </div>

            {/* Live Counter Badge */}
            <div className="clay-card live-status-clay clay-card-yellow anim-squish">
              <div className="online-indicator-row">
                <span className="live-dot-green"></span>
                <span className="live-status-text">15,420 Troublemakers Online</span>
              </div>
              <span className="live-total-members">48,900+ Registered Defenders</span>
            </div>
          </div>

          {/* Community Perks Grid */}
          <div className="discord-perks-grid">
            {DISCORD_PERKS.map((perk) => (
              <div
                key={perk.title}
                className="clay-card perk-card"
                onClick={() => sound.playPop(520)}
              >
                <div className="perk-icon-circle">
                  <span>{perk.icon}</span>
                </div>
                <h4 className="perk-title">{perk.title}</h4>
                <p className="perk-desc">{perk.desc}</p>
              </div>
            ))}
          </div>

          {/* Action Callout Row */}
          <div className="clay-inset discord-cta-box">
            <div className="discord-link-group">
              <div className="clay-pill discord-url-pill">
                <MessageSquare size={18} className="highlight-red" />
                <span className="discord-url-text">discord.gg/kasukabe-shinchan</span>
              </div>
              <button
                type="button"
                className="clay-btn clay-btn-white copy-btn"
                onClick={handleCopyLink}
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span>{copied ? 'Copied Invite!' : 'Copy Link'}</span>
              </button>
            </div>

            <button
              type="button"
              className="clay-btn clay-btn-red discord-join-btn"
              onClick={handleJoinClub}
            >
              <Sparkles size={20} />
              <span>Join Kasukabe Defense Force! 🔥</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
