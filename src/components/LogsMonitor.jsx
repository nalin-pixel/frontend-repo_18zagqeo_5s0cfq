import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const rows = [
  { ts: '2025-11-21 14:21:09', name: 'Order Triage', status: 'success', tokens: 1280, latency: '1.4s', json: { input: '...', output: '...', usage: { prompt: 980, completion: 300 } } },
  { ts: '2025-11-21 13:59:44', name: 'Weekly Summary', status: 'error', tokens: 540, latency: '6.2s', json: { error: 'Rate limit' } },
  { ts: '2025-11-21 13:22:18', name: 'Sentiment Route', status: 'success', tokens: 220, latency: '0.8s', json: { score: 0.87 } },
]

export default function LogsMonitor() {
  const [open, setOpen] = useState(null)
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6">
      <div className="text-white font-semibold mb-4">Logs & Monitoring</div>
      <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5">
        <table className="w-full text-left">
          <thead className="text-xs text-white/50 bg-white/5">
            <tr>
              <th className="px-4 py-3">Timestamp</th>
              <th className="px-4 py-3">Automation</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Tokens</th>
              <th className="px-4 py-3">Latency</th>
              <th className="px-4 py-3 text-right">Details</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 text-sm">
            {rows.map((r, idx) => (
              <>
                <tr key={r.ts} className="text-white/80">
                  <td className="px-4 py-3 font-mono text-xs text-white/70">{r.ts}</td>
                  <td className="px-4 py-3 text-white">{r.name}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-xl text-xs border ${r.status==='success' ? 'bg-emerald-400/15 text-emerald-300 border-emerald-300/20' : 'bg-rose-400/15 text-rose-300 border-rose-300/20'}`}>{r.status}</span>
                  </td>
                  <td className="px-4 py-3">{r.tokens.toLocaleString()}</td>
                  <td className="px-4 py-3">{r.latency}</td>
                  <td className="px-4 py-3 text-right">
                    <button onClick={()=> setOpen(open===idx?null:idx)} className="inline-flex items-center gap-1 text-white/70 hover:text-white text-xs"><ChevronDown className={`h-4 w-4 transition-transform ${open===idx?'rotate-180':''}`} />Expand</button>
                  </td>
                </tr>
                {open===idx && (
                  <tr>
                    <td colSpan={6} className="px-4 pb-4">
                      <pre className="p-4 rounded-2xl bg-black/40 border border-white/10 text-xs text-white/70 overflow-auto">{JSON.stringify(r.json, null, 2)}</pre>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
