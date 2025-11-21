import React from 'react'
import { Search, Bell, ChevronDown } from 'lucide-react'

export default function Topbar() {
  return (
    <header className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sticky top-0 z-20 bg-gradient-to-b from-slate-900/80 to-slate-900/30 backdrop-blur-xl border-b border-white/10">
      <div className="relative w-full max-w-lg">
        <input
          type="text"
          placeholder="Search automations, models, logs..."
          className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
      </div>
      <div className="flex items-center gap-3">
        <button className="relative p-2 rounded-2xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-cyan-400" />
        </button>
        <button className="flex items-center gap-2 pl-1 pr-2 py-1.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10">
          <img src="https://i.pravatar.cc/40" alt="avatar" className="h-8 w-8 rounded-xl" />
          <span className="hidden sm:block text-sm text-white/80">Taylor</span>
          <ChevronDown className="h-4 w-4 text-white/60" />
        </button>
      </div>
    </header>
  )
}
