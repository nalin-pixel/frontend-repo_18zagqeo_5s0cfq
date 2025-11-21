import React from 'react'

export default function Settings() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      <div>
        <div className="text-white font-semibold">Settings</div>
        <div className="text-sm text-white/60">Manage API keys, webhooks, billing, and profile</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="rounded-3xl bg-white/5 border border-white/10 p-5">
          <div className="text-white font-medium mb-3">API Keys</div>
          <div className="space-y-3">
            <div className="flex gap-2">
              <input className="flex-1 px-3 py-2 rounded-2xl bg-black/30 border border-white/10 text-white placeholder-white/40" placeholder="sk-live-..." />
              <button className="px-3 py-2 rounded-2xl bg-white/5 border border-white/10 text-white/80 hover:bg-white/10">Save</button>
            </div>
            <p className="text-xs text-white/50">Store server-side only. We never expose your keys.</p>
          </div>
        </section>

        <section className="rounded-3xl bg-white/5 border border-white/10 p-5">
          <div className="text-white font-medium mb-3">Webhook URLs</div>
          <div className="space-y-2">
            <input className="w-full px-3 py-2 rounded-2xl bg-black/30 border border-white/10 text-white placeholder-white/40" placeholder="https://example.com/webhook" />
            <button className="px-3 py-2 rounded-2xl bg-white/5 border border-white/10 text-white/80 hover:bg-white/10">Update</button>
          </div>
        </section>

        <section className="rounded-3xl bg-white/5 border border-white/10 p-5">
          <div className="text-white font-medium mb-3">Billing</div>
          <div className="text-sm text-white/70">Current plan: Pro • Usage resets in 9 days</div>
          <div className="mt-3 h-2 rounded-full bg-white/10"><div className="h-2 w-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"></div></div>
          <div className="mt-3 flex gap-2">
            <button className="px-3 py-2 rounded-2xl bg-white/5 border border-white/10 text-white/80 hover:bg-white/10">Manage Plan</button>
            <button className="px-3 py-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white">Add Credits</button>
          </div>
        </section>

        <section className="rounded-3xl bg-white/5 border border-white/10 p-5">
          <div className="text-white font-medium mb-3">User Profile</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <input className="px-3 py-2 rounded-2xl bg-black/30 border border-white/10 text-white placeholder-white/40" placeholder="First name" />
            <input className="px-3 py-2 rounded-2xl bg-black/30 border border-white/10 text-white placeholder-white/40" placeholder="Last name" />
            <input className="sm:col-span-2 px-3 py-2 rounded-2xl bg-black/30 border border-white/10 text-white placeholder-white/40" placeholder="Email" />
          </div>
          <button className="mt-3 px-3 py-2 rounded-2xl bg-white/5 border border-white/10 text-white/80 hover:bg-white/10">Save Changes</button>
        </section>
      </div>
    </div>
  )
}
