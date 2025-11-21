import React from 'react'
import { UploadCloud, BarChart3, Rocket, Trash2 } from 'lucide-react'

const models = [
  { name: 'QA-Classifier', type: 'ONNX', size: '42MB', metrics: { f1: 0.94, acc: 0.97 } },
  { name: 'Summarizer-v2', type: 'PyTorch', size: '210MB', metrics: { rouge: 0.63 } },
  { name: 'Embeddings-GGUF', type: 'GGUF', size: '1.1GB', metrics: { dim: 1024 } },
]

export default function ModelManager() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex items-center justify-between mb-4">
        <div className="text-white font-semibold">Model Manager</div>
        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-white/80 hover:bg-white/10"><UploadCloud className="h-4 w-4"/>Upload Model</button>
      </div>

      <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5">
        <table className="w-full text-left">
          <thead className="text-xs text-white/50 bg-white/5">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Size</th>
              <th className="px-4 py-3">Metrics</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 text-sm">
            {models.map((m) => (
              <tr key={m.name} className="text-white/80">
                <td className="px-4 py-3 font-medium text-white">{m.name}</td>
                <td className="px-4 py-3">{m.type}</td>
                <td className="px-4 py-3">{m.size}</td>
                <td className="px-4 py-3"><span className="inline-flex items-center gap-2 text-xs px-2 py-1 rounded-xl bg-white/5 border border-white/10"><BarChart3 className="h-4 w-4"/> {Object.entries(m.metrics).map(([k,v])=>`${k}: ${v}`).join(' • ')}</span></td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-end gap-2">
                    <button className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs"><Rocket className="h-3.5 w-3.5"/></button>
                    <button className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white text-xs"><Trash2 className="h-3.5 w-3.5"/></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
