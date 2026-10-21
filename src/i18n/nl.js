export default {
  meta: {
    title: 'Lilian Levano – Van mens naar code (oefenportfolio)',
    description:
      'Oefenportfolio van een fictief profiel: Lilian Levano, student Graduaat Programmeren aan de Erasmushogeschool Brussel met een achtergrond in de Humane Wetenschappen.',
  },
  notice: {
    short: 'Fictief profiel – gemaakt als oefening',
  },
  skipLink: 'Ga naar de inhoud',
  nav: {
    label: 'Hoofdnavigatie',
    home: 'Lilian Levano, naar boven',
    about: 'Over mij',
    skills: 'Skills',
    projects: 'Projecten',
    interests: 'Interesses',
    contact: 'Contact',
    menuOpen: 'Menu openen',
    menuClose: 'Menu sluiten',
  },
  lang: {
    label: 'Taal kiezen',
    names: { nl: 'Nederlands', fr: 'Français', en: 'English' },
  },
  hero: {
    eyebrow: 'Lilian Levano · student programmeren',
    titleStart: 'Van mens',
    titleEnd: 'naar code',
    lead:
      'Ik kom uit de Humane Wetenschappen en studeer nu Graduaat Programmeren aan de Erasmushogeschool Brussel. Mijn sterkste troef, naast mijn technische skills: communicatie.',
    status: 'Op zoek naar een stage in software- en webontwikkeling',
    ctaProjects: 'Bekijk mijn projecten',
    ctaContact: 'Contact',
    codeLabel: 'Profiel van Lilian, geschreven als code',
    code: {
      background: 'Humane Wetenschappen',
      strongest: 'communicatie',
      studies: 'Graduaat Programmeren, 2e jaar',
      lookingFor: 'stage software/web',
    },
    quiz: {
      question: 'Profiel van Lilian zien?',
      hint: 'kies een waarde om verder te gaan',
      srTrue: 'ja, toon het profiel',
      srFalse: 'nee, niet tonen',
      yes: 'Goede keuze. Profiel laden…',
      no: 'Nice try… dit profiel is te goed om te verbergen.',
      override: 'toch tonen',
      reset: 'opnieuw',
    },
  },
  about: {
    kicker: 'Over mij',
    title: 'De brug tussen mensen en code',
    intro:
      'Als tweedejaarsstudent Graduaat Programmeren aan de Erasmushogeschool Brussel ben ik op zoek naar een stage in software-/webontwikkeling. Ik ontwikkel frontend- en backendapplicaties met JavaScript, PHP/Laravel en Java, en gebruik daarbij databases zoals MySQL of SQLite.',
    highlight:
      'Mijn achtergrond ligt in de Humane Wetenschappen. Daardoor is communicatie, naast mijn technische skills, mijn grootste troef.',
    factsLabel: 'Kerngegevens',
    facts: [
      { label: 'Opleiding', value: 'Graduaat Programmeren (2e jaar)' },
      { label: 'School', value: 'Erasmushogeschool Brussel' },
      { label: 'Achtergrond', value: 'Humane Wetenschappen' },
      { label: 'Zoekt', value: 'Stage in software-/webontwikkeling' },
    ],
  },
  skills: {
    kicker: 'Skills',
    title: 'Wat ik meebreng',
    intro: 'Beweeg erover of tab erdoorheen: elke skill reageert op zijn eigen manier.',
    items: {
      communication: {
        name: 'Communicatie',
        tag: 'Sterkste troef',
        note: 'Meegebracht uit de Humane Wetenschappen: de brug tussen mensen en code.',
      },
      webdev: { name: 'Webdevelopment', tag: 'Frontend & backend' },
      javascript: { name: 'JavaScript', tag: 'Programmeertaal' },
      phpLaravel: { name: 'PHP / Laravel', tag: 'Taal & framework' },
      spring: { name: 'Java Spring Boot', tag: 'Framework' },
      mysql: { name: 'MySQL', tag: 'Database' },
      sqlite: { name: 'SQLite', tag: 'Database' },
    },
  },
  projects: {
    kicker: 'Projecten',
    title: 'Waar ik aan werkte',
    intro: 'Een selectie van oefen- en schoolprojecten, met de code op GitHub.',
    stackLabel: 'Technieken',
    link: 'Bekijk op GitHub',
    newTab: '(opent in een nieuw tabblad)',
    items: {
      comichub: {
        title: 'ComicHub',
        type: 'Oefenproject (fictief)',
        description:
          'Een platform/forum om gelezen comics te publiceren, te reviewen en erover te discussiëren.',
      },
      brussels: {
        title: 'Ontdekkingstocht door Brussel',
        type: 'Schoolproject Dynamic Web · groepswerk',
        description:
          'Een interactieve webapplicatie om culturele plaatsen in Brussel te ontdekken, op basis van open data van de Stad Brussel.',
      },
      telify: {
        title: 'Telify',
        type: 'Examenproject Static Web',
        description:
          'Een webshop gebouwd met enkel HTML en CSS, met een aparte pagina per product en een responsive ontwerp.',
      },
    },
  },
  interests: {
    enter: 'Pauze. Je stapt even een andere wereld binnen…',
    kicker: 'Buiten de code',
    title: 'Persoonlijke interesses',
    games: {
      heading: 'Survival log: videogames',
      carousel: 'carrousel',
      slide: 'dia',
      position: '{n} van {total}',
      covers: 'Spelcovers',
      pick: 'Kies een spel',
      prev: 'Vorig spel',
      next: 'Volgend spel',
      items: {
        zomboid: { title: 'Project Zomboid', status: 'nog steeds aan het overleven' },
        overwatch: { title: 'Overwatch', status: 'team zoeken…' },
        lastOfUs: { title: 'The Last of Us', status: 'verhaal: geladen' },
        arkham: { title: 'Batman Arkham-reeks', status: 'patrouille in Gotham' },
        zelda: { title: 'The Legend of Zelda: Tears of the Kingdom', status: 'Hyrule aan het verkennen' },
      },
    },
    manga: {
      heading: 'Manga',
      bubble: 'Attack on Titan',
      caption: 'Favoriete manga',
    },
    comics: {
      heading: 'Comics',
      bubble: 'DC & Batman',
      caption: 'Favoriete comics',
    },
    exit: 'Terug naar de werkelijkheid',
    credits: 'Covers en illustraties © de respectieve eigenaars.',
  },
  contact: {
    kicker: 'Contact',
    title: 'Laten we praten',
    text: 'Geen formulier, geen inbox: je vindt me op LinkedIn en GitHub.',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    newTab: '(opent in een nieuw tabblad)',
  },
  footer: {
    built: 'Gebouwd met Vue 3 en Vite.',
    top: 'Naar boven',
  },
}
