import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '../ui/Button'
import { 
  Home, 
  BookOpen, 
  Brain, 
  Users, 
  Library, 
  Shield, 
  Settings, 
  HelpCircle,
  LogOut,
  ChevronDown,
  X
} from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const location = useLocation()
  const { t } = useTranslation()
  const [expandedMenus, setExpandedMenus] = useState<string[]>(['introspection', 'community'])
  
  const menuItems = [
    {
      label: t('nav.myDaily'),
      icon: Home,
      path: '/app',
    },
    {
      label: t('nav.learn'),
      icon: BookOpen,
      path: '/app/learn',
    },
    {
      label: t('nav.introspection'),
      icon: Brain,
      path: '/app/introspection',
      submenu: [
        { label: 'Stack de Furie', path: '/app/introspection/rage' },
        { label: 'Stack de Rugăciune', path: '/app/introspection/prayer' },
        { label: 'Stack de Deblocare', path: '/app/introspection/breakthrough' },
        { label: 'Jurnal', path: '/app/introspection/journal' },
        { label: 'To do list', path: '/app/introspection/todo' },
        { label: 'Obiective', path: '/app/introspection/goals' }
      ]
    },
    {
      label: t('nav.community'),
      icon: Users,
      path: '/app/community',
      submenu: [
        { label: 'Chat', path: '/app/community/chat' },
        { label: 'Tribe', path: '/app/community/tribe' },
        { label: 'Notes', path: '/app/community/notes' }
      ]
    },
    { label: t('nav.library'), icon: Library, path: '/app/library' },
    { label: t('nav.admin'), icon: Shield, path: '/app/admin' },
    { label: t('nav.settings'), icon: Settings, path: '/app/settings' },
    { label: t('nav.support'), icon: HelpCircle, path: '/app/support' }
  ]
  
  const toggleSubmenu = (label: string) => {
    setExpandedMenus(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    )
  }
  
  const handleLogout = () => {
    // Implement logout logic
    window.location.href = '/'
  }
  
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-50 h-full w-64 bg-slate-800 border-r border-slate-700
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
        flex flex-col
      `}>
        {/* Logo */}
        <div className="p-4 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center font-bold">
              RW
            </div>
            <span className="text-xl font-bold">ROWARRIOR</span>
          </div>
          <Button 
            variant="ghost" 
            size="sm"
            className="lg:hidden p-2"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
        
        {/* Menu Items */}
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          {menuItems.map((item) => (
            <div key={item.label}>
              {item.submenu ? (
                <>
                  <button
                    onClick={() => toggleSubmenu(item.label)}
                    className={`
                      w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg
                      hover:bg-slate-700 transition-colors
                      ${location.pathname.startsWith(item.path) ? 'bg-slate-700' : ''}
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform ${expandedMenus.includes(item.label) ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {expandedMenus.includes(item.label) && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.path}
                          to={subitem.path}
                          className={`
                            flex items-center gap-3 px-4 py-2 rounded-lg
                            hover:bg-slate-700 transition-colors
                            ${location.pathname === subitem.path ? 'bg-slate-700' : ''}
                          `}
                          onClick={onClose}
                        >
                          <span className="text-sm">{subitem.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg
                    hover:bg-slate-700 transition-colors
                    ${location.pathname === item.path ? 'bg-slate-700' : ''}
                  `}
                  onClick={onClose}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              )}
            </div>
          ))}
        </nav>
        
        {/* Bottom Actions */}
        <div className="p-4 border-t border-slate-700 space-y-2">
          <Button 
            variant="outline" 
            size="sm"
            className="w-full justify-start gap-2 border-green-600 text-green-400 hover:bg-green-600/10 text-xs"
          >
            Invite & earn 50% commission
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm"
            className="w-full justify-start gap-2 text-red-400 hover:bg-red-600/10"
            onClick={handleLogout}
          >
            <LogOut className="w-5 h-5" />
            <span>{t('nav.logout')}</span>
          </Button>
        </div>
      </aside>
    </>
  )
}
