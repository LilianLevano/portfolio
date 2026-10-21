<script setup>
import { useI18n } from '../i18n/index.js'
import ExerciseNotice from './ExerciseNotice.vue'

const { t } = useI18n()
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <ExerciseNotice variant="footer" />
      <p class="footer__meta">© Lilian Levano · {{ t('footer.built') }}</p>
      <a class="footer__top" href="#top">{{ t('footer.top') }} <span aria-hidden="true">↑</span></a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--line);
  background: var(--ink-2);
  padding-block: 2rem;
}

.footer__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem 2rem;
}

.footer__meta {
  color: var(--cream-dim);
  font-size: 0.875rem;
}

.footer__top {
  margin-left: auto;
  font-size: 0.875rem;
  font-weight: 700;
  text-decoration: none;
  color: var(--cream);
}

.footer__top:hover {
  color: var(--red-bright);
}
</style>
