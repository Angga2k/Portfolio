<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  progressWidth?: string
  activeSection?: string
}>()

const isMenuOpen = ref(false)

const navItems = [
  { label: '01 Tentang', section: 'about' },
  { label: '02 Pengalaman', section: 'experience' },
  { label: '03 Karya', section: 'work' },
  { label: '04 Keahlian', section: 'skills' },
]

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<template>
  <div
    id="pg-progress"
    class="fixed top-0 left-0 h-[3px] z-60 bg-accent transition-[width] duration-150"
    :style="{ width: progressWidth || '0%' }"
  />

  <header class="sticky top-0 z-50 bg-surface/82 backdrop-blur-[12px] border-b border-border">
    <div class="max-w-[1280px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-7 py-3.5">
      <a
        href="#home"
        class="flex items-center gap-2 sm:gap-[11px] text-text"
        @click="closeMenu"
      >
        <svg width="28" height="28" viewBox="0 0 120 120" fill="none" aria-label="Angga logo" class="sm:w-[34px] sm:h-[34px]">
          <defs>
            <clipPath id="hdr-a"><polygon points="0,0 120,0 120,40 0,76"/></clipPath>
            <clipPath id="hdr-b"><polygon points="0,80 120,44 120,120 0,120"/></clipPath>
          </defs>
          <g clip-path="url(#hdr-b)"><path d="M60 14 L100 106 L78 106 L72 86 L48 86 L42 106 L20 106 Z M60 52 L51 78 L69 78 Z" fill="#f2f0ec" fill-rule="evenodd"/></g>
          <g clip-path="url(#hdr-a)" transform="translate(4,-4)"><path d="M60 14 L100 106 L78 106 L72 86 L48 86 L42 106 L20 106 Z M60 52 L51 78 L69 78 Z" fill="#f2f0ec" fill-rule="evenodd"/></g>
          <g transform="translate(-4,92) rotate(-19)">
            <polygon points="0,-8.5 128,-2 128,2.5 0,9.5" fill="#0b0b0b"/>
            <rect x="2" y="-6" width="40" height="12" rx="3" fill="#9b9890"/>
            <circle cx="14" cy="0" r="2.1" fill="#0b0b0b"/><circle cx="26" cy="0" r="2.1" fill="#0b0b0b"/>
            <rect x="42" y="-7.5" width="6" height="15" fill="#d9d6cf"/>
            <polygon points="48,-7.5 126,-0.5 48,7" fill="#e7e4dd"/>
            <polygon points="48,7 126,-0.5 124,1.6 48,8.6" fill="#ff4d8d"/>
          </g>
        </svg>
        <span class="font-mono font-bold text-[12px] sm:text-[14px] tracking-[.12em]">ANGGA DK</span>
      </a>
      
      <!-- Desktop Navigation -->
      <nav class="hidden lg:flex items-center gap-4 xl:gap-[26px]">
        <a
          v-for="item in navItems"
          :key="item.section"
          :href="'#' + item.section"
          :data-nav="item.section"
          class="font-mono text-[13px] tracking-[.06em] transition-colors duration-200 hover:text-accent"
          :class="activeSection === item.section ? 'text-accent' : 'text-muted'"
        >
          {{ item.label }}
        </a>
        <a
          href="#contact"
          class="font-mono font-bold text-[13px] tracking-[.06em] bg-accent text-surface px-4 py-[9px] hover:bg-[#ff80b0] transition-colors duration-200"
        >
          Kontak →
        </a>
      </nav>
      
      <!-- Mobile Hamburger Button -->
      <button
        @click="toggleMenu"
        class="lg:hidden p-2 text-text hover:text-accent transition-colors"
        :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
      >
        <svg
          v-if="!isMenuOpen"
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          v-else
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    
    <!-- Mobile Menu Overlay -->
    <Transition name="menu-slide">
      <div
        v-if="isMenuOpen"
        class="lg:hidden fixed inset-0 top-[57px] bg-surface z-[65] overflow-y-auto"
      >
        <nav class="flex flex-col p-6 gap-1">
          <a
            v-for="item in navItems"
            :key="item.section"
            :href="'#' + item.section"
            :data-nav="item.section"
            class="font-mono text-[15px] tracking-[.06em] py-4 px-4 rounded-lg transition-colors duration-200 hover:bg-hover-bg"
            :class="activeSection === item.section ? 'text-accent bg-hover-bg' : 'text-muted'"
            @click="closeMenu"
          >
            {{ item.label }}
          </a>
          <a
            href="#contact"
            class="font-mono font-bold text-[15px] tracking-[.06em] bg-accent text-surface px-4 py-4 mt-4 text-center rounded-lg hover:bg-[#ff80b0] transition-colors duration-200"
            @click="closeMenu"
          >
            Kontak →
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.menu-slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.menu-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
