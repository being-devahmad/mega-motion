'use client'

import { useState } from 'react'
import { TrendingUp, Package, DollarSign, Clock, Search, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function AdminDashboard() {
  const [filter, setFilter] = useState('all')

  // Mock data
  const stats = [
    { label: 'Total Revenue', value: '$245,680', change: '+12.5%', icon: DollarSign },
    { label: 'Active Shipments', value: '48', change: '+5 today', icon: Package },
    { label: 'Delivery Rate', value: '98.2%', change: '+0.3%', icon: TrendingUp },
    { label: 'Avg. Delivery Time', value: '2.3 days', change: '-4 hrs', icon: Clock },
  ]

  const shipments = [
    {
      id: 'DF-2024-001',
      customer: 'TechCorp Inc',
      origin: 'Dallas, TX',
      destination: 'Houston, TX',
      status: 'in_transit',
      date: '2024-01-20',
      driver: 'John Smith',
    },
    {
      id: 'DF-2024-002',
      customer: 'RetailHub Co',
      origin: 'Austin, TX',
      destination: 'San Antonio, TX',
      status: 'delivered',
      date: '2024-01-19',
      driver: 'Maria Garcia',
    },
    {
      id: 'DF-2024-003',
      customer: 'Manufacturing Plus',
      origin: 'Fort Worth, TX',
      destination: 'Dallas, TX',
      status: 'pending',
      date: '2024-01-21',
      driver: 'Unassigned',
    },
    {
      id: 'DF-2024-004',
      customer: 'Logistics Experts',
      origin: 'Houston, TX',
      destination: 'Austin, TX',
      status: 'in_transit',
      date: '2024-01-20',
      driver: 'Robert Johnson',
    },
    {
      id: 'DF-2024-005',
      customer: 'Supply Chain Co',
      origin: 'San Antonio, TX',
      destination: 'Austin, TX',
      status: 'delivered',
      date: '2024-01-18',
      driver: 'Elena Rodriguez',
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'in_transit':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'in_transit':
        return 'In Transit'
      case 'pending':
        return 'Pending'
      case 'delivered':
        return 'Delivered'
      default:
        return status
    }
  }

  const filteredShipments = filter === 'all' ? shipments : shipments.filter(s => s.status === filter)

  return (
    <div className="p-6 space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="bg-card border border-border rounded-lg p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                  <h3 className="text-3xl font-bold text-foreground">{stat.value}</h3>
                  <p className="text-xs text-accent mt-2">{stat.change}</p>
                </div>
                <Icon className="w-10 h-10 text-accent/20" />
              </div>
            </div>
          )
        })}
      </div>

      {/* Shipments Section */}
      <div className="bg-card border border-border rounded-lg shadow-sm">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <h2 className="text-xl font-bold text-foreground">Recent Shipments</h2>
          <Button size="sm" variant="outline" className="gap-2">
            <Filter size={18} />
            Export
          </Button>
        </div>

        {/* Filter Bar */}
        <div className="p-6 border-b border-border bg-muted/30 flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search by ID or customer..."
              className="pl-10 bg-background"
            />
          </div>
          <div className="flex gap-2">
            {['all', 'pending', 'in_transit', 'delivered'].map((status) => (
              <Button
                key={status}
                size="sm"
                variant={filter === status ? 'default' : 'outline'}
                className={filter === status ? 'bg-accent hover:bg-accent/90' : ''}
                onClick={() => setFilter(status)}
              >
                {status === 'all' ? 'All' : getStatusLabel(status)}
              </Button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="px-6 py-4 text-left font-semibold text-foreground">ID</th>
                <th className="px-6 py-4 text-left font-semibold text-foreground">Customer</th>
                <th className="px-6 py-4 text-left font-semibold text-foreground">Route</th>
                <th className="px-6 py-4 text-left font-semibold text-foreground">Driver</th>
                <th className="px-6 py-4 text-left font-semibold text-foreground">Status</th>
                <th className="px-6 py-4 text-left font-semibold text-foreground">Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredShipments.map((shipment) => (
                <tr key={shipment.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4 font-mono font-semibold text-accent">{shipment.id}</td>
                  <td className="px-6 py-4 text-foreground">{shipment.customer}</td>
                  <td className="px-6 py-4 text-muted-foreground text-xs">
                    {shipment.origin} → {shipment.destination}
                  </td>
                  <td className="px-6 py-4 text-foreground">{shipment.driver}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-block px-3 py-1 rounded-full border text-xs font-medium ${getStatusColor(shipment.status)}`}>
                      {getStatusLabel(shipment.status)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground text-xs">{shipment.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-6 border-t border-border flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Showing {filteredShipments.length} of {shipments.length} shipments</p>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" disabled>
              Previous
            </Button>
            <Button size="sm" variant="outline">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
