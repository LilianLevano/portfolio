<script setup>
import { useI18n } from '../i18n/index.js'
import { LINKS } from '../data/links.js'

const { t } = useI18n()

const channels = [
  { id: 'linkedin', handle: 'in/lilian-levano' },
  { id: 'github', handle: 'LilianLevano' },
]
</script>

<template>
  <section id="contact" class="section contact" aria-labelledby="contact-title">
    <div class="container contact__grid">
      <header class="section-head" v-reveal="'up'">
        <p class="kicker">05 · {{ t('contact.kicker') }}</p>
        <h2 id="contact-title" class="section-title contact__title">{{ t('contact.title') }}</h2>
        <p class="section-intro">{{ t('contact.text') }}</p>
      </header>

      <ul class="contact__links">
        <li v-for="(channel, i) in channels" :key="channel.id" v-reveal="i ? 'right' : 'left'">
          <a class="channel" :href="LINKS[channel.id]" target="_blank" rel="noopener noreferrer">
            <svg v-if="channel.id === 'linkedin'" class="channel__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <rect x="2" y="2" width="20" height="20" rx="3" />
              <path d="M7 10v7M7 7v.01M11 17v-7M11 13.5c0-2 1.2-3.5 3-3.5s3 1.2 3 3.5V17" />
            </svg>
            <svg v-else class="channel__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M9 19c-4 1.3-4-2-6-2.5M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
            </svg>
            <span class="channel__text">
              <span class="channel__name">{{ t(`contact.${channel.id}`) }}</span>
              <span class="channel__handle">{{ channel.handle }}</span>
            </span>
            <span class="visually-hidden">{{ t('contact.newTab') }}</span>
            <span class="channel__arrow" aria-hidden="true">↗</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.contact__grid {
  display: grid;
  gap: 1rem 4rem;
  align-items: end;
}

.contact__title {
  font-size: clamp(2.6rem, 8vw, 5rem);
  font-style: italic;
}

.contact__links {
  display: grid;
  gap: 1rem;
}

.channel {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: var(--ink-2);
  text-decoration: none;
  transition:
    border-color 0.3s var(--ease-out),
    background-color 0.3s var(--ease-out),
    transform 0.3s var(--ease-out);
}

.channel:hover,
.channel:focus-visible {
  border-color: var(--red-bright);
  background: var(--red);
  transform: translateX(6px);
}

.channel__icon {
  flex: none;
  width: 2.25rem;
  height: 2.25rem;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.channel__text {
  display: grid;
  min-width: 0;
}

.channel__name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.2;
}

.channel__handle {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--cream-dim);
  overflow-wrap: anywhere;
}

.channel:hover .channel__handle,
.channel:focus-visible .channel__handle {
  color: var(--cream);
}

.channel__arrow {
  margin-left: auto;
  font-size: 1.5rem;
  transition: transform 0.3s var(--ease-out);
}

.channel:hover .channel__arrow,
.channel:focus-visible .channel__arrow {
  transform: translate(3px, -3px);
}

@media (min-width: 60rem) {
  .contact__grid {
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
  }

  .contact__grid .section-head {
    margin-bottom: 0;
  }
}
</style>
