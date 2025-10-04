import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Card } from '../components/ui/Card'
import { Progress } from '../components/ui/Progress'
import { Badge } from '../components/ui/Badge'
import { CheckCircle, Clock, ChevronDown, ChevronUp } from 'lucide-react'
import { generateAllModules } from '../data/modules'

export const Learn = () => {
  const navigate = useNavigate()
  const { i18n } = useTranslation()
  const lang = i18n.language as 'ro' | 'en'
  
  const [expandedCategories, setExpandedCategories] = useState<string[]>([
    'INTRODUCERE',
    'FII BĂRBATUL',
    'FII REGELE',
    'CONSTRUIEȘTE REGATUL',
    'GAME',
    'INTEGRARE'
  ])
  
  // Generate all 41 modules
  const allModules = generateAllModules()
  
  // Mock progress data
  const completedModules = [1, 2, 3, 4, 5] // IDs of completed modules
  
  // Group modules by category
  const categories = [
    {
      name: 'INTRODUCERE',
      color: 'violet',
      bgColor: 'bg-violet-900/20',
      borderColor: 'border-violet-500',
      modules: allModules.filter(m => m.category === 'INTRODUCERE')
    },
    {
      name: 'FII BĂRBATUL',
      color: 'body',
      bgColor: 'bg-red-900/20',
      borderColor: 'border-red-500',
      modules: allModules.filter(m => m.category === 'FII BĂRBATUL')
    },
    {
      name: 'FII REGELE',
      color: 'multicolor',
      bgColor: 'bg-gradient-to-r from-red-900/20 via-blue-900/20 to-green-900/20',
      borderColor: 'border-blue-500',
      modules: allModules.filter(m => m.category === 'FII REGELE')
    },
    {
      name: 'CONSTRUIEȘTE REGATUL',
      color: 'business',
      bgColor: 'bg-orange-900/20',
      borderColor: 'border-orange-500',
      modules: allModules.filter(m => m.category === 'CONSTRUIEȘTE REGATUL')
    },
    {
      name: 'GAME',
      color: 'balance',
      bgColor: 'bg-green-900/20',
      borderColor: 'border-green-500',
      modules: allModules.filter(m => m.category === 'GAME')
    },
    {
      name: 'INTEGRARE',
      color: 'gradient',
      bgColor: 'bg-gradient-to-r from-blue-900/20 to-purple-900/20',
      borderColor: 'border-purple-500',
      modules: allModules.filter(m => m.category === 'INTEGRARE')
    }
  ]
  
  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryName)
        ? prev.filter(c => c !== categoryName)
        : [...prev, categoryName]
    )
  }
  
  const completedCount = completedModules.length
  const totalCount = allModules.length
  const progressPercentage = Math.round((completedCount / totalCount) * 100)
  
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Learn - Calea Războinicului</h1>
        <div className="flex items-center gap-4">
          <Progress value={progressPercentage} className="flex-1 h-3" />
          <div className="text-lg font-semibold whitespace-nowrap">
            {completedCount} / {totalCount} module ({progressPercentage}%)
          </div>
        </div>
      </div>
      
      {/* Categories */}
      <div className="space-y-4">
        {categories.map((category) => {
          const categoryCompleted = category.modules.filter(m => 
            completedModules.includes(m.moduleNumber)
          ).length
          const isExpanded = expandedCategories.includes(category.name)
          
          return (
            <Card key={category.name} className={`overflow-hidden ${category.borderColor}`}>
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.name)}
                className={`w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/50 transition-colors ${category.bgColor}`}
              >
                <div className="flex items-center gap-4">
                  <Badge variant="secondary" className="bg-slate-700">
                    {category.modules.length} module
                  </Badge>
                  <span className="text-lg font-semibold">{category.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-400">
                    {categoryCompleted} / {category.modules.length} completate
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>
              
              {/* Modules Grid */}
              {isExpanded && (
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.modules.map((module) => {
                    const isCompleted = completedModules.includes(module.moduleNumber)
                    
                    return (
                      <Card
                        key={module.moduleNumber}
                        hover
                        className="p-4 cursor-pointer"
                        onClick={() => navigate(`/app/learn/${module.moduleNumber}`)}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <div className={`
                              w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm
                              ${isCompleted ? 'bg-green-600' : 'bg-slate-700'}
                            `}>
                              {isCompleted ? (
                                <CheckCircle className="w-5 h-5" />
                              ) : (
                                <span>{module.moduleNumber}</span>
                              )}
                            </div>
                            <Badge variant="secondary" className="text-xs">
                              <Clock className="w-3 h-3 mr-1" />
                              {module.videoDurationMinutes} min
                            </Badge>
                          </div>
                        </div>
                        
                        <h3 className="font-semibold mb-2 line-clamp-2">
                          {lang === 'ro' ? module.titleRo : module.titleEn}
                        </h3>
                        
                        <p className="text-sm text-gray-400 line-clamp-3">
                          {lang === 'ro' ? module.descriptionRo : module.descriptionEn}
                        </p>
                      </Card>
                    )
                  })}
                </div>
              )}
            </Card>
          )
        })}
      </div>
    </div>
  )
}
