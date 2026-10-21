<script setup>
import { useI18n } from './i18n/index.js'
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import InterestsSection from './components/InterestsSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'

const { t } = useI18n()
</script>

<template>
  <a class="skip-link" href="#main">{{ t('skipLink') }}</a>
  <SiteHeader />
  <main id="main" tabindex="-1">
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <InterestsSection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>

<style>
#main:focus {
  outline: none;
}
</style>
