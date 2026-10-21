<script setup>
import { useI18n } from '../i18n/index.js'

defineProps({
  variant: { type: String, default: 'strip' }, // 'strip' (header) | 'footer'
})

const { t } = useI18n()
</script>

<template>
  <p class="notice" :class="`notice--${variant}`">
    <span class="notice__mark" aria-hidden="true">◆</span>
    {{ t('notice.short') }}
  </p>
</template>

<style scoped>
.notice {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.03em;
  color: var(--cream-dim);
}

.notice__mark {
  color: var(--red-bright);
  font-size: 0.6rem;
}

.notice--footer {
  display: inline-flex;
  padding: 0.5rem 0.9rem;
  border: 1px dashed var(--red-bright);
  border-radius: 6px;
  font-size: 0.8125rem;
  color: var(--cream);
}
</style>
