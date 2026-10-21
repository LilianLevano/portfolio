// v-reveal="'left'" — fades an element in when it scrolls into view.
// Variants (up, left, right, scale, clip) are styled in src/styles/main.css.
let observer = null

function getObserver() {
  if (observer) return observer
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
  )
  return observer
}

function prefersReducedMotion() {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
}

export const reveal = {
  mounted(el, binding) {
    el.classList.add('reveal', `reveal--${binding.value || 'up'}`)
    if (binding.modifiers.delay) el.style.setProperty('--reveal-delay', '120ms')
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      el.classList.add('is-visible')
      return
    }
    getObserver().observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
