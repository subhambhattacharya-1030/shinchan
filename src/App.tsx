import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { FamilySection } from './components/FamilySection';
import { CharactersSection } from './components/CharactersSection';
import { SoundboardSection } from './components/SoundboardSection';
import { DiscordSection } from './components/DiscordSection';
import { Footer } from './components/Footer';
import './App.css';

export function App() {
  const [isWiggling, setIsWiggling] = useState(false);

  const triggerWiggle = () => {
    setIsWiggling(true);
    setTimeout(() => {
      setIsWiggling(false);
    }, 700);
  };

  return (
    <div className="app-root">
      {/* 1. Claymorphic Navigation Menu */}
      <Navbar onBuriBuri={triggerWiggle} />

      <main>
        {/* 2. Claymorphic Hero Section with 3D Figurine */}
        <Hero isWiggling={isWiggling} triggerWiggle={triggerWiggle} />

        {/* 3. About the Show (Kasukabe Chronicles, Stats, Rules, Chocobi) */}
        <AboutUs />

        {/* 4. About Shinchan and its Family (The Nohara Clan) */}
        <FamilySection />

        {/* 5. All the Characters of the Cartoon (Kasukabe Defense Group, Teachers, Heroes) */}
        <CharactersSection />

        {/* 6. Interactive Shinchan Soundboard & Chocobi Star Catcher Mini-Game */}
        <SoundboardSection />

        {/* 7. Join the Discord Community (Strictly no blue/purple) */}
        <DiscordSection />
      </main>

      {/* 8. Claymorphic Footer with Wisdom Generator & Newsletter */}
      <Footer />
    </div>
  );
}

export default App;
