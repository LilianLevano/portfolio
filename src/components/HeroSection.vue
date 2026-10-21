<script setup>
import { ref, nextTick } from 'vue'
import { useI18n } from '../i18n/index.js'

const { t } = useI18n()

// The profile card starts as a question: null = unanswered, true/false = the visitor's pick.
// Either answer shows the profile; false just gets a cheeky override first.
const answer = ref(null)
const preview = ref(null)
const codeEl = ref(null)
const yesButton = ref(null)

async function choose(value) {
  answer.value = value
  preview.value = null
  await nextTick()
  codeEl.value?.focus()
}

async function reset() {
  answer.value = null
  await nextTick()
  yesButton.value?.focus()
}
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
        <div class="code-card__bar">
          <span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span>
          <code class="code-card__file" aria-hidden="true">lilian.js</code>
          <button v-if="answer !== null" type="button" class="code-card__reset" @click="reset">
            <span aria-hidden="true">↺</span> {{ t('hero.quiz.reset') }}
          </button>
        </div>

        <div v-if="answer === null" class="code-card__body quiz">
          <p class="l"><span class="c">// {{ t('hero.quiz.question') }}</span></p>
          <p class="l">
            <span class="k">let</span> showProfile =
            <span class="quiz__blank" :class="preview !== null && `quiz__blank--${preview}`" aria-hidden="true">{{
              preview === null ? '?' : String(preview)
            }}</span>;
          </p>
          <div class="quiz__choices l">
            <button
              ref="yesButton"
              type="button"
              class="quiz__btn quiz__btn--true"
              @click="choose(true)"
              @mouseenter="preview = true"
              @focus="preview = true"
              @mouseleave="preview = null"
              @blur="preview = null"
            >
              true<span class="visually-hidden"> ({{ t('hero.quiz.srTrue') }})</span>
            </button>
            <button
              type="button"
              class="quiz__btn quiz__btn--false"
              @click="choose(false)"
              @mouseenter="preview = false"
              @focus="preview = false"
              @mouseleave="preview = null"
              @blur="preview = null"
            >
              false<span class="visually-hidden"> ({{ t('hero.quiz.srFalse') }})</span>
            </button>
          </div>
          <p class="l"><span class="c">// {{ t('hero.quiz.hint') }}</span></p>
        </div>

        <pre
          v-else
          ref="codeEl"
          class="code-card__body is-answered"
          :class="{ 'is-denied': answer === false }"
          tabindex="-1"
        ><code><span class="l"><span class="k">let</span> showProfile = <span class="k">{{ String(answer) }}</span>;</span><template v-if="answer"><span class="l"><span class="c">// {{ t('hero.quiz.yes') }}</span></span></template><template v-else><span class="l l--alert">// {{ t('hero.quiz.no') }}</span><span class="l">showProfile = <span class="k">true</span>; <span class="c">// {{ t('hero.quiz.override') }}</span></span></template><span class="l"><span class="k">const</span> lilian = {</span><span class="l">  background: <span class="s">'{{ t('hero.code.background') }}'</span>,</span><span class="l">  strongestSkill: <span class="s s--hot">'{{ t('hero.code.strongest') }}'</span>,</span><span class="l">  studies: <span class="s">'{{ t('hero.code.studies') }}'</span>,</span><span class="l">  school: <span class="s">'Erasmushogeschool Brussel'</span>,</span><span class="l">  lookingFor: <span class="s">'{{ t('hero.code.lookingFor') }}'</span>,</span><span class="l">};</span></code></pre>
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

.code-card__bar > span {
  width: 0.65rem;
  height: 0.65rem;
  border-radius: 50%;
  background: var(--line);
}

.code-card__bar > span:first-child {
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
  animation-delay: calc(var(--start, 0.9s) + var(--n, 0) * 0.15s);
}

/* Lines type in one after another; once answered there is no page-load wait. */
.l:nth-child(2) { --n: 1; }
.l:nth-child(3) { --n: 2; }
.l:nth-child(4) { --n: 3; }
.l:nth-child(5) { --n: 4; }
.l:nth-child(6) { --n: 5; }
.l:nth-child(7) { --n: 6; }
.l:nth-child(8) { --n: 7; }
.l:nth-child(9) { --n: 8; }
.l:nth-child(10) { --n: 9; }

.is-answered {
  --start: 0.05s;
}

.is-answered:focus-visible {
  outline-offset: -3px;
}

.is-denied {
  animation: deny 0.45s var(--ease-out);
}

.l--alert {
  color: var(--red-bright);
}

.k {
  color: var(--red-bright);
}

.c {
  color: var(--cream-dim);
  font-style: italic;
  opacity: 0.8;
}

/* Question state */
.quiz__blank {
  display: inline-block;
  min-width: 5.5ch;
  padding: 0 0.4ch;
  border-bottom: 2px solid var(--red-bright);
  color: var(--cream);
  text-align: center;
  text-indent: 0;
  animation: blank-blink 1.1s steps(1) infinite;
}

/* Only the "?" blinks; the underline stays put. */
@keyframes blank-blink {
  50% {
    color: transparent;
  }
}

.quiz__blank--true,
.quiz__blank--false {
  animation: none;
}

.quiz__blank--true {
  color: var(--red-bright);
}

.quiz__choices {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding-block: 0.75rem;
  text-indent: 0;
}

.quiz__btn {
  min-width: 6.5rem;
  min-height: 2.75rem;
  padding: 0.4rem 1.1rem;
  border: 2px solid var(--line);
  border-radius: 8px;
  background: var(--ink);
  color: var(--cream);
  font-family: var(--font-mono);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    background-color 0.2s var(--ease-out),
    border-color 0.2s var(--ease-out),
    color 0.2s var(--ease-out),
    transform 0.2s var(--ease-out);
}

.quiz__btn--true {
  border-color: var(--red);
  color: var(--red-bright);
}

.quiz__btn:hover,
.quiz__btn:focus-visible {
  transform: translateY(-2px);
}

.quiz__btn--true:hover,
.quiz__btn--true:focus-visible {
  background: var(--red);
  color: var(--cream);
}

.quiz__btn--false:hover,
.quiz__btn--false:focus-visible {
  border-color: var(--cream-dim);
  background: var(--ink-3);
}

.quiz__btn:active {
  transform: translateY(0) scale(0.97);
}

.code-card__reset {
  min-height: 2rem;
  margin-left: 0.75rem;
  padding: 0.15rem 0.6rem;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: transparent;
  color: var(--cream-dim);
  font-family: var(--font-mono);
  font-size: 0.72rem;
  cursor: pointer;
  transition:
    color 0.2s var(--ease-out),
    border-color 0.2s var(--ease-out);
}

.code-card__reset:hover,
.code-card__reset:focus-visible {
  border-color: var(--red-bright);
  color: var(--cream);
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

@keyframes deny {
  20%,
  60% {
    transform: translateX(-6px);
  }
  40%,
  80% {
    transform: translateX(6px);
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
