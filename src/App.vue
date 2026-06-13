<script setup lang="ts">
import { ref } from 'vue'
import { useScrollProgress } from './composables/useScrollProgress'
import { useScrollReveal } from './composables/useScrollReveal'
import { useCounter } from './composables/useCounter'

import SimpleLoader from './components/SimpleLoader.vue'
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import WorkSection from './components/WorkSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/AppFooter.vue'

const showContent = ref(false)
const { progressWidth, activeSection } = useScrollProgress()
const pageRef = ref<HTMLElement | null>(null)

useScrollReveal(pageRef as any)
useCounter(pageRef as any)

function handleSplashComplete() {
  showContent.value = true
}
</script>

<template>
  <!-- Simple Loader -->
  <SimpleLoader @complete="handleSplashComplete" />

  <!-- Main Content -->
  <Transition name="content-fade">
    <div v-if="showContent" ref="pageRef" class="bg-surface text-text font-bricolage min-h-screen">
      <AppHeader :progressWidth="progressWidth" :activeSection="activeSection" />

      <div class="max-w-[1280px] mx-auto border-l border-border border-r border-border">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <WorkSection />
        <SkillsSection />
        <ContactSection />
      </div>

      <AppFooter />
    </div>
  </Transition>
</template>

<style scoped>
.content-fade-enter-active {
  transition: opacity 0.8s ease;
}

.content-fade-enter-from {
  opacity: 0;
}
</style>
