/**
 * AI Stack Helper - Ghidare personalizată prin procesul de Stack
 * 
 * Acest sistem folosește OpenAI API pentru a ghida utilizatorii prin procesul
 * de completare a Stack-urilor (Furie, Rugăciune, Deblocare, etc.)
 * 
 * Workflow:
 * 1. STOP - Identifică faptele reale
 * 2. SUBMIT - Acceptă realitatea
 * 3. STRUGGLE - Explorează emoțiile și rezistența
 * 4. STRIKE - Creează acțiuni concrete
 */

export interface StackQuestion {
  id: string
  phase: 'stop' | 'submit' | 'struggle' | 'strike'
  question: string
  context?: string
  followUp?: string[]
}

export interface StackResponse {
  phase: 'stop' | 'submit' | 'struggle' | 'strike'
  content: string
  insights?: string[]
}

export interface AIStackSession {
  stackType: 'rage' | 'prayer' | 'breakthrough' | 'war'
  currentPhase: 'stop' | 'submit' | 'struggle' | 'strike'
  responses: StackResponse[]
  completed: boolean
}

/**
 * Întrebări ghidate pentru fiecare fază a Stack-ului
 */
export const stackQuestions: Record<string, StackQuestion[]> = {
  rage: [
    // STOP Phase
    {
      id: 'rage-stop-1',
      phase: 'stop',
      question: 'Ce te face furios acum? Descrie situația exactă, fără judecată.',
      context: 'Furia este un semnal. Primul pas este să identifici FAPTELE reale, nu interpretările.',
      followUp: [
        'Ce s-a întâmplat exact?',
        'Cine a fost implicat?',
        'Când s-a întâmplat?'
      ]
    },
    {
      id: 'rage-stop-2',
      phase: 'stop',
      question: 'Care sunt FAPTELE obiective ale situației? (Nu emoții, nu interpretări, doar fapte)',
      context: 'Separă faptele de poveste. Faptele sunt verificabile, povestea este interpretarea ta.',
    },
    
    // SUBMIT Phase
    {
      id: 'rage-submit-1',
      phase: 'submit',
      question: 'Poți accepta că această situație s-a întâmplat? (Nu înseamnă că ești de acord, doar că recunoști realitatea)',
      context: 'Supunerea nu este slăbiciune. Este puterea de a accepta realitatea pentru a o putea schimba.',
    },
    {
      id: 'rage-submit-2',
      phase: 'submit',
      question: 'Ce parte din această situație este în controlul tău? Ce parte nu este?',
      context: 'Puterea vine din focusarea pe ce poți controla.',
    },
    
    // STRUGGLE Phase
    {
      id: 'rage-struggle-1',
      phase: 'struggle',
      question: 'De ce te deranjează atât de mult această situație? Ce valoare a ta a fost încălcată?',
      context: 'Furia ta îți arată ce este important pentru tine. Este o busolă către valorile tale.',
    },
    {
      id: 'rage-struggle-2',
      phase: 'struggle',
      question: 'Ce teamă se ascunde în spatele furiei tale?',
      context: 'Adesea, furia este un scut pentru vulnerabilitate. Ce te sperie cu adevărat?',
    },
    {
      id: 'rage-struggle-3',
      phase: 'struggle',
      question: 'Dacă ai accepta complet această situație, ce ar trebui să schimbi în viața ta?',
      context: 'Rezistența ta îți arată unde trebuie să crești.',
    },
    
    // STRIKE Phase
    {
      id: 'rage-strike-1',
      phase: 'strike',
      question: 'Care este LECȚIA din această situație? Ce te învață despre tine?',
      context: 'Fiecare provocare este un profesor. Ce lecție îți oferă?',
    },
    {
      id: 'rage-strike-2',
      phase: 'strike',
      question: 'Care este POVESTEA ta despre această situație? (Cum o vei povesti peste 5 ani?)',
      context: 'Tu alegi povestea. Vei fi victima sau eroul?',
    },
    {
      id: 'rage-strike-3',
      phase: 'strike',
      question: 'Care este REVELAȚIA? Ce înțelegi acum despre tine sau despre viață?',
      context: 'Revelația este momentul "Aha!" - perspectiva nouă care schimbă totul.',
    },
    {
      id: 'rage-strike-4',
      phase: 'strike',
      question: 'Care sunt 4 ACȚIUNI concrete pe care le vei face în următoarele 24 de ore?',
      context: 'Acțiunea transformă înțelegerea în rezultate. Fii specific și măsurabil.',
    },
  ],
  
  prayer: [
    // STOP Phase
    {
      id: 'prayer-stop-1',
      phase: 'stop',
      question: 'Pentru ce ești recunoscător astăzi? Numește 3 lucruri specifice.',
      context: 'Rugăciunea începe cu recunoștință. Oprește-te și observă binecuvântările.',
    },
    {
      id: 'prayer-stop-2',
      phase: 'stop',
      question: 'Ce provocare sau frică ai acum în viața ta?',
      context: 'Rugăciunea este dialog. Fii sincer despre luptele tale.',
    },
    
    // SUBMIT Phase
    {
      id: 'prayer-submit-1',
      phase: 'submit',
      question: 'Poți să predai controlul acestei situații unei puteri mai mari?',
      context: 'Supunerea spirituală este eliberare. Nu ești singur în luptă.',
    },
    {
      id: 'prayer-submit-2',
      phase: 'submit',
      question: 'Ce ai învățat din provocările trecute despre credință?',
      context: 'Trecutul tău este dovada că ai fost purtat prin fiecare furtună.',
    },
    
    // STRUGGLE Phase
    {
      id: 'prayer-struggle-1',
      phase: 'struggle',
      question: 'Ce îți cere Dumnezeu/Universul să faci, dar tu rezisti?',
      context: 'Liniștea interioară îți șoptește adevărul. Ce mesaj ignori?',
    },
    {
      id: 'prayer-struggle-2',
      phase: 'struggle',
      question: 'Cum te-ai schimba dacă ai avea credință completă?',
      context: 'Credința nu este absența fricii, ci acțiunea în ciuda ei.',
    },
    
    // STRIKE Phase
    {
      id: 'prayer-strike-1',
      phase: 'strike',
      question: 'Care este LECȚIA spirituală din această perioadă a vieții tale?',
      context: 'Fiecare sezon are un scop. Ce te învață acesta?',
    },
    {
      id: 'prayer-strike-2',
      phase: 'strike',
      question: 'Cum vei folosi această experiență pentru a-i servi pe alții?',
      context: 'Scopul tău este mai mare decât tine. Cum vei transforma durerea în serviciu?',
    },
    {
      id: 'prayer-strike-3',
      phase: 'strike',
      question: 'Care este REVELAȚIA ta spirituală?',
      context: 'Ce înțelegi acum despre credință, scop sau identitate?',
    },
    {
      id: 'prayer-strike-4',
      phase: 'strike',
      question: 'Care sunt 4 ACȚIUNI de credință pe care le vei face?',
      context: 'Credința fără acțiune este moartă. Ce vei face pentru a-ți onora credința?',
    },
  ],
  
  breakthrough: [
    // STOP Phase
    {
      id: 'breakthrough-stop-1',
      phase: 'stop',
      question: 'Care este blocajul sau pattern-ul care te ține blocat?',
      context: 'Deblocarea începe cu recunoașterea. Ce pattern repeți?',
    },
    {
      id: 'breakthrough-stop-2',
      phase: 'stop',
      question: 'De cât timp te confrunți cu acest pattern?',
      context: 'Durata pattern-ului îți arată cât de adânc este înrădăcinat.',
    },
    
    // SUBMIT Phase
    {
      id: 'breakthrough-submit-1',
      phase: 'submit',
      question: 'Ce beneficiu secret obții din menținerea acestui pattern?',
      context: 'Fiecare comportament are un beneficiu ascuns. Ce câștigi păstrându-l?',
    },
    {
      id: 'breakthrough-submit-2',
      phase: 'submit',
      question: 'Ești gata să renunți la acest beneficiu pentru libertate?',
      context: 'Deblocarea necesită sacrificiu. Ce ești dispus să pierzi?',
    },
    
    // STRUGGLE Phase
    {
      id: 'breakthrough-struggle-1',
      phase: 'struggle',
      question: 'Ce crezi despre tine când ești în acest pattern?',
      context: 'Pattern-urile sunt alimentate de credințe. Ce crezi despre identitatea ta?',
    },
    {
      id: 'breakthrough-struggle-2',
      phase: 'struggle',
      question: 'Dacă ai rupe acest pattern, cine ai deveni?',
      context: 'Frica ta nu este de eșec, ci de succes. Cine vei fi liber?',
    },
    {
      id: 'breakthrough-struggle-3',
      phase: 'struggle',
      question: 'Ce ar spune versiunea ta de 80 de ani despre acest moment?',
      context: 'Perspectiva timpului îți arată ce contează cu adevărat.',
    },
    
    // STRIKE Phase
    {
      id: 'breakthrough-strike-1',
      phase: 'strike',
      question: 'Care este LECȚIA din acest pattern? Ce te-a învățat?',
      context: 'Chiar și pattern-urile negative au lecții. Ce ai învățat?',
    },
    {
      id: 'breakthrough-strike-2',
      phase: 'strike',
      question: 'Care este noua POVESTE despre cine ești?',
      context: 'Rescrie narativul. Cine ești dincolo de acest pattern?',
    },
    {
      id: 'breakthrough-strike-3',
      phase: 'strike',
      question: 'Care este REVELAȚIA ta? Ce înțelegi acum?',
      context: 'Momentul de deblocare este o schimbare de perspectivă. Care este a ta?',
    },
    {
      id: 'breakthrough-strike-4',
      phase: 'strike',
      question: 'Care sunt 4 ACȚIUNI care vor rupe acest pattern?',
      context: 'Acțiunea nouă creează rezultate noi. Ce vei face diferit?',
    },
  ],
}

/**
 * Obține întrebarea următoare bazată pe faza curentă
 */
export function getNextQuestion(
  stackType: 'rage' | 'prayer' | 'breakthrough' | 'war',
  currentPhase: 'stop' | 'submit' | 'struggle' | 'strike',
  answeredQuestions: string[]
): StackQuestion | null {
  const questions = stackQuestions[stackType] || []
  const phaseQuestions = questions.filter(q => q.phase === currentPhase)
  
  const unanswered = phaseQuestions.find(q => !answeredQuestions.includes(q.id))
  return unanswered || null
}

/**
 * Analizează răspunsul utilizatorului și oferă insight-uri
 * (În producție, aceasta ar folosi OpenAI API)
 */
export async function analyzeResponse(
  question: StackQuestion,
  userResponse: string
): Promise<{ insights: string[]; suggestions: string[] }> {
  // Mock implementation - în producție ar folosi OpenAI API
  const insights: string[] = []
  const suggestions: string[] = []
  
  // Simulare analiză bazată pe lungimea și conținutul răspunsului
  if (userResponse.length < 50) {
    suggestions.push('Încearcă să fii mai specific. Cu cât ești mai detaliat, cu atât vei obține mai multă claritate.')
  }
  
  if (question.phase === 'stop' && userResponse.toLowerCase().includes('simt')) {
    insights.push('Observ că vorbești despre sentimente. Amintește-te: în faza STOP căutăm FAPTE, nu emoții.')
  }
  
  if (question.phase === 'struggle' && userResponse.split(' ').length > 100) {
    insights.push('Răspuns profund! Această explorare te va ajuta să înțelegi rădăcinile pattern-ului.')
  }
  
  if (question.phase === 'strike' && userResponse.includes('voi')) {
    insights.push('Excelent! Acțiunile tale sunt clare și orientate spre viitor.')
  }
  
  return { insights, suggestions }
}

/**
 * Generează rezumat final al Stack-ului
 */
export function generateStackSummary(responses: StackResponse[]): {
  lesson: string
  story: string
  revelation: string
  actions: string[]
} {
  const strikeResponses = responses.filter(r => r.phase === 'strike')
  
  return {
    lesson: strikeResponses.find(r => r.content.toLowerCase().includes('lecție'))?.content || '',
    story: strikeResponses.find(r => r.content.toLowerCase().includes('poveste'))?.content || '',
    revelation: strikeResponses.find(r => r.content.toLowerCase().includes('revelație'))?.content || '',
    actions: strikeResponses
      .filter(r => r.content.toLowerCase().includes('acțiune'))
      .map(r => r.content)
      .slice(0, 4)
  }
}

/**
 * Configurare pentru integrarea cu OpenAI (pentru producție)
 */
export const AI_CONFIG = {
  model: 'gpt-4.1-mini', // sau gpt-4.1-nano pentru răspunsuri mai rapide
  temperature: 0.7,
  maxTokens: 500,
  systemPrompt: `Tu ești un coach de viață expert specializat în metodologia Warrior Stack.
Rolul tău este să ghidezi utilizatorii prin procesul de transformare personală folosind cele 4 faze:
1. STOP - Identifică faptele reale
2. SUBMIT - Acceptă realitatea
3. STRUGGLE - Explorează emoțiile și rezistența
4. STRIKE - Creează acțiuni concrete

Fii empatic, dar direct. Pune întrebări provocatoare care duc la insight-uri profunde.
Nu oferi sfaturi generice - personalizează totul bazat pe răspunsurile utilizatorului.`
}
