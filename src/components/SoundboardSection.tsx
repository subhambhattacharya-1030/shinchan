import React, { useState, useEffect, useRef } from 'react';
import { Volume2, Sparkles, Trophy, RotateCcw, Play } from 'lucide-react';
import { sound } from '../utils/audio';
import confetti from 'canvas-confetti';

interface StarCookie {
  id: number;
  x: number;
  y: number;
  speed: number;
  size: number;
}

export const SoundboardSection: React.FC = () => {
  const [activePad, setActivePad] = useState<string | null>(null);

  // Mini-game state
  const [isPlayingGame, setIsPlayingGame] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(0);
  const [basketX, setBasketX] = useState<number>(50); // percentage 0-100
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const [cookies, setCookies] = useState<StarCookie[]>([]);

  const soundPads = [
    {
      id: 'buri',
      title: 'Buri-Buri Dance',
      subtitle: 'Squishy Hip Wobble',
      emoji: '🍑',
      bgClass: 'clay-card-red',
      btnClass: 'clay-btn-red',
      action: () => sound.playBuriBuri()
    },
    {
      id: 'action',
      title: 'Action Beam!',
      subtitle: 'Heroic Invincible Laser',
      emoji: '⚡',
      bgClass: 'clay-card-green',
      btnClass: 'clay-btn-green',
      action: () => {
        sound.playActionBeam();
        confetti({
          particleCount: 30,
          spread: 40,
          colors: ['#4CAF50', '#FFD100']
        });
      }
    },
    {
      id: 'chocobi',
      title: 'Chocobi Crunch',
      subtitle: 'Crispy Star Biscuit',
      emoji: '🍪',
      bgClass: 'clay-card-yellow',
      btnClass: 'clay-btn-yellow',
      action: () => sound.playChocobiCrunch()
    },
    {
      id: 'shiro',
      title: 'Shiro Cotton Candy',
      subtitle: 'Fluffy Rolling Boing',
      emoji: '🐶',
      bgClass: 'clay-card-orange',
      btnClass: 'clay-btn-orange',
      action: () => sound.playShiroBoing()
    },
    {
      id: 'giri',
      title: 'Misae Giri-Giri',
      subtitle: 'Temple Fist Drill',
      emoji: '💢',
      bgClass: 'clay-card-red',
      btnClass: 'clay-btn-red',
      action: () => sound.playGiriGiri()
    },
    {
      id: 'himawari',
      title: 'Himawari Sparkle',
      subtitle: 'Diamond Twinkle Chime',
      emoji: '✨',
      bgClass: 'clay-card-yellow',
      btnClass: 'clay-btn-yellow',
      action: () => sound.playHimawariSparkle()
    },
    {
      id: 'wahaha',
      title: 'Action Laugh',
      subtitle: 'WA-HA-HA Fanfare',
      emoji: '🦸',
      bgClass: 'clay-card-green',
      btnClass: 'clay-btn-green',
      action: () => sound.playWahahaLaugh()
    },
    {
      id: 'kazama',
      title: 'Kazama Elegance',
      subtitle: 'Sophisticated Harp Bell',
      emoji: '📚',
      bgClass: 'clay-card-yellow',
      btnClass: 'clay-btn-yellow',
      action: () => sound.playKazamaChime()
    }
  ];

  const handlePadTrigger = (pad: typeof soundPads[0]) => {
    setActivePad(pad.id);
    pad.action();
    setTimeout(() => setActivePad(null), 300);
  };

  // Mini-Game Loop
  const startGame = () => {
    sound.playPop(520);
    setScore(0);
    setCookies([]);
    setIsPlayingGame(true);
  };

  const stopGame = () => {
    setIsPlayingGame(false);
    if (score > highScore) {
      setHighScore(score);
    }
  };

  // Mouse / Touch movement for basket
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!gameAreaRef.current || !isPlayingGame) return;
    const rect = gameAreaRef.current.getBoundingClientRect();
    const relativeX = ((e.clientX - rect.left) / rect.width) * 100;
    setBasketX(Math.max(5, Math.min(95, relativeX)));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!gameAreaRef.current || !isPlayingGame || !e.touches[0]) return;
    const rect = gameAreaRef.current.getBoundingClientRect();
    const relativeX = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
    setBasketX(Math.max(5, Math.min(95, relativeX)));
  };

  useEffect(() => {
    if (!isPlayingGame) return;

    let cookieCounter = 0;
    // Spawn cookies every 800ms
    const spawnTimer = setInterval(() => {
      cookieCounter++;
      setCookies((prev) => [
        ...prev,
        {
          id: cookieCounter,
          x: Math.random() * 85 + 7,
          y: 0,
          speed: Math.random() * 1.5 + 2,
          size: 28
        }
      ]);
    }, 850);

    // Animation frame for falling cookies & collision
    const gameLoop = setInterval(() => {
      setCookies((prevCookies) => {
        const nextCookies: StarCookie[] = [];

        prevCookies.forEach((cookie) => {
          const nextY = cookie.y + cookie.speed;

          // Check if caught by basket at y ~ 85%
          if (nextY >= 80 && nextY <= 92 && Math.abs(cookie.x - basketX) < 14) {
            // Caught!
            sound.playChocobiCrunch();
            setScore((s) => {
              const newScore = s + 1;
              if (newScore % 10 === 0) {
                confetti({
                  particleCount: 40,
                  spread: 60,
                  colors: ['#FFD100', '#FF3B30', '#4CAF50']
                });
                sound.playWahahaLaugh();
              }
              return newScore;
            });
          } else if (nextY < 100) {
            nextCookies.push({ ...cookie, y: nextY });
          }
        });

        return nextCookies;
      });
    }, 40);

    return () => {
      clearInterval(spawnTimer);
      clearInterval(gameLoop);
    };
  }, [isPlayingGame, basketX]);

  return (
    <section id="soundboard" className="section-padding soundboard-section">
      <div className="container">
        {/* Header */}
        <div className="section-header text-center">
          <span className="clay-pill clay-pill-yellow">
            🎵 Kasukabe Audio Laboratory
          </span>
          <h2 className="section-title">
            The Interactive <span className="highlight-red">Shin-chan Soundboard</span>
          </h2>
          <p className="section-desc">
            Tap the tactile 3D clay pads to fire iconic cartoon sound effects generated natively in real-time with zero lag! Then play the Chocobi Star Catcher mini-game below!
          </p>
        </div>

        {/* 8-Pad Soundboard Grid */}
        <div className="soundboard-grid">
          {soundPads.map((pad) => {
            const isActive = activePad === pad.id;
            return (
              <div
                key={pad.id}
                className={`clay-card sound-pad-card ${pad.bgClass} ${isActive ? 'pad-active-squish' : ''}`}
                onClick={() => handlePadTrigger(pad)}
              >
                <div className="pad-emoji-circle anim-squish">
                  <span className="pad-emoji">{pad.emoji}</span>
                </div>
                <h3 className="pad-title">{pad.title}</h3>
                <p className="pad-sub">{pad.subtitle}</p>

                <button
                  type="button"
                  className={`clay-btn ${pad.btnClass} pad-trigger-btn`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePadTrigger(pad);
                  }}
                >
                  <Volume2 size={16} />
                  <span>Play Effect</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Mini Game: Chocobi Star Catcher */}
        <div className="clay-card minigame-wrapper">
          <div className="minigame-header">
            <div className="minigame-title-group">
              <span className="clay-pill clay-pill-yellow">
                🎮 Interactive Mini-Game
              </span>
              <h3>Chocobi Star Catcher</h3>
              <p>Catch falling star cookies with Shinchan’s snack bowl! Move your mouse or drag your finger across the court.</p>
            </div>

            <div className="minigame-stats">
              <div className="clay-pill clay-pill-red score-pill">
                <span>Score:</span>
                <strong>{score}</strong>
              </div>
              <div className="clay-pill clay-pill-green score-pill">
                <Trophy size={16} />
                <span>Best: {highScore}</span>
              </div>
              {!isPlayingGame ? (
                <button
                  type="button"
                  className="clay-btn clay-btn-green"
                  onClick={startGame}
                >
                  <Play size={18} />
                  <span>Start Game</span>
                </button>
              ) : (
                <button
                  type="button"
                  className="clay-btn clay-btn-red"
                  onClick={stopGame}
                >
                  <RotateCcw size={18} />
                  <span>Stop Game</span>
                </button>
              )}
            </div>
          </div>

          {/* Game Canvas Container */}
          <div
            ref={gameAreaRef}
            className="game-arena clay-inset"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {!isPlayingGame && (
              <div className="game-overlay text-center">
                <span style={{ fontSize: '50px' }}>⭐</span>
                <h4>Ready to catch some Chocobi?</h4>
                <p>Click "Start Game" and move your cursor or drag on mobile!</p>
                <button
                  type="button"
                  className="clay-btn clay-btn-green"
                  style={{ marginTop: '14px' }}
                  onClick={startGame}
                >
                  <Sparkles size={18} />
                  <span>Play Now!</span>
                </button>
              </div>
            )}

            {/* Falling star cookies */}
            {cookies.map((cookie) => (
              <div
                key={cookie.id}
                className="falling-star"
                style={{
                  left: `${cookie.x}%`,
                  top: `${cookie.y}%`,
                  fontSize: `${cookie.size}px`
                }}
              >
                ⭐
              </div>
            ))}

            {/* Shinchan Basket */}
            <div
              className="shinchan-basket clay-card clay-card-yellow"
              style={{ left: `${basketX}%` }}
            >
              <span className="basket-emoji">🥣</span>
              <span className="basket-label">Shinchan Bowl</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
