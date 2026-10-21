import { ref, readonly } from 'vue'
import nl from './nl.js'
import fr from './fr.js'
import en from './en.js'

export const messages = { nl, fr, en }
export const LOCALES = ['nl', 'fr', 'en']
export const DEFAULT_LOCALE = 'nl'
export const STORAGE_KEY = 'portfolio-locale'

export function isLocale(value) {
  return LOCALES.includes(value)
}

// Looks up a dot-separated key ("hero.title"); falls back to Dutch, then to the key itself.
export function translate(locale, key) {
  const lookup = (dict) =>
    key.split('.').reduce((node, part) => (node == null ? undefined : node[part]), dict)
  const value = lookup(messages[locale])
  if (value !== undefined) return value
  const fallback = lookup(messages[DEFAULT_LOCALE])
  return fallback !== undefined ? fallback : key
}

// Storage can be missing or throw (private mode, blocked site data).
export function readStoredLocale(storage) {
  try {
    const value = storage?.getItem(STORAGE_KEY)
    return isLocale(value) ? value : null
  } catch {
    return null
  }
}

export function writeStoredLocale(storage, locale) {
  try {
    storage?.setItem(STORAGE_KEY, locale)
    return true
  } catch {
    return false
  }
}

// Dutch is the default; only a previously chosen language overrides it.
export function resolveInitialLocale(storage) {
  return readStoredLocale(storage) ?? DEFAULT_LOCALE
}

export function applyDocumentLocale(doc, locale) {
  if (!doc) return
  doc.documentElement.lang = locale
  doc.title = translate(locale, 'meta.title')
  const description = doc.querySelector('meta[name="description"]')
  if (description) description.setAttribute('content', translate(locale, 'meta.description'))
}

function getStorage() {
  try {
    return typeof window !== 'undefined' ? window.localStorage : null
  } catch {
    return null
  }
}

const locale = ref(resolveInitialLocale(getStorage()))

export function setLocale(next) {
  if (!isLocale(next)) return
  locale.value = next
  writeStoredLocale(getStorage(), next)
  applyDocumentLocale(typeof document !== 'undefined' ? document : null, next)
}

export function initLocale() {
  applyDocumentLocale(typeof document !== 'undefined' ? document : null, locale.value)
}

export function useI18n() {
  return {
    locale: readonly(locale),
    t: (key) => translate(locale.value, key),
    setLocale,
  }
}
