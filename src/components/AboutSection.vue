<script setup>
import { useI18n } from '../i18n/index.js'

const { t } = useI18n()
</script>

<template>
  <section id="about" class="section about" aria-labelledby="about-title">
    <div class="container about__grid">
      <header class="section-head about__head" v-reveal="'left'">
        <p class="kicker">01 · {{ t('about.kicker') }}</p>
        <h2 id="about-title" class="section-title">{{ t('about.title') }}</h2>
      </header>

      <div class="about__body">
        <p class="about__intro" v-reveal="'up'">{{ t('about.intro') }}</p>

        <blockquote class="about__highlight" v-reveal.delay="'clip'">
          <p>{{ t('about.highlight') }}</p>
        </blockquote>

        <dl class="facts" :aria-label="t('about.factsLabel')" v-reveal="'up'">
          <div v-for="fact in t('about.facts')" :key="fact.label" class="facts__row">
            <dt>{{ fact.label }}</dt>
            <dd>{{ fact.value }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__grid {
  display: grid;
  gap: 1rem 4rem;
}

.about__body {
  display: grid;
  gap: 2rem;
  max-width: 44rem;
}

.about__intro {
  font-size: clamp(1.1rem, 2.4vw, 1.35rem);
  line-height: 1.6;
}

.about__highlight {
  margin: 0;
  padding: 1.25rem 1.5rem;
  border-left: 4px solid var(--red);
  background: var(--ink-2);
  font-family: var(--font-display);
  font-style: italic;
  font-size: clamp(1.15rem, 2.6vw, 1.5rem);
  line-height: 1.4;
}

.facts {
  display: grid;
  margin: 0;
  border-top: 1px solid var(--line);
}

.facts__row {
  display: grid;
  gap: 0.15rem 1.5rem;
  padding-block: 0.9rem;
  border-bottom: 1px solid var(--line);
}

.facts dt {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--red-bright);
}

.facts dd {
  margin: 0;
}

@media (min-width: 40rem) {
  .facts__row {
    grid-template-columns: 10rem 1fr;
    align-items: baseline;
  }
}

@media (min-width: 60rem) {
  .about__grid {
    grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
  }

  .about__head {
    position: sticky;
    top: calc(var(--header-h) + 2rem);
    align-self: start;
  }
}
</style>
