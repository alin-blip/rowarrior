import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Label } from '../components/ui/Label'
import { Card } from '../components/ui/Card'
import { Eye, EyeOff } from 'lucide-react'

export const Auth = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [isSignIn, setIsSignIn] = useState(true)
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      // For demo, always navigate to app
      navigate('/app')
    }, 1000)
  }
  
  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center font-bold text-2xl">
            RW
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-center mb-2">
          {isSignIn ? t('auth.welcomeBack') : t('auth.signUp')}
        </h1>
        <p className="text-gray-400 text-center mb-8">
          {isSignIn ? t('auth.signInToContinue') : 'Create your warrior account'}
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isSignIn && (
            <div>
              <Label htmlFor="fullname">{t('auth.fullName')}</Label>
              <Input
                id="fullname"
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="mt-1"
              />
            </div>
          )}
          
          <div>
            <Label htmlFor="email">{t('auth.email')}</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="password">{t('auth.password')}</Label>
            <div className="relative mt-1">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder={isSignIn ? 'Enter your password' : 'Create a password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {!isSignIn && (
              <p className="text-xs text-gray-400 mt-1">Minimum 6 characters</p>
            )}
          </div>
          
          {isSignIn && (
            <Button
              type="button"
              variant="ghost"
              className="p-0 h-auto text-blue-400 text-sm"
            >
              {t('auth.forgotPassword')}
            </Button>
          )}
          
          <Button
            type="submit"
            variant="gradient"
            className="w-full"
            disabled={loading}
          >
            {loading ? 'Loading...' : (isSignIn ? t('auth.signIn') : t('auth.signUp'))}
          </Button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-400">
            {isSignIn ? t('auth.noAccount') : t('auth.hasAccount')}{' '}
            <button
              onClick={() => setIsSignIn(!isSignIn)}
              className="text-blue-400 hover:text-blue-300 font-semibold"
            >
              {isSignIn ? t('auth.createOne') : t('auth.signInHere')}
            </button>
          </p>
        </div>
      </Card>
    </div>
  )
}
