<script setup>
import { LOCALES, useI18n } from '../i18n/index.js'

const { locale, t, setLocale } = useI18n()
</script>

<template>
  <div class="lang" role="group" :aria-label="t('lang.label')">
    <button
      v-for="code in LOCALES"
      :key="code"
      type="button"
      class="lang__btn"
      :class="{ 'is-active': locale === code }"
      :aria-pressed="locale === code ? 'true' : 'false'"
      :lang="code"
      @click="setLocale(code)"
    >
      <span aria-hidden="true">{{ code.toUpperCase() }}</span>
      <span class="visually-hidden">{{ t(`lang.names.${code}`) }}</span>
    </button>
  </div>
</template>

<style scoped>
.lang {
  display: inline-flex;
  padding: 3px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--ink-2);
}

.lang__btn {
  min-width: 2.5rem;
  min-height: 2.25rem;
  padding: 0 0.6rem;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: var(--cream-dim);
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    background-color 0.2s,
    color 0.2s;
}

.lang__btn:hover {
  color: var(--cream);
}

.lang__btn.is-active {
  background: var(--red);
  color: var(--cream);
}

.lang__btn:focus-visible {
  outline-offset: 1px;
  border-radius: 999px;
}
</style>
