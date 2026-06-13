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

    <div class="px-12 pt-[30px] flex justify-between font-mono text-[13px] tracking-[.08em] text-subtle">
      <span>00 — INDEKS</span>
      <span>PROBOLINGGO · JAWA TIMUR · ID</span>
    </div>

    <div class="px-12 pt-[30px] pb-11 grid grid-cols-[1fr_340px] gap-12 items-end">
      <div>
        <div class="font-mono text-[14px] tracking-[.14em] text-accent mb-5">
          SOFTWARE ENGINEER / BACKEND / MACHINE LEARNING
        </div>
        <h1 class="font-bricolage font-extrabold leading-[.88] tracking-[-.035em] text-[clamp(54px,8.4vw,132px)] m-0">
          Angga Dwi<br>Kurniawan
        </h1>
        <p class="max-w-[560px] text-[19px] leading-[1.55] text-[#bdbab3] mt-7 m-0">
          Saya membangun aplikasi web yang skalabel dan sistem bertenaga AI — mulai dari REST API dan platform full-stack hingga riset computer vision dengan YOLOv8.
        </p>
        <div class="flex gap-3.5 mt-[30px] flex-wrap">
          <a
            href="#work"
            class="font-mono font-bold text-[13px] tracking-[.06em] bg-text text-surface px-6 py-3.5 hover:bg-accent hover:text-surface transition-colors duration-200"
          >
            LIHAT KARYA ↓
          </a>
          <a
            href="/uploads/Angga Dwi Kurniawan.pdf"
            download
            class="font-mono font-bold text-[13px] tracking-[.06em] bg-transparent text-text border border-border-hover px-6 py-3.5 hover:border-accent hover:text-accent transition-colors duration-200"
          >
            UNDUH CV ↗
          </a>
        </div>
      </div>
      <img
        src="/uploads/foto-profil.jpg"
        alt="Foto Profil"
        class="w-[340px] h-[420px] object-cover border border-border-light"
      />
    </div>

    <MarqueeBar />

    <div class="grid grid-cols-4 border-t border-border">
      <div class="px-[28px] py-[26px] border-r border-border">
        <StatCounter :value="4" suffix="+" label="TAHUN BELAJAR" :isAccent="true" />
      </div>
      <div class="px-[28px] py-[26px] border-r border-border">
        <StatCounter :value="10" suffix="+" label="PROYEK DIBANGUN" />
      </div>
      <div class="px-[28px] py-[26px] border-r border-border">
        <StatCounter :value="1" :pad="true" label="MAGANG INDUSTRI" />
      </div>
      <div class="px-[28px] py-[26px]">
        <StatCounter :value="1" :pad="true" label="PROGRAM ML · BANGKIT" />
      </div>
    </div>
  </section>
</template>
