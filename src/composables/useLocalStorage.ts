import { ref } from 'vue'
import type { SplashState } from '../types/splash'

const STORAGE_KEY = 'angga2k_splash'
const DEFAULT_STATE: SplashState = {
  version: '1.0',
  firstVisit: true,
  lastVisitTime: 0,
  totalVisits: 0,
  preferences: {
    skipSplash: false,
    reducedMotion: false
  }
}

export function useSplashStorage() {
  const state = ref<SplashState>(loadState())

  function loadState(): SplashState {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        return { ...DEFAULT_STATE, ...parsed }
      }
    } catch (e) {
      console.warn('Failed to load splash state:', e)
    }
    return { ...DEFAULT_STATE }
  }

  function saveState(newState: Partial<SplashState>) {
    try {
      state.value = { ...state.value, ...newState }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.value))
    } catch (e) {
      console.warn('Failed to save splash state:', e)
    }
  }

  function recordVisit() {
    const now = Date.now()
    saveState({
      firstVisit: false,
      lastVisitTime: now,
      totalVisits: state.value.totalVisits + 1
    })
  }

  function getSplashDuration(): number {
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return 500 // Quick fade for accessibility
    }

    // First visit: full animation
    if (state.value.firstVisit) {
      return 2000
    }

    // Calculate hours since last visit
    const now = Date.now()
    const hoursSinceLastVisit = (now - state.value.lastVisitTime) / (1000 * 60 * 60)

    // Return visit within 24 hours: quick version
    if (hoursSinceLastVisit < 24) {
      return 1000
    }

    // Return visit after 24 hours: full animation
    return 2000
  }

  function shouldShowSimpleFade(): boolean {
    return (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      state.value.preferences.reducedMotion
    )
  }

  return {
    state,
    recordVisit,
    getSplashDuration,
    shouldShowSimpleFade
  }
}
