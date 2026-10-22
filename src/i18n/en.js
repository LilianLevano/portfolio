export default {
  meta: {
    title: 'Lilian Levano – From people to code (exercise portfolio)',
    description:
      'Exercise portfolio of a fictional profile: Lilian Levano, Graduaat Programmeren student at Erasmushogeschool Brussel with a background in the humanities.',
  },
  notice: {
    short: 'Fictional profile – made as an exercise',
  },
  skipLink: 'Skip to content',
  nav: {
    label: 'Main navigation',
    home: 'Lilian Levano, back to top',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    interests: 'Interests',
    contact: 'Contact',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
  },
  lang: {
    label: 'Choose language',
    names: { nl: 'Nederlands', fr: 'Français', en: 'English' },
  },
  hero: {
    eyebrow: 'Lilian Levano · programming student',
    titleStart: 'From people',
    titleEnd: 'to code',
    lead:
      'I come from the humanities and now study Graduaat Programmeren at Erasmushogeschool Brussel. My strongest asset, alongside my technical skills: communication.',
    status: 'Looking for an internship in software and web development',
    ctaProjects: 'See my projects',
    ctaContact: 'Contact',
    codeLabel: "Lilian's profile, written as code",
    code: {
      background: 'Humanities',
      strongest: 'communication',
      studies: 'Graduaat Programmeren, 2nd year',
      lookingFor: 'software/web internship',
    },
    quiz: {
      question: "See Lilian's profile?",
      hint: 'pick a value to continue',
      srTrue: 'yes, show the profile',
      srFalse: "no, don't show it",
      yes: 'Good choice. Loading profile…',
      no: 'Nice try… this profile is too good to hide.',
      override: 'showing it anyway',
      reset: 'again',
    },
  },
  about: {
    kicker: 'About',
    title: 'The bridge between people and code',
    intro:
      'As a second-year Graduaat Programmeren student at Erasmushogeschool Brussel, I am looking for an internship in software/web development. I build frontend and backend applications with JavaScript, PHP/Laravel and Java, using databases such as MySQL or SQLite.',
    highlight:
      'My background is in the humanities. That makes communication, alongside my technical skills, my greatest strength.',
    factsLabel: 'Key facts',
    facts: [
      { label: 'Studies', value: 'Graduaat Programmeren (2nd year)' },
      { label: 'School', value: 'Erasmushogeschool Brussel' },
      { label: 'Background', value: 'Humanities' },
      { label: 'Looking for', value: 'Software/web development internship' },
    ],
  },
  skills: {
    kicker: 'Skills',
    title: 'What I bring',
    intro: 'Hover over them or tab through them: each skill responds in its own way.',
    items: {
      communication: {
        name: 'Communication',
        tag: 'Strongest asset',
        note: 'Brought along from the humanities: the bridge between people and code.',
      },
      webdev: { name: 'Web development', tag: 'Frontend & backend' },
      javascript: { name: 'JavaScript', tag: 'Language' },
      phpLaravel: { name: 'PHP / Laravel', tag: 'Language & framework' },
      spring: { name: 'Java Spring Boot', tag: 'Framework' },
      mysql: { name: 'MySQL', tag: 'Database' },
      sqlite: { name: 'SQLite', tag: 'Database' },
    },
  },
  projects: {
    kicker: 'Projects',
    title: "What I've worked on",
    intro: 'A selection of exercise and school projects, with the code on GitHub.',
    stackLabel: 'Techniques',
    link: 'View on GitHub',
    liveLink: 'View live site',
    newTab: '(opens in a new tab)',
    items: {
      comichub: {
        title: 'ComicHub',
        type: 'Exercise project (fictional)',
        description: 'A platform/forum to publish, review and discuss the comics you have read.',
      },
      brussels: {
        title: 'Ontdekkingstocht door Brussel',
        type: 'Dynamic Web school project · group work',
        description:
          'An interactive web application for discovering cultural places in Brussels, built on open data from the City of Brussels.',
      },
      telify: {
        title: 'Telify',
        type: 'Static Web exam project',
        description:
          'A web shop built with only HTML and CSS, with a separate page per product and a responsive design.',
      },
    },
  },
  interests: {
    enter: 'Pause. You are stepping into another world…',
    kicker: 'Beyond the code',
    title: 'Personal interests',
    games: {
      heading: 'Survival log: video games',
      carousel: 'carousel',
      slide: 'slide',
      position: '{n} of {total}',
      covers: 'Game covers',
      pick: 'Choose a game',
      prev: 'Previous game',
      next: 'Next game',
      items: {
        zomboid: { title: 'Project Zomboid', status: 'still surviving' },
        overwatch: { title: 'Overwatch', status: 'looking for a team…' },
        lastOfUs: { title: 'The Last of Us', status: 'story: loaded' },
        arkham: { title: 'Batman Arkham series', status: 'patrolling Gotham' },
        zelda: { title: 'The Legend of Zelda: Tears of the Kingdom', status: 'exploring Hyrule' },
      },
    },
    manga: {
      heading: 'Manga',
      bubble: 'Attack on Titan',
      caption: 'Favourite manga',
    },
    comics: {
      heading: 'Comics',
      bubble: 'DC & Batman',
      caption: 'Favourite comics',
    },
    exit: 'Back to reality',
    credits: 'Game covers and artwork © their respective owners.',
  },
  contact: {
    kicker: 'Contact',
    title: "Let's talk",
    text: 'No form, no inbox: you can find me on LinkedIn and GitHub.',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    newTab: '(opens in a new tab)',
  },
  footer: {
    built: 'Built with Vue 3 and Vite.',
    top: 'Back to top',
  },
}
