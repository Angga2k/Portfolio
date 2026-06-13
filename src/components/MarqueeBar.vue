<script setup lang="ts">
const items = [
  'TERBUKA UNTUK MAGANG', '★',
  'BACKEND ENGINEERING', '★',
  'MACHINE LEARNING', '★',
  'COMPUTER VISION', '★',
  'UNIVERSITAS JEMBER', '★',
]
</script>

<template>
  <div class="overflow-hidden whitespace-nowrap border-t border-border">
    <div class="inline-flex gap-10 py-3 font-mono text-xs tracking-widest text-accent animate-marquee will-change-transform">
      <template v-for="item in items" :key="item">
        <span>{{ item }}</span>
      </template>
      <template v-for="item in items" :key="'dup-' + item">
        <span>{{ item }}</span>
      </template>
    </div>
  </div>
</template>
