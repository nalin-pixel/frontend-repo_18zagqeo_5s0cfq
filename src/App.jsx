import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Dashboard from './components/Dashboard'
import AutomationBuilder from './components/AutomationBuilder'
import ModelManager from './components/ModelManager'
import LogsMonitor from './components/LogsMonitor'
import Settings from './components/Settings'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-96 w-96 bg-cyan-500/10 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] bg-purple-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 flex">
        <Sidebar />
        <main className="flex-1 min-h-screen">
          <Topbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/automations" element={<AutomationBuilder />} />
            <Route path="/models" element={<ModelManager />} />
            <Route path="/logs" element={<LogsMonitor />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<div className="p-8">Not Found</div>} />
          </Routes>
        </main>
      </div>

      <div className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-20">
        <nav className="flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-3 py-2">
          {[
            { to: '/', label: 'Home' },
            { to: '/automations', label: 'Automations' },
            { to: '/models', label: 'Models' },
            { to: '/logs', label: 'Logs' },
            { to: '/settings', label: 'Settings' },
          ].map((i) => (
            <NavLink key={i.to} to={i.to} className={({isActive})=>`px-3 py-1.5 rounded-xl text-xs ${isActive?'bg-white/20 text-white':'text-white/70'}`}>{i.label}</NavLink>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default App
