import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout'
import { Landing } from './pages/Landing'
import { Auth } from './pages/Auth'
import { Dashboard } from './pages/Dashboard'
import { Learn } from './pages/Learn'
import { ModulePage } from './pages/ModulePage'
import { StackRage } from './pages/StackRage'
import { Introspection } from './pages/Introspection'
import { Core4 } from './pages/Core4'
import { Door } from './pages/Door'
import { Game } from './pages/Game'
import { Community } from './pages/Community'
import { Library } from './pages/Library'
import { Admin } from './pages/Admin'
import { Settings } from './pages/Settings'
import { Support } from './pages/Support'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        
        {/* Protected Routes */}
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="learn" element={<Learn />} />
          <Route path="learn/:moduleId" element={<ModulePage />} />
          <Route path="core4" element={<Core4 />} />
          <Route path="introspection" element={<Introspection />} />
          <Route path="introspection/rage" element={<StackRage />} />
          <Route path="introspection/prayer" element={<StackRage />} />
          <Route path="introspection/breakthrough" element={<StackRage />} />
          <Route path="introspection/journal" element={<Introspection />} />
          <Route path="introspection/todo" element={<Introspection />} />
          <Route path="introspection/goals" element={<Introspection />} />
          <Route path="door" element={<Door />} />
          <Route path="game" element={<Game />} />
          <Route path="community" element={<Community />} />
          <Route path="community/chat" element={<Community />} />
          <Route path="community/tribe" element={<Community />} />
          <Route path="community/notes" element={<Community />} />
          <Route path="library" element={<Library />} />
          <Route path="admin" element={<Admin />} />
          <Route path="settings" element={<Settings />} />
          <Route path="support" element={<Support />} />
        </Route>
        
        {/* 404 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
