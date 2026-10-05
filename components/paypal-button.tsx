'use client';

import { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

interface PayPalButtonProps {
  amount: string;
  planName: string;
  onSuccess?: (details: unknown) => void;
}

const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

export default function CustomPayPalButton({ amount, planName, onSuccess }: PayPalButtonProps) {
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  if (!clientId) {
    return (
      <p className="w-full rounded-xl border border-slate-800 bg-slate-950 py-3.5 text-center font-mono text-xs text-slate-500">
        PayPal unavailable: set NEXT_PUBLIC_PAYPAL_CLIENT_ID
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <PayPalScriptProvider options={{ clientId, currency: 'USD', intent: 'capture' }}>
        <PayPalButtons
          style={{ layout: 'horizontal', height: 48, color: 'gold', shape: 'rect', tagline: false }}
          forceReRender={[amount, planName]}
          createOrder={(_data, actions) =>
            actions.order.create({
              intent: 'CAPTURE',
              purchase_units: [
                {
                  description: `Sovereign Arena - ${planName}`,
                  amount: { currency_code: 'USD', value: amount },
                },
              ],
            })
          }
          onApprove={async (_data, actions) => {
            if (!actions.order) return;
            const details = await actions.order.capture();
            const name = details.payer?.name?.given_name;
            setStatus({
              type: 'success',
              message: name ? `Payment complete. Thanks, ${name}.` : 'Payment complete.',
            });
            onSuccess?.(details);
          }}
          onError={() => setStatus({ type: 'error', message: 'PayPal payment failed. Please try again.' })}
        />
      </PayPalScriptProvider>
      {status && (
        <p
          role="status"
          className={`text-center font-mono text-xs ${
            status.type === 'success' ? 'text-cyan-400' : 'text-red-400'
          }`}
        >
          {status.message}
        </p>
      )}
    </div>
  );
}
