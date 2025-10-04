import { Button } from '../ui/Button'
import { LanguageSwitcher } from '../common/LanguageSwitcher'
import { Menu, LogOut } from 'lucide-react'
import { formatDate } from '../../lib/utils'
import { useTranslation } from 'react-i18next'

interface HeaderProps {
  onMenuClick: () => void
}

export const Header = ({ onMenuClick }: HeaderProps) => {
  const { i18n } = useTranslation()
  const currentDate = formatDate(new Date(), i18n.language)
  
  const handleLogout = () => {
    window.location.href = '/'
  }
  
  return (
    <header className="sticky top-0 z-30 backdrop-blur-lg bg-slate-900/80 border-b border-slate-800">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="sm"
            className="lg:hidden p-2"
            onClick={onMenuClick}
          >
            <Menu className="w-6 h-6" />
          </Button>
          
          <span className="text-gray-400">{currentDate}</span>
        </div>
        
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            size="sm"
            className="hidden md:flex border-green-600 text-green-400 hover:bg-green-600/10 text-xs"
          >
            Invite & earn 50% commission
          </Button>
          
          <LanguageSwitcher />
          
          <Button 
            variant="ghost" 
            size="sm"
            onClick={handleLogout}
            className="text-red-400 hover:bg-red-600/10 p-2"
          >
            <LogOut className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
