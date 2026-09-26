"use client";

import { useState } from "react";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Quantum Shield Module",
    description: "Advanced security middleware for enterprise systems",
    price: 299.99,
    category: "Security",
    image: "🛡️",
  },
  {
    id: "2",
    name: "Neural Processor Unit",
    description: "High-performance hardware module for AI workloads",
    price: 1299.99,
    category: "Hardware",
    image: "⚙️",
  },
  {
    id: "3",
    name: "Sovereign Gateway",
    description: "Enterprise gateway for secure network infrastructure",
    price: 899.99,
    category: "Networking",
    image: "🌉",
  },
  {
    id: "4",
    name: "Data Vault Pro",
    description: "Military-grade encryption storage device",
    price: 549.99,
    category: "Storage",
    image: "🗃️",
  },
  {
    id: "5",
    name: "Titan Cooling System",
    description: "Industrial cooling solution for server racks",
    price: 799.99,
    category: "Hardware",
    image: "❄️",
  },
  {
    id: "6",
    name: "Guardian VPN Protocol",
    description: "Enterprise VPN middleware for global networks",
    price: 199.99,
    category: "Security",
    image: "🔐",
  },
  {
    id: "7",
    name: "Apex Power Supply",
    description: "Enterprise-grade power delivery system",
    price: 649.99,
    category: "Hardware",
    image: "⚡",
  },
  {
    id: "8",
    name: "Phoenix Recovery Kit",
    description: "Disaster recovery and backup solution",
    price: 1199.99,
    category: "Services",
    image: "🔄",
  },
];

export default function Home() {
  const [cart, setCart] = useState<string[]>([]);
  const [notification, setNotification] = useState<string | null>(null);

  const handleAddToCart = (productName: string) => {
    setCart([...cart, productName]);
    setNotification(`${productName} added to cart!`);
    setTimeout(() => setNotification(null), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="space-y-4 rounded-xl border border-zinc-800 bg-gradient-to-r from-zinc-900 to-zinc-950 p-8 text-center">
        <h2 className="text-4xl font-bold tracking-tight">
          Welcome to Sovereign Arena
        </h2>
        <p className="text-lg text-zinc-400">
          Premium hardware, security middleware, and enterprise solutions
        </p>
      </section>

      {/* Notification Toast */}
      {notification && (
        <div className="fixed right-4 top-24 z-50 rounded-lg border border-blue-400 bg-blue-900/20 px-4 py-3 text-blue-200 shadow-lg backdrop-blur">
          {notification}
        </div>
      )}

      {/* Cart Counter */}
      {cart.length > 0 && (
        <div className="rounded-lg border border-blue-800 bg-blue-900/10 p-4">
          <p className="text-blue-200">
            🛒 Items in cart: <span className="font-bold">{cart.length}</span>
          </p>
        </div>
      )}

      {/* Products Grid */}
      <section className="space-y-4">
        <h3 className="text-2xl font-bold">Product Catalog</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group space-y-3 rounded-lg border border-zinc-800 bg-zinc-900 p-4 transition-all hover:border-blue-600 hover:shadow-lg hover:shadow-blue-600/20"
            >
              {/* Product Image */}
              <div className="flex h-20 items-center justify-center rounded-lg bg-zinc-800 text-4xl">
                {product.image}
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <h4 className="font-semibold leading-tight text-white">
                  {product.name}
                </h4>
                <p className="text-sm text-zinc-400">{product.description}</p>

                {/* Category Badge */}
                <div className="flex items-center gap-2">
                  <span className="inline-block rounded-full bg-zinc-800 px-2.5 py-0.5 text-xs font-medium text-zinc-300">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="space-y-3 border-t border-zinc-800 pt-3">
                <div className="text-2xl font-bold text-blue-400">
                  ${product.price.toFixed(2)}
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(product.name)}
                  className="w-full rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition-all hover:bg-blue-700 active:scale-95"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="space-y-4 rounded-xl border border-zinc-800 bg-gradient-to-r from-zinc-900 to-zinc-950 p-8">
        <h3 className="text-2xl font-bold">Why Choose Sovereign Arena?</h3>
        <ul className="grid gap-4 sm:grid-cols-3">
          <li className="space-y-2">
            <div className="text-2xl">🚀</div>
            <h4 className="font-semibold">Enterprise Grade</h4>
            <p className="text-sm text-zinc-400">
              Built for high-performance demands
            </p>
          </li>
          <li className="space-y-2">
            <div className="text-2xl">🔒</div>
            <h4 className="font-semibold">Secure</h4>
            <p className="text-sm text-zinc-400">
              Military-grade security standards
            </p>
          </li>
          <li className="space-y-2">
            <div className="text-2xl">📞</div>
            <h4 className="font-semibold">Support</h4>
            <p className="text-sm text-zinc-400">
              24/7 dedicated customer support
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}
