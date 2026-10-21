# Lilian Levano – portfolio (oefening)

Statische portfoliosite voor een **fictief profiel**, gemaakt als oefening.
Gebouwd met Vue 3, Vite en JavaScript. Geen backend, geen accounts, geen API-sleutels.

## Vereisten

- Node.js 24 LTS (zie `.nvmrc`)

## Commando's

```bash
npm install       # dependencies installeren (gebruikt package-lock.json)
npm run dev       # ontwikkelserver op http://localhost:5173
npm run build     # productiebuild naar dist/
npm run preview   # productiebuild lokaal bekijken op http://localhost:4173
npm test          # unit tests (Vitest) voor de vertaallogica
```

## Structuur

- `src/components/`: secties (`HeroSection`, `AboutSection`, `SkillsSection`,
  `ProjectsSection`, `InterestsSection`, `ContactSection`) plus `SiteHeader`,
  `SiteFooter`, `LanguageSwitcher`, `ExerciseNotice`, `SkillIcon` en `GamesCarousel`
- `src/i18n/`: alle teksten in `nl.js` (standaard), `fr.js` en `en.js`; `index.js`
  bewaart de taalkeuze in `localStorage` en zet `<html lang>`, titel en meta description
- `src/data/links.js`: projectlinks, technieken, gamecovers en de goedgekeurde contactlinks
- `src/directives/reveal.js`: scroll-animaties met IntersectionObserver
  (uitgeschakeld bij `prefers-reduced-motion`)

## Deploy

Netlify: build command `npm run build`, publish directory `dist`.
