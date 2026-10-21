// Approved public links only (see the brief): no e-mail address or phone number.
export const LINKS = {
  linkedin: 'https://www.linkedin.com/in/lilian-levano-3a1bb33b8',
  github: 'https://github.com/LilianLevano',
}

// Texts live in src/i18n; this file only holds language-independent data.
export const PROJECTS = [
  {
    id: 'comichub',
    url: 'https://github.com/LilianLevano/comichub',
    stack: ['PHP', 'Laravel', 'Blade', 'Tailwind CSS'],
    accent: 'red',
  },
  {
    id: 'brussels',
    url: 'https://github.com/LilianLevano/Project-Dynamic-Web',
    stack: ['HTML', 'CSS', 'JavaScript', 'Fetch API', 'LocalStorage', 'Open data'],
    accent: 'cream',
  },
  {
    id: 'telify',
    url: 'https://github.com/LilianLevano/StaticWebProjectWebShop',
    stack: ['HTML', 'CSS', 'Responsive design'],
    accent: 'ink',
  },
]

// Game covers in public/ (width/height are the files' own pixel sizes).
export const GAMES = [
  { id: 'zomboid', cover: '/zomboid.jpg', width: 191, height: 263 },
  { id: 'overwatch', cover: '/Overwatch_cover_art.jpg', width: 250, height: 357 },
  { id: 'lastOfUs', cover: '/thelastofus.jpg', width: 1200, height: 1800 },
  { id: 'arkham', cover: '/batman-arkham-game.jpg', width: 1920, height: 1080 },
]
