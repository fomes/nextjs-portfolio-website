export const userData = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>Nextjs</li>
        <li>Prisma</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Trybe Course</li>
        <li>Analysis and Systems Development</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experiece",
    content: (
      <ul className="list-disc pl-2">
        <li>Front End Developer - Dell LEAD</li>
        <li>Front End Developer - Cerus Bank</li>
        <li>Front End Developer - Loop3</li>
      </ul>
    ),
  },
];

export const projectsData = [
  {
    id: 1,
    title: "Musicican Website",
    description: "A professional musician website made with Nextjs",
    image: "/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/fomes/musician-website",
    previewUrl: "https://musician-website.netlify.app/",
  },
  {
    id: 2,
    title: "Medical Website",
    description: "A medical webiste made with Nextjs",
    image: "/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/fomes/medical-landing-page",
    previewUrl: "https://medical-lading-page.netlify.app/",
  },
  {
    id: 3,
    title: "Hangman Legends",
    description: "A hangman game with the league of legends characters",
    image: "/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/fomes/hangman-game",
    previewUrl: "https://hangman-lol.netlify.app/",
  },
];
