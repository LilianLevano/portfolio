<script setup>
import { ref, watch, onBeforeUnmount } from 'vue'
import { useI18n } from '../i18n/index.js'
import { GAMES } from '../data/links.js'

const { t } = useI18n()

const track = ref(null)
const current = ref(0)
const announcement = ref('')

const title = (game) => t(`interests.games.items.${game.id}.title`)
const position = (i) =>
  t('interests.games.position').replace('{n}', i + 1).replace('{total}', GAMES.length)
const pad = (n) => String(n).padStart(2, '0')

function prefersReducedMotion() {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
}

// Where a button press is heading, so quick repeated presses keep counting from there.
let target = null
let settle = 0
let frame = 0

// Wraps around: "next" on the last game goes back to the first.
function goTo(index) {
  const el = track.value
  target = (index + GAMES.length) % GAMES.length
  const slide = el.children[target]
  el.scrollTo({
    left: slide.offsetLeft + slide.offsetWidth / 2 - el.clientWidth / 2,
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
  })
}

function step(delta) {
  goTo((target ?? current.value) + delta)
}

// The cover closest to the middle of the track is the selected one.
function onScroll() {
  clearTimeout(settle)
  settle = setTimeout(() => (target = null), 150)
  if (frame) return
  frame = requestAnimationFrame(() => {
    frame = 0
    const el = track.value
    const middle = el.scrollLeft + el.clientWidth / 2
    const distances = [...el.children].map((slide) =>
      Math.abs(slide.offsetLeft + slide.offsetWidth / 2 - middle),
    )
    current.value = distances.indexOf(Math.min(...distances))
  })
}

function onKeydown(event) {
  const delta = { ArrowLeft: -1, ArrowRight: 1 }[event.key]
  if (delta) step(delta)
  else if (event.key === 'Home') goTo(0)
  else if (event.key === 'End') goTo(GAMES.length - 1)
  else return
  event.preventDefault()
}

// Announce the game once scrolling settles, not every cover passed on the way.
let announceTimer = 0
watch(current, (i) => {
  clearTimeout(announceTimer)
  announceTimer = setTimeout(() => {
    announcement.value = `${position(i)}: ${title(GAMES[i])}`
  }, 300)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(frame)
  clearTimeout(settle)
  clearTimeout(announceTimer)
})
</script>

<template>
  <div class="hud">
    <div class="hud__top" aria-hidden="true">
      <span>HP</span>
      <span class="hud__bar"><span></span></span>
      <span>{{ pad(current + 1) }}/{{ pad(GAMES.length) }}</span>
    </div>
    <h3 id="games-title" class="hud__title">
      {{ t('interests.games.heading') }}<span class="hud__cursor" aria-hidden="true">_</span>
    </h3>

    <div
      class="carousel"
      role="region"
      :aria-roledescription="t('interests.games.carousel')"
      aria-labelledby="games-title"
    >
      <div
        ref="track"
        class="carousel__track"
        role="group"
        tabindex="0"
        :aria-label="t('interests.games.covers')"
        @scroll.passive="onScroll"
        @keydown="onKeydown"
      >
        <div
          v-for="(game, i) in GAMES"
          :key="game.id"
          class="slide"
          :class="{ 'is-active': i === current }"
          :style="{ '--side': Math.sign(i - current) }"
          role="group"
          :aria-roledescription="t('interests.games.slide')"
          :aria-label="position(i)"
          @click="goTo(i)"
        >
          <div class="slide__frame">
            <img
              class="slide__cover"
              :src="game.cover"
              alt=""
              :width="game.width"
              :height="game.height"
              loading="lazy"
              decoding="async"
            />
          </div>
          <p class="slide__caption">
            <strong class="slide__title">{{ title(game) }}</strong>
            <span class="visually-hidden">, </span>
            <span class="slide__status">{{ t(`interests.games.items.${game.id}.status`) }}</span>
          </p>
        </div>
      </div>

      <div class="carousel__controls">
        <button type="button" class="carousel__arrow" :aria-label="t('interests.games.prev')" @click="step(-1)">
          <svg viewBox="0 0 10 10" aria-hidden="true" focusable="false"><path d="M7 1 2 5l5 4z" /></svg>
        </button>
        <div class="carousel__dots" role="group" :aria-label="t('interests.games.pick')">
          <button
            v-for="(game, i) in GAMES"
            :key="game.id"
            type="button"
            class="carousel__dot"
            :aria-label="title(game)"
            :aria-current="i === current ? 'true' : null"
            @click="goTo(i)"
          ></button>
        </div>
        <button type="button" class="carousel__arrow" :aria-label="t('interests.games.next')" @click="step(1)">
          <svg viewBox="0 0 10 10" aria-hidden="true" focusable="false"><path d="m3 1 5 4-5 4z" /></svg>
        </button>
      </div>

      <p class="visually-hidden" aria-live="polite">{{ announcement }}</p>
    </div>
  </div>
</template>

<style scoped>
/* Retro game-select screen */
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
  margin-top: 1.25rem;
  font-family: var(--font-mono);
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.hud__cursor {
  animation: blink 1s steps(1) infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

/* A scroll-snap track, so touch swipe and trackpads work without extra code. */
.carousel {
  --slide-w: clamp(8.5rem, 50cqi, 11.5rem);
  container-type: inline-size;
}

.carousel__track {
  position: relative;
  display: flex;
  gap: 0.5rem;
  padding: 1.1rem calc(50cqi - var(--slide-w) / 2) 0.5rem;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
}

.carousel__track::-webkit-scrollbar {
  display: none;
}

.carousel__track:focus-visible {
  outline-offset: -3px;
}

/* Covers beside the selected one turn towards it, smaller and dimmed. */
.slide {
  flex: 0 0 var(--slide-w);
  scroll-snap-align: center;
  cursor: pointer;
  transform: perspective(40rem) rotateY(calc(var(--side) * -18deg)) scale(0.84);
  transition: transform 0.5s var(--ease-out);
}

.slide.is-active {
  cursor: auto;
  transform: none;
}

.slide__frame {
  position: relative;
}

/* Lock-on brackets around the selected cover. */
.slide__frame::after {
  --corner: linear-gradient(var(--hud) 0 0);
  content: '';
  position: absolute;
  inset: -0.45rem;
  background:
    var(--corner) top left / 1rem 2px,
    var(--corner) top left / 2px 1rem,
    var(--corner) top right / 1rem 2px,
    var(--corner) top right / 2px 1rem,
    var(--corner) bottom left / 1rem 2px,
    var(--corner) bottom left / 2px 1rem,
    var(--corner) bottom right / 1rem 2px,
    var(--corner) bottom right / 2px 1rem;
  background-repeat: no-repeat;
  opacity: 0;
  transform: scale(1.12);
  transition:
    opacity 0.3s var(--ease-out),
    transform 0.4s var(--ease-out);
  pointer-events: none;
}

.is-active .slide__frame::after {
  opacity: 1;
  transform: none;
}

.slide__cover {
  width: 100%;
  height: auto;
  aspect-ratio: 5 / 7;
  object-fit: cover;
  border: 2px solid #3d2f00;
  background: #000;
  filter: grayscale(0.9) sepia(0.4) brightness(0.55);
  transition:
    filter 0.5s var(--ease-out),
    border-color 0.3s var(--ease-out),
    box-shadow 0.3s var(--ease-out);
}

.is-active .slide__cover {
  border-color: var(--hud);
  box-shadow: 0 0 1.5rem rgb(255 176 0 / 0.3);
  filter: none;
}

@media (hover: hover) {
  .slide:not(.is-active):hover .slide__cover {
    filter: grayscale(0.4) sepia(0.2) brightness(0.8);
  }
}

.slide__caption {
  display: grid;
  gap: 0.15rem;
  margin-top: 0.85rem;
  line-height: 1.3;
  text-align: center;
  opacity: 0.75;
  transition: opacity 0.3s var(--ease-out);
}

.is-active .slide__caption {
  opacity: 1;
}

.slide__title {
  color: #fff1cc;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.slide__status {
  font-size: 0.75rem;
}

.carousel__controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 0.75rem;
}

.carousel__arrow {
  display: grid;
  place-items: center;
  width: 2.75rem;
  height: 2.75rem;
  padding: 0;
  border: 2px solid var(--hud);
  border-radius: 0;
  background: transparent;
  color: var(--hud);
  cursor: pointer;
  box-shadow: 3px 3px 0 #3d2f00;
  transition:
    background-color 0.15s,
    color 0.15s,
    transform 0.15s,
    box-shadow 0.15s;
}

.carousel__arrow svg {
  width: 0.8rem;
  fill: currentColor;
}

.carousel__arrow:hover,
.carousel__arrow:focus-visible {
  background: var(--hud);
  color: #120d05;
}

.carousel__arrow:active {
  transform: translate(3px, 3px);
  box-shadow: 0 0 0 #3d2f00;
}

.carousel__dots {
  display: flex;
}

.carousel__dot {
  display: grid;
  place-items: center;
  width: 1.75rem;
  height: 1.75rem;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
}

.carousel__dot::before {
  content: '';
  width: 0.65rem;
  height: 0.65rem;
  border: 2px solid var(--hud);
  transition:
    background-color 0.2s,
    transform 0.2s var(--ease-out);
}

.carousel__dot:hover::before {
  background: rgb(255 176 0 / 0.4);
}

.carousel__dot[aria-current='true']::before {
  background: var(--hud);
  transform: scale(1.25);
}
</style>
