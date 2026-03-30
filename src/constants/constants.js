export const projects = [
{
  slug: "takedown-legends",
  title: "Takedown Legends",
  featured: true,
  canPlay: true,

  role: "Gameplay / Multiplayer Programmer",

  description: `Multiplayer battle royale for mobile featuring fast-paced PvP combat.`,

  longDescription: `
    Takedown Legends is a <strong>Top-down 3D multiplayer battle royale</strong> for mobile platforms,
    focused on <strong>fast-paced PvP matches</strong>. 

    I worked primarily on <strong>gameplay systems and multiplayer interactions</strong>
    using <strong>Unity and C#</strong>.

    <p>
    My responsibilities included developing the <strong>core weapon system</strong>,
    implementing <strong>deterministic multiplayer gameplay using Photon Quantum</strong>,
    and creating <strong>custom Unity Editor tools</strong> to accelerate designer workflows.
    </p>

    <p>
    The project also required <strong>performance optimization for mobile devices</strong>
    to ensure smooth gameplay across a wide range of hardware.
    </p>
    `,

  tags: ["Unity", "C#", "Android", "iOS", "Multiplayer"],

  tech: [
    "Unity",
    "C#",
    "Photon Quantum Multiplayer",
    "Android/ iOS",
    "Custom Editor Tools"
  ],

  contributions: [
    "- Developed multiplayer gameplay mechanics using Photon Quantum.",
    "- Designed and implemented the core weapon system architecture.",
    "- Designed and implemented a weekly game mode system that allows the core battle royale mode to support fun variations, such as infinite ammo, giant players, no weapons, or single-weapon types, through a custom editor window for easy configuration.",
    "- Implemented a custom editor map baking tool that uses a 2D pixel sprite as a reference to automatically generate a 3D map.",
    "- Implemented performance optimizations for mobile devices, profiling CPU and RAM usage to ensure stable FPS on lower-end devices.",
    "- Documented Unity, C#, and Photon Quantum coding guidelines to prevent memory leaks and improve performance."
  ],

  challenges: [
    "Ensuring deterministic multiplayer gameplay across networked clients",
    "Optimizing gameplay systems for lower-end mobile hardware",
    "Designing scalable systems for fast-paced multiplayer matches"
  ],

  video: "https://www.youtube.com/watch?v=k_N0ayjEGuw",

  screenshots: [
    "/images/takedown1.png",
    "/images/takedown2.png"
  ],

  links: {
    playstore: "https://play.google.com/store/apps/details?id=com.Monomyto.GunStars"
  }
},

{
  slug: "pix-football-manager",
  title: "PIX Football Manager",
  featured: true,
  canPlay: true,

  role: "Gameplay / Simulation / AI Programmer",

  description: `Soccer management simulator focused on strategic decision making.`,

  longDescription: `
    PIX Football Manager is a <strong>soccer team management simulation</strong> where players build and manage their own club.

I worked on <strong>simulation logic, goalkeeper AI, and the integration of 2D animations with 3D physics</strong>.
  `,

  tags: ["Unity", "C#", "Photon Quantum", "PC"],

  tech: [
    "Unity",
    "C#",
    "Photon Quantum",
    "Bot SDK",
    "AI"
  ],

  contributions: [
    "- Redesigned the simulation architecture to decouple core logic from visuals, allowing the entire match outcome to be computed upfront and ensuring the visual playback remains accurate and deterministic.",
    "- Implemented goalkeeper's AI behavior tree using Quantum's Bot SDK.",
    "- Imported 2D animations created in Aseprite and adapted them for integration into Unity’s animation system.",
    "- Designed and implemented a custom editor tool to calculate animation timings and bake them into a Quantum asset for synchronization.",
    "- Implemented a camera system using Cinemachine to ensure 2D sprite rotations aligned correctly within the 3D game world.",
    "- Implemented a custom Action Resolution system as a lightweight struct, allowing it to be called multiple times per frame with minimal overhead. Player actions have varying success probabilities based on character attributes and dice rolls, with outcomes ranging from critical failures to critical successes.",
  ],

  challenges: [
  ],

  video: "https://www.youtube.com/watch?v=VtDOAxf9OPg",
  screenshots: [
  "/images/pix1.png",
  "/images/pix2.png"
  ],

  links: {
steam: "https://store.steampowered.com/app/4195140/PIX_Football_Manager/"
}
  },

  {
  slug: "data2073",
  title: "Data2073",
  featured: true,
  canPlay: true,

  role: "Build / DevOps Engineer (Unity)",

  description: `Deckbuilder auto-battler with strategic combat and card synergies.`,

  longDescription: `
    Data2073 is a strategy game that combines <strong>deck-building mechanics</strong> with <strong>auto-battler combat systems</strong>.

    <p>On a short-term contract, I <strong>designed and implemented a CI/CD pipeline</strong> running on a <strong>Google Cloud VM (Ubuntu)</strong>, 
    using <strong>Jenkins and Fastlane</strong> to automate Unity builds, manage versioning, and streamline deployment workflows, 
    also implemented <strong>Discord notifications via webhook</strong> to report build status (started, cancelled, failed, and succeeded).</p>
    `
  ,

  tags: ["Unity", "CI/CD", "DevOps", "Automation"],

  tech: [
    "Unity",
    "C#",
    "Jenkins",
    "Fastlane",
    "Google Cloud",
    "Ubuntu",
    "Groovy",
    "CI/CD"
  ],

  contributions: [
    "- Designed and implemented a CI/CD pipeline for Unity projects using Jenkins.",
    "- Configured automated build workflows on a Google Cloud VM (Ubuntu) for Windows.",
    "- Integrated Fastlane to handle build orchestration, versioning, and deployment steps.",
    "- Implemented Discord webhook notifications to report build lifecycle events (start, cancel, failure, success).",
    "- Improved build reliability and reduced manual intervention in the release process."
  ],

  challenges: [
  "Designing flexible card systems capable of supporting many effects",
  "Ensuring combat logic remained scalable and maintainable",
  "Balancing emergent gameplay created by card combinations"
  ],

  video: "https://www.youtube.com/watch?v=Xc5rFrLcJEE",
  screenshots: [
  "/images/data1.png",
  "/images/data2.png"
  ],

  links: {
epic: "https://store.epicgames.com/pt-BR/p/data2073-9d83d4"
}
  },

  {
  slug: "eduqbrinq",
  title: "EduqBrinq",
  featured: true,
  canPlay: false,

  role: "Gameplay / UI / Systems Programmer",

  description: `Educational web games featuring adaptive puzzles, quizzes, and interactive gameplay.`,

  longDescription: `
  <p>
  EduqBrinq is a collection of <strong>educational web-based games for children</strong>, designed to teach through <strong>interactive puzzles, quizzes, and gameplay-driven learning</strong>.
  </p>

  <p>
  I developed multiple games using <strong>Unity and C#</strong>, with a strong focus on <strong>UI-heavy systems</strong> and <strong>Canvas-based workflows</strong>. The project included a variety of genres, such as <strong>puzzle games, quiz systems, 2D platformers, and arcade-style experiences</strong>.
  </p>

  <p>
  The games were integrated with <strong>web APIs and backend services</strong> to retrieve user data and dynamically load content, such as <strong>questions and puzzles tailored to the player’s age and school grade</strong>. Player progress and results were sent to a <strong>SQL database</strong> for tracking and analysis.
  </p>
  `,

  tags: ["Unity", "C#", "Web", "Education", "UI/UX"],

  tech: [
    "Unity",
    "C#",
    "Unity UI (Canvas)",
    "REST APIs",
    "SQL",
    "WebGL",
    "Backend Integration"
  ],

  contributions: [
    "- Developed multiple educational web games using Unity (WebGL) and C#.",
    "- Designed and implemented UI-heavy systems using Unity Canvas for quizzes and puzzle interactions.",
    "- Built dynamic content systems that load questions and puzzles from a backend based on user age and school grade.",
    "- Integrated REST APIs to fetch user data and submit gameplay results.",
    "- Implemented data persistence by sending player progress and results to a SQL database.",
    "- Developed gameplay systems across multiple genres, including puzzle, quiz, 2D platformer, and arcade-style games."
  ],

  challenges: [
  "Designing intuitive gameplay for younger audiences",
  "Ensuring performance across a variety of devices",
  "Maintaining flexibility for adding new educational content"
  ],

  video: "https://www.youtube.com/watch?v=-V1spls2c3k",
  screenshots: [
  "/images/edu1.png",
  "/images/edu2.png"
  ],

  links: {}
  },
  {
    title: 'Petwork',
    description: `Mobile pet management game developed as part of an academic thesis project.`,
    video: 'https://www.youtube.com/watch?v=vXWogqGy_c0',
    tags: ['Unity', 'Android', 'Simulation'],
    visit: 'https://calilokzgames.vercel.app/#Petwork',
    id: 3,
  },
  {
    title: 'Manu',
    description: `Narrative puzzle game created during Global Game Jam 2022 exploring the theme of duality and identity.`,
    video: 'https://www.youtube.com/watch?v=fb02DA0TvbA',
    tags: ['Unity', 'HTML5', 'Puzzle'],
    visit: 'https://calilokzgames.vercel.app/#Manu',
    id: 4,
  }
];

export const TimeLineData = [ 
  { year: 2019, text: 'Worked as a freelance developer', }, 
  { year: 2019, text: 'Started working in a educational project', }, 
  { year: 2021, text: 'Changed my degree to Digital Games', }, 
  { year: 2022, text: 'Participated in my first Game Jam', }, 
  { year: 2023, text: 'Participated in my first Game Jam', }, 
  { year: 2022, text: 'Participated in my first Game Jam', }, 
  { year: 2022, text: 'Participated in my first Game Jam', }, 
  { year: 2022, text: 'Participated in my first Game Jam', }, 

];