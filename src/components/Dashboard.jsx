import React from 'react'
import { ArrowUpRight, Plus, TrendingUp, Zap, ShieldCheck, Activity } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const StatCard = ({ title, value, trend, icon: Icon, gradient }) => (
  <div className={`relative p-5 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden ${gradient}`}>
    <div className="absolute inset-0 pointer-events-none opacity-30">
      <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/10 blur-2xl" />
    </div>
    <div className="flex items-center justify-between">
      <div>
        <div className="text-sm text-white/60">{title}</div>
        <div className="mt-1 text-2xl font-semibold text-white tracking-tight">{value}</div>
        <div className="mt-2 text-xs text-cyan-300/80">{trend}</div>
      </div>
      <div className="p-3 rounded-2xl bg-white/10 text-white">
        <Icon className="h-5 w-5" />
      </div>
    </div>
  </div>
)

const ActivityItem = ({ time, action, meta }) => (
  <div className="flex items-start gap-4 py-3">
    <div className="h-10 w-10 rounded-2xl bg-white/5 border border-white/10 grid place-items-center text-white/80">
      <Activity className="h-5 w-5" />
    </div>
    <div>
      <div className="text-sm text-white">{action}</div>
      <div className="text-xs text-white/50">{meta}</div>
    </div>
    <div className="ml-auto text-xs text-white/40">{time}</div>
  </div>
)

export default function Dashboard() {
  return (
    <div className="relative">
      <div className="absolute -z-0 inset-0">
        <div className="h-64 rounded-3xl overflow-hidden">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <StatCard title="Runs Today" value="1,284" trend="+12% vs yesterday" icon={Zap} />
            <StatCard title="Total Automations" value="86" trend="+3 new this week" icon={TrendingUp} />
            <StatCard title="Tokens Used" value="2.1M" trend="-8% optimized" icon={ShieldCheck} />
            <StatCard title="Success / Error" value="97% / 3%" trend="Stable" icon={ArrowUpRight} />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 p-5 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="text-white font-semibold">Activity Timeline</div>
              <button className="text-sm text-white/70 hover:text-white">View all</button>
            </div>
            <div className="divide-y divide-white/10">
              <ActivityItem time="2m" action="Order triage automation run" meta="3 tasks • 2.4k tokens" />
              <ActivityItem time="18m" action="QA model updated" meta="F1 0.92 → 0.94" />
              <ActivityItem time="1h" action="New automation published" meta="Email → GPT-4o → Slack" />
              <ActivityItem time="3h" action="Spike in errors detected" meta="Latency > 5s" />
            </div>
          </div>

          <div className="p-5 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <div className="text-white font-semibold mb-4">Quick Actions</div>
            <div className="grid grid-cols-2 gap-3">
              {['Create Flow','Import JSON','Add Model','Docs'].map((a) => (
                <button key={a} className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 text-sm">
                  {a}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button className="fixed right-6 bottom-6 group inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-white bg-gradient-to-r from-cyan-500 to-purple-500 shadow-[0_10px_30px_rgba(59,130,246,0.35)]">
          <Plus className="h-5 w-5" />
          <span>Create New Automation</span>
        </button>
      </div>
    </div>
  )
}
