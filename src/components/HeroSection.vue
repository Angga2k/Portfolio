<script setup lang="ts">
import { ref } from 'vue'
import { useSpotlight } from '../composables/useSpotlight'
import MarqueeBar from './MarqueeBar.vue'
import StatCounter from './StatCounter.vue'

const heroRef = ref<HTMLElement | null>(null)
useSpotlight(heroRef)
</script>

<template>
  <section id="home" ref="heroRef" class="border-b border-border relative">
    <div
      id="pg-glow"
      class="absolute inset-0 pointer-events-none z-5 opacity-0 transition-opacity duration-400 mix-blend-screen"
    />

    <div class="px-4 sm:px-6 md:px-8 lg:px-12 pt-6 md:pt-[30px] flex justify-between font-mono text-[11px] sm:text-[12px] md:text-[13px] tracking-[.08em] text-subtle">
      <span class="hidden sm:inline">00 — INDEKS</span>
      <span class="text-[10px] sm:text-[11px] md:text-[13px]">PROBOLINGGO · JAWA TIMUR · ID</span>
    </div>

    <div class="px-4 sm:px-6 md:px-8 lg:px-12 pt-6 md:pt-[30px] pb-8 md:pb-11 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 md:gap-10 lg:gap-12 items-end">
      <div>
        <div class="font-mono text-[11px] sm:text-[12px] md:text-[14px] tracking-[.14em] text-accent mb-4 md:mb-5">
          SOFTWARE ENGINEER / BACKEND / MACHINE LEARNING
        </div>
        <h1 class="font-bricolage font-extrabold leading-[.88] tracking-[-.035em] text-[48px] sm:text-[64px] md:text-[84px] lg:text-[108px] xl:text-[132px] m-0">
          Angga Dwi<br>Kurniawan
        </h1>
        <p class="max-w-[560px] text-[15px] sm:text-[16px] md:text-[18px] lg:text-[19px] leading-[1.6] md:leading-[1.55] text-[#bdbab3] mt-5 md:mt-7 m-0">
          Saya membangun aplikasi web yang skalabel dan sistem bertenaga AI — mulai dari REST API dan platform full-stack hingga riset computer vision dengan YOLOv8.
        </p>
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-3.5 mt-6 md:mt-[30px]">
          <a
            href="#work"
            class="font-mono font-bold text-[12px] md:text-[13px] tracking-[.06em] bg-text text-surface px-5 sm:px-6 py-3 sm:py-3.5 hover:bg-accent hover:text-surface transition-colors duration-200 text-center"
          >
            LIHAT KARYA ↓
          </a>
          <a
            href="/uploads/Angga Dwi Kurniawan.pdf"
            download
            class="font-mono font-bold text-[12px] md:text-[13px] tracking-[.06em] bg-transparent text-text border border-border-hover px-5 sm:px-6 py-3 sm:py-3.5 hover:border-accent hover:text-accent transition-colors duration-200 text-center"
          >
            UNDUH CV ↗
          </a>
        </div>
      </div>
      <img
        src="/uploads/foto-profil.jpg"
        alt="Foto Profil"
        class="w-full lg:w-[340px] h-auto lg:h-[420px] max-w-[340px] mx-auto lg:mx-0 object-cover border border-border-light rounded-lg lg:rounded-none"
      />
    </div>

    <MarqueeBar />

    <div class="grid grid-cols-2 md:grid-cols-4 border-t border-border">
      <div class="px-4 sm:px-5 md:px-6 lg:px-[28px] py-5 md:py-[26px] border-r border-border">
        <StatCounter :value="4" suffix="+" label="TAHUN BELAJAR" :isAccent="true" />
      </div>
      <div class="px-4 sm:px-5 md:px-6 lg:px-[28px] py-5 md:py-[26px] md:border-r border-border">
        <StatCounter :value="10" suffix="+" label="PROYEK DIBANGUN" />
      </div>
      <div class="px-4 sm:px-5 md:px-6 lg:px-[28px] py-5 md:py-[26px] border-r border-t md:border-t-0 border-border">
        <StatCounter :value="1" :pad="true" label="MAGANG INDUSTRI" />
      </div>
      <div class="px-4 sm:px-5 md:px-6 lg:px-[28px] py-5 md:py-[26px] border-t md:border-t-0 border-border">
        <StatCounter :value="1" :pad="true" label="PROGRAM ML · BANGKIT" />
      </div>
    </div>
  </section>
</template>
