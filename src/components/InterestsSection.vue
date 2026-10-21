<script setup>
import { useI18n } from '../i18n/index.js'
import GamesCarousel from './GamesCarousel.vue'

const { t } = useI18n()

// Bat silhouette (viewBox 0 0 100 50). The wings are separate paths so they can flap.
const BAT = {
  wingLeft: 'M45 19 C38 12 30 7 24 8 C17 9 9 11 2 15 Q9.5 20 11 31 Q17.5 24 24 33 Q30 26 36 34 Q41 28 45 30 Z',
  wingRight: 'M55 19 C62 12 70 7 76 8 C83 9 91 11 98 15 Q90.5 20 89 31 Q82.5 24 76 33 Q70 26 64 34 Q59 28 55 30 Z',
  body: 'M50 14 L53 9.5 L53.8 16.5 C55.6 18.5 56 23 55.2 28 C54.4 33 52.4 36.5 50 39 C47.6 36.5 45.6 33 44.8 28 C44 23 44.4 18.5 46.2 16.5 L47 9.5 Z',
}

// Comics hover swarm: each bat rises from behind Batman (x/y in % of the panel) and leaves
// through the top or a side (dx/dy in % of the panel's width/height).
const BATS = [
  { x: 50, y: 60, dx: -62, dy: -80, size: 3.4, dur: 2.4, delay: 0 },
  { x: 55, y: 64, dx: 56, dy: -86, size: 2.8, dur: 2.2, delay: 0.15 },
  { x: 45, y: 68, dx: -26, dy: -98, size: 3.8, dur: 2.7, delay: 0.35 },
  { x: 60, y: 70, dx: 64, dy: -46, size: 2.4, dur: 2, delay: 0.55 },
  { x: 40, y: 66, dx: -68, dy: -42, size: 2.6, dur: 2.1, delay: 0.75 },
  { x: 52, y: 56, dx: 20, dy: -90, size: 2.2, dur: 2.3, delay: 0.95 },
  { x: 47, y: 72, dx: -48, dy: -92, size: 3.2, dur: 2.6, delay: 1.15 },
  { x: 57, y: 60, dx: 38, dy: -72, size: 2.6, dur: 2.2, delay: 1.35 },
  { x: 50, y: 66, dx: -6, dy: -102, size: 3, dur: 2.5, delay: 1.55 },
  { x: 43, y: 62, dx: -40, dy: -70, size: 2.2, dur: 2, delay: 1.75 },
  { x: 62, y: 66, dx: 70, dy: -70, size: 3, dur: 2.4, delay: 1.95 },
  { x: 38, y: 72, dx: -66, dy: -86, size: 2.4, dur: 2.3, delay: 2.15 },
].map((bat, i) => ({
  '--x': `${bat.x}%`,
  '--y': `${bat.y}%`,
  '--dx': `${bat.dx}cqw`,
  '--dy': `${bat.dy}cqh`,
  '--tilt': `${Math.sign(bat.dx) * 14}deg`,
  '--size': `${bat.size}rem`,
  '--dur': `${bat.dur}s`,
  '--delay': `${bat.delay}s`,
  '--flap': `${0.16 + (i % 3) * 0.04}s`,
}))

// Manga hover: tiny explosions popping one after another around the Titan.
const BOOMS = [
  { x: 22, y: 20, size: 3, delay: 0 },
  { x: 76, y: 14, size: 2.4, delay: 0.25 },
  { x: 62, y: 40, size: 3.4, delay: 0.5 },
  { x: 28, y: 46, size: 2.2, delay: 0.75 },
  { x: 84, y: 54, size: 2.8, delay: 1 },
  { x: 46, y: 24, size: 2, delay: 1.2 },
  { x: 14, y: 62, size: 2.4, delay: 1.4 },
  { x: 78, y: 32, size: 2, delay: 1.6 },
].map((boom, i) => ({
  '--x': `${boom.x}%`,
  '--y': `${boom.y}%`,
  '--size': `${boom.size}rem`,
  '--delay': `${boom.delay}s`,
  '--turn': `${i * 47}deg`,
}))
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
          <!-- Panel 1: retro game-select screen with the covers -->
          <article class="panel panel--hud" aria-labelledby="games-title" v-reveal="'up'">
            <GamesCarousel />
          </article>

          <!-- Panel 2: manga, Attack on Titan art; tiny explosions on hover -->
          <article class="panel panel--art panel--manga" aria-labelledby="manga-title" v-reveal.delay="'scale'">
            <img
              class="panel__art"
              src="/aot-background.webp"
              alt=""
              width="560"
              height="800"
              loading="lazy"
              decoding="async"
            />
            <div class="fx" aria-hidden="true">
              <span v-for="(boom, i) in BOOMS" :key="i" class="boom" :style="boom"></span>
            </div>
            <h3 id="manga-title" class="panel__label">{{ t('interests.manga.heading') }}</h3>
            <p class="title-card"><span>{{ t('interests.manga.bubble') }}</span></p>
            <p class="panel__caption">{{ t('interests.manga.caption') }}</p>
          </article>

          <!-- Panel 3: comics, Batman art; a gold ticker and a bat swarm on hover -->
          <article class="panel panel--art panel--comics" aria-labelledby="comics-title" v-reveal.delay="'scale'">
            <img
              class="panel__art"
              src="/batman-background.avif"
              alt=""
              width="2000"
              height="2667"
              loading="lazy"
              decoding="async"
            />
            <div class="fx bats" aria-hidden="true">
              <span v-for="(bat, i) in BATS" :key="i" class="bat" :style="bat">
                <svg class="bat__body" viewBox="0 0 100 50" focusable="false">
                  <path class="bat__wing bat__wing--left" :d="BAT.wingLeft" />
                  <path class="bat__wing bat__wing--right" :d="BAT.wingRight" />
                  <path :d="BAT.body" />
                </svg>
              </span>
            </div>
            <h3 id="comics-title" class="panel__label">{{ t('interests.comics.heading') }}</h3>
            <p class="ticker">
              <span class="visually-hidden">{{ t('interests.comics.bubble') }}</span>
              <span class="ticker__track" aria-hidden="true">
                <span v-for="n in 8" :key="n" class="ticker__item">
                  <span class="ticker__text">{{ t('interests.comics.bubble') }}</span>
                  <svg class="ticker__bat" viewBox="0 0 100 50" focusable="false">
                    <path :d="BAT.wingLeft" />
                    <path :d="BAT.wingRight" />
                    <path :d="BAT.body" />
                  </svg>
                </span>
              </span>
            </p>
            <p class="panel__caption">{{ t('interests.comics.caption') }}</p>
          </article>
        </div>

        <p class="credits">{{ t('interests.credits') }}</p>

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
  position: relative;
  z-index: 2;
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
  z-index: 2;
  margin-top: 1rem;
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  font-weight: 600;
}

/* Games panel: dark frame around the game-select screen (see GamesCarousel.vue). */
.panel--hud {
  padding: 0.6rem;
  background: var(--paper-ink);
}

/* Art panels: the illustration fills the panel, the text sits on top as comic captions. */
.panel--art {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 26rem;
  overflow: hidden;
  isolation: isolate;
  background: var(--paper-ink);
}

.panel__art {
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition:
    transform 0.8s var(--ease-out),
    filter 0.8s var(--ease-out);
}

/* Darker bottom edge behind the caption. */
.panel--art::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  background: linear-gradient(to top, rgb(14 12 11 / 0.6), transparent 35%);
  pointer-events: none;
}

.panel--art .panel__caption {
  margin-top: auto;
  padding: 0.2rem 0.5rem;
  background: var(--paper-ink);
  color: var(--paper);
}

/* Hover effects layer: hidden, and its animations paused, until the panel is hovered. */
.fx {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.35s var(--ease-out);
}

/* Manga panel */
.panel--manga {
  container-type: inline-size;
}

.panel--manga .panel__art {
  object-position: 50% 30%;
}

/* Title card lit like the art (its peach glow #fff6ec → #feb098, crimson halo),
   on the dark horizon just above Eren. */
.title-card {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 31%;
  z-index: 2;
  padding: 0.75rem 1.25rem;
  background: radial-gradient(closest-side, rgb(33 13 16 / 0.65), transparent);
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 11cqi, 2.4rem);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: 0.04em;
  text-align: center;
  text-transform: uppercase;
  text-wrap: balance;
}

.title-card span {
  display: inline-block;
  padding-block: 0.1em;
  background: linear-gradient(#fff6ec 35%, #feb098);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 0.5rem rgb(178 61 66 / 0.9)) drop-shadow(0 1px 1px #210d10);
  transition: filter 0.5s var(--ease-out);
}

/* The dark halo is the ink outline that makes the bursts read against the red sky. */
.boom {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--size);
  aspect-ratio: 1;
  margin: calc(var(--size) / -2) 0 0 calc(var(--size) / -2);
  filter: drop-shadow(0 0 1.5px #210d10) drop-shadow(0 0 1px #210d10);
  transform: rotate(var(--turn));
}

.boom::before,
.boom::after {
  content: '';
  position: absolute;
  inset: 0;
  animation: boom-fire 1.8s var(--delay) cubic-bezier(0.2, 0.9, 0.3, 1) infinite both;
  animation-play-state: paused;
}

/* Fireball in the art's own colours: white-hot core, peach glow, Titan-eye orange, crimson. */
.boom::before {
  background: radial-gradient(closest-side, #fff 0 12%, #fff6ec 22%, #feb098 38%, #f27460 62%, #b23d42 92%);
  clip-path: polygon(
    50% 0%, 54.9% 31.6%, 70% 15.4%, 63.4% 36.6%, 90.7% 26.5%, 68.4% 45.1%,
    86% 50%, 68.4% 54.9%, 93.3% 75%, 63.4% 63.4%, 71% 86.4%, 54.9% 68.4%,
    50% 96%, 45.1% 68.4%, 31% 82.9%, 36.6% 63.4%, 7.6% 74.5%, 31.6% 54.9%,
    10% 50%, 31.6% 45.1%, 11% 27.5%, 36.6% 36.6%, 31.5% 18%, 45.1% 31.6%
  );
}

/* Sparks: a ring of short rays flying outwards. */
.boom::after {
  inset: -45%;
  background: repeating-conic-gradient(#feb098 0 5deg, transparent 5deg 36deg);
  -webkit-mask: radial-gradient(closest-side, transparent 58%, #000 62% 80%, transparent 84%);
  mask: radial-gradient(closest-side, transparent 58%, #000 62% 80%, transparent 84%);
  animation-name: boom-sparks;
  animation-timing-function: ease-out;
}

@keyframes boom-fire {
  0% {
    opacity: 1;
    transform: scale(0) rotate(-20deg);
  }
  12% {
    opacity: 1;
    transform: scale(1.1) rotate(0deg);
  }
  30%,
  100% {
    opacity: 0;
    transform: scale(0.6) rotate(12deg);
  }
}

@keyframes boom-sparks {
  0%,
  5% {
    opacity: 0;
    transform: scale(0.35);
  }
  10% {
    opacity: 1;
  }
  34%,
  100% {
    opacity: 0;
    transform: scale(1.15);
  }
}

/* Comics panel */
.panel--comics .panel__art {
  object-position: 50% 25%;
  filter: brightness(0.82);
}

.panel--comics .panel__label {
  background: var(--paper);
  color: var(--paper-ink);
}

/* The bat-signal in the top of the art lights up on hover. */
.panel--comics::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
  background: radial-gradient(circle at 62% 6%, rgb(250 204 80 / 0.4), transparent 45%);
  mix-blend-mode: screen;
  opacity: 0;
  transition: opacity 0.6s var(--ease-out);
  pointer-events: none;
}

/* Gold taken from the bat-signal in the art (#facc50 → #c38934) on Gotham black (#0c0b09). */
.ticker {
  position: absolute;
  top: 62%;
  left: -15%;
  right: -15%;
  z-index: 2;
  overflow: hidden;
  /* The band overhangs the panel by 15%; start the text where the panel starts. */
  padding: 0.35rem 0 0.35rem calc(15% + 0.75rem);
  border-block: 2px solid #c38934;
  background: rgb(12 11 9 / 0.88);
  box-shadow: 0 0.75rem 1.5rem rgb(0 0 0 / 0.5);
  transform: rotate(-6deg);
}

.ticker__track {
  display: flex;
  width: max-content;
  animation: ticker 18s linear infinite;
  animation-play-state: paused;
}

/* Eight identical items: moving by half the track loops seamlessly. */
.ticker__item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding-inline-end: 0.8rem;
}

.ticker__text {
  font-family: var(--font-comic);
  font-size: 1.75rem;
  line-height: 1.15;
  letter-spacing: 0.06em;
  white-space: nowrap;
  color: #facc50;
  background: linear-gradient(#ffe39a 15%, #facc50 50%, #c38934 90%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.ticker__bat {
  width: 2rem;
  fill: #c38934;
}

@keyframes ticker {
  to {
    transform: translateX(-50%);
  }
}

/* Gold rim light, as if the bats were lit by the bat-signal. */
.bats {
  container-type: size;
  filter: drop-shadow(0 0 4px rgb(250 204 80 / 0.35));
}

.bat {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--size);
  margin-left: calc(var(--size) / -2);
  animation: bat-x var(--dur) var(--delay) ease-in infinite both;
}

.bat__body {
  width: 100%;
  height: auto;
  overflow: visible;
  fill: #0c0b09;
  stroke: rgb(250 204 80 / 0.75);
  stroke-width: 1;
  animation: bat-y var(--dur) var(--delay) cubic-bezier(0.25, 0.6, 0.45, 1) infinite both;
}

.bat__body path {
  vector-effect: non-scaling-stroke;
}

.bat__wing {
  transform-box: view-box;
  animation: flap-left var(--flap) ease-in-out infinite alternate;
}

.bat__wing--left {
  transform-origin: 45px 22px;
}

.bat__wing--right {
  transform-origin: 55px 22px;
  animation-name: flap-right;
}

.bat,
.bat__body,
.bat__wing {
  animation-play-state: paused;
}

/* Sideways and upwards use different easings, so each bat flies a curve. */
@keyframes bat-x {
  to {
    transform: translateX(var(--dx));
  }
}

@keyframes bat-y {
  0% {
    opacity: 0;
    transform: translateY(0) scale(0.45);
  }
  12%,
  85% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(var(--dy)) scale(1.1) rotate(var(--tilt));
  }
}

@keyframes flap-left {
  from {
    transform: rotate(22deg);
  }
  to {
    transform: rotate(-16deg);
  }
}

@keyframes flap-right {
  from {
    transform: rotate(-22deg);
  }
  to {
    transform: rotate(16deg);
  }
}

@media (hover: hover) {
  .panel--art:hover .panel__art {
    transform: scale(1.05);
  }

  .panel--art:hover .fx,
  .panel--comics:hover::before {
    opacity: 1;
  }

  .panel--manga:hover .title-card span {
    filter: drop-shadow(0 0 0.9rem rgb(242 116 96 / 0.95)) drop-shadow(0 1px 1px #210d10);
  }

  .panel--manga:hover .boom::before,
  .panel--manga:hover .boom::after,
  .panel--comics:hover .ticker__track,
  .panel--comics:hover .bat,
  .panel--comics:hover .bat__body,
  .panel--comics:hover .bat__wing {
    animation-play-state: running;
  }

  .panel--comics:hover .panel__art {
    filter: brightness(1);
  }
}

/* Touch screens have no hover: the explosions and bats play once as the panel scrolls in. */
@media (hover: none) {
  .panel--art.is-visible .fx {
    opacity: 1;
  }

  .panel--manga.is-visible .boom::before,
  .panel--manga.is-visible .boom::after,
  .panel--comics.is-visible .bat,
  .panel--comics.is-visible .bat__body {
    animation-play-state: running;
    animation-iteration-count: 1;
  }

  .panel--comics.is-visible .bat__wing {
    animation-play-state: running;
    animation-iteration-count: 20;
  }
}

@media (prefers-reduced-motion: reduce) {
  .fx {
    display: none;
  }
}

.credits {
  margin-top: 1.5rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  opacity: 0.75;
}

/* Way back out */
.exit {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: 2rem;
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

/* An ink outline would vanish on the dark game screen. */
.panel--hud :focus-visible {
  outline-color: #fff1cc;
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
