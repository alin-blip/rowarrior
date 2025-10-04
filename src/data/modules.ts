import type { Module } from '../types'

export const modulesData: Omit<Module, 'id'>[] = [
  // INTRODUCERE (3 module)
  {
    moduleNumber: 1,
    category: 'INTRODUCERE',
    titleRo: 'Călătoria Războinicului',
    titleEn: 'The Warrior\'s Journey',
    descriptionRo: '7 ani de transformare: de la burnout și depresie la succes. Cele 3 etape ale călătoriei: Fii Bărbatul, Fii Regele, Construiește Regatul.',
    descriptionEn: '7 years of transformation: from burnout and depression to success. The 3 stages of the journey: Be the Man, Be the King, Build the Kingdom.',
    videoDurationMinutes: 45,
    transcriptRo: 'Conținut complet al modulului 1 în română...',
    transcriptEn: 'Full content of module 1 in English...',
    exercisesRo: [
      { title: 'Reflecție personală', description: 'Scrie despre momentul în care ai realizat că ai nevoie de o schimbare' },
      { title: 'Vizualizare', description: 'Imaginează-ți unde vrei să fii peste 5 ani' }
    ],
    exercisesEn: [
      { title: 'Personal Reflection', description: 'Write about the moment you realized you needed a change' },
      { title: 'Visualization', description: 'Imagine where you want to be in 5 years' }
    ],
    resourcesRo: [],
    resourcesEn: [],
    orderNumber: 1,
    isPublished: true
  },
  {
    moduleNumber: 2,
    category: 'INTRODUCERE',
    titleRo: 'Cele 6 Faze ale Creșterii',
    titleEn: 'The 6 Phases of Growth',
    descriptionRo: 'Adormit, Trezirea, Activarea, Aplicarea, Accelerarea, Ascensiunea - înțelege unde te afli în călătoria ta.',
    descriptionEn: 'Asleep, Awake, Activation, Application, Acceleration, Ascension - understand where you are in your journey.',
    videoDurationMinutes: 40,
    transcriptRo: 'Conținut complet al modulului 2 în română...',
    transcriptEn: 'Full content of module 2 in English...',
    exercisesRo: [
      { title: 'Auto-evaluare', description: 'Identifică în ce fază te afli acum' }
    ],
    exercisesEn: [
      { title: 'Self-Assessment', description: 'Identify which phase you are in now' }
    ],
    resourcesRo: [],
    resourcesEn: [],
    orderNumber: 2,
    isPublished: true
  },
  {
    moduleNumber: 3,
    category: 'INTRODUCERE',
    titleRo: 'Cele 7 Etape ale Ascensiunii',
    titleEn: 'The 7 Stages of Ascension',
    descriptionRo: 'Groapa, Puterea, Perspectiva, Scopul, Producția, Profitul, Protecția - harta completă către libertate.',
    descriptionEn: 'Pit, Power, Perspective, Purpose, Production, Profit, Protection - the complete map to freedom.',
    videoDurationMinutes: 50,
    transcriptRo: 'Conținut complet al modulului 3 în română...',
    transcriptEn: 'Full content of module 3 in English...',
    exercisesRo: [
      { title: 'Mapare', description: 'Desenează harta ta personală de la groapă la vârf' }
    ],
    exercisesEn: [
      { title: 'Mapping', description: 'Draw your personal map from pit to peak' }
    ],
    resourcesRo: [],
    resourcesEn: [],
    orderNumber: 3,
    isPublished: true
  },
  
  // FII BĂRBATUL (21 module)
  {
    moduleNumber: 4,
    category: 'FII BĂRBATUL',
    titleRo: 'Cele 5 Investiții ale unui Rege Războinic',
    titleEn: 'The 5 Investments of a Warrior King',
    descriptionRo: 'Timpul, Energia, Dorința, Banii, Credința - cele 5 resurse fundamentale pe care trebuie să le investești.',
    descriptionEn: 'Time, Energy, Desire, Money, Faith - the 5 fundamental resources you must invest.',
    videoDurationMinutes: 55,
    transcriptRo: 'Conținut complet al modulului 4 în română...',
    transcriptEn: 'Full content of module 4 in English...',
    exercisesRo: [
      { title: 'Audit resurse', description: 'Evaluează cum îți investești cele 5 resurse acum' }
    ],
    exercisesEn: [
      { title: 'Resource Audit', description: 'Evaluate how you invest your 5 resources now' }
    ],
    resourcesRo: [],
    resourcesEn: [],
    orderNumber: 4,
    isPublished: true
  },
  {
    moduleNumber: 5,
    category: 'FII BĂRBATUL',
    titleRo: 'Cele 5 Protocoale ale Războinicului',
    titleEn: 'The 5 Warrior Protocols',
    descriptionRo: 'Adevărul, Puterea, Perspectiva, Scopul, Producția - protocoalele care te ghidează.',
    descriptionEn: 'Truth, Power, Perspective, Purpose, Production - the protocols that guide you.',
    videoDurationMinutes: 45,
    transcriptRo: 'Conținut complet al modulului 5 în română...',
    transcriptEn: 'Full content of module 5 in English...',
    exercisesRo: [],
    exercisesEn: [],
    resourcesRo: [],
    resourcesEn: [],
    orderNumber: 5,
    isPublished: true
  },
  {
    moduleNumber: 6,
    category: 'FII BĂRBATUL',
    titleRo: 'Codul - Faptele Reale',
    titleEn: 'The Code - Real Facts',
    descriptionRo: 'Realitatea faptelor și puterea lor. Diferența dintre adevăr și fapte.',
    descriptionEn: 'The reality of facts and their power. The difference between truth and facts.',
    videoDurationMinutes: 40,
    transcriptRo: 'Conținut complet al modulului 6 în română...',
    transcriptEn: 'Full content of module 6 in English...',
    exercisesRo: [],
    exercisesEn: [],
    resourcesRo: [],
    resourcesEn: [],
    orderNumber: 6,
    isPublished: true
  },
  // ... continuă cu restul modulelor până la 41
  // Pentru brevitate, adaug doar câteva exemple din fiecare categorie
  
  {
    moduleNumber: 22,
    category: 'FII REGELE',
    titleRo: 'Introducere în Core 4',
    titleEn: 'Introduction to Core 4',
    descriptionRo: 'Stăpânirea și puterea. Cele 4 domenii ale vieții: Corp, Ființă, Echilibru, Afacere.',
    descriptionEn: 'Mastery and power. The 4 domains of life: Body, Being, Balance, Business.',
    videoDurationMinutes: 50,
    transcriptRo: 'Conținut complet al modulului 22 în română...',
    transcriptEn: 'Full content of module 22 in English...',
    exercisesRo: [],
    exercisesEn: [],
    resourcesRo: [],
    resourcesEn: [],
    orderNumber: 22,
    isPublished: true
  },
  
  {
    moduleNumber: 29,
    category: 'CONSTRUIEȘTE REGATUL',
    titleRo: 'Introducere în Door',
    titleEn: 'Introduction to Door',
    descriptionRo: 'Ce este Ușa (Door). Hit List și Do List. Domino Door - Task-ul prioritar.',
    descriptionEn: 'What is the Door. Hit List and Do List. Domino Door - The priority task.',
    videoDurationMinutes: 45,
    transcriptRo: 'Conținut complet al modulului 29 în română...',
    transcriptEn: 'Full content of module 29 in English...',
    exercisesRo: [],
    exercisesEn: [],
    resourcesRo: [],
    resourcesEn: [],
    orderNumber: 29,
    isPublished: true
  },
  
  {
    moduleNumber: 35,
    category: 'GAME',
    titleRo: 'Hărțile Realității și Libertății',
    titleEn: 'Reality and Freedom Maps',
    descriptionRo: 'Frame Maps (Hărțile Realității) și Freedom Maps (Hărțile Libertății). Adevărul despre prezent și viziunea viitorului.',
    descriptionEn: 'Frame Maps (Reality Maps) and Freedom Maps. The truth about the present and the vision of the future.',
    videoDurationMinutes: 55,
    transcriptRo: 'Conținut complet al modulului 35 în română...',
    transcriptEn: 'Full content of module 35 in English...',
    exercisesRo: [],
    exercisesEn: [],
    resourcesRo: [],
    resourcesEn: [],
    orderNumber: 35,
    isPublished: true
  },
  
  {
    moduleNumber: 40,
    category: 'INTEGRARE',
    titleRo: 'Sistemul Complet Warrior',
    titleEn: 'The Complete Warrior System',
    descriptionRo: 'Integrarea tuturor componentelor: Cod + Stack + Core 4 + Door + Game. Fluxul complet de la adevăr la transformare.',
    descriptionEn: 'Integration of all components: Code + Stack + Core 4 + Door + Game. The complete flow from truth to transformation.',
    videoDurationMinutes: 60,
    transcriptRo: 'Conținut complet al modulului 40 în română...',
    transcriptEn: 'Full content of module 40 in English...',
    exercisesRo: [],
    exercisesEn: [],
    resourcesRo: [],
    resourcesEn: [],
    orderNumber: 40,
    isPublished: true
  },
  
  {
    moduleNumber: 41,
    category: 'INTEGRARE',
    titleRo: 'Calea Războinicului - Viața Ta Transformată',
    titleEn: 'The Warrior\'s Way - Your Transformed Life',
    descriptionRo: 'Recapitulare completă. Implementarea pe termen lung. Crearea moștenirii. Următorii pași.',
    descriptionEn: 'Complete recap. Long-term implementation. Creating legacy. Next steps.',
    videoDurationMinutes: 50,
    transcriptRo: 'Conținut complet al modulului 41 în română...',
    transcriptEn: 'Full content of module 41 in English...',
    exercisesRo: [],
    exercisesEn: [],
    resourcesRo: [],
    resourcesEn: [],
    orderNumber: 41,
    isPublished: true
  },
]

// Helper pentru a genera toate cele 41 de module
export function generateAllModules(): Omit<Module, 'id'>[] {
  const categories = [
    { name: 'INTRODUCERE', count: 3, start: 1 },
    { name: 'FII BĂRBATUL', count: 21, start: 4 },
    { name: 'FII REGELE', count: 7, start: 25 },
    { name: 'CONSTRUIEȘTE REGATUL', count: 6, start: 32 },
    { name: 'GAME', count: 4, start: 38 },
    { name: 'INTEGRARE', count: 2, start: 40 },
  ]
  
  const allModules: Omit<Module, 'id'>[] = []
  
  categories.forEach(category => {
    for (let i = 0; i < category.count; i++) {
      const moduleNumber = category.start + i
      allModules.push({
        moduleNumber,
        category: category.name,
        titleRo: `Modul ${moduleNumber}`,
        titleEn: `Module ${moduleNumber}`,
        descriptionRo: `Descriere modul ${moduleNumber}`,
        descriptionEn: `Description module ${moduleNumber}`,
        videoDurationMinutes: 45,
        transcriptRo: `Conținut complet al modulului ${moduleNumber} în română...`,
        transcriptEn: `Full content of module ${moduleNumber} in English...`,
        exercisesRo: [],
        exercisesEn: [],
        resourcesRo: [],
        resourcesEn: [],
        orderNumber: moduleNumber,
        isPublished: true
      })
    }
  })
  
  return allModules
}
