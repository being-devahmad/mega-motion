'use client'

import { useState } from 'react'
import { Menu, X, LogOut, Home } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface AdminLayoutProps {
  children: React.ReactNode
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const navItems = [
    { label: 'Dashboard', href: '/admin', icon: '📊' },
    { label: 'Shipments', href: '/admin/shipments', icon: '📦' },
    { label: 'Drivers', href: '/admin/drivers', icon: '👤' },
    { label: 'Reports', href: '/admin/reports', icon: '📈' },
  ]

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`${sidebarOpen ? 'w-64' : 'w-20'
          } bg-primary text-primary-foreground transition-all duration-300 flex flex-col border-r border-primary-foreground/10`}
      >
        {/* Header */}
        <div className="p-4 border-b border-primary-foreground/10 flex items-center justify-between">
          <div className={`flex items-center gap-2 ${!sidebarOpen && 'justify-center w-full'}`}>
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground text-sm font-bold">DF</span>
            </div>
            {sidebarOpen && <span className="font-bold">MegaMotion</span>}
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 hover:bg-primary-foreground/10 rounded"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary-foreground/10 transition-colors"
              title={!sidebarOpen ? item.label : ''}
            >
              <span className="text-xl">{item.icon}</span>
              {sidebarOpen && <span className="text-sm">{item.label}</span>}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-primary-foreground/10">
          <Button
            variant="outline"
            className="w-full justify-center gap-2 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10"
          >
            <LogOut size={18} />
            {sidebarOpen && 'Logout'}
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-foreground">Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-muted rounded-lg transition-colors">
              <span className="text-xl">🔔</span>
            </button>
            <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
              <span className="text-accent font-bold">A</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
