<script setup lang="ts">
import ScrollReveal from './ScrollReveal.vue'
import CertSection from './CertSection.vue'

const focusAreas = [
  'Rekayasa Perangkat Lunak',
  'Pengembangan Backend',
  'Machine Learning',
  'Computer Vision',
  { name: 'Kepemimpinan Organisasi', muted: true },
]

const tools = [
  'Python', 'Golang', 'TypeScript', 'React', 'Next.js',
  'Node.js', 'Express.js', 'Laravel', 'Flask', 'Tailwind CSS',
  'Flutter', 'TensorFlow', 'YOLOv8', 'OpenCV', 'REST API',
  'MySQL', 'PostgreSQL', 'Firebase', 'Docker', 'Linux', 'Git', 'GitHub',
]
</script>

<template>
  <section id="skills" class="border-b border-border">
    <div class="px-12 pt-12 pb-0 font-mono text-[13px] tracking-[.12em] text-accent">
      04 — KEAHLIAN TEKNIS
    </div>

    <div class="grid grid-cols-[1fr_1.6fr] border-t border-border mt-[26px]">
      <ScrollReveal>
        <div class="px-12 py-[42px] border-r border-border">
          <div class="font-mono text-[12px] tracking-[.1em] text-subtle mb-4">BIDANG FOKUS</div>
          <div class="flex flex-col gap-3.5">
            <div
              v-for="area in focusAreas"
              :key="typeof area === 'string' ? area : area.name"
              class="font-bricolage font-bold text-[24px] tracking-[-.02em]"
              :class="typeof area === 'object' && area.muted ? 'text-subtle' : 'text-text'"
            >
              {{ typeof area === 'string' ? area : area.name }}
            </div>
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal :delay="0.1">
        <div class="px-12 py-[42px]">
          <div class="font-mono text-[12px] tracking-[.1em] text-subtle mb-[18px]">STACK &amp; TOOLS</div>
          <div class="flex gap-2.5 flex-wrap">
            <span
              v-for="tool in tools"
              :key="tool"
              class="font-mono text-[14px] text-text border border-border-light px-[15px] py-[9px] transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              {{ tool }}
            </span>
          </div>
        </div>
      </ScrollReveal>
    </div>

    <CertSection />
  </section>
</template>
