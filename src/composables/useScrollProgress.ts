import { onMounted, onUnmounted, ref } from 'vue'

export function useScrollProgress() {
  const progressWidth = ref('0%')
  const activeSection = ref('')

  function onScroll() {
    const st = window.scrollY || document.documentElement.scrollTop || 0
    const h = document.documentElement.scrollHeight - window.innerHeight
    progressWidth.value = h > 0 ? `${(st / h) * 100}%` : '0%'

    const links = document.querySelectorAll<HTMLElement>('[data-nav]')
    let active = links.length > 0 ? links[0].getAttribute('data-nav') || '' : ''
    links.forEach((l) => {
      const sec = document.getElementById(l.getAttribute('data-nav') || '')
      if (sec && sec.getBoundingClientRect().top <= window.innerHeight * 0.35) {
        active = l.getAttribute('data-nav') || ''
      }
    })
    activeSection.value = active
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })

  return { progressWidth, activeSection }
}
