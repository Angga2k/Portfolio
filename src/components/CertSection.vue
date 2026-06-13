<script setup lang="ts">
import ScrollReveal from './ScrollReveal.vue'

interface Certification {
  name: string
  issuer: string
}

const certs: Certification[] = [
  { name: 'Advanced Computer Vision with TensorFlow', issuer: 'BANGKIT \'24' },
  { name: 'Supervised Machine Learning', issuer: 'BANGKIT \'24' },
  { name: 'Custom Models, Layers & Loss Functions', issuer: 'BANGKIT \'24' },
  { name: 'Unsupervised Learning, Recommenders & RL', issuer: 'BANGKIT \'24' },
]
</script>

<template>
  <div>
    <div class="border-t border-border px-12 pt-[42px] pb-3 font-mono text-[13px] tracking-[.12em] text-accent">
      05 — SERTIFIKASI
    </div>
    <div class="grid grid-cols-2">
      <div
        v-for="(cert, i) in certs"
        :key="i"
        class="group hover:bg-hover-bg transition-colors duration-200"
        :class="{ 'border-r border-border': i % 2 === 0 }"
      >
        <ScrollReveal :delay="i % 2 === 0 ? 0 : 0.06">
          <div class="px-12 py-6 border-t border-border flex justify-between items-center gap-4">
            <span class="text-[17px] text-[#e6e3dc]">{{ cert.name }}</span>
            <span class="font-mono text-[11px] text-subtle whitespace-nowrap">{{ cert.issuer }}</span>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </div>
</template>
