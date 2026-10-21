export default {
  meta: {
    title: "Lilian Levano – De l'humain au code (portfolio d'exercice)",
    description:
      "Portfolio d'exercice d'un profil fictif : Lilian Levano, étudiant en Graduaat Programmeren à l'Erasmushogeschool Brussel, issu des sciences humaines.",
  },
  notice: {
    short: 'Profil fictif – réalisé comme exercice',
  },
  skipLink: 'Aller au contenu',
  nav: {
    label: 'Navigation principale',
    home: 'Lilian Levano, retour en haut',
    about: 'À propos',
    skills: 'Compétences',
    projects: 'Projets',
    interests: 'Centres d’intérêt',
    contact: 'Contact',
    menuOpen: 'Ouvrir le menu',
    menuClose: 'Fermer le menu',
  },
  lang: {
    label: 'Choisir la langue',
    names: { nl: 'Nederlands', fr: 'Français', en: 'English' },
  },
  hero: {
    eyebrow: 'Lilian Levano · étudiant en programmation',
    titleStart: "De l'humain",
    titleEnd: 'au code',
    lead:
      "Issu des sciences humaines, j'étudie aujourd'hui le Graduaat Programmeren à l'Erasmushogeschool Brussel. Mon principal atout, en plus de mes compétences techniques : la communication.",
    status: 'À la recherche d’un stage en développement logiciel et web',
    ctaProjects: 'Voir mes projets',
    ctaContact: 'Contact',
    codeLabel: 'Profil de Lilian, écrit sous forme de code',
    code: {
      background: 'Sciences humaines',
      strongest: 'communication',
      studies: 'Graduaat Programmeren, 2e année',
      lookingFor: 'stage logiciel/web',
    },
    quiz: {
      question: 'Voir le profil de Lilian ?',
      hint: 'choisis une valeur pour continuer',
      srTrue: 'oui, afficher le profil',
      srFalse: 'non, ne pas afficher',
      yes: 'Bon choix. Chargement du profil…',
      no: 'Bien essayé… ce profil est trop bien pour être caché.',
      override: 'affiché quand même',
      reset: 'rejouer',
    },
  },
  about: {
    kicker: 'À propos',
    title: 'Le pont entre les gens et le code',
    intro:
      "Étudiant en deuxième année de Graduaat Programmeren à l'Erasmushogeschool Brussel, je suis à la recherche d'un stage en développement logiciel/web. Je développe des applications frontend et backend avec JavaScript, PHP/Laravel et Java, en utilisant des bases de données telles que MySQL ou SQLite.",
    highlight:
      'Je viens des sciences humaines. La communication est donc, en plus de mes compétences techniques, mon plus grand atout.',
    factsLabel: 'En bref',
    facts: [
      { label: 'Formation', value: 'Graduaat Programmeren (2e année)' },
      { label: 'École', value: 'Erasmushogeschool Brussel' },
      { label: 'Parcours', value: 'Sciences humaines' },
      { label: 'Recherche', value: 'Stage en développement logiciel/web' },
    ],
  },
  skills: {
    kicker: 'Compétences',
    title: "Ce que j'apporte",
    intro: 'Survolez-les ou parcourez-les au clavier : chaque compétence réagit à sa façon.',
    items: {
      communication: {
        name: 'Communication',
        tag: 'Principal atout',
        note: 'Héritée des sciences humaines : le pont entre les gens et le code.',
      },
      webdev: { name: 'Développement web', tag: 'Frontend & backend' },
      javascript: { name: 'JavaScript', tag: 'Langage' },
      phpLaravel: { name: 'PHP / Laravel', tag: 'Langage & framework' },
      spring: { name: 'Java Spring Boot', tag: 'Framework' },
      mysql: { name: 'MySQL', tag: 'Base de données' },
      sqlite: { name: 'SQLite', tag: 'Base de données' },
    },
  },
  projects: {
    kicker: 'Projets',
    title: "Ce sur quoi j'ai travaillé",
    intro: "Une sélection de projets d'exercice et de projets scolaires, avec le code sur GitHub.",
    stackLabel: 'Techniques',
    link: 'Voir sur GitHub',
    newTab: '(ouvre un nouvel onglet)',
    items: {
      comichub: {
        title: 'ComicHub',
        type: "Projet d'exercice (fictif)",
        description:
          'Une plateforme/un forum pour publier les comics lus, les critiquer et en discuter.',
      },
      brussels: {
        title: 'Ontdekkingstocht door Brussel',
        type: 'Projet scolaire Dynamic Web · travail de groupe',
        description:
          'Une application web interactive pour découvrir des lieux culturels à Bruxelles, à partir des données ouvertes de la Ville de Bruxelles.',
      },
      telify: {
        title: 'Telify',
        type: "Projet d'examen Static Web",
        description:
          'Une boutique en ligne réalisée uniquement en HTML et CSS, avec une page par produit et un design responsive.',
      },
    },
  },
  interests: {
    enter: 'Pause. Vous entrez dans un autre monde…',
    kicker: 'En dehors du code',
    title: 'Centres d’intérêt',
    games: {
      heading: 'Journal de survie : jeux vidéo',
      carousel: 'carrousel',
      slide: 'diapositive',
      position: '{n} sur {total}',
      covers: 'Jaquettes des jeux',
      pick: 'Choisir un jeu',
      prev: 'Jeu précédent',
      next: 'Jeu suivant',
      items: {
        zomboid: { title: 'Project Zomboid', status: 'toujours en train de survivre' },
        overwatch: { title: 'Overwatch', status: "recherche d'équipe…" },
        lastOfUs: { title: 'The Last of Us', status: 'histoire : chargée' },
        arkham: { title: 'Série Batman Arkham', status: 'patrouille à Gotham' },
      },
    },
    manga: {
      heading: 'Manga',
      bubble: "L'Attaque des Titans",
      caption: 'Manga préféré',
    },
    comics: {
      heading: 'Comics',
      bubble: 'DC & Batman',
      caption: 'Comics préférés',
    },
    exit: 'Retour à la réalité',
    credits: 'Jaquettes et illustrations © leurs propriétaires respectifs.',
  },
  contact: {
    kicker: 'Contact',
    title: 'Parlons-en',
    text: 'Pas de formulaire, pas de boîte de réception : retrouvez-moi sur LinkedIn et GitHub.',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    newTab: '(ouvre un nouvel onglet)',
  },
  footer: {
    built: 'Réalisé avec Vue 3 et Vite.',
    top: 'Retour en haut',
  },
}
