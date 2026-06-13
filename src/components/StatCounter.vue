<script setup lang="ts">
defineProps<{
  value: number;
  suffix?: string;
  pad?: boolean;
  label: string;
  isAccent?: boolean;
}>();
</script>

<template>
  <div
    data-reveal
    class="opacity-0 translate-y-1 transition-all duration-700"
    :style="{ transitionTimingFunction: 'cubic-bezier(.2,.7,.2,1)' }"
  >
    <div
      class="font-bricolage font-extrabold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[44px] leading-none"
      :class="isAccent ? 'text-accent' : 'text-text'"
      :data-count="String(value)"
      :data-suffix="suffix || ''"
      :data-pad="pad ? '1' : '0'"
    >
      {{ pad ? String(value).padStart(2, '0') : value }}{{ suffix || '' }}
    </div>
    <div
      class="font-mono text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] tracking-[.08em] text-subtle mt-1 md:mt-2"
    >
      {{ label }}
    </div>
  </div>
</template>
