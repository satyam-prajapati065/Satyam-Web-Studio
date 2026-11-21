import React, { useState } from 'react';
import {
  LayoutDashboard, TrendingUp, Users, DollarSign, ArrowUpRight,
  ArrowDownRight, MoreVertical, Filter, Download, Bell, Search, CheckCircle2
} from 'lucide-react';

const DashboardDemo = () => {
  const [dateRange, setDateRange] = useState('7d');
  const [filterStatus, setFilterStatus] = useState('all');

  const orders = [
    { id: 'ORD-8941', customer: 'Acme Corporation', service: 'SaaS Platform Tier', amount: '$1,499.00', status: 'Completed', date: '2026-11-20' },
    { id: 'ORD-8940', customer: 'Studio Velocity', service: 'E-commerce Customization', amount: '$850.00', status: 'Processing', date: '2026-11-20' },
    { id: 'ORD-8939', customer: 'Horizon Health', service: 'Doctor Portal Web App', amount: '$2,400.00', status: 'Completed', date: '2026-11-19' },
    { id: 'ORD-8938', customer: 'Nexus Capital', service: 'Corporate Advisory Site', amount: '$620.00', status: 'Completed', date: '2026-11-19' },
    { id: 'ORD-8937', customer: 'Apex Gyms', service: 'Fitness Timetable Integration', amount: '$350.00', status: 'Pending', date: '2026-11-18' }
  ];

  const filteredOrders = filterStatus === 'all'
    ? orders
    : orders.filter(o => o.status.toLowerCase() === filterStatus);

  return (
    <div style={{ fontFamily: 'var(--font-body)', background: '#F8FAFC', color: '#172033', minHeight: '100%', display: 'flex' }}>
      {/* Sidebar Mock */}
      <aside style={{ width: '220px', background: '#FFFFFF', borderRight: '1px solid #E2E8F0', padding: '1.5rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div style={{ fontWeight: 800, fontSize: '1.1rem', color: '#0F172A', padding: '0 0.5rem 1rem 0.5rem', borderBottom: '1px solid #F1F5F9' }}>
          Pulse<span style={{ color: '#3B82F6' }}>Metrics</span>
        </div>
        <div style={{ background: '#EFF6FF', color: '#3B82F6', fontWeight: 600, padding: '0.6rem 0.8rem', borderRadius: '8px', fontSize: '0.88rem' }}>
          Overview
        </div>
        <div style={{ color: '#64748B', fontWeight: 500, padding: '0.6rem 0.8rem', borderRadius: '8px', fontSize: '0.88rem' }}>
          Transactions
        </div>
        <div style={{ color: '#64748B', fontWeight: 500, padding: '0.6rem 0.8rem', borderRadius: '8px', fontSize: '0.88rem' }}>
          Customer Funnels
        </div>
        <div style={{ color: '#64748B', fontWeight: 500, padding: '0.6rem 0.8rem', borderRadius: '8px', fontSize: '0.88rem' }}>
          Settings
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '1.5rem 2rem' }}>
        {/* Top Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div>
            <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F172A' }}>Executive Revenue Overview</h1>
            <p style={{ color: '#64748B', fontSize: '0.88rem' }}>Real-time business telemetry and conversion pipelines.</p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <select
              value={dateRange}
              onChange={e => setDateRange(e.target.value)}
              style={{ padding: '0.45rem 0.85rem', borderRadius: '8px', border: '1px solid #CBD5E1', background: '#FFF', fontSize: '0.85rem', fontWeight: 600 }}
            >
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
            </select>
          </div>
        </div>

        {/* Metric KPI Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
          <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: '12px', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <div style={{ color: '#64748B', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }}>Gross Revenue</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F172A', marginTop: '0.3rem' }}>$48,920</div>
            <div style={{ color: '#10B981', fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.2rem', marginTop: '0.4rem' }}>
              <ArrowUpRight size={14} /> +18.4% vs last period
            </div>
          </div>

          <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: '12px', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <div style={{ color: '#64748B', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }}>Active Inquiries</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F172A', marginTop: '0.3rem' }}>142</div>
            <div style={{ color: '#10B981', fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.2rem', marginTop: '0.4rem' }}>
              <ArrowUpRight size={14} /> +9.2% velocity
            </div>
          </div>

          <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: '12px', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <div style={{ color: '#64748B', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }}>Conversion Rate</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F172A', marginTop: '0.3rem' }}>4.82%</div>
            <div style={{ color: '#3B82F6', fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.2rem', marginTop: '0.4rem' }}>
              ★ Industry Benchmark Top 5%
            </div>
          </div>

          <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: '12px', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <div style={{ color: '#64748B', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }}>Avg Deal Size</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F172A', marginTop: '0.3rem' }}>$1,240</div>
            <div style={{ color: '#10B981', fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.2rem', marginTop: '0.4rem' }}>
              <ArrowUpRight size={14} /> +$180 QoQ
            </div>
          </div>
        </div>

        {/* Visual Chart Simulation */}
        <div style={{ background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <div style={{ fontWeight: 700, fontSize: '1rem', color: '#0F172A' }}>7-Day Revenue Velocity</div>
            <span style={{ fontSize: '0.8rem', color: '#64748B' }}>Telemetry synced 2 mins ago</span>
          </div>

          {/* Bar Chart Simulation */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '140px', gap: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #F1F5F9' }}>
            {[
              { day: 'Mon', val: '65%' },
              { day: 'Tue', val: '80%' },
              { day: 'Wed', val: '50%' },
              { day: 'Thu', val: '95%' },
              { day: 'Fri', val: '88%' },
              { day: 'Sat', val: '40%' },
              { day: 'Sun', val: '75%' }
            ].map(col => (
              <div key={col.day} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end', gap: '0.4rem' }}>
                <div style={{ width: '100%', maxWidth: '42px', height: col.val, background: 'linear-gradient(180deg, #3B82F6 0%, #93C5FD 100%)', borderRadius: '6px' }} />
                <span style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>{col.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Transactions Table */}
        <div style={{ background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
          <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontWeight: 700, color: '#0F172A' }}>Recent Project Commitments</div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {['all', 'completed', 'processing', 'pending'].map(st => (
                <button
                  key={st}
                  onClick={() => setFilterStatus(st)}
                  style={{
                    padding: '0.25rem 0.65rem',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    border: '1px solid #E2E8F0',
                    background: filterStatus === st ? '#3B82F6' : '#FFFFFF',
                    color: filterStatus === st ? '#FFFFFF' : '#64748B',
                    cursor: 'pointer'
                  }}
                >
                  {st.charAt(0).toUpperCase() + st.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
            <thead>
              <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', textAlign: 'left', color: '#64748B' }}>
                <th style={{ padding: '0.75rem 1.5rem', fontWeight: 600 }}>Order ID</th>
                <th style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>Client</th>
                <th style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>Scope</th>
                <th style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>Amount</th>
                <th style={{ padding: '0.75rem 1.5rem', fontWeight: 600 }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map(row => (
                <tr key={row.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                  <td style={{ padding: '0.85rem 1.5rem', fontWeight: 600, color: '#3B82F6' }}>{row.id}</td>
                  <td style={{ padding: '0.85rem 1rem', fontWeight: 600, color: '#0F172A' }}>{row.customer}</td>
                  <td style={{ padding: '0.85rem 1rem', color: '#64748B' }}>{row.service}</td>
                  <td style={{ padding: '0.85rem 1rem', fontWeight: 700, color: '#0F172A' }}>{row.amount}</td>
                  <td style={{ padding: '0.85rem 1.5rem' }}>
                    <span style={{
                      padding: '0.25rem 0.65rem',
                      borderRadius: '999px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      background: row.status === 'Completed' ? '#ECFDF5' : row.status === 'Processing' ? '#EFF6FF' : '#FFFBEB',
                      color: row.status === 'Completed' ? '#059669' : row.status === 'Processing' ? '#2563EB' : '#D97706'
                    }}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default DashboardDemo;
