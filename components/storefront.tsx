'use client';

import React, { useState } from 'react';

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  badge?: string;
}

const sovereignProducts: Product[] = [
  {
    id: 'prod_firebase_firestore_opt',
    name: 'Firebase / Firestore Optimization Kit',
    category: 'Database Architecture',
    price: 349.00,
    description: 'Advanced connection pooling, read/write optimization, and latency reduction framework for Firestore.',
    badge: 'Core'
  },
  {
    id: 'prod_bouncer_light',
    name: 'The Bouncer (Light Version)',
    category: 'Security Middleware',
    price: 129.00,
    description: 'Streamlined request sanitization and boundary validation middleware optimized for lightweight edge deployments.',
    badge: 'Essential'
  }
];

export default function Storefront() {
  const [cart, setCart] = useState<Product[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (cartIndex: number) => {
    setCart((prev) => prev.filter((_, index) => index !== cartIndex));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = async () => {
    setIsProcessing(true);
    // Hand off to active Stripe merchant endpoint
    setTimeout(() => {
      alert(`Initiating secure checkout for $${cartTotal.toFixed(2)}`);
      setIsProcessing(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12 font-mono">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 border-b border-slate-800 pb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-emerald-400">SOVEREIGN // STOREFRONT</h1>
            <p className="text-sm text-slate-400 mt-1">Authorized Asset Exchange & Commercial Deployment Hub</p>
          </div>
          
          {/* Cart Summary Badge */}
          <div className="mt-4 md:mt-0 bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg flex items-center gap-4">
            <div>
              <span className="text-xs text-slate-400 block">Cart Items</span>
              <span className="font-bold text-emerald-400">{cart.length} selected</span>
            </div>
            <div className="border-l border-slate-800 pl-4">
              <span className="text-xs text-slate-400 block">Total</span>
              <span className="font-bold text-slate-100">${cartTotal.toFixed(2)}</span>
            </div>
            <button 
              onClick={handleCheckout}
              disabled={cart.length === 0 || isProcessing}
              className="bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 disabled:text-slate-600 text-slate-950 font-bold px-4 py-2 rounded text-xs transition-colors"
            >
              {isProcessing ? 'Processing...' : 'Checkout'}
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {sovereignProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded">
                    {product.category}
                  </span>
                  {product.badge && (
                    <span className="text-xs text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
                      {product.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">{product.name}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">{product.description}</p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-lg font-bold text-slate-100">${product.price.toFixed(2)}</span>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-slate-800 hover:bg-emerald-600 hover:text-slate-950 text-slate-200 text-xs font-semibold px-3 py-2 rounded transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Active Cart Drawer */}
        {cart.length > 0 && (
          <div className="mt-12 max-w-4xl bg-slate-900/40 border border-slate-800 rounded-xl p-6">
            <h2 className="text-sm font-bold text-slate-300 mb-4 uppercase tracking-wider">Active Manifest</h2>
            <div className="space-y-3">
              {cart.map((item, index) => (
                <div key={`${item.id}-${index}`} className="flex justify-between items-center bg-slate-900 p-3 rounded border border-slate-800 text-xs">
                  <div>
                    <span className="font-semibold text-slate-200">{item.name}</span>
                    <span className="text-slate-500 ml-2">({item.category})</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-emerald-400">${item.price.toFixed(2)}</span>
                    <button 
                      onClick={() => removeFromCart(index)}
                      className="text-rose-400 hover:text-rose-300"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
