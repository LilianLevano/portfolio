<script setup>
import { useI18n } from '../i18n/index.js'
import SkillIcon from './SkillIcon.vue'

const { t } = useI18n()

// Order matters for the bento layout (see grid rules below).
const skills = [
  { id: 'communication', icons: ['communication'] },
  { id: 'javascript', icons: ['javascript'] },
  { id: 'phpLaravel', icons: ['php', 'laravel'] },
  { id: 'spring', icons: ['spring'] },
  { id: 'webdev', icons: ['webdev'] },
  { id: 'mysql', icons: ['database'] },
  { id: 'sqlite', icons: ['database'] },
]

const variants = ['up', 'scale', 'up', 'scale', 'up', 'left', 'right']
</script>

<template>
  <section id="skills" class="section skills" aria-labelledby="skills-title">
    <div class="container">
      <header class="section-head" v-reveal="'up'">
        <p class="kicker">02 · {{ t('skills.kicker') }}</p>
        <h2 id="skills-title" class="section-title">{{ t('skills.title') }}</h2>
        <p class="section-intro">{{ t('skills.intro') }}</p>
      </header>

      <ul class="skills__grid">
        <li
          v-for="(skill, i) in skills"
          :key="skill.id"
          class="skill"
          :class="`skill--${skill.id}`"
          tabindex="0"
          v-reveal="variants[i]"
        >
          <span class="skill__icons">
            <SkillIcon v-for="icon in skill.icons" :key="icon" :name="icon" :uid="skill.id" />
          </span>
          <span class="skill__text">
            <h3 class="skill__name">{{ t(`skills.items.${skill.id}.name`) }}</h3>
            <span class="skill__tag">{{ t(`skills.items.${skill.id}.tag`) }}</span>
            <span v-if="skill.id === 'communication'" class="skill__note">
              {{ t('skills.items.communication.note') }}
            </span>
          </span>

          <span v-if="skill.id === 'communication'" class="talk" aria-hidden="true">
            <span class="talk__bubble">…</span>
            <span class="talk__bubble">?</span>
            <span class="talk__bubble">!</span>
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.skills {
  background: var(--ink-2);
  border-block: 1px solid var(--line);
}

.skills__grid {
  display: grid;
  gap: 1rem;
}

.skill {
  --accent: var(--cream);
  --glow: transparent;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  min-height: 11rem;
  padding: 1.5rem;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: var(--ink);
  overflow: hidden;
  outline: none;
  transition:
    border-color 0.35s var(--ease-out),
    box-shadow 0.35s var(--ease-out),
    transform 0.35s var(--ease-out),
    opacity 0.8s var(--ease-out);
}

/* Every effect below is triggered by hover AND keyboard focus. */
.skill:hover,
.skill:focus-visible {
  border-color: var(--accent);
  box-shadow: 0 0 0 1px var(--accent), 0 0 28px var(--glow);
  transform: translateY(-4px);
}

.skill:focus-visible {
  outline: 3px solid var(--accent);
  outline-offset: 4px;
}

.skill__icons {
  display: flex;
  gap: 0.75rem;
  color: var(--accent);
}

.skill__icons :deep(.icon) {
  transition: transform 0.45s var(--ease-out), filter 0.45s var(--ease-out);
}

.skill__text {
  display: grid;
  gap: 0.35rem;
}

.skill__name {
  font-size: 1.45rem;
}

.skill__tag {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--cream-dim);
  transition: color 0.3s;
}

.skill:hover .skill__tag,
.skill:focus-visible .skill__tag {
  color: var(--accent-text, var(--accent));
}

/* --- Communication: the featured tile, speech bubbles appear --- */
.skill--communication {
  --accent: var(--cream);
  --glow: rgb(200 29 37 / 0.55);
  background: var(--red);
  border-color: var(--red);
  min-height: 15rem;
}

.skill--communication .skill__name {
  font-size: clamp(1.9rem, 4vw, 2.75rem);
  font-style: italic;
}

.skill--communication .skill__tag,
.skill--communication:hover .skill__tag,
.skill--communication:focus-visible .skill__tag {
  color: var(--cream);
}

.skill__note {
  max-width: 26rem;
  margin-top: 0.5rem;
  font-size: 1rem;
  line-height: 1.5;
}

.skill--communication .skill__icons :deep(.icon) {
  width: 4rem;
  height: 4rem;
}

.talk {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  display: flex;
  gap: 0.5rem;
}

.talk__bubble {
  display: grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50% 50% 50% 4px;
  background: var(--cream);
  color: var(--red);
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.2rem;
  opacity: 0;
  transform: translateY(0.75rem) scale(0.4);
  transition:
    opacity 0.3s var(--ease-out),
    transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.talk__bubble:nth-child(2) {
  background: var(--ink);
  color: var(--cream);
  transition-delay: 0.1s;
}

.talk__bubble:nth-child(3) {
  transition-delay: 0.2s;
}

.skill--communication:hover .talk__bubble,
.skill--communication:focus-visible .talk__bubble {
  opacity: 1;
  transform: none;
}

.skill--communication:hover :deep(.bubble-b),
.skill--communication:focus-visible :deep(.bubble-b) {
  animation: chat 0.9s ease-in-out infinite alternate;
  transform-box: fill-box;
  transform-origin: bottom right;
}

@keyframes chat {
  to {
    transform: rotate(-6deg) scale(1.05);
  }
}

/* --- JavaScript: yellow neon, logo pops --- */
.skill--javascript {
  --accent: #f7df1e;
  --glow: rgb(247 223 30 / 0.45);
}

.skill--javascript:hover .skill__icons :deep(.icon),
.skill--javascript:focus-visible .skill__icons :deep(.icon) {
  transform: scale(1.22) rotate(-6deg);
  filter: drop-shadow(0 0 10px rgb(247 223 30 / 0.9));
}

.skill--javascript:hover .skill__name,
.skill--javascript:focus-visible .skill__name {
  color: #fff6a8;
  text-shadow: 0 0 12px rgb(247 223 30 / 0.7);
}

/* --- PHP / Laravel: purple-blue accents + pulsing red Laravel edge --- */
.skill--phpLaravel {
  --accent: #8892bf;
  --accent-text: #aab2dc;
  --glow: rgb(136 146 191 / 0.45);
}

.skill--phpLaravel:hover,
.skill--phpLaravel:focus-visible {
  background: linear-gradient(160deg, rgb(136 146 191 / 0.14), var(--ink) 60%);
  animation: laravel-pulse 1.4s ease-in-out infinite;
}

.skill--phpLaravel:hover .skill__icons :deep(.icon--php),
.skill--phpLaravel:focus-visible .skill__icons :deep(.icon--php) {
  transform: translateX(4px) rotate(-8deg);
}

.skill--phpLaravel:hover .skill__icons :deep(.icon--laravel),
.skill--phpLaravel:focus-visible .skill__icons :deep(.icon--laravel) {
  filter: drop-shadow(0 0 8px rgb(255 45 32 / 0.85));
}

@keyframes laravel-pulse {
  50% {
    box-shadow: 0 0 0 1px var(--accent), 0 0 0 5px rgb(255 45 32 / 0.35), 0 0 24px rgb(255 45 32 / 0.35);
  }
}

/* --- Java Spring Boot: green accents, little spring bounce --- */
.skill--spring {
  --accent: #6db33f;
  --accent-text: #8fd162;
  --glow: rgb(109 179 63 / 0.4);
}

.skill--spring:hover .skill__icons :deep(.icon),
.skill--spring:focus-visible .skill__icons :deep(.icon) {
  animation: boing 0.9s cubic-bezier(0.28, 0.84, 0.42, 1);
}

@keyframes boing {
  0% { transform: translateY(0) scale(1, 1); }
  20% { transform: translateY(0) scale(1.15, 0.8); }
  45% { transform: translateY(-14px) scale(0.9, 1.12); }
  65% { transform: translateY(0) scale(1.08, 0.92); }
  82% { transform: translateY(-4px) scale(0.98, 1.03); }
  100% { transform: translateY(0) scale(1, 1); }
}

/* --- Web development: browser window, code brackets slide --- */
.skill--webdev {
  --accent: var(--red-bright);
  --glow: rgb(255 90 95 / 0.35);
}

.skill--webdev :deep(.code) {
  stroke-dasharray: 60;
  stroke-dashoffset: 0;
}

.skill--webdev:hover :deep(.code),
.skill--webdev:focus-visible :deep(.code) {
  animation: retype 0.9s var(--ease-out);
}

@keyframes retype {
  from {
    stroke-dashoffset: 60;
  }
}

/* --- MySQL / SQLite: blue tones, database icon fills up --- */
.skill--mysql {
  --accent: #4479a1;
  --accent-text: #8ab8e0;
  --glow: rgb(68 121 161 / 0.5);
}

.skill--sqlite {
  --accent: #3fa9f5;
  --accent-text: #8fd0ff;
  --glow: rgb(63 169 245 / 0.4);
}

.skill--mysql .skill__icons,
.skill--sqlite .skill__icons {
  color: var(--accent-text);
}

.skill--mysql:hover :deep(.db-fill),
.skill--mysql:focus-visible :deep(.db-fill),
.skill--sqlite:hover :deep(.db-fill),
.skill--sqlite:focus-visible :deep(.db-fill) {
  transform: scaleY(1);
}

/* --- Layout --- */
@media (min-width: 40rem) {
  .skills__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .skill--communication {
    grid-column: span 2;
  }
}

@media (min-width: 60rem) {
  .skills__grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .skill--communication {
    grid-column: 1 / span 2;
    grid-row: span 2;
  }

  .skill--mysql,
  .skill--sqlite {
    grid-column: span 2;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1.5rem;
    min-height: 8rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .skill:hover,
  .skill:focus-visible {
    transform: none;
    animation: none;
  }
}
</style>
