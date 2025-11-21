import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home, Workflow, Brain, FileText, Settings } from 'lucide-react'

const nav = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/automations', label: 'Automations', icon: Workflow },
  { to: '/models', label: 'Models', icon: Brain },
  { to: '/logs', label: 'Logs', icon: FileText },
  { to: '/settings', label: 'Settings', icon: Settings },
]

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-72 shrink-0 border-r border-white/10 bg-white/5 dark:bg-slate-900/40 backdrop-blur-xl rounded-r-3xl p-4 gap-4">
      <div className="flex items-center gap-3 px-2 pt-1">
        <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-cyan-400/70 via-blue-500/70 to-purple-500/70 shadow-[0_8px_30px_rgba(0,0,0,0.2)]"></div>
        <div>
          <div className="text-white font-semibold tracking-tight">Botzzle</div>
          <div className="text-xs text-white/50">AI Automations</div>
        </div>
      </div>
      <nav className="mt-2 grid gap-1">
        {nav.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-2xl transition-colors group ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-purple-500/15 text-white border border-white/10'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`
            }
          >
            <div className="relative">
              <Icon className="h-5 w-5" />
              <span className="absolute inset-0 blur-md bg-cyan-400/0 group-hover:bg-cyan-400/20 rounded-full" />
            </div>
            <span className="text-sm font-medium">{label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="mt-auto p-3 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
        <div className="text-sm text-white/70">Usage</div>
        <div className="mt-2 h-2 rounded-full bg-white/10">
          <div className="h-2 w-2/3 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />
        </div>
        <div className="mt-2 text-xs text-white/50">66% of plan</div>
      </div>
    </aside>
  )
}
