import { onMounted, onUnmounted, type Ref } from 'vue'

export function useSpotlight(heroRef: Ref<HTMLElement | null>) {
  function onMouseMove(ev: MouseEvent) {
    const hero = heroRef.value
    if (!hero) return
    const glow = hero.querySelector('#pg-glow') as HTMLElement
    if (!glow) return

    const r = hero.getBoundingClientRect()
    const x = ev.clientX - r.left
    const y = ev.clientY - r.top
    glow.style.background = `radial-gradient(260px circle at ${x}px ${y}px, rgba(255,77,141,.20), transparent 72%)`
    glow.style.opacity = '1'
  }

  function onMouseLeave() {
    const hero = heroRef.value
    if (!hero) return
    const glow = hero.querySelector('#pg-glow') as HTMLElement
    if (!glow) return
    glow.style.opacity = '0'
  }

  onMounted(() => {
    const hero = heroRef.value
    if (!hero) return
    hero.addEventListener('mousemove', onMouseMove)
    hero.addEventListener('mouseleave', onMouseLeave)
  })

  onUnmounted(() => {
    const hero = heroRef.value
    if (!hero) return
    hero.removeEventListener('mousemove', onMouseMove)
    hero.removeEventListener('mouseleave', onMouseLeave)
  })
}
