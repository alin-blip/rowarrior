import { useTranslation } from 'react-i18next'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Progress } from '../components/ui/Progress'
import { Badge } from '../components/ui/Badge'
import { 
  Flame, 
  Target, 
  TrendingUp, 
  Calendar,
  CheckCircle,
  Clock
} from 'lucide-react'

export const Dashboard = () => {
  const { t } = useTranslation()
  
  // Mock data
  const todayStack = {
    completed: false,
    lesson: '',
    story: '',
    revelation: '',
    actions: ['', '', '', '']
  }
  
  const core4Today = {
    fitness: true,
    fuel: true,
    meditation: false,
    memoirs: false,
    person1: false,
    person2: false,
    discover: false,
    declare: false
  }
  
  const completedCount = Object.values(core4Today).filter(Boolean).length
  const totalCount = Object.keys(core4Today).length
  
  const currentStreak = 7
  const longestStreak = 21
  
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">{t('nav.myDaily')}</h1>
        <p className="text-gray-400">Your daily warrior dashboard</p>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <Flame className="w-10 h-10 text-orange-500" />
            <Badge variant="warning">{currentStreak} days</Badge>
          </div>
          <h3 className="text-2xl font-bold mb-1">{currentStreak}</h3>
          <p className="text-gray-400 text-sm">Current Streak</p>
          <p className="text-xs text-gray-500 mt-2">Longest: {longestStreak} days</p>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <Target className="w-10 h-10 text-blue-500" />
            <Badge variant="default">{completedCount}/{totalCount}</Badge>
          </div>
          <h3 className="text-2xl font-bold mb-1">Core 4 Today</h3>
          <Progress value={(completedCount / totalCount) * 100} className="mt-2" />
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="w-10 h-10 text-green-500" />
            <Badge variant="success">+15%</Badge>
          </div>
          <h3 className="text-2xl font-bold mb-1">Weekly Progress</h3>
          <p className="text-gray-400 text-sm">Above average</p>
        </Card>
      </div>
      
      {/* Daily Stack */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Daily Stack</CardTitle>
              <CardDescription>Complete your daily reflection</CardDescription>
            </div>
            {todayStack.completed ? (
              <Badge variant="success">
                <CheckCircle className="w-4 h-4 mr-1" />
                Completed
              </Badge>
            ) : (
              <Badge variant="warning">
                <Clock className="w-4 h-4 mr-1" />
                Pending
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent>
          {todayStack.completed ? (
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Lesson</h4>
                <p className="text-gray-300">{todayStack.lesson}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Story</h4>
                <p className="text-gray-300">{todayStack.story}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Revelation</h4>
                <p className="text-gray-300">{todayStack.revelation}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Actions</h4>
                <ul className="space-y-2">
                  {todayStack.actions.map((action, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <Calendar className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 mb-4">You haven't completed your Daily Stack yet</p>
              <Button variant="gradient">
                Complete Daily Stack
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
      
      {/* Core 4 Tracking */}
      <Card>
        <CardHeader>
          <CardTitle>Core 4 Tracking - Today</CardTitle>
          <CardDescription>Track your daily disciplines across all 4 domains</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Body */}
            <div className="space-y-3">
              <h4 className="font-semibold text-body">BODY</h4>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 bg-slate-700 rounded-lg cursor-pointer hover:bg-slate-600">
                  <input type="checkbox" checked={core4Today.fitness} className="w-5 h-5" readOnly />
                  <span>Fitness (30+ min)</span>
                </label>
                <label className="flex items-center gap-3 p-3 bg-slate-700 rounded-lg cursor-pointer hover:bg-slate-600">
                  <input type="checkbox" checked={core4Today.fuel} className="w-5 h-5" readOnly />
                  <span>Fuel (Healthy eating)</span>
                </label>
              </div>
            </div>
            
            {/* Being */}
            <div className="space-y-3">
              <h4 className="font-semibold text-being">BEING</h4>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 bg-slate-700 rounded-lg cursor-pointer hover:bg-slate-600">
                  <input type="checkbox" checked={core4Today.meditation} className="w-5 h-5" readOnly />
                  <span>Meditation (10+ min)</span>
                </label>
                <label className="flex items-center gap-3 p-3 bg-slate-700 rounded-lg cursor-pointer hover:bg-slate-600">
                  <input type="checkbox" checked={core4Today.memoirs} className="w-5 h-5" readOnly />
                  <span>Memoirs (Journaling)</span>
                </label>
              </div>
            </div>
            
            {/* Balance */}
            <div className="space-y-3">
              <h4 className="font-semibold text-balance">BALANCE</h4>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 bg-slate-700 rounded-lg cursor-pointer hover:bg-slate-600">
                  <input type="checkbox" checked={core4Today.person1} className="w-5 h-5" readOnly />
                  <span>Person 1 (Spouse)</span>
                </label>
                <label className="flex items-center gap-3 p-3 bg-slate-700 rounded-lg cursor-pointer hover:bg-slate-600">
                  <input type="checkbox" checked={core4Today.person2} className="w-5 h-5" readOnly />
                  <span>Person 2 (Kids)</span>
                </label>
              </div>
            </div>
            
            {/* Business */}
            <div className="space-y-3">
              <h4 className="font-semibold text-business">BUSINESS</h4>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 bg-slate-700 rounded-lg cursor-pointer hover:bg-slate-600">
                  <input type="checkbox" checked={core4Today.discover} className="w-5 h-5" readOnly />
                  <span>Discover (Learning)</span>
                </label>
                <label className="flex items-center gap-3 p-3 bg-slate-700 rounded-lg cursor-pointer hover:bg-slate-600">
                  <input type="checkbox" checked={core4Today.declare} className="w-5 h-5" readOnly />
                  <span>Declare (Execution)</span>
                </label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button variant="outline" className="h-20">
          <div className="text-center">
            <p className="font-semibold">Continue Learning</p>
            <p className="text-xs text-gray-400">Module 15 of 41</p>
          </div>
        </Button>
        <Button variant="outline" className="h-20">
          <div className="text-center">
            <p className="font-semibold">Create Stack</p>
            <p className="text-xs text-gray-400">Process your emotions</p>
          </div>
        </Button>
        <Button variant="outline" className="h-20">
          <div className="text-center">
            <p className="font-semibold">View Goals</p>
            <p className="text-xs text-gray-400">Track your progress</p>
          </div>
        </Button>
      </div>
    </div>
  )
}
