<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from '../i18n/index.js'
import ExerciseNotice from './ExerciseNotice.vue'
import LanguageSwitcher from './LanguageSwitcher.vue'

const { t } = useI18n()

const sections = ['about', 'skills', 'projects', 'interests', 'contact']
const menuOpen = ref(false)
const scrolled = ref(false)
const menuButton = ref(null)

function closeMenu({ returnFocus = false } = {}) {
  if (!menuOpen.value) return
  menuOpen.value = false
  if (returnFocus) menuButton.value?.focus()
}

function onKeydown(event) {
  if (event.key === 'Escape') closeMenu({ returnFocus: true })
}

function onScroll() {
  scrolled.value = window.scrollY > 12
}

const desktop = window.matchMedia('(min-width: 60rem)')
function onBreakpoint() {
  if (desktop.matches) closeMenu()
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
  desktop.addEventListener('change', onBreakpoint)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
  desktop.removeEventListener('change', onBreakpoint)
})
</script>

<template>
  <header class="site-header" :class="{ 'is-scrolled': scrolled, 'is-open': menuOpen }">
    <div class="site-header__strip">
      <div class="container">
        <ExerciseNotice />
      </div>
    </div>

    <div class="container site-header__bar">
      <a class="brand" href="#top" :aria-label="t('nav.home')">
        <svg class="brand__mark" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
          <path d="M14 16v32h14" />
          <path d="M34 16v32h16" />
        </svg>
        <span class="brand__name">Lilian Levano</span>
      </a>

      <button
        ref="menuButton"
        type="button"
        class="menu-btn"
        aria-controls="site-nav"
        :aria-expanded="menuOpen ? 'true' : 'false'"
        @click="menuOpen = !menuOpen"
      >
        <span class="menu-btn__icon" aria-hidden="true"><span></span></span>
        <span class="visually-hidden">{{ menuOpen ? t('nav.menuClose') : t('nav.menuOpen') }}</span>
      </button>

      <nav id="site-nav" class="nav" :aria-label="t('nav.label')">
        <ul class="nav__list">
          <li v-for="id in sections" :key="id">
            <a class="nav__link" :href="`#${id}`" @click="closeMenu()">{{ t(`nav.${id}`) }}</a>
          </li>
        </ul>
      </nav>

      <div class="site-header__lang">
        <LanguageSwitcher />
      </div>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgb(14 12 11 / 0.82);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s;
}

.site-header.is-scrolled {
  border-bottom-color: var(--line);
}

.site-header__strip {
  background: var(--ink-2);
  border-bottom: 1px solid var(--line);
  padding-block: 0.3rem;
}

.site-header__bar {
  display: flex;
  align-items: center;
  gap: 1rem;
  min-height: 3.75rem;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
  margin-right: auto;
}

.brand__mark {
  width: 2rem;
  height: 2rem;
  fill: none;
  stroke-width: 7;
  stroke-linecap: square;
}

.brand__mark path:first-child {
  stroke: var(--cream);
}

.brand__mark path:last-child {
  stroke: var(--red-bright);
  transition: transform 0.35s var(--ease-out);
}

.brand:hover .brand__mark path:last-child,
.brand:focus-visible .brand__mark path:last-child {
  transform: translateY(-4px);
}

.brand__name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.15rem;
  letter-spacing: -0.01em;
}

.site-header__lang {
  order: 1;
}

.menu-btn {
  order: 2;
}

/* Mobile: collapsible panel */
.nav {
  position: absolute;
  inset: 100% 0 auto 0;
  background: var(--ink);
  border-bottom: 1px solid var(--line);
  padding: 0.5rem var(--gutter) 1.25rem;
  display: none;
}

.is-open .nav {
  display: block;
  animation: drop 0.3s var(--ease-out);
}

@keyframes drop {
  from {
    opacity: 0;
    transform: translateY(-0.5rem);
  }
}

.nav__list {
  display: grid;
}

.nav__link {
  display: block;
  padding: 0.85rem 0;
  border-bottom: 1px solid var(--line);
  font-family: var(--font-display);
  font-size: 1.4rem;
  text-decoration: none;
}

.nav__link:hover {
  color: var(--red-bright);
}

.menu-btn {
  display: inline-grid;
  place-items: center;
  width: 2.75rem;
  height: 2.75rem;
  border: 1px solid var(--line);
  border-radius: 50%;
  background: var(--ink-2);
  color: var(--cream);
  cursor: pointer;
}

.menu-btn__icon,
.menu-btn__icon::before,
.menu-btn__icon::after,
.menu-btn__icon span {
  display: block;
  width: 1.1rem;
  height: 2px;
  background: currentColor;
  transition: transform 0.3s var(--ease-out), opacity 0.2s;
}

.menu-btn__icon {
  position: relative;
  background: transparent;
}

.menu-btn__icon::before,
.menu-btn__icon::after {
  content: '';
  position: absolute;
  left: 0;
}

.menu-btn__icon::before {
  top: -6px;
}

.menu-btn__icon::after {
  top: 6px;
}

.is-open .menu-btn__icon span {
  opacity: 0;
}

.is-open .menu-btn__icon::before {
  transform: translateY(6px) rotate(45deg);
}

.is-open .menu-btn__icon::after {
  transform: translateY(-6px) rotate(-45deg);
}

@media (max-width: 22rem) {
  .brand__name {
    display: none;
  }
}

@media (min-width: 60rem) {
  .nav {
    position: static;
    display: block;
    padding: 0;
    background: none;
    border: 0;
  }

  .nav__list {
    display: flex;
    gap: 0.25rem;
  }

  .nav__link {
    position: relative;
    padding: 0.5rem 0.75rem;
    border: 0;
    font-family: var(--font-body);
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--cream-dim);
  }

  .nav__link::after {
    content: '';
    position: absolute;
    left: 0.75rem;
    right: 0.75rem;
    bottom: 0.25rem;
    height: 2px;
    background: var(--red-bright);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s var(--ease-out);
  }

  .nav__link:hover,
  .nav__link:focus-visible {
    color: var(--cream);
  }

  .nav__link:hover::after,
  .nav__link:focus-visible::after {
    transform: scaleX(1);
  }

  .menu-btn {
    display: none;
  }
}
</style>
