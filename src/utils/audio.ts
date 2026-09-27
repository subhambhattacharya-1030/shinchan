// Web Audio API Synthesizer for Shinchan Cartoon Effects
// 100% offline, zero external asset dependencies, zero lag!

class ShinchanSoundEngine {
  private ctx: AudioContext | null = null;
  private bgmInterval: number | null = null;
  public isMuted: boolean = false;
  public isBgmPlaying: boolean = false;

  private initCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (muted && this.isBgmPlaying) {
      this.stopBgm();
    }
  }

  // 1. Tactile Clay Button Pop
  public playPop(frequency = 420) {
    if (this.isMuted) return;
    try {
      const ctx = this.initCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(frequency, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(frequency * 0.4, ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.09);
    } catch {
      // Audio context might be restricted before user gesture
    }
  }

  // 2. Action Beam Laser Effect (Action Kamen!)
  public playActionBeam() {
    if (this.isMuted) return;
    try {
      const ctx = this.initCtx();
      const now = ctx.currentTime;

      // Charge up sweep
      const chargeOsc = ctx.createOscillator();
      const chargeGain = ctx.createGain();
      chargeOsc.type = 'sawtooth';
      chargeOsc.frequency.setValueAtTime(220, now);
      chargeOsc.frequency.exponentialRampToValueAtTime(880, now + 0.25);
      chargeGain.gain.setValueAtTime(0.01, now);
      chargeGain.gain.linearRampToValueAtTime(0.2, now + 0.22);
      chargeGain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      chargeOsc.connect(chargeGain);
      chargeGain.connect(ctx.destination);
      chargeOsc.start(now);
      chargeOsc.stop(now + 0.26);

      // 3 Rapid Pew-Pew Laser Blasts
      [0.26, 0.38, 0.50].forEach((startTime, idx) => {
        const laserOsc = ctx.createOscillator();
        const laserGain = ctx.createGain();
        laserOsc.type = 'square';
        laserOsc.frequency.setValueAtTime(1400 - idx * 100, now + startTime);
        laserOsc.frequency.exponentialRampToValueAtTime(200, now + startTime + 0.12);

        laserGain.gain.setValueAtTime(0.22, now + startTime);
        laserGain.gain.exponentialRampToValueAtTime(0.001, now + startTime + 0.12);

        laserOsc.connect(laserGain);
        laserGain.connect(ctx.destination);
        laserOsc.start(now + startTime);
        laserOsc.stop(now + startTime + 0.13);
      });
    } catch (e) {
      console.warn('Audio error:', e);
    }
  }

  // 3. Iconic Buri-Buri Squishy Dance Sound
  public playBuriBuri() {
    if (this.isMuted) return;
    try {
      const ctx = this.initCtx();
      const now = ctx.currentTime;

      // Play 4 bouncy wobbles simulating the hip wiggle
      const frequencies = [240, 310, 260, 350, 290];
      frequencies.forEach((freq, i) => {
        const time = now + i * 0.09;
        const osc = ctx.createOscillator();
        const modOsc = ctx.createOscillator();
        const modGain = ctx.createGain();
        const gain = ctx.createGain();

        // Vibrato modulation for squishiness
        modOsc.type = 'sine';
        modOsc.frequency.value = 28;
        modGain.gain.value = 60;
        modOsc.connect(osc.frequency);

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, time);
        osc.frequency.exponentialRampToValueAtTime(freq * 0.7, time + 0.08);

        gain.gain.setValueAtTime(0.28, time);
        gain.gain.exponentialRampToValueAtTime(0.005, time + 0.08);

        osc.connect(gain);
        gain.connect(ctx.destination);

        modOsc.start(time);
        osc.start(time);
        modOsc.stop(time + 0.09);
        osc.stop(time + 0.09);
      });
    } catch (e) {
      console.warn('Audio error:', e);
    }
  }

  // 4. Chocobi Star Cookie Crunch
  public playChocobiCrunch() {
    if (this.isMuted) return;
    try {
      const ctx = this.initCtx();
      const now = ctx.currentTime;

      // Crisp noise burst
      const bufferSize = ctx.sampleRate * 0.15;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1800;
      filter.Q.value = 3;

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.3, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

      noise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(ctx.destination);
      noise.start(now);

      // Sweet chime bell at the end
      const chime = ctx.createOscillator();
      const chimeGain = ctx.createGain();
      chime.type = 'sine';
      chime.frequency.setValueAtTime(987.77, now + 0.06); // B5
      chimeGain.gain.setValueAtTime(0.18, now + 0.06);
      chimeGain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      chime.connect(chimeGain);
      chimeGain.connect(ctx.destination);
      chime.start(now + 0.06);
      chime.stop(now + 0.36);
    } catch (e) {
      console.warn('Audio error:', e);
    }
  }

  // 5. Shiro Fluffy Boing
  public playShiroBoing() {
    if (this.isMuted) return;
    try {
      const ctx = this.initCtx();
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(750, now + 0.15);
      osc.frequency.exponentialRampToValueAtTime(450, now + 0.3);

      gain.gain.setValueAtTime(0.26, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.33);
    } catch (e) {
      console.warn('Audio error:', e);
    }
  }

  // 6. Misae "Giri-Giri" Head Twist Sound
  public playGiriGiri() {
    if (this.isMuted) return;
    try {
      const ctx = this.initCtx();
      const now = ctx.currentTime;

      // 6 rapid ratchet clicks
      for (let i = 0; i < 6; i++) {
        const time = now + i * 0.045;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(400 + i * 60, time);
        osc.frequency.exponentialRampToValueAtTime(150, time + 0.035);

        gain.gain.setValueAtTime(0.2, time);
        gain.gain.exponentialRampToValueAtTime(0.01, time + 0.035);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(time);
        osc.stop(time + 0.04);
      }
    } catch (e) {
      console.warn('Audio error:', e);
    }
  }

  // 7. Himawari Sparkle (Diamond Twinkle)
  public playHimawariSparkle() {
    if (this.isMuted) return;
    try {
      const ctx = this.initCtx();
      const now = ctx.currentTime;
      const notes = [659.25, 783.99, 987.77, 1318.51, 1567.98]; // E5, G5, B5, E6, G6

      notes.forEach((freq, idx) => {
        const t = now + idx * 0.06;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, t);

        gain.gain.setValueAtTime(0.18, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(t);
        osc.stop(t + 0.26);
      });
    } catch (e) {
      console.warn('Audio error:', e);
    }
  }

  // 8. Action Kamen Laugh Fanfare (WA-HA-HA!)
  public playWahahaLaugh() {
    if (this.isMuted) return;
    try {
      const ctx = this.initCtx();
      const now = ctx.currentTime;
      const chord = [392.00, 523.25, 659.25]; // G4, C5, E5

      [0, 0.18, 0.36].forEach((offset, step) => {
        chord.forEach((freq) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq * (1 + step * 0.15), now + offset);

          gain.gain.setValueAtTime(0.15, now + offset);
          gain.gain.exponentialRampToValueAtTime(0.001, now + offset + 0.15);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(now + offset);
          osc.stop(now + offset + 0.16);
        });
      });
    } catch (e) {
      console.warn('Audio error:', e);
    }
  }

  // 9. Hiroshi Salaryman Sigh / Stinky Sock "Fzzzz"
  public playHiroshiSigh() {
    if (this.isMuted) return;
    try {
      const ctx = this.initCtx();
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.exponentialRampToValueAtTime(65, now + 0.45);

      gain.gain.setValueAtTime(0.22, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.46);
    } catch (e) {
      console.warn('Audio error:', e);
    }
  }

  // 10. Kazama-kun Elite Chime
  public playKazamaChime() {
    if (this.isMuted) return;
    try {
      const ctx = this.initCtx();
      const now = ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50];

      notes.forEach((freq, idx) => {
        const t = now + idx * 0.08;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, t);

        gain.gain.setValueAtTime(0.2, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(t);
        osc.stop(t + 0.32);
      });
    } catch (e) {
      console.warn('Audio error:', e);
    }
  }

  // Background Music Loop: Cheerful Kasukabe Cartoon Marimba
  public startBgm() {
    if (this.isBgmPlaying || this.isMuted) return;
    try {
      const ctx = this.initCtx();
      this.isBgmPlaying = true;

      // Playful 4-bar looping tune
      const melody = [
        { f: 523.25, d: 0.15 }, { f: 523.25, d: 0.15 }, { f: 587.33, d: 0.15 }, { f: 659.25, d: 0.25 },
        { f: 523.25, d: 0.2 }, { f: 659.25, d: 0.2 }, { f: 783.99, d: 0.4 },
        { f: 659.25, d: 0.15 }, { f: 698.46, d: 0.15 }, { f: 783.99, d: 0.25 }, { f: 659.25, d: 0.2 },
        { f: 587.33, d: 0.2 }, { f: 523.25, d: 0.4 }
      ];

      let noteIndex = 0;
      const playNextNote = () => {
        if (!this.isBgmPlaying || this.isMuted) return;
        const note = melody[noteIndex];
        const now = ctx.currentTime;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(note.f, now);

        gain.gain.setValueAtTime(0.06, now); // Gentle volume
        gain.gain.exponentialRampToValueAtTime(0.001, now + note.d * 1.5);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + note.d * 1.6);

        noteIndex = (noteIndex + 1) % melody.length;
      };

      this.bgmInterval = window.setInterval(playNextNote, 240);
    } catch (e) {
      console.warn('BGM error:', e);
    }
  }

  public stopBgm() {
    this.isBgmPlaying = false;
    if (this.bgmInterval) {
      clearInterval(this.bgmInterval);
      this.bgmInterval = null;
    }
  }

  public toggleBgm() {
    if (this.isBgmPlaying) {
      this.stopBgm();
      return false;
    } else {
      this.startBgm();
      return true;
    }
  }
}

export const sound = new ShinchanSoundEngine();
