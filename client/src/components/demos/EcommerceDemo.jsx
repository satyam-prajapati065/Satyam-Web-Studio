import React, { useState } from 'react';
import {
  ShoppingBag, Search, Heart, X, Plus, Minus, Check, ArrowRight,
  Filter, Star, Truck, RefreshCw, ShieldCheck, Menu
} from 'lucide-react';

const EcommerceDemo = ({ onInquire }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Structured Wool Trench Coat',
      category: 'Outerwear',
      price: 189,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80',
      description: 'Crafted from sustainable double-faced virgin wool. Relaxed tailored silhouette with horn buttons and storm flap.'
    },
    {
      id: 2,
      name: 'Cashmere Ribbed Knit Cardigan',
      category: 'Knitwear',
      price: 135,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&q=80',
      description: 'Ultra-soft Grade-A Mongolian cashmere with mother-of-pearl buttons. Perfect for layered seasonal warmth.'
    },
    {
      id: 3,
      name: 'Minimalist Italian Leather Tote',
      category: 'Bags',
      price: 220,
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80',
      description: 'Full-grain vegetable-tanned Tuscan leather. Features reinforced handles, interior laptop sleeve, and brass hardware.'
    },
    {
      id: 4,
      name: 'Tailored Wide-Leg Linen Trouser',
      category: 'Bottoms',
      price: 110,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80',
      description: 'Crisp breathable French linen tailored with high-rise waistline and deep front pleats.'
    },
    {
      id: 5,
      name: 'Artisanal Chelsea Leather Boots',
      category: 'Footwear',
      price: 195,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=600&q=80',
      description: 'Handcrafted Goodyear welted boots featuring durable Vibram rubber soles and cushioned memory insoles.'
    },
    {
      id: 6,
      name: 'Silk Bias-Cut Midi Dress',
      category: 'Dresses',
      price: 165,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=600&q=80',
      description: '100% pure mulberry silk drape with delicate spaghetti straps and subtle side slit for evening elegance.'
    }
  ];

  const categories = ['All', 'Outerwear', 'Knitwear', 'Bags', 'Bottoms', 'Footwear', 'Dresses'];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQty = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.qty + delta;
        return newQty > 0 ? { ...item, qty: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div style={{ fontFamily: 'var(--font-body)', background: '#FFFFFF', color: '#172033', minHeight: '100%' }}>
      {/* Top Banner */}
      <div className="demo-top-bar" style={{ background: '#172033', color: '#F8FAFC', padding: '0.45rem 1rem', textAlign: 'center', fontSize: '0.8rem', fontWeight: 500 }}>
        ✨ Complimentary Worldwide Express Delivery on orders over $150
      </div>

      {/* Nav */}
      <header className="demo-navbar-header" style={{
        borderBottom: '1px solid #E2E8F0',
        background: '#FFFFFF'
      }}>
        <div style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: '0.05em', color: '#0F172A' }}>
          AURA<span style={{ color: '#3B82F6' }}>STUDIO</span>
        </div>

        {/* Categories Nav */}
        <div className="demo-desktop-links" style={{ gap: '1.5rem', fontSize: '0.9rem', fontWeight: 500 }}>
          {categories.slice(0, 5).map(c => (
            <span
              key={c}
              onClick={() => setSelectedCategory(c)}
              style={{
                cursor: 'pointer',
                color: selectedCategory === c ? '#3B82F6' : '#64748B',
                fontWeight: selectedCategory === c ? 700 : 500
              }}
            >
              {c}
            </span>
          ))}
        </div>

        {/* Cart Icon & Mobile Hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={() => setIsCartOpen(true)}
            style={{
              position: 'relative',
              background: '#F1F5F9',
              padding: '0.6rem',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              border: 'none'
            }}
            aria-label="View Shopping Cart"
          >
            <ShoppingBag size={20} color="#0F172A" />
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-4px',
                right: '-4px',
                background: '#3B82F6',
                color: '#FFFFFF',
                borderRadius: '50%',
                width: '18px',
                height: '18px',
                fontSize: '0.7rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {cartCount}
              </span>
            )}
          </button>
          <button
            className="demo-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`demo-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Categories</div>
        {categories.map(c => (
          <span
            key={c}
            onClick={() => { setSelectedCategory(c); setMobileMenuOpen(false); }}
            style={{
              padding: '0.6rem 0',
              fontWeight: selectedCategory === c ? 700 : 500,
              color: selectedCategory === c ? '#3B82F6' : '#1E293B',
              cursor: 'pointer',
              borderBottom: '1px solid #F1F5F9',
              display: 'block'
            }}
          >
            {c}
          </span>
        ))}
      </div>

      {/* Hero Showcase */}
      <div style={{
        background: 'linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%)',
        padding: '3rem 2rem',
        borderBottom: '1px solid #E2E8F0'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ maxWidth: '500px' }}>
            <span style={{ textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 700, color: '#3B82F6', letterSpacing: '0.1em' }}>
              AUTUMN / WINTER CAPSULE
            </span>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginTop: '0.5rem', marginBottom: '1rem', lineHeight: 1.2 }}>
              Timeless Aesthetics. Uncompromising Craft.
            </h1>
            <p style={{ color: '#64748B', fontSize: '1rem', marginBottom: '1.5rem' }}>
              Explore handcrafted garments tailored from natural luxury fibers designed to last decades.
            </p>
            <button
              onClick={() => setSelectedCategory('All')}
              style={{
                background: '#0F172A',
                color: '#FFF',
                padding: '0.75rem 1.6rem',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer'
              }}
            >
              Shop Full Collection
            </button>
          </div>

          <div style={{ width: '280px', height: '220px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.08)' }}>
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80"
              alt="Editorial"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div style={{ padding: '2rem 2rem 1rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '0.6rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '0.5rem 1.1rem',
                borderRadius: '999px',
                fontSize: '0.85rem',
                fontWeight: 600,
                border: selectedCategory === cat ? '1px solid #3B82F6' : '1px solid #E2E8F0',
                background: selectedCategory === cat ? '#EFF6FF' : '#FFFFFF',
                color: selectedCategory === cat ? '#3B82F6' : '#64748B',
                whiteSpace: 'nowrap',
                cursor: 'pointer'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Catalog Grid */}
      <div style={{ padding: '1rem 2rem 4rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '2rem' }}>
          {filteredProducts.map(product => (
            <div
              key={product.id}
              style={{
                background: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid #E2E8F0',
                overflow: 'hidden',
                transition: 'transform 0.2s, box-shadow 0.2s',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Product Thumbnail */}
              <div style={{ height: '240px', position: 'relative', overflow: 'hidden', background: '#F8FAFC' }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <button
                  onClick={() => setQuickViewProduct(product)}
                  style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid #E2E8F0',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '999px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: '#0F172A',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                >
                  Quick View
                </button>
              </div>

              {/* Product Details */}
              <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ fontSize: '0.75rem', color: '#3B82F6', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                  {product.category}
                </div>
                <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>
                  {product.name}
                </h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '0.75rem' }}>
                  <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A' }}>${product.price}</span>
                  <button
                    onClick={() => addToCart(product)}
                    style={{
                      background: '#3B82F6',
                      color: '#FFFFFF',
                      padding: '0.45rem 0.9rem',
                      borderRadius: '6px',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem'
                    }}
                  >
                    <Plus size={14} /> Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sustainable Crafting Standards */}
      <section style={{ background: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1050px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#3B82F6', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              CONSCIOUS LUXURY
            </span>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A', marginTop: '0.4rem', marginBottom: '1.25rem', lineHeight: 1.2 }}>
              Ethical Sourcing & Zero-Waste Italian Craftsmanship
            </h2>
            <p style={{ color: '#64748B', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              We partner directly with family-owned heritage mills across Florence and Biella. Every garment is crafted in limited batches from GOTS-certified organic linen, Grade-A Mongolian cashmere, and vegetable-tanned leather.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1.5rem' }}>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A' }}>100%</div>
                <div style={{ fontSize: '0.82rem', color: '#64748B' }}>Traceable Supply Chain</div>
              </div>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A' }}>Zero</div>
                <div style={{ fontSize: '0.82rem', color: '#64748B' }}>Microplastic Synthetics</div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=80"
              alt="Craftsmanship"
              style={{ width: '100%', borderRadius: '16px', maxHeight: '380px', objectFit: 'cover', boxShadow: '0 10px 25px rgba(0,0,0,0.08)' }}
            />
          </div>
        </div>
      </section>

      {/* Customer Reviews & Social Proof */}
      <section style={{ padding: '5rem 2rem', maxWidth: '1050px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A' }}>Loved by Discerning Shoppers Worldwide</h2>
          <p style={{ color: '#64748B', marginTop: '0.4rem' }}>Over 4,800+ five-star verified purchases across 42 countries.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {[
            { name: 'Sienna Miller', role: 'Verified Buyer, London', review: 'The structured trench coat is museum-grade perfection. The drape, horn buttons, and tailored silhouette feel like a $1,200 piece.' },
            { name: 'Chloe Dubois', role: 'Verified Buyer, Paris', review: 'Cashmere cardigan feels like clouds. Arrived in recyclable linen packaging with personal note. Exemplary customer service.' },
            { name: 'Marcus Vance', role: 'Verified Buyer, New York', review: 'Tuscan leather tote bag has aged beautifully over 6 months of daily commute. Sturdy brass zippers and timeless elegance.' }
          ].map((rev, i) => (
            <div key={i} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '1.75rem', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
              <div style={{ color: '#F59E0B', marginBottom: '0.75rem' }}>★★★★★</div>
              <p style={{ color: '#334155', fontSize: '0.9rem', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '1.25rem' }}>
                "{rev.review}"
              </p>
              <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '0.75rem' }}>
                <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.92rem' }}>{rev.name}</div>
                <div style={{ fontSize: '0.78rem', color: '#3B82F6', fontWeight: 600 }}>{rev.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VIP Loyalty Perks Strip */}
      <section style={{ background: '#0F172A', color: '#FFFFFF', padding: '3.5rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          <div>
            <div style={{ fontSize: '1.75rem', marginBottom: '0.4rem' }}>✈️</div>
            <div style={{ fontWeight: 700, fontSize: '1rem', color: '#FFF' }}>Complimentary Global Express</div>
            <div style={{ fontSize: '0.82rem', color: '#94A3B8', marginTop: '0.2rem' }}>Free express on all orders over $150</div>
          </div>
          <div>
            <div style={{ fontSize: '1.75rem', marginBottom: '0.4rem' }}>🔄</div>
            <div style={{ fontWeight: 700, fontSize: '1rem', color: '#FFF' }}>30-Day Hassle-Free Returns</div>
            <div style={{ fontSize: '0.82rem', color: '#94A3B8', marginTop: '0.2rem' }}>Prepaid doorstep courier return labels</div>
          </div>
          <div>
            <div style={{ fontSize: '1.75rem', marginBottom: '0.4rem' }}>🔒</div>
            <div style={{ fontWeight: 700, fontSize: '1rem', color: '#FFF' }}>Encrypted Checkout</div>
            <div style={{ fontSize: '0.82rem', color: '#94A3B8', marginTop: '0.2rem' }}>Stripe & Razorpay 256-bit SSL security</div>
          </div>
        </div>
      </section>

      {/* E-Commerce Footer */}
      <footer style={{ background: '#070B14', color: '#94A3B8', padding: '4rem 2rem 2rem 2rem', borderTop: '1px solid #1E293B' }}>
        <div style={{ maxWidth: '1050px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#FFF', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
              AURA<span style={{ color: '#3B82F6' }}>STUDIO</span>
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: '#94A3B8' }}>
              Modern high-conversion luxury retail storefront engineered with clean modular React.js architecture by Satyam Web Studio.
            </p>
          </div>
          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFF', marginBottom: '0.75rem' }}>Collections</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
              <li>Outerwear & Trench Coats</li>
              <li>Grade-A Mongolian Cashmere</li>
              <li>Italian Vegetable-Tanned Bags</li>
              <li>Tailored French Linen Trousers</li>
              <li>Goodyear Welted Footwear</li>
            </ul>
          </div>
          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFF', marginBottom: '0.75rem' }}>Get A Store Like This</div>
            <p style={{ fontSize: '0.85rem', color: '#94A3B8', marginBottom: '0.75rem' }}>
              Need an e-commerce website with cart, inventory, and payment gateway built for your brand?
            </p>
            <button
              onClick={onInquire}
              style={{ background: '#3B82F6', color: '#FFF', padding: '0.65rem 1.25rem', borderRadius: '6px', fontWeight: 800, fontSize: '0.85rem', border: 'none', cursor: 'pointer' }}
            >
              Request E-commerce Store
            </button>
          </div>
        </div>

        <div style={{ maxWidth: '1050px', margin: '0 auto', paddingTop: '1.5rem', borderTop: '1px solid #1E293B', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>© {new Date().getFullYear()} AuraStudio Inc. All rights reserved.</div>
          <div>Engineered with pure React & Vite by Satyam Web Studio</div>
        </div>
      </footer>

      {/* Slideout Cart Drawer */}
      {isCartOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(15, 23, 42, 0.4)',
          zIndex: 9999,
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <div style={{
            width: '100%',
            maxWidth: '380px',
            background: '#FFFFFF',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '-4px 0 20px rgba(0,0,0,0.1)'
          }}>
            {/* Cart Header */}
            <div style={{ padding: '1.25rem', borderBottom: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontWeight: 800, fontSize: '1.1rem', color: '#0F172A' }}>Your Cart ({cartCount})</div>
              <button onClick={() => setIsCartOpen(false)} style={{ cursor: 'pointer', color: '#64748B' }}>
                <X size={20} />
              </button>
            </div>

            {/* Cart Items */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '1.25rem' }}>
              {cart.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#94A3B8' }}>
                  <ShoppingBag size={40} style={{ margin: '0 auto 1rem auto', opacity: 0.5 }} />
                  <p>Your shopping bag is empty.</p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {cart.map(item => (
                    <div key={item.id} style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid #F1F5F9', paddingBottom: '1rem' }}>
                      <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px', borderRadius: '8px', objectFit: 'cover' }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 600, fontSize: '0.88rem', color: '#0F172A' }}>{item.name}</div>
                        <div style={{ color: '#3B82F6', fontWeight: 700, fontSize: '0.9rem', marginTop: '0.2rem' }}>${item.price}</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.4rem' }}>
                          <button onClick={() => updateQty(item.id, -1)} style={{ width: '22px', height: '22px', border: '1px solid #CBD5E1', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Minus size={12} /></button>
                          <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{item.qty}</span>
                          <button onClick={() => updateQty(item.id, 1)} style={{ width: '22px', height: '22px', border: '1px solid #CBD5E1', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Plus size={12} /></button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Cart Footer */}
            {cart.length > 0 && (
              <div style={{ padding: '1.25rem', borderTop: '1px solid #E2E8F0', background: '#F8FAFC' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontWeight: 700, fontSize: '1.1rem' }}>
                  <span>Subtotal:</span>
                  <span>${cartTotal}</span>
                </div>
                <button
                  onClick={onInquire}
                  style={{
                    width: '100%',
                    background: '#3B82F6',
                    color: '#FFFFFF',
                    padding: '0.85rem',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    border: 'none'
                  }}
                >
                  Proceed to Checkout (${cartTotal})
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(15, 23, 42, 0.5)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem'
        }}>
          <div style={{
            background: '#FFFFFF',
            borderRadius: '16px',
            maxWidth: '680px',
            width: '100%',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            position: 'relative'
          }}>
            <button
              onClick={() => setQuickViewProduct(null)}
              style={{ position: 'absolute', top: '12px', right: '12px', background: '#FFFFFF', borderRadius: '50%', padding: '0.3rem', cursor: 'pointer', zIndex: 10 }}
            >
              <X size={18} />
            </button>
            <div style={{ height: '320px' }}>
              <img src={quickViewProduct.image} alt={quickViewProduct.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#3B82F6', textTransform: 'uppercase' }}>{quickViewProduct.category}</span>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0F172A', marginTop: '0.4rem', marginBottom: '0.5rem' }}>{quickViewProduct.name}</h3>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>${quickViewProduct.price}</div>
              <p style={{ color: '#64748B', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>{quickViewProduct.description}</p>
              <button
                onClick={() => {
                  addToCart(quickViewProduct);
                  setQuickViewProduct(null);
                }}
                style={{
                  marginTop: 'auto',
                  background: '#0F172A',
                  color: '#FFFFFF',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}
              >
                Add to Cart • ${quickViewProduct.price}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EcommerceDemo;
