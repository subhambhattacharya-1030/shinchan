import React, { useState, useMemo } from 'react';
import { Volume2, Search, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';
import { OTHER_CHARACTERS, type Character } from '../data/shinchanData';
import confetti from 'canvas-confetti';

export const CharactersSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const playCharSound = (char: Character) => {
    switch (char.soundType) {
      case 'action':
        sound.playActionBeam();
        break;
      case 'buri':
        sound.playBuriBuri();
        break;
      case 'giri':
        sound.playGiriGiri();
        break;
      case 'kazama':
        sound.playKazamaChime();
        break;
      case 'sparkle':
        sound.playHimawariSparkle();
        break;
      case 'wahaha':
        sound.playWahahaLaugh();
        break;
      case 'shiro':
        sound.playShiroBoing();
        break;
      case 'sigh':
        sound.playHiroshiSigh();
        break;
      default:
        sound.playPop(520);
    }
  };

  const handleCardClick = (char: Character) => {
    playCharSound(char);
    if (char.id === 'actionkamen') {
      confetti({
        particleCount: 40,
        spread: 50,
        colors: ['#4CAF50', '#FFD100', '#FF3B30']
      });
    }
  };

  const filteredCharacters = useMemo(() => {
    return OTHER_CHARACTERS.filter((char) => {
      const matchesCategory = selectedCategory === 'all' || char.category === selectedCategory;
      const matchesSearch = 
        char.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        char.japaneseName.includes(searchQuery) ||
        char.role.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="characters" className="section-padding characters-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="clay-pill clay-pill-yellow">
            🌟 Kasukabe All-Stars
          </span>
          <h2 className="section-title">
            All the Characters of <span className="highlight-red">Shin-chan</span>
          </h2>
          <p className="section-desc">
            From the valiant Kasukabe Defense Group to the kindhearted "Mafia Principal" and the invincible Action Kamen, meet the colorful ensemble that turns every episode into pure gold!
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="characters-filter-wrapper">
          {/* Category Tabs */}
          <div className="category-pill-group">
            <button
              type="button"
              className={`clay-pill ${selectedCategory === 'all' ? 'clay-pill-red' : 'clay-pill-yellow'}`}
              onClick={() => {
                sound.playPop(480);
                setSelectedCategory('all');
              }}
            >
              🌟 All Characters ({OTHER_CHARACTERS.length})
            </button>

            <button
              type="button"
              className={`clay-pill ${selectedCategory === 'kasukabe' ? 'clay-pill-red' : 'clay-pill-yellow'}`}
              onClick={() => {
                sound.playPop(500);
                setSelectedCategory('kasukabe');
              }}
            >
              🧒 Kasukabe Defense Group
            </button>

            <button
              type="button"
              className={`clay-pill ${selectedCategory === 'heroes' ? 'clay-pill-red' : 'clay-pill-yellow'}`}
              onClick={() => {
                sound.playPop(520);
                setSelectedCategory('heroes');
              }}
            >
              🦸 Heroes & Idols
            </button>

            <button
              type="button"
              className={`clay-pill ${selectedCategory === 'teachers' ? 'clay-pill-red' : 'clay-pill-yellow'}`}
              onClick={() => {
                sound.playPop(540);
                setSelectedCategory('teachers');
              }}
            >
              🏫 Teachers & Adults
            </button>
          </div>

          {/* Search Box */}
          <div className="clay-card search-input-container">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search by name or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="clay-search-input"
            />
            {searchQuery && (
              <button 
                type="button" 
                onClick={() => setSearchQuery('')}
                className="clear-search-btn"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Characters Grid */}
        {filteredCharacters.length === 0 ? (
          <div className="clay-card empty-search-card text-center">
            <span style={{ fontSize: '48px' }}>🔍</span>
            <h3>No Kasukabe Friends Found</h3>
            <p>Try searching for "Kazama", "Action Kamen", "Nene", or "Principal"!</p>
            <button
              type="button"
              className="clay-btn clay-btn-yellow"
              style={{ marginTop: '16px' }}
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="characters-grid">
            {filteredCharacters.map((char) => (
              <div
                key={char.id}
                className="clay-card char-card"
                onClick={() => handleCardClick(char)}
                style={{
                  borderTop: `5px solid ${char.borderColor}`
                }}
              >
                {/* Header with Emoji Avatar */}
                <div className="char-card-header">
                  <div 
                    className="char-avatar-clay anim-squish"
                    style={{ background: char.bgGradient, borderColor: char.borderColor }}
                  >
                    <span className="char-emoji">{char.iconEmoji}</span>
                  </div>

                  <div className="char-titles">
                    <span className="char-kanji">{char.japaneseName}</span>
                    <h3 className="char-name">{char.name}</h3>
                    <span className="clay-pill clay-pill-orange char-role">
                      {char.role}
                    </span>
                  </div>
                </div>

                {/* Catchphrase */}
                <div className="clay-inset char-quote-box">
                  <p>"{char.catchphrase}"</p>
                </div>

                {/* Bio Description */}
                <p className="char-desc">{char.description}</p>

                {/* Special Move Badge */}
                <div className="char-badge-row">
                  <span className="clay-pill clay-pill-yellow">
                    ⚡ {char.specialMove}
                  </span>
                </div>

                {/* Fun Fact */}
                <p className="char-fact">
                  💡 <em>{char.funFact}</em>
                </p>

                {/* Interactive Sound Trigger */}
                <div className="char-card-footer">
                  <button
                    type="button"
                    className="clay-btn clay-btn-yellow char-sound-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(char);
                    }}
                  >
                    <Volume2 size={16} />
                    <span>Say Hi!</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Kasukabe Defense Group Oath Banner */}
        <div className="clay-card kasukabe-oath-card">
          <div className="oath-left">
            <span style={{ fontSize: '38px' }}>🛡️</span>
            <div>
              <h3>Kasukabe Defense Group Official Oath! (春日部防衛隊)</h3>
              <p>"Kasukabe Defense Force, Fire! (春日部防衛隊、ファイヤー！)" Protecting peace, friendship, and afternoon snacks!</p>
            </div>
          </div>
          <button
            type="button"
            className="clay-btn clay-btn-red"
            onClick={() => {
              sound.playActionBeam();
              confetti({
                particleCount: 50,
                spread: 70,
                colors: ['#FF3B30', '#FFD100', '#4CAF50']
              });
            }}
          >
            <Sparkles size={16} />
            <span>Kasukabe Fire! 🔥</span>
          </button>
        </div>
      </div>
    </section>
  );
};
