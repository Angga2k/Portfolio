<script setup lang="ts">
withDefaults(defineProps<{
  delay?: number
}>(), {
  delay: 0
})
</script>

<template>
  <div
    data-reveal
    :style="{
      opacity: 0,
      transform: 'translateY(28px)',
      transition: `opacity .7s cubic-bezier(.2,.7,.2,1) ${delay}s, transform .7s cubic-bezier(.2,.7,.2,1) ${delay}s`
    }"
  >
    <slot />
  </div>
</template>
