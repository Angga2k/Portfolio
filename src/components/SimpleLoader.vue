<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useSplashStorage } from '../composables/useLocalStorage'

const emit = defineEmits<{
  complete: []
}>()

const progress = ref(0)
const showLoader = ref(true)
const storage = useSplashStorage()
const duration = ref(2000)

// Smooth progress animation
function animateProgress() {
  const startTime = performance.now()
  
  function update(currentTime: number) {
    const elapsed = currentTime - startTime
    const percentage = Math.min((elapsed / duration.value) * 100, 100)
    
    progress.value = Math.floor(percentage)
    
    if (percentage < 100) {
      requestAnimationFrame(update)
    } else {
      setTimeout(() => {
        showLoader.value = false
        emit('complete')
      }, 200)
    }
  }
  
  requestAnimationFrame(update)
}

onMounted(() => {
  // Record visit and get duration
  storage.recordVisit()
  duration.value = storage.getSplashDuration()
  
  // Start animation after small delay
  setTimeout(animateProgress, 100)
})
</script>

<template>
  <Transition name="loader-fade">
    <div v-if="showLoader" class="fixed inset-0 z-[100] bg-surface flex items-center justify-center">
      <div class="flex flex-col items-center gap-6">
        <!-- Logo SVG -->
        <div class="opacity-0 animate-fadeIn" style="animation-delay: 0s">
          <svg width="80" height="80" viewBox="0 0 120 120" fill="none" aria-label="Angga logo">
            <defs>
              <clipPath id="loader-a"><polygon points="0,0 120,0 120,40 0,76"/></clipPath>
              <clipPath id="loader-b"><polygon points="0,80 120,44 120,120 0,120"/></clipPath>
            </defs>
            <g clip-path="url(#loader-b)"><path d="M60 14 L100 106 L78 106 L72 86 L48 86 L42 106 L20 106 Z M60 52 L51 78 L69 78 Z" fill="#f2f0ec" fill-rule="evenodd"/></g>
            <g clip-path="url(#loader-a)" transform="translate(4,-4)"><path d="M60 14 L100 106 L78 106 L72 86 L48 86 L42 106 L20 106 Z M60 52 L51 78 L69 78 Z" fill="#f2f0ec" fill-rule="evenodd"/></g>
            <g transform="translate(-4,92) rotate(-19)">
              <polygon points="0,-8.5 128,-2 128,2.5 0,9.5" fill="#0b0b0b"/>
              <rect x="2" y="-6" width="40" height="12" rx="3" fill="#9b9890"/>
              <circle cx="14" cy="0" r="2.1" fill="#0b0b0b"/><circle cx="26" cy="0" r="2.1" fill="#0b0b0b"/>
              <rect x="42" y="-7.5" width="6" height="15" fill="#d9d6cf"/>
              <polygon points="48,-7.5 126,-0.5 48,7" fill="#e7e4dd"/>
              <polygon points="48,7 126,-0.5 124,1.6 48,8.6" fill="#ff4d8d"/>
            </g>
          </svg>
        </div>
        
        <!-- Text -->
        <div class="opacity-0 animate-fadeIn" style="animation-delay: 0.1s">
          <div class="font-mono font-bold text-[14px] tracking-[.12em] text-text">
            ANGGA DK
          </div>
        </div>
        
        <!-- Progress Bar -->
        <div class="opacity-0 animate-fadeIn w-[300px] max-w-[90vw]" style="animation-delay: 0.2s">
          <div class="h-1 bg-border rounded-sm overflow-hidden">
            <div 
              class="h-full bg-accent transition-all duration-100 ease-linear"
              :style="{ width: progress + '%' }"
            />
          </div>
          <div class="text-center mt-2 font-mono text-[13px] text-subtle">
            {{ progress }}%
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.5s cubic-bezier(0.2, 0.7, 0.2, 1) forwards;
}

.loader-fade-leave-active {
  transition: opacity 0.5s ease;
}

.loader-fade-leave-to {
  opacity: 0;
}
</style>
