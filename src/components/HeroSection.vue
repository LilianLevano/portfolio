<script setup>
import { useI18n } from '../i18n/index.js'

const { t } = useI18n()
</script>

<template>
  <section id="top" class="hero" aria-labelledby="hero-title">
    <span class="hero__ghost" aria-hidden="true">{ }</span>

    <div class="container hero__grid">
      <div class="hero__text">
        <p class="hero__eyebrow">{{ t('hero.eyebrow') }}</p>

        <h1 id="hero-title" class="hero__title">
          <span class="hero__line hero__line--human">{{ t('hero.titleStart') }}</span>{{ ' ' }}
          <span class="hero__line hero__line--code">
            {{ t('hero.titleEnd') }}<span class="hero__caret" aria-hidden="true"></span>
          </span>
        </h1>

        <svg class="hero__bridge" viewBox="0 0 400 40" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <path d="M2 30 C 90 2, 170 2, 200 20 S 320 38, 398 8" />
        </svg>

        <p class="hero__lead">{{ t('hero.lead') }}</p>

        <p class="hero__status">
          <span class="hero__dot" aria-hidden="true"></span>
          {{ t('hero.status') }}
        </p>

        <div class="hero__actions">
          <a class="btn btn--primary" href="#projects">
            {{ t('hero.ctaProjects') }} <span class="arrow" aria-hidden="true">→</span>
          </a>
          <a class="btn" href="#contact">{{ t('hero.ctaContact') }}</a>
        </div>
      </div>

      <figure class="code-card" :aria-label="t('hero.codeLabel')">
        <div class="code-card__bar" aria-hidden="true">
          <span></span><span></span><span></span>
          <code class="code-card__file">lilian.js</code>
        </div>
        <pre class="code-card__body"><code><span class="l"><span class="k">const</span> lilian = {</span><span class="l">  background: <span class="s">'{{ t('hero.code.background') }}'</span>,</span><span class="l">  strongestSkill: <span class="s s--hot">'{{ t('hero.code.strongest') }}'</span>,</span><span class="l">  studies: <span class="s">'{{ t('hero.code.studies') }}'</span>,</span><span class="l">  school: <span class="s">'Erasmushogeschool Brussel'</span>,</span><span class="l">  lookingFor: <span class="s">'{{ t('hero.code.lookingFor') }}'</span>,</span><span class="l">};</span></code></pre>
      </figure>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  padding-block: clamp(3rem, 9vw, 7rem) clamp(4rem, 10vw, 7.5rem);
  border-bottom: 1px solid var(--line);
  background-image:
    linear-gradient(to right, rgb(243 235 223 / 0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgb(243 235 223 / 0.04) 1px, transparent 1px);
  background-size: 3.5rem 3.5rem;
}

.hero__ghost {
  position: absolute;
  right: -2vw;
  top: 50%;
  transform: translateY(-50%);
  font-family: var(--font-mono);
  font-weight: 600;
  font-size: clamp(12rem, 34vw, 30rem);
  line-height: 1;
  color: transparent;
  -webkit-text-stroke: 1px rgb(255 90 95 / 0.18);
  pointer-events: none;
  user-select: none;
}

.hero__grid {
  position: relative;
  display: grid;
  gap: clamp(2.5rem, 6vw, 4rem);
  align-items: center;
}

.hero__eyebrow {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--cream-dim);
  margin-bottom: 1.25rem;
  animation: rise 0.7s var(--ease-out) both;
}

.hero__title {
  display: grid;
  font-size: clamp(2.6rem, 10vw, 6.75rem);
  line-height: 0.95;
  overflow-wrap: break-word;
}

.hero__line {
  display: block;
  animation: rise 0.9s var(--ease-out) both;
}

.hero__line--human {
  font-style: italic;
  font-weight: 500;
  animation-delay: 0.1s;
}

.hero__line--code {
  color: var(--red-bright);
  font-weight: 800;
  padding-left: clamp(1.5rem, 8vw, 6rem);
  animation-delay: 0.3s;
}

.hero__caret {
  display: inline-block;
  width: 0.08em;
  height: 0.8em;
  margin-left: 0.08em;
  background: var(--cream);
  vertical-align: -0.04em;
  animation: blink 1.1s steps(1) infinite;
}

.hero__bridge {
  width: min(100%, 26rem);
  height: 2.25rem;
  margin: 0.5rem 0 1.5rem;
  fill: none;
  stroke: var(--red);
  stroke-width: 3;
  stroke-linecap: round;
  stroke-dasharray: 460;
  stroke-dashoffset: 460;
  animation: draw 1.4s 0.6s var(--ease-out) forwards;
}

.hero__lead {
  max-width: 34rem;
  font-size: clamp(1.05rem, 2.2vw, 1.25rem);
  color: var(--cream);
  animation: rise 0.9s 0.5s var(--ease-out) both;
}

.hero__status {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: 1.5rem;
  padding: 0.45rem 0.9rem;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--ink-2);
  font-size: 0.9rem;
  color: var(--cream-dim);
  animation: rise 0.9s 0.65s var(--ease-out) both;
}

.hero__dot {
  flex: none;
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 50%;
  background: var(--red-bright);
  box-shadow: 0 0 0 0 rgb(255 90 95 / 0.6);
  animation: ping 2s infinite;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
  animation: rise 0.9s 0.8s var(--ease-out) both;
}

/* Code card */
.code-card {
  margin: 0;
  min-width: 0;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--ink-2);
  box-shadow: 14px 14px 0 var(--red-deep);
  animation: card-in 1s 0.5s var(--ease-out) both;
}

.code-card__bar {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--line);
}

.code-card__bar span {
  width: 0.65rem;
  height: 0.65rem;
  border-radius: 50%;
  background: var(--line);
}

.code-card__bar span:first-child {
  background: var(--red);
}

.code-card__file {
  margin-left: auto;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--cream-dim);
}

.code-card__body {
  margin: 0;
  padding: 1.25rem 1rem 1.5rem;
  overflow-x: auto;
  font-family: var(--font-mono);
  font-size: clamp(0.72rem, 1.6vw, 0.9rem);
  line-height: 1.9;
  color: var(--cream-dim);
}

.code-card__body code {
  font-family: inherit;
}

.l {
  display: block;
  white-space: pre-wrap;
  padding-left: 2ch;
  text-indent: -2ch;
  animation: type-in 0.5s var(--ease-out) both;
}

.l:nth-child(1) { animation-delay: 0.9s; }
.l:nth-child(2) { animation-delay: 1.05s; }
.l:nth-child(3) { animation-delay: 1.2s; }
.l:nth-child(4) { animation-delay: 1.35s; }
.l:nth-child(5) { animation-delay: 1.5s; }
.l:nth-child(6) { animation-delay: 1.65s; }
.l:nth-child(7) { animation-delay: 1.8s; }

.k {
  color: var(--red-bright);
}

.s {
  color: var(--cream);
}

.s--hot {
  color: var(--ink);
  background: var(--cream);
  padding: 0.05em 0.3em;
  border-radius: 3px;
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(1.25rem);
  }
}

@keyframes card-in {
  from {
    opacity: 0;
    transform: translateY(2rem) rotate(0deg);
  }
}

@keyframes type-in {
  from {
    opacity: 0;
    transform: translateX(-0.5rem);
  }
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

@keyframes ping {
  70% {
    box-shadow: 0 0 0 0.55rem rgb(255 90 95 / 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgb(255 90 95 / 0);
  }
}

@media (min-width: 60rem) {
  .hero {
    min-height: calc(100svh - var(--header-h));
    display: grid;
    align-items: center;
  }

  .hero__grid {
    grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);
  }

  .code-card {
    transform: rotate(2deg) translateY(2.5rem);
  }

  @keyframes card-in {
    from {
      opacity: 0;
      transform: rotate(0deg) translateY(4rem);
    }
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__bridge {
    stroke-dashoffset: 0;
  }

  .hero__caret {
    animation: none;
  }
}
</style>
