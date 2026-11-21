import React, { useState } from 'react';
import {
  Sparkles, CheckCircle2, ArrowRight, Zap, Shield, BarChart3,
  Layers, Users, HelpCircle, ChevronDown, Check, Star
} from 'lucide-react';

const SaaSDemo = ({ onInquire }) => {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'yearly'
  const [activeTab, setActiveTab] = useState('analytics');
  const [openFaq, setOpenFaq] = useState(null);
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const features = {
    analytics: {
      title: 'Real-Time Telemetry & Funnel Attribution',
      desc: 'Understand exactly where your highest-converting users come from with sub-second event attribution, cohort retention heatmaps, and AI anomaly alerts.',
      stats: '3.4x faster pipeline velocity reported by customer teams',
      color: '#3B82F6'
    },
    workflow: {
      title: 'Autonomous Multi-Stage Action Automations',
      desc: 'Connect webhooks, databases, and customer channels into resilient event loops. Trigger custom actions without writing boilerplate integration code.',
      stats: 'Save 14+ engineering hours every sprint per developer',
      color: '#8B5CF6'
    },
    integration: {
      title: 'Universal API Mesh & Webhook Observability',
      desc: 'Sync telemetry bi-directionally with Slack, Stripe, HubSpot, Segment, and Snowflake in one verified click with end-to-end replay guarantees.',
      stats: 'Zero dropped events with 99.999% webhook replay reliability',
      color: '#10B981'
    }
  };

  const pricingTiers = [
    {
      name: 'Starter',
      price: billingCycle === 'yearly' ? '$29' : '$39',
      period: '/mo',
      desc: 'Essential analytics pipeline for early-stage teams.',
      features: ['Up to 50,000 monthly events', '3 Team Seats', '7-Day Data Retention', 'Standard Webhooks'],
      highlight: false
    },
    {
      name: 'Growth Pro',
      price: billingCycle === 'yearly' ? '$79' : '$99',
      period: '/mo',
      desc: 'Advanced telemetry, automation loops & priority support.',
      features: ['Up to 500,000 monthly events', 'Unlimited Team Seats', '1-Year Data Retention', 'Autonomous Event Triggers', 'Dedicated Slack Channel'],
      highlight: true
    },
    {
      name: 'Enterprise',
      price: billingCycle === 'yearly' ? '$199' : '$249',
      period: '/mo',
      desc: 'Custom data residency, SSO, SLA & unlimited volume.',
      features: ['Unlimited monthly events', 'SOC2 Type II & HIPAA Compliance', 'Dedicated Solutions Architect', 'Custom VPC Deployment', '99.99% Uptime SLA'],
      highlight: false
    }
  ];

  const faqs = [
    {
      q: 'How quickly can our engineering team integrate the SDK?',
      a: 'NovaSaaS integrates with a single script tag or our lightweight npm package in under 5 minutes. No schema migration or proxy configuration required.'
    },
    {
      q: 'Can we switch between monthly and annual billing at any time?',
      a: 'Yes! You can upgrade, downgrade, or switch billing cycles immediately. Unused time is automatically credited to your account.'
    },
    {
      q: 'Do you offer a free sandbox environment?',
      a: 'Absolutely. Every new account receives full Growth Pro features for 14 days without requiring a credit card.'
    }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <div style={{ fontFamily: 'var(--font-body)', color: 'var(--text-primary)', background: '#FFFFFF' }}>
      {/* Demo Nav */}
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 2rem',
        borderBottom: '1px solid #E2E8F0',
        background: '#FFFFFF'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 800, fontSize: '1.2rem', color: '#1E293B' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#3B82F6', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Zap size={18} />
          </div>
          <span>Nova<span style={{ color: '#3B82F6' }}>SaaS</span></span>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem', fontWeight: 500, color: '#64748B' }}>
          <a href="#features" style={{ color: '#1E293B' }}>Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>
        <button
          onClick={onInquire}
          style={{ background: '#3B82F6', color: '#FFF', padding: '0.5rem 1.25rem', borderRadius: '8px', fontWeight: 600, fontSize: '0.9rem' }}
        >
          Start Free Trial
        </button>
      </nav>

      {/* Hero Section */}
      <section style={{ padding: '4.5rem 2rem 3rem 2rem', textAlign: 'center', maxWidth: '850px', margin: '0 auto' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.35rem 0.9rem',
          background: '#EFF6FF',
          color: '#3B82F6',
          borderRadius: '999px',
          fontSize: '0.82rem',
          fontWeight: 600,
          marginBottom: '1.25rem',
          border: '1px solid #DBEAFE'
        }}>
          <Sparkles size={14} /> NovaSaaS 3.0 Platform Release
        </div>

        <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#0F172A', lineHeight: 1.15, marginBottom: '1.25rem' }}>
          Turn Complex Product Telemetry Into <span style={{ color: '#3B82F6' }}>Actionable Revenue</span>
        </h1>

        <p style={{ fontSize: '1.15rem', color: '#64748B', lineHeight: 1.6, marginBottom: '2rem' }}>
          The developer-first analytics engine that unifies event tracking, customer journey cohort analysis, and automated retention loops.
        </p>

        {/* Lead Form */}
        <form onSubmit={handleSubscribe} style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', maxWidth: '500px', margin: '0 auto 1.5rem auto' }}>
          <input
            type="email"
            placeholder="Enter your work email..."
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            required
            style={{
              flex: 1,
              padding: '0.8rem 1rem',
              borderRadius: '8px',
              border: '1px solid #CBD5E1',
              fontSize: '0.95rem',
              outline: 'none'
            }}
          />
          <button
            type="submit"
            style={{
              background: '#3B82F6',
              color: '#FFF',
              padding: '0.8rem 1.4rem',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.95rem'
            }}
          >
            {subscribed ? 'Invite Sent! ✓' : 'Get Access'}
          </button>
        </form>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', fontSize: '0.85rem', color: '#94A3B8' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Check size={14} color="#10B981" /> No credit card required</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Check size={14} color="#10B981" /> 14-day free trial</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Check size={14} color="#10B981" /> Cancel anytime</span>
        </div>
      </section>

      {/* Interactive Feature Tabs */}
      <section id="features" style={{ padding: '3.5rem 2rem', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A' }}>Engineered For Modern High-Scale Teams</h2>
            <p style={{ color: '#64748B' }}>Click below to explore interactive modules in action.</p>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            {Object.keys(features).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '0.65rem 1.35rem',
                  borderRadius: '999px',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  border: activeTab === tab ? '1px solid #3B82F6' : '1px solid #E2E8F0',
                  background: activeTab === tab ? '#EFF6FF' : '#FFFFFF',
                  color: activeTab === tab ? '#3B82F6' : '#64748B',
                  cursor: 'pointer'
                }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Active Tab Preview Card */}
          <div style={{
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '16px',
            padding: '2.5rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            alignItems: 'center'
          }}>
            <div>
              <div style={{
                display: 'inline-flex',
                padding: '0.4rem 0.8rem',
                borderRadius: '6px',
                background: '#EFF6FF',
                color: features[activeTab].color,
                fontWeight: 700,
                fontSize: '0.8rem',
                marginBottom: '1rem'
              }}>
                ACTIVE CAPABILITY
              </div>
              <h3 style={{ fontSize: '1.65rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>
                {features[activeTab].title}
              </h3>
              <p style={{ color: '#64748B', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {features[activeTab].desc}
              </p>
              <div style={{
                padding: '0.85rem 1rem',
                borderRadius: '8px',
                background: '#F1F5F9',
                borderLeft: `4px solid ${features[activeTab].color}`,
                fontSize: '0.9rem',
                fontWeight: 600,
                color: '#334155'
              }}>
                ⭐ {features[activeTab].stats}
              </div>
            </div>

            {/* Simulated Live UI Mock */}
            <div style={{
              background: '#0F172A',
              borderRadius: '12px',
              padding: '1.5rem',
              color: '#F8FAFC',
              fontFamily: 'monospace',
              fontSize: '0.85rem',
              boxShadow: '0 10px 25px rgba(15, 23, 42, 0.15)'
            }}>
              <div style={{ display: 'flex', gap: '6px', marginBottom: '1rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#EF4444' }}></span>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#F59E0B' }}></span>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }}></span>
              </div>
              <div style={{ color: '#38BDF8', marginBottom: '0.4rem' }}>// Real-time Event Pipeline</div>
              <div style={{ color: '#F1F5F9' }}>novasaas.track(<span style={{ color: '#A7F3D0' }}>'checkout_completed'</span>, &#123;</div>
              <div style={{ paddingLeft: '1.5rem', color: '#94A3B8' }}>revenue: <span style={{ color: '#FDE047' }}>249.00</span>,</div>
              <div style={{ paddingLeft: '1.5rem', color: '#94A3B8' }}>currency: <span style={{ color: '#A7F3D0' }}>'USD'</span>,</div>
              <div style={{ paddingLeft: '1.5rem', color: '#94A3B8' }}>cohort: <span style={{ color: '#A7F3D0' }}>'q4_enterprise'</span></div>
              <div style={{ color: '#F1F5F9' }}>&#125;);</div>
              <div style={{ marginTop: '0.75rem', color: '#4ADE80' }}>✔ Dispatched in 1.4ms to 4 endpoints</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Pricing */}
      <section id="pricing" style={{ padding: '4.5rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>
            Transparent Pricing That Scales With You
          </h2>
          <p style={{ color: '#64748B', marginBottom: '1.5rem' }}>
            Start on the free trial, upgrade when your metrics demand it.
          </p>

          {/* Billing Switch */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: '#F1F5F9',
            padding: '0.35rem',
            borderRadius: '999px',
            border: '1px solid #E2E8F0'
          }}>
            <button
              onClick={() => setBillingCycle('monthly')}
              style={{
                padding: '0.4rem 1.25rem',
                borderRadius: '999px',
                fontWeight: 600,
                fontSize: '0.85rem',
                background: billingCycle === 'monthly' ? '#FFFFFF' : 'transparent',
                color: billingCycle === 'monthly' ? '#0F172A' : '#64748B',
                boxShadow: billingCycle === 'monthly' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                cursor: 'pointer'
              }}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              style={{
                padding: '0.4rem 1.25rem',
                borderRadius: '999px',
                fontWeight: 600,
                fontSize: '0.85rem',
                background: billingCycle === 'yearly' ? '#FFFFFF' : 'transparent',
                color: billingCycle === 'yearly' ? '#0F172A' : '#64748B',
                boxShadow: billingCycle === 'yearly' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <span>Annual Billing</span>
              <span style={{ background: '#DCFCE7', color: '#15803D', padding: '0.1rem 0.4rem', borderRadius: '4px', fontSize: '0.7rem' }}>Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '2rem',
                border: tier.highlight ? '2px solid #3B82F6' : '1px solid #E2E8F0',
                boxShadow: tier.highlight ? '0 10px 25px rgba(59, 130, 246, 0.12)' : '0 2px 8px rgba(0,0,0,0.04)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {tier.highlight && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#3B82F6',
                  color: '#FFFFFF',
                  padding: '0.2rem 0.85rem',
                  borderRadius: '999px',
                  fontSize: '0.75rem',
                  fontWeight: 700
                }}>
                  MOST POPULAR
                </div>
              )}
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>{tier.name}</h3>
              <p style={{ color: '#64748B', fontSize: '0.88rem', minHeight: '40px', marginBottom: '1.25rem' }}>{tier.desc}</p>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A' }}>{tier.price}</span>
                <span style={{ color: '#64748B', fontSize: '0.9rem' }}>{tier.period}</span>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
                {tier.features.map((f, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#334155' }}>
                    <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0 }} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={onInquire}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  background: tier.highlight ? '#3B82F6' : '#F1F5F9',
                  color: tier.highlight ? '#FFFFFF' : '#0F172A',
                  cursor: 'pointer',
                  border: 'none',
                  transition: 'all 0.2s'
                }}
              >
                Choose {tier.name}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" style={{ padding: '3.5rem 2rem 4.5rem 2rem', background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A', textAlign: 'center', marginBottom: '2rem' }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '10px',
                  border: '1px solid #E2E8F0',
                  padding: '1.25rem',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 600, color: '#0F172A' }}>
                  <span>{faq.q}</span>
                  <ChevronDown size={18} style={{ transform: openFaq === idx ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                </div>
                {openFaq === idx && (
                  <p style={{ marginTop: '0.75rem', color: '#64748B', fontSize: '0.92rem', lineHeight: 1.6 }}>
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SaaSDemo;
