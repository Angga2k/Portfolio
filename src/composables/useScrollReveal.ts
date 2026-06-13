import { onMounted, onUnmounted, type Ref } from 'vue'

export function useScrollReveal(rootRef: Ref<HTMLElement | null>) {
  let observer: IntersectionObserver | null = null
  let fallbackTimer: ReturnType<typeof setTimeout> | null = null

  function show(el: Element) {
    const htmlEl = el as HTMLElement
    htmlEl.style.opacity = '1'
    htmlEl.style.transform = 'none'
  }

  function setup() {
    const root = rootRef.value
    if (!root) return false

    const els = root.querySelectorAll('[data-reveal]') as NodeListOf<HTMLElement>
    if (!els.length) return false

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            show(e.target)
            observer?.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }
    )

    els.forEach((el) => {
      const r = el.getBoundingClientRect()
      if (r.top < window.innerHeight * 0.95) {
        show(el)
      } else {
        observer?.observe(el)
      }
    })

    fallbackTimer = setTimeout(() => {
      root.querySelectorAll('[data-reveal]').forEach(show)
    }, 4500)

    return true
  }

  onMounted(() => {
    if (!setup()) {
      let tries = 0
      const t = setInterval(() => {
        tries++
        if (setup() || tries > 25) clearInterval(t)
      }, 120)
    }
  })

  onUnmounted(() => {
    observer?.disconnect()
    if (fallbackTimer) clearTimeout(fallbackTimer)
  })
}
