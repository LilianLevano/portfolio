<script setup>
import { useI18n } from '../i18n/index.js'

const { t } = useI18n()
</script>

<template>
  <section id="interests" class="interests" aria-labelledby="interests-title">
    <!-- Torn "portal" edge: the site deliberately steps into a comic-book world here. -->
    <svg class="edge edge--top" viewBox="0 0 100 6" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <polygon points="0,6 0,3 4,0 8,4 12,1 16,5 20,1 24,4 28,0 32,3 36,1 40,5 44,0 48,4 52,1 56,5 60,0 64,4 68,1 72,5 76,0 80,3 84,1 88,5 92,0 96,4 100,1 100,6" />
    </svg>

    <div class="world">
      <div class="container">
        <p class="narration" v-reveal="'left'">{{ t('interests.enter') }}</p>

        <header class="world__head" v-reveal="'scale'">
          <p class="world__kicker">04 · {{ t('interests.kicker') }}</p>
          <h2 id="interests-title" class="world__title">{{ t('interests.title') }}</h2>
        </header>

        <div class="page">
          <!-- Panel 1: retro survival HUD -->
          <article class="panel panel--hud" aria-labelledby="games-title" v-reveal="'up'">
            <div class="hud">
              <div class="hud__top" aria-hidden="true">
                <span>HP</span>
                <span class="hud__bar"><span></span></span>
                <span>LOG.TXT</span>
              </div>
              <h3 id="games-title" class="hud__title">{{ t('interests.games.heading') }}</h3>
              <ol class="hud__log">
                <li v-for="(entry, i) in t('interests.games.entries')" :key="entry.game">
                  <span class="hud__day" aria-hidden="true">&gt; 0{{ i + 1 }}</span>
                  <strong>{{ entry.game }}</strong>{{ ' ' }}
                  <span class="hud__status">— {{ entry.status }}</span>
                </li>
              </ol>
              <span class="hud__cursor" aria-hidden="true">_</span>
            </div>
          </article>

          <!-- Panel 2: manga, black & white speed lines -->
          <article class="panel panel--manga" aria-labelledby="manga-title" v-reveal.delay="'scale'">
            <h3 id="manga-title" class="panel__label">{{ t('interests.manga.heading') }}</h3>
            <p class="speech">{{ t('interests.manga.bubble') }}</p>
            <p class="panel__caption">{{ t('interests.manga.caption') }}</p>
          </article>

          <!-- Panel 3: comics, halftone + burst -->
          <article class="panel panel--comics" aria-labelledby="comics-title" v-reveal.delay="'scale'">
            <h3 id="comics-title" class="panel__label">{{ t('interests.comics.heading') }}</h3>
            <div class="burst">
              <svg viewBox="0 0 200 200" aria-hidden="true" focusable="false">
                <polygon
                  points="100,5 118,62 172,30 142,84 196,100 142,116 172,170 118,138 100,195 82,138 28,170 58,116 4,100 58,84 28,30 82,62"
                />
              </svg>
              <p class="burst__text">{{ t('interests.comics.bubble') }}</p>
            </div>
            <p class="panel__caption">{{ t('interests.comics.caption') }}</p>
          </article>
        </div>

        <a class="exit" href="#contact">
          {{ t('interests.exit') }} <span aria-hidden="true">↓</span>
        </a>
      </div>
    </div>

    <svg class="edge edge--bottom" viewBox="0 0 100 6" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <polygon points="0,0 100,0 100,3 96,6 92,2 88,5 84,1 80,4 76,0 72,5 68,2 64,6 60,1 56,4 52,0 48,5 44,2 40,6 36,1 32,4 28,0 24,5 20,2 16,6 12,1 8,4 4,0 0,4" />
    </svg>
  </section>
</template>

<style scoped>
.interests {
  --paper: #f4e9d4;
  --paper-ink: #141010;
  --comic-red: #c81d25;
  --hud: #ffb000;
  position: relative;
  margin-block: clamp(2rem, 5vw, 4rem);
}

.edge {
  display: block;
  width: 100%;
  height: clamp(1rem, 3vw, 2rem);
  fill: var(--paper);
}

.edge--top {
  margin-bottom: -1px;
}

.edge--bottom {
  margin-top: -1px;
}

.world {
  position: relative;
  padding-block: clamp(3rem, 8vw, 5.5rem);
  background-color: var(--paper);
  /* Halftone dots: a pattern, not a colour gradient. */
  background-image: radial-gradient(rgb(200 29 37 / 0.16) 1.3px, transparent 1.6px);
  background-size: 14px 14px;
  color: var(--paper-ink);
}

.narration {
  display: inline-block;
  max-width: 100%;
  padding: 0.6rem 1rem;
  border: 3px solid var(--paper-ink);
  background: #ffe36e;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  font-weight: 600;
  box-shadow: 4px 4px 0 var(--paper-ink);
  transform: rotate(-1.5deg);
}

.narration.is-visible {
  transform: rotate(-1.5deg);
}

.world__head {
  margin: 2rem 0 2.5rem;
}

.world__kicker {
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--comic-red);
  font-weight: 600;
}

.world__title {
  font-family: var(--font-comic);
  font-weight: 400;
  font-size: clamp(2.75rem, 9vw, 5.5rem);
  letter-spacing: 0.02em;
  line-height: 1;
  color: var(--paper-ink);
  text-shadow: 4px 4px 0 var(--comic-red);
  transform: rotate(-2deg);
  transform-origin: left;
}

.page {
  display: grid;
  gap: 1rem;
}

.panel {
  position: relative;
  min-width: 0;
  padding: 1.25rem;
  border: 4px solid var(--paper-ink);
  background: #fffaf0;
  box-shadow: 6px 6px 0 var(--paper-ink);
}

.panel__label {
  display: inline-block;
  padding: 0.15rem 0.6rem;
  background: var(--paper-ink);
  color: var(--paper);
  font-family: var(--font-comic);
  font-weight: 400;
  font-size: 1.35rem;
  letter-spacing: 0.06em;
  transform: rotate(-2deg);
}

.panel__caption {
  position: relative;
  margin-top: 1rem;
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  font-weight: 600;
}

/* Survival HUD */
.panel--hud {
  padding: 0.6rem;
  background: var(--paper-ink);
}

.hud {
  position: relative;
  height: 100%;
  padding: 1.25rem;
  border: 2px solid #3d2f00;
  background:
    repeating-linear-gradient(to bottom, rgb(255 176 0 / 0.05) 0 2px, transparent 2px 4px),
    #120d05;
  color: var(--hud);
  font-family: var(--font-mono);
}

.hud__top {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.75rem;
  opacity: 0.85;
}

.hud__bar {
  flex: 1;
  height: 0.6rem;
  border: 1px solid var(--hud);
}

.hud__bar span {
  display: block;
  width: 72%;
  height: 100%;
  background: var(--hud);
  animation: hp 4s ease-in-out infinite alternate;
}

@keyframes hp {
  to {
    width: 58%;
  }
}

.hud__title {
  margin: 1.25rem 0 1rem;
  font-family: var(--font-mono);
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.hud__log {
  display: grid;
  gap: 0.6rem;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 0.9rem;
}

.hud__log strong {
  color: #fff1cc;
  font-weight: 600;
}

.hud__day {
  margin-right: 0.5rem;
  opacity: 0.75;
}

.hud__status {
  opacity: 0.9;
}

.hud__cursor {
  display: inline-block;
  margin-top: 0.75rem;
  animation: blink 1s steps(1) infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

/* Manga panel */
.panel--manga {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  background-color: #fffaf0;
  background-image: repeating-conic-gradient(from 0deg at 70% 55%, rgb(20 16 16 / 0.12) 0deg 2deg, transparent 2deg 9deg);
  min-height: 15rem;
}

.speech {
  position: relative;
  align-self: center;
  margin: 1.5rem 0 0.5rem;
  padding: 0.9rem 1.2rem;
  border: 3px solid var(--paper-ink);
  border-radius: 50%;
  background: #fff;
  font-family: var(--font-comic);
  font-size: clamp(1.4rem, 4vw, 1.8rem);
  letter-spacing: 0.04em;
  text-align: center;
  line-height: 1.1;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.speech::after {
  content: '';
  position: absolute;
  left: 22%;
  bottom: -18px;
  border-width: 18px 10px 0;
  border-style: solid;
  border-color: var(--paper-ink) transparent transparent;
  transform: skewX(20deg);
}

.panel--manga:hover .speech {
  transform: rotate(-3deg) scale(1.06);
}

/* Comics panel */
.panel--comics {
  overflow: hidden;
  background-color: var(--comic-red);
  background-image: radial-gradient(rgb(20 16 16 / 0.3) 1.6px, transparent 2px);
  background-size: 10px 10px;
  color: var(--paper);
  min-height: 15rem;
}

.panel--comics .panel__label {
  background: var(--paper);
  color: var(--paper-ink);
}

.panel--comics .panel__caption {
  display: inline-block;
  padding: 0.2rem 0.5rem;
  background: var(--paper-ink);
  color: var(--paper);
}

.burst {
  position: relative;
  display: grid;
  place-items: center;
  width: min(100%, 15rem);
  margin: 0.5rem auto 0;
  aspect-ratio: 1;
}

.burst svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  fill: #ffe36e;
  stroke: var(--paper-ink);
  stroke-width: 4;
  stroke-linejoin: round;
  transition: transform 0.5s var(--ease-out);
}

.panel--comics:hover .burst svg {
  transform: rotate(14deg) scale(1.06);
}

.burst__text {
  position: relative;
  max-width: 60%;
  font-family: var(--font-comic);
  font-size: clamp(1.4rem, 4vw, 1.9rem);
  line-height: 1;
  letter-spacing: 0.04em;
  text-align: center;
  color: var(--paper-ink);
  transform: rotate(-6deg);
}

/* Way back out */
.exit {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: 2.75rem;
  min-height: 3rem;
  padding: 0.7rem 1.3rem;
  border: 3px solid var(--paper-ink);
  background: var(--paper-ink);
  color: var(--paper);
  font-family: var(--font-comic);
  font-size: 1.35rem;
  letter-spacing: 0.06em;
  text-decoration: none;
  box-shadow: 5px 5px 0 var(--comic-red);
  transition: transform 0.25s var(--ease-out), box-shadow 0.25s var(--ease-out);
}

.exit:hover,
.exit:focus-visible {
  transform: translate(-2px, -2px);
  box-shadow: 8px 8px 0 var(--comic-red);
}

.world :focus-visible {
  outline-color: var(--paper-ink);
}

@media (min-width: 48rem) {
  .page {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.25rem;
  }

  .panel--hud {
    grid-column: span 2;
    transform: rotate(-0.6deg);
  }

  .panel--manga {
    transform: rotate(0.8deg);
  }

  .panel--comics {
    transform: rotate(-0.8deg);
  }
}

@media (min-width: 64rem) {
  .page {
    grid-template-columns: 1.4fr 1fr 1fr;
  }

  .panel--hud {
    grid-column: auto;
  }
}
</style>
