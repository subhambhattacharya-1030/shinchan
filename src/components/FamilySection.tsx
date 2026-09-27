import React, { useState } from 'react';
import { Volume2, Award, Sparkles, Flame } from 'lucide-react';
import { sound } from '../utils/audio';
import { NOHARA_FAMILY, type Character } from '../data/shinchanData';

export const FamilySection: React.FC = () => {
  const [activeMemberId, setActiveMemberId] = useState<string>('shinchan');

  const playMemberSound = (char: Character) => {
    switch (char.soundType) {
      case 'buri':
        sound.playBuriBuri();
        break;
      case 'giri':
        sound.playGiriGiri();
        break;
      case 'sigh':
        sound.playHiroshiSigh();
        break;
      case 'sparkle':
        sound.playHimawariSparkle();
        break;
      case 'shiro':
        sound.playShiroBoing();
        break;
      default:
        sound.playPop(500);
    }
  };

  return (
    <section id="family" className="section-padding family-section">
      <div className="container">
        {/* Header */}
        <div className="section-header text-center">
          <span className="clay-pill clay-pill-red">
            👨‍👩‍👧‍👦 The Nohara Household
          </span>
          <h2 className="section-title">
            About Shin-chan & His <span className="highlight-red">Crazy Family</span>
          </h2>
          <p className="section-desc">
            Living in Kasukabe, Saitama Prefecture, the Nohara family is famous across Japan for their hilarious daily drama, endless love, and unstoppable laughter. Click any family member to hear their signature cartoon sound!
          </p>
        </div>

        {/* Family Cards Grid */}
        <div className="family-grid">
          {NOHARA_FAMILY.map((member) => {
            const isSelected = activeMemberId === member.id;
            return (
              <div
                key={member.id}
                className={`clay-card family-card ${isSelected ? 'family-card-active' : ''}`}
                style={{
                  borderTop: `6px solid ${member.borderColor}`
                }}
                onClick={() => {
                  setActiveMemberId(member.id);
                  playMemberSound(member);
                }}
              >
                {/* Top Badge & Emoji Avatar */}
                <div className="family-card-top">
                  <div 
                    className="family-avatar-clay anim-squish"
                    style={{ background: member.bgGradient, borderColor: member.borderColor }}
                  >
                    <span className="family-avatar-emoji">{member.iconEmoji}</span>
                  </div>

                  <div className="family-identity">
                    <span className="japanese-kanji">{member.japaneseName}</span>
                    <h3 className="family-name">{member.name}</h3>
                    <span className="clay-pill clay-pill-yellow family-role-pill">
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Catchphrase Bubble */}
                <div className="clay-inset family-quote-bubble">
                  <p>"{member.catchphrase}"</p>
                </div>

                {/* Description */}
                <p className="family-desc">{member.description}</p>

                {/* Special Move */}
                <div className="special-move-box">
                  <div className="special-move-title">
                    <Flame size={16} className="highlight-red" />
                    <strong>Special Move:</strong>
                  </div>
                  <span className="special-move-val">{member.specialMove}</span>
                </div>

                {/* Mischief Meter */}
                <div className="mischief-container">
                  <div className="mischief-header">
                    <span>Chaos Level</span>
                    <strong>{member.mischiefScore}%</strong>
                  </div>
                  <div className="clay-inset mischief-track">
                    <div 
                      className="mischief-fill"
                      style={{ 
                        width: `${member.mischiefScore}%`,
                        backgroundColor: member.borderColor
                      }}
                    ></div>
                  </div>
                </div>

                {/* Fun Fact */}
                <div className="fun-fact-box">
                  <Award size={15} style={{ color: member.borderColor }} />
                  <span>{member.funFact}</span>
                </div>

                {/* Interactive Sound Action Button */}
                <button
                  type="button"
                  className="clay-btn clay-btn-yellow family-sound-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveMemberId(member.id);
                    playMemberSound(member);
                  }}
                >
                  <Volume2 size={16} />
                  <span>Play {member.name.split(' ')[0]}'s SFX</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Special Banner: Nohara Household Secrets */}
        <div className="clay-card clay-card-yellow nohara-banner">
          <div className="nohara-banner-content">
            <span className="brand-emoji" style={{ fontSize: '42px' }}>🏠</span>
            <div>
              <h3>The 32-Year Kasukabe Mortgage House</h3>
              <p>
                Two stories, one small garden where Shiro's doghouse stands, and endless memories of burned curries, afternoon siestas, and chaotic neighborhood visits!
              </p>
            </div>
          </div>
          <button
            type="button"
            className="clay-btn clay-btn-red"
            onClick={() => sound.playShiroBoing()}
          >
            <Sparkles size={16} />
            <span>Visit Shiro's House! 🐶</span>
          </button>
        </div>
      </div>
    </section>
  );
};
