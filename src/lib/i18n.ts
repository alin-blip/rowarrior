import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  ro: {
    translation: {
      // Common
      'app.name': 'RoWarrior - Calea Războinicului',
      'app.tagline': 'Platforma ultimă de accelerare pentru antreprenori români',
      
      // Navigation
      'nav.home': 'Acasă',
      'nav.login': 'Login',
      'nav.logout': 'Logout',
      'nav.myDaily': 'My Daily',
      'nav.learn': 'Learn',
      'nav.introspection': 'Introspecție',
      'nav.community': 'Community',
      'nav.library': 'Library',
      'nav.admin': 'Admin',
      'nav.settings': 'Setări',
      'nav.support': 'Support',
      
      // Core 4
      'core4.body': 'Corp',
      'core4.body.desc': 'Performanță fizică de vârf pentru rezistență și energie antreprenorială',
      'core4.being': 'Ființă',
      'core4.being.desc': 'Claritate mentală și putere spirituală pentru decizii de afaceri critice',
      'core4.balance': 'Echilibru',
      'core4.balance.desc': 'Relații de familie care susțin viziunea ta antreprenorială',
      'core4.business': 'Afacere',
      'core4.business.desc': 'Scalează la venituri de 7 cifre și construiește avere generațională',
      
      // Auth
      'auth.signIn': 'Autentificare',
      'auth.signUp': 'Înregistrare',
      'auth.email': 'Email',
      'auth.password': 'Parolă',
      'auth.fullName': 'Nume Complet',
      'auth.forgotPassword': 'Ai uitat parola?',
      'auth.noAccount': 'Nu ai cont?',
      'auth.createOne': 'Creează unul',
      'auth.hasAccount': 'Ai deja cont?',
      'auth.signInHere': 'Autentifică-te aici',
      'auth.welcomeBack': 'Bine ai revenit!',
      'auth.signInToContinue': 'Autentifică-te pentru a continua călătoria',
      
      // Pricing
      'pricing.title': 'Alege Calea Ta de Războinic',
      'pricing.trial': 'Trial 3 Zile',
      'pricing.basic': 'Basic',
      'pricing.pro': 'Pro',
      'pricing.perMonth': 'pe lună',
      'pricing.free': 'GRATUIT',
      'pricing.forDays': 'pentru 3 zile',
      
      // Modules
      'modules.total': 'module',
      'modules.completed': 'completate',
      'modules.markComplete': 'Marchează ca finalizat',
      'modules.previous': 'Modulul Anterior',
      'modules.next': 'Modulul Următor',
      'modules.progress': 'Progres',
      
      // Stack
      'stack.stop': 'Oprește-te',
      'stack.submit': 'Supune-te',
      'stack.struggle': 'Luptă',
      'stack.strike': 'Lovește',
      'stack.lesson': 'Lecția ta',
      'stack.story': 'Povestea ta',
      'stack.revelation': 'Revelația ta',
      'stack.action': 'Acțiune',
      
      // Door
      'door.hotList': 'Hot List',
      'door.hitList': 'Hit List',
      'door.doList': 'Do List',
      'door.dominoDoor': 'Domino Door',
      
      // Game
      'game.impossibleGames': 'Jocuri Imposibile',
      'game.monthlyMissions': 'Misiuni Lunare',
      'game.weeklyWars': 'Războaie Săptămânale',
      
      // Buttons
      'button.save': 'Salvează',
      'button.cancel': 'Anulează',
      'button.delete': 'Șterge',
      'button.edit': 'Editează',
      'button.share': 'Distribuie',
      'button.startTrial': 'Începe Trial-ul',
      'button.getStarted': 'Începe Acum',
    }
  },
  en: {
    translation: {
      // Common
      'app.name': 'RoWarrior - The Warrior\'s Way',
      'app.tagline': 'The ultimate acceleration platform for Romanian entrepreneurs',
      
      // Navigation
      'nav.home': 'Home',
      'nav.login': 'Login',
      'nav.logout': 'Logout',
      'nav.myDaily': 'My Daily',
      'nav.learn': 'Learn',
      'nav.introspection': 'Introspection',
      'nav.community': 'Community',
      'nav.library': 'Library',
      'nav.admin': 'Admin',
      'nav.settings': 'Settings',
      'nav.support': 'Support',
      
      // Core 4
      'core4.body': 'Body',
      'core4.body.desc': 'Peak physical performance for entrepreneurial endurance and energy',
      'core4.being': 'Being',
      'core4.being.desc': 'Mental clarity and spiritual strength for critical business decisions',
      'core4.balance': 'Balance',
      'core4.balance.desc': 'Family relationships that support your entrepreneurial vision',
      'core4.business': 'Business',
      'core4.business.desc': 'Scale to 7-figure revenues and build generational wealth',
      
      // Auth
      'auth.signIn': 'Sign In',
      'auth.signUp': 'Sign Up',
      'auth.email': 'Email',
      'auth.password': 'Password',
      'auth.fullName': 'Full Name',
      'auth.forgotPassword': 'Forgot password?',
      'auth.noAccount': 'Don\'t have an account?',
      'auth.createOne': 'Create one',
      'auth.hasAccount': 'Already have an account?',
      'auth.signInHere': 'Sign in here',
      'auth.welcomeBack': 'Welcome Back!',
      'auth.signInToContinue': 'Sign in to continue your journey',
      
      // Pricing
      'pricing.title': 'Choose Your Warrior Path',
      'pricing.trial': '3-Day Trial',
      'pricing.basic': 'Basic',
      'pricing.pro': 'Pro',
      'pricing.perMonth': 'per month',
      'pricing.free': 'FREE',
      'pricing.forDays': 'for 3 days',
      
      // Modules
      'modules.total': 'modules',
      'modules.completed': 'completed',
      'modules.markComplete': 'Mark as Complete',
      'modules.previous': 'Previous Module',
      'modules.next': 'Next Module',
      'modules.progress': 'Progress',
      
      // Stack
      'stack.stop': 'Stop',
      'stack.submit': 'Submit',
      'stack.struggle': 'Struggle',
      'stack.strike': 'Strike',
      'stack.lesson': 'Your Lesson',
      'stack.story': 'Your Story',
      'stack.revelation': 'Your Revelation',
      'stack.action': 'Action',
      
      // Door
      'door.hotList': 'Hot List',
      'door.hitList': 'Hit List',
      'door.doList': 'Do List',
      'door.dominoDoor': 'Domino Door',
      
      // Game
      'game.impossibleGames': 'Impossible Games',
      'game.monthlyMissions': 'Monthly Missions',
      'game.weeklyWars': 'Weekly Wars',
      
      // Buttons
      'button.save': 'Save',
      'button.cancel': 'Cancel',
      'button.delete': 'Delete',
      'button.edit': 'Edit',
      'button.share': 'Share',
      'button.startTrial': 'Start Trial',
      'button.getStarted': 'Get Started',
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'ro',
    fallbackLng: 'ro',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
