import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Textarea } from '../components/ui/Textarea'
import { Badge } from '../components/ui/Badge'
import { Progress } from '../components/ui/Progress'
import { 
  Flame, 
  MessageCircle, 
  Lightbulb, 
  CheckCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react'
import { 
  getNextQuestion, 
  analyzeResponse,
  generateStackSummary,
  type StackResponse 
} from '../lib/ai-stack-helper'

export const StackRage = () => {
  const [currentPhase, setCurrentPhase] = useState<'stop' | 'submit' | 'struggle' | 'strike'>('stop')
  const [answeredQuestions, setAnsweredQuestions] = useState<string[]>([])
  const [responses, setResponses] = useState<StackResponse[]>([])
  const [currentAnswer, setCurrentAnswer] = useState('')
  const [insights, setInsights] = useState<string[]>([])
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [completed, setCompleted] = useState(false)
  
  const currentQuestion = getNextQuestion('rage', currentPhase, answeredQuestions)
  
  const phases = [
    { id: 'stop', label: 'STOP', icon: '🛑', description: 'Identifică faptele' },
    { id: 'submit', label: 'SUBMIT', icon: '🙏', description: 'Acceptă realitatea' },
    { id: 'struggle', label: 'STRUGGLE', icon: '💪', description: 'Explorează emoțiile' },
    { id: 'strike', label: 'STRIKE', icon: '⚡', description: 'Creează acțiuni' },
  ]
  
  const currentPhaseIndex = phases.findIndex(p => p.id === currentPhase)
  const progress = ((currentPhaseIndex + 1) / phases.length) * 100
  
  const handleSubmitAnswer = async () => {
    if (!currentQuestion || !currentAnswer.trim()) return
    
    setIsAnalyzing(true)
    
    // Salvează răspunsul
    const newResponse: StackResponse = {
      phase: currentPhase,
      content: currentAnswer
    }
    setResponses([...responses, newResponse])
    setAnsweredQuestions([...answeredQuestions, currentQuestion.id])
    
    // Analizează răspunsul cu AI
    const analysis = await analyzeResponse(currentQuestion, currentAnswer)
    setInsights(analysis.insights)
    
    // Resetează input
    setCurrentAnswer('')
    
    setIsAnalyzing(false)
    
    // Verifică dacă trebuie să trecem la faza următoare
    setTimeout(() => {
      const nextQuestion = getNextQuestion('rage', currentPhase, [...answeredQuestions, currentQuestion.id])
      
      if (!nextQuestion) {
        // Nu mai sunt întrebări în această fază, trecem la următoarea
        if (currentPhase === 'stop') setCurrentPhase('submit')
        else if (currentPhase === 'submit') setCurrentPhase('struggle')
        else if (currentPhase === 'struggle') setCurrentPhase('strike')
        else if (currentPhase === 'strike') {
          // Stack completat!
          setCompleted(true)
        }
        setInsights([])
      }
    }, 2000)
  }
  
  const handleSaveStack = () => {
    const summary = generateStackSummary(responses)
    console.log('Stack saved:', summary)
    // În producție, aici ar salva în baza de date
    alert('Stack salvat cu succes! 🎉')
  }
  
  if (completed) {
    const summary = generateStackSummary(responses)
    
    return (
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 text-center">
          <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12" />
          </div>
          
          <h1 className="text-3xl font-bold mb-4">Stack de Furie Completat! 🎉</h1>
          <p className="text-gray-400 mb-8">
            Felicitări! Ai trecut prin toate cele 4 faze și ai transformat furia în putere.
          </p>
          
          <div className="space-y-6 text-left">
            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-400" />
                Lecția Ta
              </h3>
              <p className="text-gray-300 bg-slate-700 p-4 rounded-lg">{summary.lesson || 'N/A'}</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-blue-400" />
                Povestea Ta
              </h3>
              <p className="text-gray-300 bg-slate-700 p-4 rounded-lg">{summary.story || 'N/A'}</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                Revelația Ta
              </h3>
              <p className="text-gray-300 bg-slate-700 p-4 rounded-lg">{summary.revelation || 'N/A'}</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-green-400" />
                Acțiunile Tale
              </h3>
              <ul className="space-y-2">
                {summary.actions.map((action, i) => (
                  <li key={i} className="flex items-center gap-2 bg-slate-700 p-3 rounded-lg">
                    <span className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </span>
                    <span className="text-gray-300">{action || 'N/A'}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="flex gap-4 mt-8">
            <Button variant="gradient" className="flex-1" onClick={handleSaveStack}>
              Salvează Stack
            </Button>
            <Button variant="outline" className="flex-1" onClick={() => window.location.reload()}>
              Creează Alt Stack
            </Button>
          </div>
        </Card>
      </div>
    )
  }
  
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <Flame className="w-10 h-10 text-orange-500" />
          <div>
            <h1 className="text-4xl font-bold">Stack de Furie</h1>
            <p className="text-gray-400">Transformă furia în putere și claritate</p>
          </div>
        </div>
        
        {/* Progress */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold">Progres</span>
            <span className="text-sm text-gray-400">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        
        {/* Phases */}
        <div className="grid grid-cols-4 gap-2">
          {phases.map((phase, index) => (
            <div
              key={phase.id}
              className={`
                p-3 rounded-lg text-center transition-all
                ${currentPhase === phase.id 
                  ? 'bg-blue-600 border-2 border-blue-400' 
                  : index < currentPhaseIndex 
                    ? 'bg-green-600/20 border border-green-600' 
                    : 'bg-slate-700 border border-slate-600'
                }
              `}
            >
              <div className="text-2xl mb-1">{phase.icon}</div>
              <div className="font-semibold text-sm">{phase.label}</div>
              <div className="text-xs text-gray-400">{phase.description}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Current Question */}
      {currentQuestion && (
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <Badge variant="default" className="mb-3">
                  Faza: {currentPhase.toUpperCase()}
                </Badge>
                <CardTitle className="text-2xl mb-2">{currentQuestion.question}</CardTitle>
                {currentQuestion.context && (
                  <CardDescription className="text-base">
                    💡 {currentQuestion.context}
                  </CardDescription>
                )}
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {/* Follow-up hints */}
            {currentQuestion.followUp && currentQuestion.followUp.length > 0 && (
              <div className="bg-slate-700 p-4 rounded-lg">
                <p className="text-sm font-semibold mb-2">Ghid pentru răspuns:</p>
                <ul className="space-y-1">
                  {currentQuestion.followUp.map((hint, i) => (
                    <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      {hint}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Answer Input */}
            <div>
              <Textarea
                value={currentAnswer}
                onChange={(e) => setCurrentAnswer(e.target.value)}
                placeholder="Scrie răspunsul tău aici... Fii sincer și specific."
                className="min-h-[200px]"
              />
              <p className="text-xs text-gray-400 mt-2">
                {currentAnswer.length} caractere • Cu cât ești mai detaliat, cu atât vei obține mai multă claritate
              </p>
            </div>
            
            {/* AI Insights */}
            {insights.length > 0 && (
              <div className="bg-purple-900/20 border border-purple-500 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                  <span className="font-semibold">AI Insights</span>
                </div>
                <ul className="space-y-2">
                  {insights.map((insight, i) => (
                    <li key={i} className="text-sm text-gray-300">{insight}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Submit Button */}
            <Button
              variant="gradient"
              size="lg"
              className="w-full"
              onClick={handleSubmitAnswer}
              disabled={!currentAnswer.trim() || isAnalyzing}
            >
              {isAnalyzing ? (
                <>Analizez răspunsul... 🤔</>
              ) : (
                <>
                  Continuă
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      )}
      
      {/* Previous Responses */}
      {responses.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Răspunsurile Tale</CardTitle>
            <CardDescription>Revizuiește progresul tău</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {responses.map((response, i) => (
                <div key={i} className="bg-slate-700 p-4 rounded-lg">
                  <Badge variant="secondary" className="mb-2">
                    {response.phase.toUpperCase()}
                  </Badge>
                  <p className="text-gray-300 text-sm">{response.content}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
