import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { LanguageSwitcher } from '../components/common/LanguageSwitcher'
import { 
  Dumbbell, 
  Brain, 
  Heart, 
  Briefcase,
  Target,
  TrendingUp,
  Map,
  CheckCircle
} from 'lucide-react'

export const Landing = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  
  const core4 = [
    {
      title: t('core4.body'),
      description: t('core4.body.desc'),
      icon: Dumbbell,
      color: 'body'
    },
    {
      title: t('core4.being'),
      description: t('core4.being.desc'),
      icon: Brain,
      color: 'being'
    },
    {
      title: t('core4.balance'),
      description: t('core4.balance.desc'),
      icon: Heart,
      color: 'balance'
    },
    {
      title: t('core4.business'),
      description: t('core4.business.desc'),
      icon: Briefcase,
      color: 'business'
    }
  ]
  
  const features = [
    {
      title: 'Warrior Stack System',
      description: 'Elite mental training to breakthrough entrepreneurial blocks and fears',
      icon: Target
    },
    {
      title: 'Performance Tracking',
      description: 'Advanced metrics to optimize your business and personal performance',
      icon: TrendingUp
    },
    {
      title: 'Empire Blueprint',
      description: 'Strategic roadmaps to build and scale million-dollar businesses',
      icon: Map
    }
  ]
  
  const pricingPlans = [
    {
      name: t('pricing.trial'),
      badge: 'POPULAR',
      price: t('pricing.free'),
      period: t('pricing.forDays'),
      features: ['Full Pro access', 'All premium features', 'No commitment'],
      cta: t('button.startTrial'),
      highlighted: true
    },
    {
      name: t('pricing.basic'),
      badge: 'BETA - Early Bird Offer',
      price: '97 LEI',
      period: t('pricing.perMonth'),
      features: ['Core 4 Dashboard', 'Goal tracking', 'Basic support'],
      cta: 'Get Basic',
      highlighted: false
    },
    {
      name: t('pricing.pro'),
      badge: 'BETA - Early Bird Offer',
      price: '197 LEI',
      period: t('pricing.perMonth'),
      features: ['Everything in Basic', 'Warrior Stack System', 'Advanced analytics', 'Priority support'],
      cta: 'Get Pro',
      highlighted: false
    }
  ]
  
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-slate-900/80 border-b border-slate-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center font-bold">
              RW
            </div>
            <span className="text-xl font-bold">RoWarrior</span>
          </div>
          
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button onClick={() => navigate('/auth')} variant="outline" size="sm">
              {t('nav.login')}
            </Button>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            {t('app.name')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            {t('app.tagline')}
          </p>
          <Button 
            size="lg" 
            variant="gradient"
            className="text-lg px-8 py-6"
            onClick={() => navigate('/auth')}
          >
            {t('button.getStarted')} 🔥
          </Button>
        </div>
      </section>
      
      {/* Core 4 Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {core4.map((item, index) => (
            <Card 
              key={index} 
              hover
              className={`p-8 bg-${item.color} bg-opacity-10 border-${item.color}`}
            >
              <item.icon className={`w-12 h-12 mb-4 text-${item.color}`} />
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6">
              <feature.icon className="w-10 h-10 mb-4 text-blue-400" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">{t('pricing.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`p-8 ${plan.highlighted ? 'border-2 border-green-500 relative' : ''}`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold whitespace-nowrap">
                  {plan.badge}
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-400 ml-2">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                variant={plan.highlighted ? 'gradient' : 'default'}
                className="w-full"
                onClick={() => navigate('/auth')}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-slate-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2025 RoWarrior. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
