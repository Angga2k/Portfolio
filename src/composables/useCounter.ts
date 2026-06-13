import { onMounted, onUnmounted, type Ref } from 'vue'

export function useCounter(rootRef: Ref<HTMLElement | null>) {
  let observer: IntersectionObserver | null = null

  function runCounter(el: HTMLElement) {
    const to = parseInt(el.getAttribute('data-count') || '0', 10) || 0
    const suffix = el.getAttribute('data-suffix') || ''
    const pad = el.getAttribute('data-pad') === '1'
    const dur = 1100
    const start = performance.now()

    function tick(now: number) {
      const p = Math.min(1, (now - start) / dur)
      const eased = 1 - Math.pow(1 - p, 3)
      const v = Math.round(to * eased)
      el.textContent = (pad ? String(v).padStart(2, '0') : String(v)) + suffix
      if (p < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }

  onMounted(() => {
    const root = rootRef.value
    if (!root) return

    const els = root.querySelectorAll('[data-count]') as NodeListOf<HTMLElement>
    if (!els.length) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            runCounter(e.target as HTMLElement)
            observer?.unobserve(e.target)
          }
        })
      },
      { threshold: 0.6 }
    )

    els.forEach((el) => observer?.observe(el))
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}
