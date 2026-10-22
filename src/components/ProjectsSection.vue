<script setup>
import { useI18n } from '../i18n/index.js'
import { PROJECTS } from '../data/links.js'

const { t } = useI18n()
</script>

<template>
  <section id="projects" class="section projects" aria-labelledby="projects-title">
    <div class="container">
      <header class="section-head" v-reveal="'left'">
        <p class="kicker">03 · {{ t('projects.kicker') }}</p>
        <h2 id="projects-title" class="section-title">{{ t('projects.title') }}</h2>
        <p class="section-intro">{{ t('projects.intro') }}</p>
      </header>

      <ol class="projects__list">
        <li
          v-for="(project, i) in PROJECTS"
          :key="project.id"
          v-reveal="i % 2 ? 'right' : 'left'"
        >
          <article class="project" :class="`project--${project.accent}`" :aria-labelledby="`project-${project.id}`">
            <span class="project__num" aria-hidden="true">{{ String(i + 1).padStart(2, '0') }}</span>

            <div class="project__main">
              <p class="project__type">{{ t(`projects.items.${project.id}.type`) }}</p>
              <h3 :id="`project-${project.id}`" class="project__title">
                {{ t(`projects.items.${project.id}.title`) }}
              </h3>
              <p class="project__desc">{{ t(`projects.items.${project.id}.description`) }}</p>

              <ul class="project__stack" :aria-label="t('projects.stackLabel')">
                <li v-for="tech in project.stack" :key="tech">{{ tech }}</li>
              </ul>
            </div>

            <div class="project__links">
              <a class="project__link" :href="project.url" target="_blank" rel="noopener noreferrer">
                {{ t('projects.link') }}
                <span class="visually-hidden">: {{ t(`projects.items.${project.id}.title`) }} {{ t('projects.newTab') }}</span>
                <span class="project__arrow" aria-hidden="true">↗</span>
              </a>
              <a v-if="project.live" class="project__link" :href="project.live" target="_blank" rel="noopener noreferrer">
                {{ t('projects.liveLink') }}
                <span class="visually-hidden">: {{ t(`projects.items.${project.id}.title`) }} {{ t('projects.newTab') }}</span>
                <span class="project__arrow" aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.projects__list {
  display: grid;
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid var(--line);
}

.project {
  position: relative;
  display: grid;
  gap: 1rem 2rem;
  padding: 2rem 0;
  border-bottom: 1px solid var(--line);
  transition: background-color 0.4s var(--ease-out);
}

.project::before {
  content: '';
  position: absolute;
  left: 0;
  top: -1px;
  height: 2px;
  width: 100%;
  background: var(--red-bright);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.6s var(--ease-out);
}

.project:hover::before,
.project:focus-within::before {
  transform: scaleX(1);
}

.project__num {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(3rem, 8vw, 5.5rem);
  line-height: 0.9;
  color: transparent;
  -webkit-text-stroke: 1.5px var(--red-bright);
  transition: color 0.4s var(--ease-out);
}

.project:hover .project__num,
.project:focus-within .project__num {
  color: var(--red);
}

.project__main {
  display: grid;
  gap: 0.6rem;
  min-width: 0;
}

.project__type {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--red-bright);
}

.project__title {
  font-size: clamp(1.75rem, 4.5vw, 2.75rem);
  overflow-wrap: anywhere;
}

.project__desc {
  max-width: 38rem;
  color: var(--cream-dim);
}

.project__stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.project__stack li {
  padding: 0.25rem 0.7rem;
  border: 1px solid var(--line);
  border-radius: 999px;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--cream);
}

.project__links {
  display: grid;
  gap: 0.75rem;
  align-self: start;
  justify-self: start;
  justify-items: start;
}

.project__link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 2.75rem;
  padding: 0.6rem 1.1rem;
  border: 2px solid var(--cream);
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;
  transition: background-color 0.25s, color 0.25s;
}

.project__link:hover,
.project__link:focus-visible {
  background: var(--cream);
  color: var(--ink);
}

.project__arrow {
  transition: transform 0.3s var(--ease-out);
}

.project__link:hover .project__arrow,
.project__link:focus-visible .project__arrow {
  transform: translate(3px, -3px);
}

/* ComicHub gets a comic-ish offset shadow on its number. */
.project--red .project__num {
  text-shadow: 6px 6px 0 var(--red-deep);
}

@media (min-width: 48rem) {
  .project {
    grid-template-columns: 7rem minmax(0, 1fr) auto;
    align-items: start;
    padding: 2.5rem 1rem;
  }

  .project:hover,
  .project:focus-within {
    background: var(--ink-2);
  }
}
</style>
