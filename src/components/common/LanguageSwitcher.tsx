import { useTranslation } from 'react-i18next'
import { Button } from '../ui/Button'

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  
  const toggleLanguage = () => {
    const newLang = i18n.language === 'ro' ? 'en' : 'ro'
    i18n.changeLanguage(newLang)
    localStorage.setItem('language', newLang)
  }
  
  return (
    <Button 
      variant="outline" 
      size="sm"
      onClick={toggleLanguage}
      className="w-24"
    >
      {i18n.language === 'ro' ? 'English' : 'Română'}
    </Button>
  )
}
