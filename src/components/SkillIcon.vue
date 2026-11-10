<script setup>
// Simple, generic technology icons drawn as inline SVG (no official logo files).
defineProps({
  name: { type: String, required: true },
  uid: { type: String, default: 'a' }, // keeps clipPath ids unique per icon
})
</script>

<template>
  <svg class="icon" :class="`icon--${name}`" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
    <template v-if="name === 'communication'">
      <path class="bubble-a" d="M6 8h24a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H16l-6 5v-5H6a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3z" />
      <path class="bubble-b" d="M42 20H22a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12l5 4v-4h3a3 3 0 0 0 3-3V23a3 3 0 0 0-3-3z" />
    </template>

    <template v-else-if="name === 'webdev'">
      <rect x="4" y="8" width="40" height="32" rx="3" class="frame" />
      <path d="M4 15h40" class="frame" />
      <circle cx="9" cy="11.5" r="1.3" class="dot" />
      <circle cx="13.5" cy="11.5" r="1.3" class="dot" />
      <path d="M19 23l-5 5 5 5" class="code code-left" />
      <path d="M29 23l5 5-5 5" class="code code-right" />
      <path d="M26 21l-4 14" class="code code-slash" />
    </template>

    <template v-else-if="name === 'javascript'">
      <rect x="6" y="6" width="36" height="36" rx="3" class="js-bg" />
      <text x="38" y="37" text-anchor="end" class="js-text">JS</text>
    </template>

    <template v-else-if="name === 'php'">
      <ellipse cx="24" cy="24" rx="21" ry="12" class="php-bg" />
      <text x="24" y="28.5" text-anchor="middle" class="php-text">php</text>
    </template>

    <template v-else-if="name === 'laravel'">
      <path class="laravel" d="M6 11l8-4 8 4-8 4-8-4zM6 11v20l16 9 18-10V21l-9-5-9 5v10M22 21l9 5 9-5M31 26v9M14 15v20" />
    </template>

    <template v-else-if="name === 'spring'">
      <circle cx="24" cy="24" r="19" class="spring-ring" />
      <path class="spring-leaf" d="M14 33c0-12 8-19 21-20-1 12-8 20-19 20M16 32c4-6 9-10 15-13" />
    </template>

    <template v-else-if="name === 'database'">
      <defs>
        <clipPath :id="`db-clip-${uid}`">
          <path d="M8 11c0-3 7-5 16-5s16 2 16 5v26c0 3-7 5-16 5S8 40 8 37z" />
        </clipPath>
      </defs>
      <g :clip-path="`url(#db-clip-${uid})`">
        <rect class="db-fill" x="6" y="4" width="36" height="40" />
      </g>
      <path class="db-shape" d="M8 11c0-3 7-5 16-5s16 2 16 5v26c0 3-7 5-16 5S8 40 8 37z" />
      <path class="db-shape" d="M8 11c0 3 7 5 16 5s16-2 16-5M8 20c0 3 7 5 16 5s16-2 16-5M8 29c0 3 7 5 16 5s16-2 16-5" />
    </template>
  </svg>
</template>

<style scoped>
.icon {
  width: 3rem;
  height: 3rem;
  overflow: visible;
}

/* Default line style */
path,
rect,
circle,
ellipse {
  stroke-linecap: round;
  stroke-linejoin: round;
}

.icon--communication path {
  fill: none;
  stroke: currentColor;
  stroke-width: 2.4;
}

.icon--communication .bubble-b {
  fill: currentColor;
  fill-opacity: 0.15;
}

.frame,
.code {
  fill: none;
  stroke: currentColor;
  stroke-width: 2.2;
}

.dot {
  fill: currentColor;
}

.js-bg {
  fill: #f7df1e;
}

.js-text {
  font: 700 15px var(--font-body);
  fill: #111;
}

.php-bg {
  fill: #8892bf;
}

.php-text {
  font: 700 italic 13px var(--font-body);
  fill: #111;
}

.laravel {
  fill: none;
  stroke: #ff2d20;
  stroke-width: 2.2;
}

.spring-ring {
  fill: none;
  stroke: #6db33f;
  stroke-width: 2.4;
}

.spring-leaf {
  fill: #6db33f;
  fill-opacity: 0.25;
  stroke: #6db33f;
  stroke-width: 2.2;
}

.db-shape {
  fill: none;
  stroke: currentColor;
  stroke-width: 2.2;
}

.db-fill {
  fill: currentColor;
  opacity: 0.35;
  transform-box: fill-box;
  transform-origin: bottom;
  transform: scaleY(0.12);
  transition: transform 0.9s var(--ease-out);
}
</style>
