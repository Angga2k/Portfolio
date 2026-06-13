export interface SplashState {
  version: string
  firstVisit: boolean
  lastVisitTime: number
  totalVisits: number
  preferences: {
    skipSplash: boolean
    reducedMotion: boolean
  }
}
