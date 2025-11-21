import React from 'react'
import { Play, Save, Upload, Settings2 } from 'lucide-react'

const Node = ({ title, children }) => (
  <div className="rounded-3xl bg-white/5 border border-white/10 p-4 w-64 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_30px_rgba(2,6,23,0.4)]">
    <div className="flex items-center justify-between mb-3">
      <div className="text-sm font-medium text-white">{title}</div>
      <button className="p-1.5 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white"><Settings2 className="h-4 w-4" /></button>
    </div>
    {children}
  </div>
)

export default function AutomationBuilder() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-white font-semibold">Automation Builder</div>
          <div className="text-sm text-white/60">Design your flow with drag-and-drop nodes</div>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 flex items-center gap-2"><Save className="h-4 w-4"/>Save</button>
          <button className="px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 flex items-center gap-2"><Upload className="h-4 w-4"/>Publish</button>
          <button className="px-4 py-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white flex items-center gap-2 shadow-[0_10px_30px_rgba(59,130,246,0.35)]"><Play className="h-4 w-4"/>Test Run</button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-3xl bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.08),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.08),transparent_40%)] border border-white/10 p-6 min-h-[28rem] relative overflow-hidden">
          <svg className="absolute inset-0 h-full w-full opacity-20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          <div className="flex items-center gap-8 mt-10 ml-8">
            <Node title="Input">
              <div className="text-xs text-white/60">Webhook • Email • Schedule</div>
            </Node>
            <div className="h-0.5 w-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
            <Node title="AI Model">
              <div className="text-xs text-white/60">GPT-4o • Claude • Custom</div>
            </Node>
            <div className="h-0.5 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            <Node title="Filters">
              <div className="text-xs text-white/60">Contains • Regex • Threshold</div>
            </Node>
            <div className="h-0.5 w-16 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full" />
            <Node title="Output">
              <div className="text-xs text-white/60">Slack • Email • DB</div>
            </Node>
          </div>
        </div>

        <div className="rounded-3xl bg-white/5 border border-white/10 p-5">
          <div className="text-white font-medium mb-3">Run Preview</div>
          <div className="space-y-2 text-xs text-white/70">
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">Input received → Email</div>
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">AI Model → GPT-4o, 1.2k tokens</div>
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">Filter → Sentiment: positive</div>
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">Output → Slack #support</div>
          </div>
        </div>
      </div>
    </div>
  )
}
