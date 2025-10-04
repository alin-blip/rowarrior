import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Textarea } from '../components/ui/Textarea'
import { ChevronLeft, ChevronRight, CheckCircle, Play } from 'lucide-react'
import { generateAllModules } from '../data/modules'

export const ModulePage = () => {
  const { moduleId } = useParams()
  const navigate = useNavigate()
  const { i18n } = useTranslation()
  const lang = i18n.language as 'ro' | 'en'
  
  const [activeTab, setActiveTab] = useState<'transcript' | 'exercises' | 'resources' | 'notes'>('transcript')
  const [notes, setNotes] = useState('')
  const [exercisesCompleted, setExercisesCompleted] = useState<number[]>([])
  
  // Get all modules
  const allModules = generateAllModules()
  const moduleNumber = parseInt(moduleId || '1')
  const module = allModules.find(m => m.moduleNumber === moduleNumber)
  
  if (!module) {
    return <div>Module not found</div>
  }
  
  const isCompleted = false // Mock data
  const exercises = lang === 'ro' ? module.exercisesRo : module.exercisesEn
  const resources = lang === 'ro' ? module.resourcesRo : module.resourcesEn
  const transcript = lang === 'ro' ? module.transcriptRo : module.transcriptEn
  
  const toggleExercise = (index: number) => {
    setExercisesCompleted(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }
  
  const tabs = [
    { id: 'transcript', label: 'Transcript' },
    { id: 'exercises', label: `Exerciții (${exercisesCompleted.length}/${exercises.length})` },
    { id: 'resources', label: 'Resurse' },
    { id: 'notes', label: 'Notițe' }
  ]
  
  return (
    <div className="max-w-5xl mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
        <Link to="/app/learn" className="hover:text-white">Learn</Link>
        <span>/</span>
        <span>{module.category}</span>
        <span>/</span>
        <span className="text-white">Modulul {module.moduleNumber}</span>
      </div>
      
      {/* Header */}
      <div className="flex items-start justify-between mb-6 gap-4">
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">
            {lang === 'ro' ? module.titleRo : module.titleEn}
          </h1>
          <p className="text-gray-400">Modul {module.moduleNumber} din 41</p>
        </div>
        
        <Button
          size="lg"
          variant={isCompleted ? 'default' : 'gradient'}
          disabled={isCompleted}
          className="whitespace-nowrap"
        >
          <CheckCircle className="w-5 h-5 mr-2" />
          {isCompleted ? 'Completat' : 'Marchează ca finalizat'}
        </Button>
      </div>
      
      {/* Video Player */}
      <Card className="mb-6 overflow-hidden bg-black">
        {module.videoUrl ? (
          <div className="aspect-video">
            {/* React Player would go here */}
            <div className="w-full h-full flex items-center justify-center bg-slate-800">
              <Play className="w-16 h-16 text-gray-600" />
            </div>
          </div>
        ) : (
          <div className="aspect-video flex flex-col items-center justify-center bg-slate-800">
            <Play className="w-16 h-16 text-gray-600 mb-4" />
            <p className="text-gray-400">Video coming soon...</p>
          </div>
        )}
      </Card>
      
      {/* Tabs */}
      <div className="mb-6">
        <div className="flex gap-2 border-b border-slate-700 mb-6">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`
                px-4 py-2 font-semibold transition-colors
                ${activeTab === tab.id
                  ? 'text-blue-400 border-b-2 border-blue-400'
                  : 'text-gray-400 hover:text-white'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        {/* Tab Content */}
        {activeTab === 'transcript' && (
          <Card className="p-6">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 whitespace-pre-wrap">{transcript}</p>
            </div>
          </Card>
        )}
        
        {activeTab === 'exercises' && (
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Exerciții Practice</h3>
            {exercises.length > 0 ? (
              <div className="space-y-4">
                {exercises.map((exercise, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-slate-700 rounded-lg">
                    <input
                      type="checkbox"
                      checked={exercisesCompleted.includes(index)}
                      onChange={() => toggleExercise(index)}
                      className="mt-1 w-5 h-5"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{exercise.title}</h4>
                      <p className="text-sm text-gray-400">{exercise.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400">No exercises for this module</p>
            )}
          </Card>
        )}
        
        {activeTab === 'resources' && (
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Resurse Suplimentare</h3>
            {resources.length > 0 ? (
              <div className="space-y-3">
                {resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"
                  >
                    <h4 className="font-semibold mb-1">{resource.title}</h4>
                    <p className="text-sm text-gray-400">{resource.description}</p>
                  </a>
                ))}
              </div>
            ) : (
              <p className="text-gray-400">No resources for this module</p>
            )}
          </Card>
        )}
        
        {activeTab === 'notes' && (
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Notițele Tale</h3>
            <Textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Scrie notițele tale aici... (se salvează automat)"
              className="min-h-[300px]"
            />
            <p className="text-sm text-gray-400 mt-2">
              Notițele se salvează automat
            </p>
          </Card>
        )}
      </div>
      
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => navigate(`/app/learn/${module.moduleNumber - 1}`)}
          disabled={module.moduleNumber === 1}
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Modulul Anterior
        </Button>
        
        <Button
          variant="outline"
          onClick={() => navigate(`/app/learn/${module.moduleNumber + 1}`)}
          disabled={module.moduleNumber === 41}
        >
          Modulul Următor
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}
