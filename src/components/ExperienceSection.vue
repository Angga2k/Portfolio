<script setup lang="ts">
import ScrollReveal from './ScrollReveal.vue'

interface Experience {
  period: string
  title: string
  company: string
  tags: string[]
}

const experiences: Experience[] = [
  {
    period: 'MAR 2025 — JUL 2025',
    title: 'Backend Developer',
    company: 'Diskominfo Banyuwangi',
    tags: ['Pengembangan Backend', 'Pengembangan API', 'Integrasi Database', 'Pemeliharaan Sistem'],
  },
  {
    period: 'SEP 2024 — MAR 2025',
    title: 'Peserta Cohort Machine Learning',
    company: 'Bangkit Academy 2024 · didukung Google, GoTo, Traveloka',
    tags: ['Machine Learning', 'Deep Learning', 'TensorFlow', 'Analisis Data', 'Deployment Model'],
  },
  {
    period: '2024',
    title: 'Kepala Sub-Divisi Teknologi',
    company: 'HMIF UNEJ',
    tags: ['Manajemen Proyek', 'Koordinasi Tim', 'Pengembangan Website'],
  },
  {
    period: '2023 — 2024',
    title: 'Staf Teknologi',
    company: 'HMIF UNEJ',
    tags: [],
  },
]
</script>

<template>
  <section id="experience" class="border-b border-border">
    <div class="px-4 sm:px-6 md:px-8 lg:px-12 pt-10 md:pt-12 pb-2 font-mono text-[11px] sm:text-[12px] md:text-[13px] tracking-[.12em] text-accent">
      02 — PENGALAMAN
    </div>

    <div
      v-for="(exp, i) in experiences"
      :key="i"
      class="group hover:bg-hover-bg transition-colors duration-200"
    >
      <ScrollReveal :delay="i * 0.06">
        <div class="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 md:gap-6 px-4 sm:px-6 md:px-8 lg:px-12 py-6 md:py-[30px] border-t border-border" :class="{ 'mt-4 md:mt-6': i === 0 }">
          <div class="font-mono text-[11px] sm:text-[12px] md:text-[13px] text-subtle tracking-[.04em]">{{ exp.period }}</div>
          <div>
            <h3 class="font-bricolage font-bold text-[20px] sm:text-[22px] md:text-[24px] lg:text-[27px] tracking-[-.02em] m-0">{{ exp.title }}</h3>
            <div class="text-[14px] sm:text-[15px] md:text-[16px] text-accent mt-1.5 mb-3 md:mb-3.5">{{ exp.company }}</div>
            <div v-if="exp.tags.length" class="flex gap-1.5 md:gap-2 flex-wrap">
              <span
                v-for="tag in exp.tags"
                :key="tag"
                class="font-mono text-[10px] sm:text-[11px] md:text-[12px] text-[#cfccc5] border border-border-light px-2 sm:px-2.5 md:px-[11px] py-1 md:py-[5px]"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>
