export interface User {
  id: string
  email: string
  fullName: string
  avatarUrl?: string
  languagePreference: 'ro' | 'en'
  subscriptionPlan: 'trial' | 'basic' | 'pro'
  subscriptionStatus: 'active' | 'canceled' | 'expired'
  trialEndsAt?: Date
  createdAt: Date
}

export interface Module {
  id: string
  moduleNumber: number
  category: string
  titleRo: string
  titleEn: string
  descriptionRo: string
  descriptionEn: string
  videoUrl?: string
  videoDurationMinutes: number
  transcriptRo: string
  transcriptEn: string
  exercisesRo: Exercise[]
  exercisesEn: Exercise[]
  resourcesRo: Resource[]
  resourcesEn: Resource[]
  orderNumber: number
  isPublished: boolean
}

export interface Exercise {
  title: string
  description: string
}

export interface Resource {
  title: string
  description: string
  url: string
  type: 'link' | 'document' | 'video'
}

export interface UserModuleProgress {
  id: string
  userId: string
  moduleId: string
  completed: boolean
  completedAt?: Date
  lastWatchedPosition: number
  notes: string
  exercisesCompleted: number[]
}

export interface DailyStack {
  id: string
  userId: string
  date: Date
  lesson: string
  story: string
  revelation: string
  action1: string
  action2: string
  action3: string
  action4: string
  shared: boolean
}

export interface Core4Tracking {
  id: string
  userId: string
  date: Date
  fitness: boolean
  fitnessNotes?: string
  fuel: boolean
  fuelNotes?: string
  meditation: boolean
  meditationNotes?: string
  memoirs: boolean
  memoirsNotes?: string
  person1: boolean
  person1Notes?: string
  person2: boolean
  person2Notes?: string
  discover: boolean
  discoverNotes?: string
  declare: boolean
  declareNotes?: string
}

export interface Stack {
  id: string
  userId: string
  type: 'prayer' | 'rage' | 'breakthrough' | 'war' | 'bible' | 'hot' | 'idea' | 'irritation'
  title: string
  stopContent: string
  submitContent: string
  struggleContent: string
  strikeContent: string
  lesson?: string
  story?: string
  revelation?: string
  action1?: string
  action2?: string
  action3?: string
  action4?: string
  tags: string[]
  shared: boolean
  createdAt: Date
}

export interface Task {
  id: string
  userId: string
  type: 'hit' | 'do' | 'domino'
  title: string
  description?: string
  deadline?: Date
  progress: number
  completed: boolean
  completedAt?: Date
  date?: Date
}

export interface ImpossibleGame {
  id: string
  userId: string
  year: number
  bodyGoal: string
  bodyMetrics: Record<string, any>
  beingGoal: string
  beingMetrics: Record<string, any>
  balanceGoal: string
  balanceMetrics: Record<string, any>
  businessGoal: string
  businessMetrics: Record<string, any>
}

export interface MonthlyMission {
  id: string
  userId: string
  gameId: string
  month: number
  year: number
  bodyMission: string
  bodyMetrics: Record<string, any>
  beingMission: string
  beingMetrics: Record<string, any>
  balanceMission: string
  balanceMetrics: Record<string, any>
  businessMission: string
  businessMetrics: Record<string, any>
  completed: boolean
}

export interface WeeklyWar {
  id: string
  userId: string
  missionId: string
  weekStartDate: Date
  bodyWar: string
  bodyTasks: any[]
  beingWar: string
  beingTasks: any[]
  balanceWar: string
  balanceTasks: any[]
  businessWar: string
  businessTasks: any[]
  score: number
  completed: boolean
}

export interface Streak {
  id: string
  userId: string
  streakType: 'stack' | 'core' | 'door' | 'overall'
  currentStreak: number
  longestStreak: number
  lastCompletedDate: Date
}
