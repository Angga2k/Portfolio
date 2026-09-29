<script setup lang="ts">
import ScrollReveal from './ScrollReveal.vue'
</script>

<template>
  <section id="about" class="border-b border-border grid grid-cols-1 lg:grid-cols-2">
    <div class="px-4 sm:px-6 md:px-8 lg:px-12 py-10 md:py-12 lg:py-[54px] border-b lg:border-b-0 lg:border-r border-border">
      <ScrollReveal>
        <div class="font-mono text-[11px] sm:text-[12px] md:text-[13px] tracking-[.12em] text-accent">01 — TENTANG</div>
        <h2 class="font-bricolage font-extrabold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] tracking-[-.025em] leading-[1.02] mt-4 md:mt-[18px] m-0">
          Website HMIF, sistem prodi, dan aplikasi Android.
        </h2>
        <div class="mt-6 md:mt-[30px] font-mono text-[11px] sm:text-[12px] md:text-[13px] text-subtle leading-6 md:leading-8">
          <div>↳ S1 INFORMATIKA · IPK 3.83 / 4.00</div>
          <div>↳ UNIVERSITAS JEMBER, 2022—2025</div>
          <div>↳ SMKN 1 KRAKSAAN · REKAYASA PERANGKAT LUNAK</div>
        </div>
      </ScrollReveal>
    </div>
    <div class="px-4 sm:px-6 md:px-8 lg:px-12 py-10 md:py-12 lg:py-[54px] flex flex-col justify-center">
      <ScrollReveal :delay="0.1">
        <p class="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-[1.65] md:leading-[1.6] text-[#d6d3cc] m-0">
          Saya lulus S1 Informatika Universitas Jember pada 2025 dengan IPK 3.83. Saya membangun website untuk HMIF dan Program Studi Informatika, lalu mengembangkan fitur transaksi di MudahBayar.
        </p>
      </ScrollReveal>
      <ScrollReveal :delay="0.18">
        <p class="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] leading-[1.7] md:leading-[1.65] text-muted mt-5 md:mt-[22px] m-0">
          Di Bangkit Academy 2024, saya mengembangkan aplikasi mobile AgroVision dengan model CNN. Pada 2025, saya memimpin Sub Divisi Teknologi HMIF UNEJ.
        </p>
      </ScrollReveal>
    </div>
  </section>
</template>
