export interface Character {
  id: string;
  name: string;
  japaneseName: string;
  role: string;
  category: 'family' | 'kasukabe' | 'heroes' | 'teachers';
  catchphrase: string;
  description: string;
  specialMove: string;
  mischiefScore: number; // 1-100
  soundType: 'buri' | 'action' | 'crunch' | 'shiro' | 'giri' | 'sparkle' | 'wahaha' | 'sigh' | 'kazama';
  bgGradient: string;
  borderColor: string;
  avatarColor: string;
  iconEmoji: string;
  funFact: string;
}

export const NOHARA_FAMILY: Character[] = [
  {
    id: 'shinchan',
    name: 'Shinnosuke Nohara',
    japaneseName: '野原 しんのすけ',
    role: 'The 5-Year-Old Troublemaker',
    category: 'family',
    catchphrase: 'Ora Shinchan da zo! Look at my Buri-Buri dance! 🍑',
    description: 'A mischievous 5-year-old boy in Sunflower Class. Loves Action Kamen, Chocobi star biscuits, beautiful older women (Nanako-oneesan), and confusing adults with inappropriate humor.',
    specialMove: 'Buri-Buri Hip Dance & Elephant Wiggle',
    mischiefScore: 99,
    soundType: 'buri',
    bgGradient: 'linear-gradient(135deg, #FFF1F0, #FFE2E0)',
    borderColor: '#FF3B30',
    avatarColor: '#FF3B30',
    iconEmoji: '🧒',
    funFact: 'Hates green peppers with a passion, but will do anything for a single box of Chocobi.'
  },
  {
    id: 'misae',
    name: 'Misae Nohara',
    japaneseName: '野原 みさえ',
    role: 'The Supreme Household Ruler',
    category: 'family',
    catchphrase: 'Shinnosuke! Stop bothering people and clean up your toys! 💢',
    description: 'The energetic 29-year-old homemaker. Deals with Shinchan\'s infinite antics, hunts department store discounts, and protects her secret savings for luxury dresses.',
    specialMove: 'Giri-Giri Temple Drill & Fist of Justice',
    mischiefScore: 65,
    soundType: 'giri',
    bgGradient: 'linear-gradient(135deg, #FFF4EC, #FFE6D6)',
    borderColor: '#FF7A00',
    avatarColor: '#FF7A00',
    iconEmoji: '👩',
    funFact: 'Can detect department store bargain sales from three train stations away.'
  },
  {
    id: 'hiroshi',
    name: 'Hiroshi Nohara',
    japaneseName: '野原 ひろし',
    role: 'The 32-Year Mortgage Warrior',
    category: 'family',
    catchphrase: 'Another hard day at Futaba Shoji... where is my cold beer? 🍺',
    description: 'The hardworking salaryman father at Futaba Shoji. Surviving 32 years of home mortgage with a warm heart, gentle patience, and socks so lethal they could qualify as biological weapons.',
    specialMove: 'Lethal Toxic Sock Fumigation Cloud',
    mischiefScore: 40,
    soundType: 'sigh',
    bgGradient: 'linear-gradient(135deg, #FFFDF0, #FFF5CF)',
    borderColor: '#E6A800',
    avatarColor: '#FFD100',
    iconEmoji: '👨',
    funFact: 'His socks have saved the Nohara family from villains in multiple movie adventures.'
  },
  {
    id: 'himawari',
    name: 'Himawari Nohara',
    japaneseName: '野原 ひまわり',
    role: 'The Diamond-Loving Baby Sister',
    category: 'family',
    catchphrase: 'Ta-ya! Shiny sparkle jewels and ikemen boys! ✨',
    description: 'Shinchan\'s mischievous 0-year-old baby sister. Can crawl faster than a sports car whenever she spots glittering diamonds, luxury brand bags, or handsome young men.',
    specialMove: 'Supersonic Crawl & Jewelry Grab',
    mischiefScore: 88,
    soundType: 'sparkle',
    bgGradient: 'linear-gradient(135deg, #FFF8E7, #FFEFC7)',
    borderColor: '#FFD100',
    avatarColor: '#FFA000',
    iconEmoji: '👶',
    funFact: 'Her hearing senses only activate for rustling jewelry or handsome actors on TV.'
  },
  {
    id: 'shiro',
    name: 'Shiro (The White Dog)',
    japaneseName: 'シロ',
    role: 'The Pure Cotton Candy Guardian',
    category: 'family',
    catchphrase: 'Wan-wan! (Did Shinchan forget to feed me again?) 🐶',
    description: 'The fluffy white Maltese mix rescued by Shinchan. Often acts as the only sane and responsible member of the Nohara household, looking after baby Himawari and doing chores.',
    specialMove: 'Wataame (Roll Into Cotton Candy Ball)',
    mischiefScore: 10,
    soundType: 'shiro',
    bgGradient: 'linear-gradient(135deg, #FBFBFB, #F2EFE9)',
    borderColor: '#D4A373',
    avatarColor: '#8D5B4C',
    iconEmoji: '🐶',
    funFact: 'Can walk himself, do his own laundry, and knows basic house security codes.'
  }
];

export const OTHER_CHARACTERS: Character[] = [
  {
    id: 'kazama',
    name: 'Toru Kazama',
    japaneseName: '風間 トオル',
    role: 'The Ambitious Elite Student',
    category: 'kasukabe',
    catchphrase: 'Shinchan, get away from my ear! I am an elite child! 📚',
    description: 'Top student in cram school and Sunflower class. Constantly exasperated by Shinchan whispering into his ear, while secretly being the biggest closet fan of Magical Girl Moe-P.',
    specialMove: 'Ear-Breeze Defense & Secret Moe-P Fan Club',
    mischiefScore: 45,
    soundType: 'kazama',
    bgGradient: 'linear-gradient(135deg, #FDF7E7, #FCEBC2)',
    borderColor: '#E6A800',
    avatarColor: '#FFD100',
    iconEmoji: '👦',
    funFact: 'Spends 20 minutes every morning fixing his signature hair fringe.'
  },
  {
    id: 'nene',
    name: 'Nene Sakurada',
    japaneseName: '桜田 ネネ',
    role: 'The Real House Drama Boss',
    category: 'kasukabe',
    catchphrase: 'Today we will play Real Omamagoto! Masao, you are the deadbeat husband! 🐰',
    description: 'Looks sweet and gentle on the outside, but forces the boys to act out soap operas about divorce and loan sharks. Releases her rage on poor stuffed rabbit dolls in the closet.',
    specialMove: 'Stuffed Bunny Punching Frenzy',
    mischiefScore: 82,
    soundType: 'giri',
    bgGradient: 'linear-gradient(135deg, #FFF2F0, #FFE0DB)',
    borderColor: '#FF3B30',
    avatarColor: '#FF6B6B',
    iconEmoji: '👧',
    funFact: 'Her stuffed rabbits have seen things no toy should ever witness.'
  },
  {
    id: 'masao',
    name: 'Masao Sato',
    japaneseName: '佐藤 マサオ',
    role: 'The Gentle Onigiri Boy',
    category: 'kasukabe',
    catchphrase: 'Uwahhh! Shinchan, Nene-chan is terrifying! Save me! 🍙',
    description: 'The kind-hearted, easily frightened boy with an onigiri-shaped bald head. Loves drawing comic books, gets dragged into Nene\'s domestic dramas, and crushes on Ai-chan.',
    specialMove: 'Rice-Ball Tears & Trembling Defense',
    mischiefScore: 25,
    soundType: 'sigh',
    bgGradient: 'linear-gradient(135deg, #F3FAF4, #E3F6E6)',
    borderColor: '#4CAF50',
    avatarColor: '#4CAF50',
    iconEmoji: '🍙',
    funFact: 'His round bald head is so shiny it can reflect sunlight signals in emergencies.'
  },
  {
    id: 'bochan',
    name: 'Bo-chan',
    japaneseName: 'ボーちゃん',
    role: 'The Silent Philosopher & Rock Savant',
    category: 'kasukabe',
    catchphrase: 'Bo... I found a heart-shaped rock... Bo... 🪨',
    description: 'The enigmatic, slow-speaking boy who is arguably the true genius of Kasukabe. Collects strange stones, constructs complex emergency devices, and commands his perpetual runny nose.',
    specialMove: 'Aerodynamic Runny Nose Propeller',
    mischiefScore: 30,
    soundType: 'shiro',
    bgGradient: 'linear-gradient(135deg, #FFFBF0, #FFF2D1)',
    borderColor: '#E6A800',
    avatarColor: '#FFCE00',
    iconEmoji: '🗿',
    funFact: 'Has never had a cold, his nose fluid simply defies conventional physics.'
  },
  {
    id: 'actionkamen',
    name: 'Action Kamen',
    japaneseName: 'アクション仮面',
    role: 'The Champion of Justice',
    category: 'heroes',
    catchphrase: 'Wahaha! Action Beam! Fire! ⚡',
    description: 'Shinchan\'s greatest idol in the entire universe. A masked martial artist hero in red and green armor who battles evil invaders with his invincible Action Beam and booming laugh.',
    specialMove: 'Action Beam & Invincible Laugh',
    mischiefScore: 5,
    soundType: 'action',
    bgGradient: 'linear-gradient(135deg, #F0FAF1, #DCF7E0)',
    borderColor: '#4CAF50',
    avatarColor: '#388E3C',
    iconEmoji: '🦸',
    funFact: 'Shinchan has watched all 347 televised episodes and memorized every pose.'
  },
  {
    id: 'buriburizaemon',
    name: 'Buriburizaemon',
    japaneseName: 'ぶりぶりざえもん',
    role: 'The Cowardly Pig Hero for Hire',
    category: 'heroes',
    catchphrase: 'I am the hero of justice! My rescue fee is 10,000 yen! 🐷',
    description: 'A talking pig superhero born from Shinchan\'s imagination. Carries a wooden katana, brags about justice, and immediately defects to the winning villain the second danger appears.',
    specialMove: 'Instant Betrayal & Expensive Invoice',
    mischiefScore: 95,
    soundType: 'buri',
    bgGradient: 'linear-gradient(135deg, #FFF4F0, #FFE5DC)',
    borderColor: '#FF7A00',
    avatarColor: '#FF7A00',
    iconEmoji: '🐷',
    funFact: 'Guarantees to switch sides at least three times in any 10-minute battle.'
  },
  {
    id: 'enchousensei',
    name: 'Principal Bunta Takakura',
    japaneseName: '高倉 文太 (園長先生)',
    role: 'The Gentle "Mafia Boss" Principal',
    category: 'teachers',
    catchphrase: 'I am not a gang leader! I just love tending the kindergarten flowers! 🌸',
    description: 'The incredibly warm, gentle, and sentimental principal of Futaba Kindergarten. Unfortunately wears yellow checked suits and sunglasses that make strangers mistake him for a crime syndicate boss.',
    specialMove: 'Accidental Mafia Aura & Tears of Joy',
    mischiefScore: 15,
    soundType: 'wahaha',
    bgGradient: 'linear-gradient(135deg, #FFFDF0, #FFF5CF)',
    borderColor: '#FFD100',
    avatarColor: '#FFD100',
    iconEmoji: '🕶️',
    funFact: 'Cries whenever children sing the graduation song at kindergarten ceremonies.'
  },
  {
    id: 'yoshinaga',
    name: 'Midori Yoshinaga',
    japaneseName: '吉永 緑',
    role: 'Sunflower Class Teacher',
    category: 'teachers',
    catchphrase: 'Sunflower class, let us sing together! Shinchan, put your pants on! 🌻',
    description: 'The cheerful and devoted teacher of Sunflower Class. Constantly keeps Shinchan from peeling his clothes off, while fiercely competing with Rose Class teacher Matsuzaka.',
    specialMove: 'Kindergarten Harmony Whistle',
    mischiefScore: 20,
    soundType: 'sparkle',
    bgGradient: 'linear-gradient(135deg, #F3FAF4, #E2F5E5)',
    borderColor: '#4CAF50',
    avatarColor: '#52B788',
    iconEmoji: '🌻',
    funFact: 'Can herd 25 hyperactive five-year-olds without losing her sunny smile.'
  },
  {
    id: 'matsuzaka',
    name: 'Ume Matsuzaka',
    japaneseName: '松坂 梅',
    role: 'Rose Class Rival Teacher',
    category: 'teachers',
    catchphrase: 'My pedigree is aristocratic Roppongi! (Don\'t look at my instant noodles) 🌹',
    description: 'The haughty teacher of Rose Class. Spends her entire paycheck on luxury fur coats and perfumes to appear wealthy, while secretly living in an old apartment eating cup ramen.',
    specialMove: 'Rose Class High-Pitch Snobbery',
    mischiefScore: 50,
    soundType: 'kazama',
    bgGradient: 'linear-gradient(135deg, #FFF5F2, #FFE4DC)',
    borderColor: '#FF3B30',
    avatarColor: '#FF3B30',
    iconEmoji: '🌹',
    funFact: 'Her secret dream is marrying a handsome billionaire doctor at a rooftop dinner.'
  },
  {
    id: 'nanako',
    name: 'Nanako Ohara',
    japaneseName: '大原 ななこ',
    role: 'Shinchan\'s Absolute Angel',
    category: 'heroes',
    catchphrase: 'Shinnosuke-kun, would you like to share some fresh biscuits? 💖',
    description: 'The kind, beautiful university student who treats Shinchan with pure sweetness and respect. The only person on Earth who can turn Shinchan into a polite, blushing, obedient gentleman.',
    specialMove: 'Gentle Angelic Smile of Calming',
    mischiefScore: 0,
    soundType: 'sparkle',
    bgGradient: 'linear-gradient(135deg, #FFF8EC, #FFEED4)',
    borderColor: '#FF7A00',
    avatarColor: '#FF9234',
    iconEmoji: '💖',
    funFact: 'Whenever Nanako appears, Shinchan speaks in formal keigo and fixes his collar.'
  }
];

export const SHINCHAN_QUOTES = [
  { text: "Ora Shinchan da zo! Look at my Buri-Buri dance! 🍑", tag: "Signature Dance" },
  { text: "Action Beam! Wwahaha! Evil villains, prepare to be defeated! ⚡", tag: "Hero Mode" },
  { text: "Hey pretty lady, do you like green peppers? Because I certainly don't! 🫑", tag: "Flirting 101" },
  { text: "Mom, you have three new wrinkles on your forehead today! 💢", tag: "Danger Zone" },
  { text: "Life is like a box of Chocobi—crispy, sweet, and gone in 30 seconds! 🍪", tag: "Philosophy" },
  { text: "Shiro, roll into cotton candy! Good boy, now guard the house! 🐶", tag: "Best Doggo" },
  { text: "Kazama-kun, your ear smells like strawberry shampoo today! 🍓", tag: "Bromance" },
  { text: "I am not blushing, my cheeks just ate too many strawberries! 😳", tag: "Tsundere" }
];

export const CHOCOBI_FACTS = [
  { title: "Hexagonal Box", desc: "The iconic green hexagonal box design is instantly recognizable worldwide." },
  { title: "Wani-san Mascot", desc: "The lovable pink crocodile in yellow shirt has been cheering snack lovers since 1990." },
  { title: "Star Biscuit", desc: "Each chocolate cookie is shaped like a lucky five-pointed star." },
  { title: "Collectable Cards", desc: "Every box comes with a limited edition Action Kamen collectible card!" }
];

export const DISCORD_PERKS = [
  { icon: '🍪', title: 'Daily Chocobi Drops', desc: 'Earn virtual Chocobi cookies and unlock exclusive Kasukabe badges.' },
  { icon: '🎬', title: 'Weekly Anime Watch Parties', desc: 'Stream classic Shinchan episodes & movie marathons with fans.' },
  { icon: '🍑', title: 'Buri-Buri Voice Channels', desc: 'Voice chats with custom soundboards, sound effects, and laughs.' },
  { icon: '🎨', title: 'Clay & Fan Art Contests', desc: 'Showcase your 3D art, drawings, and comic strips to win prizes.' },
  { icon: '🐶', title: 'Shiro Pet Showcase', desc: 'Share your fluffy pets and teach them the cotton candy roll!' },
  { icon: '⚡', title: 'Action Kamen Ranks', desc: 'Level up from Sunflower Student to Kasukabe Defense Commander!' }
];
