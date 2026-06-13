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
    <div class="px-4 sm:px-6 md:px-8 lg:px-12 pt-10 md:pt-12 pb-0 flex justify-between items-baseline">
      <span class="font-mono text-[11px] sm:text-[12px] md:text-[13px] tracking-[.12em] text-accent">03 — KARYA PILIHAN</span>
      <span class="font-mono text-[10px] sm:text-[11px] md:text-[12px] text-subtle">06 PROYEK</span>
    </div>

    <ScrollReveal>
      <div class="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] border-t border-border mt-6 md:mt-[26px]">
        <div class="px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-10 lg:py-[42px] border-b lg:border-b-0 lg:border-r border-border">
          <div class="flex items-center gap-2 md:gap-2.5 mb-4 md:mb-[18px]">
            <span class="w-[6px] h-[6px] md:w-[7px] md:h-[7px] bg-accent inline-block" />
            <span class="font-mono text-[10px] sm:text-[11px] md:text-[12px] tracking-[.12em] text-accent">{{ featured.category }}</span>
          </div>
          <h3 class="font-bricolage font-extrabold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[38px] leading-none tracking-[-.025em] m-0 mb-3 md:mb-4">
            {{ featured.title }}
          </h3>
          <p class="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] leading-[1.65] text-[#bdbab3] m-0 mb-5 md:mb-[22px]">
            {{ featured.description }}
          </p>
          <div class="flex gap-1.5 md:gap-2 flex-wrap">
            <span
              v-for="tag in featured.tags"
              :key="tag"
              class="font-mono text-[10px] sm:text-[11px] md:text-[12px] px-2 sm:px-2.5 md:px-3 py-1 md:py-1.5"
              :class="tag === 'Python' ? 'text-accent border border-[#3a2230]' : 'text-[#cfccc5] border border-border-light'"
            >
              {{ tag }}
            </span>
          </div>
        </div>
        <div class="hidden lg:block min-h-[280px] lg:min-h-[320px] border border-border-light bg-surface"></div>
      </div>
    </ScrollReveal>

    <div class="grid grid-cols-1 sm:grid-cols-2 border-t border-border">
      <div
        v-for="(proj, i) in projects"
        :key="i"
        class="group hover:bg-hover-bg transition-colors duration-200"
        :class="{ 'sm:border-r border-border': i % 2 === 0 }"
      >
        <ScrollReveal :delay="i % 2 === 0 ? 0 : 0.08">
          <div class="px-4 sm:px-6 md:px-8 lg:px-12 py-6 md:py-8 lg:py-9 border-b border-border" :class="{ 'sm:border-b-0': i >= projects.length - 2 }">
            <span class="font-mono text-[10px] sm:text-[11px] md:text-[12px] text-subtle">{{ proj.category }}</span>
            <h3 class="font-bricolage font-bold text-[18px] sm:text-[20px] md:text-[23px] lg:text-[26px] tracking-[-.02em] mt-2 md:mt-2.5 mb-2 md:mb-2.5">{{ proj.title }}</h3>
            <p class="text-[13px] sm:text-[14px] md:text-[15px] leading-[1.6] md:leading-[1.55] text-muted m-0 mb-3 md:mb-4">{{ proj.description }}</p>
            <div class="flex gap-1.5 md:gap-[7px] flex-wrap">
              <span
                v-for="tag in proj.tags"
                :key="tag"
                class="font-mono text-[9px] sm:text-[10px] md:text-[11px] text-[#cfccc5] border border-border-light px-2 sm:px-2.5 md:px-[9px] py-1 md:py-[4px]"
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
