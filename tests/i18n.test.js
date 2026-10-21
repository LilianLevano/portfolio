import { describe, it, expect } from 'vitest'
import {
  messages,
  LOCALES,
  DEFAULT_LOCALE,
  STORAGE_KEY,
  translate,
  readStoredLocale,
  writeStoredLocale,
  resolveInitialLocale,
  applyDocumentLocale,
} from '../src/i18n/index.js'
import { GAMES } from '../src/data/links.js'

// Flattens nested messages into "a.b.c" paths so the locales can be compared.
function keyPaths(node, prefix = '') {
  if (Array.isArray(node)) {
    return [`${prefix}[${node.length}]`, ...node.flatMap((item, i) => keyPaths(item, `${prefix}[${i}]`))]
  }
  if (node && typeof node === 'object') {
    return Object.entries(node).flatMap(([key, value]) => keyPaths(value, prefix ? `${prefix}.${key}` : key))
  }
  return [prefix]
}

function memoryStorage(initial = {}) {
  const data = { ...initial }
  return {
    getItem: (key) => (key in data ? data[key] : null),
    setItem: (key, value) => {
      data[key] = String(value)
    },
    data,
  }
}

const throwingStorage = {
  getItem() {
    throw new Error('SecurityError')
  },
  setItem() {
    throw new Error('QuotaExceededError')
  },
}

describe('translations', () => {
  it('has the same keys in every language', () => {
    const reference = keyPaths(messages[DEFAULT_LOCALE]).sort()
    for (const locale of LOCALES) {
      expect(keyPaths(messages[locale]).sort(), locale).toEqual(reference)
    }
  })

  it('has no empty strings', () => {
    for (const locale of LOCALES) {
      const walk = (node) => {
        if (typeof node === 'string') expect(node.trim().length).toBeGreaterThan(0)
        else if (node && typeof node === 'object') Object.values(node).forEach(walk)
      }
      walk(messages[locale])
    }
  })

  it('has a title and status for every game in src/data', () => {
    for (const locale of LOCALES) {
      for (const { id } of GAMES) {
        expect(Object.keys(messages[locale].interests.games.items[id] ?? {}), `${locale}: ${id}`).toEqual([
          'title',
          'status',
        ])
      }
    }
  })

  it('marks the profile as fictional in every language', () => {
    expect(translate('nl', 'notice.short')).toMatch(/fictief/i)
    expect(translate('fr', 'notice.short')).toMatch(/fictif/i)
    expect(translate('en', 'notice.short')).toMatch(/fictional/i)
  })
})

describe('translate', () => {
  it('resolves nested keys and arrays', () => {
    expect(translate('fr', 'nav.projects')).toBe('Projets')
    expect(Array.isArray(translate('en', 'about.facts'))).toBe(true)
  })

  it('falls back to Dutch, then to the key itself', () => {
    expect(translate('de', 'nav.projects')).toBe('Projecten')
    expect(translate('en', 'does.not.exist')).toBe('does.not.exist')
  })
})

describe('locale persistence', () => {
  it('defaults to Dutch when nothing is stored', () => {
    expect(resolveInitialLocale(memoryStorage())).toBe('nl')
    expect(resolveInitialLocale(null)).toBe('nl')
  })

  it('restores a stored, valid locale and ignores invalid values', () => {
    expect(resolveInitialLocale(memoryStorage({ [STORAGE_KEY]: 'fr' }))).toBe('fr')
    expect(resolveInitialLocale(memoryStorage({ [STORAGE_KEY]: 'xx' }))).toBe('nl')
  })

  it('writes the chosen locale', () => {
    const storage = memoryStorage()
    expect(writeStoredLocale(storage, 'en')).toBe(true)
    expect(storage.data[STORAGE_KEY]).toBe('en')
  })

  it('survives storage that throws', () => {
    expect(readStoredLocale(throwingStorage)).toBeNull()
    expect(writeStoredLocale(throwingStorage, 'fr')).toBe(false)
    expect(resolveInitialLocale(throwingStorage)).toBe('nl')
  })
})

describe('applyDocumentLocale', () => {
  it('sets <html lang>, the title and the meta description', () => {
    const meta = { content: '', setAttribute(name, value) { this[name] = value } }
    const doc = {
      documentElement: { lang: 'nl' },
      title: '',
      querySelector: (selector) => (selector === 'meta[name="description"]' ? meta : null),
    }
    applyDocumentLocale(doc, 'fr')
    expect(doc.documentElement.lang).toBe('fr')
    expect(doc.title).toBe(messages.fr.meta.title)
    expect(meta.content).toBe(messages.fr.meta.description)
  })
})
