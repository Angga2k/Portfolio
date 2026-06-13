<script setup lang="ts">
import ScrollReveal from './ScrollReveal.vue'

interface Project {
  category: string
  title: string
  description: string
  tags: string[]
  isFeatured?: boolean
  isAccent?: boolean
}

const featured: Project = {
  category: 'UNGGULAN · RISET & AI',
  title: 'Waste Overload Detection using YOLOv8',
  description: 'Deteksi area overload pada tempat pembuangan sampah sementara terbuka menggunakan computer vision dan deep learning — fokus riset saya saat ini.',
  tags: ['Python', 'YOLOv8', 'OpenCV', 'Ultralytics'],
  isFeatured: true,
}

const projects: Project[] = [
  {
    category: 'PENGEMBANGAN WEB',
    title: 'HMIF Website',
    description: 'Informasi organisasi, manajemen acara, dan data anggota untuk HMIF UNEJ.',
    tags: ['Next.js', 'React', 'MySQL', 'Tailwind'],
  },
  {
    category: 'FULL STACK',
    title: 'Job Portal System',
    description: 'Autentikasi, daftar lowongan, lamaran, dan manajemen perusahaan.',
    tags: ['React', 'Node.js', 'Express', 'MySQL'],
  },
  {
    category: 'MOBILE / AI',
    title: 'AgroVision',
    description: 'Eksperimen computer vision terapan untuk bidang pertanian.',
    tags: ['TensorFlow', 'OpenCV', 'Python'],
  },
  {
    category: 'MOBILE · REST',
    title: 'Flutter Todo & REST APIs',
    description: 'Aplikasi tugas berbasis Flutter beserta kumpulan proyek REST API dan tugas kuliah.',
    tags: ['Flutter', 'Express', 'PostgreSQL'],
  },
]
</script>

<template>
  <section id="work" class="border-b border-border">
    <div class="px-12 pt-12 pb-0 flex justify-between items-baseline">
      <span class="font-mono text-[13px] tracking-[.12em] text-accent">03 — KARYA PILIHAN</span>
      <span class="font-mono text-[12px] text-subtle">06 PROYEK</span>
    </div>

    <ScrollReveal>
      <div class="grid grid-cols-[1fr_1.1fr] border-t border-border mt-[26px]">
        <div class="px-12 py-[42px] border-r border-border">
          <div class="flex items-center gap-2.5 mb-[18px]">
            <span class="w-[7px] h-[7px] bg-accent inline-block" />
            <span class="font-mono text-[12px] tracking-[.12em] text-accent">{{ featured.category }}</span>
          </div>
          <h3 class="font-bricolage font-extrabold text-[38px] leading-none tracking-[-.025em] m-0 mb-4">
            {{ featured.title }}
          </h3>
          <p class="text-[17px] leading-[1.65] text-[#bdbab3] m-0 mb-[22px]">
            {{ featured.description }}
          </p>
          <div class="flex gap-2 flex-wrap">
            <span
              v-for="tag in featured.tags"
              :key="tag"
              class="font-mono text-[12px] px-3 py-1.5"
              :class="tag === 'Python' ? 'text-accent border border-[#3a2230]' : 'text-[#cfccc5] border border-border-light'"
            >
              {{ tag }}
            </span>
          </div>
        </div>
        <div class="min-h-[320px] border border-border-light bg-surface"></div>
      </div>
    </ScrollReveal>

    <div class="grid grid-cols-2 border-t border-border">
      <div
        v-for="(proj, i) in projects"
        :key="i"
        class="group hover:bg-hover-bg transition-colors duration-200"
        :class="{ 'border-r border-border': i % 2 === 0 }"
      >
        <ScrollReveal :delay="i % 2 === 0 ? 0 : 0.08">
          <div class="px-12 py-9 border-b border-border" :class="{ 'border-b-0': i >= projects.length - 2 }">
            <span class="font-mono text-[12px] text-subtle">{{ proj.category }}</span>
            <h3 class="font-bricolage font-bold text-[26px] tracking-[-.02em] mt-2.5 mb-2.5">{{ proj.title }}</h3>
            <p class="text-[15px] leading-[1.55] text-muted m-0 mb-4">{{ proj.description }}</p>
            <div class="flex gap-[7px] flex-wrap">
              <span
                v-for="tag in proj.tags"
                :key="tag"
                class="font-mono text-[11px] text-[#cfccc5] border border-border-light px-[9px] py-[4px]"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
