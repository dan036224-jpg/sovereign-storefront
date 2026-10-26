'use client';

import React from 'react';

interface TheBouncerGateProps {
  children: React.ReactNode;
  fallbackUrl?: string;
  className?: string;
}

export const TheBouncerGate: React.FC<TheBouncerGateProps> = ({
  children,
  fallbackUrl,
  className = '',
}) => {
  const PAYPAL_URL =
    fallbackUrl ||
    process.env.NEXT_PUBLIC_PAYPAL_CHECKOUT_URL ||
    'https://www.paypal.com/ncp/payment/YOUR_PAYPAL_BUTTON_ID';

  const handleEdgeIntercept = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const hasToken = typeof window !== 'undefined' && localStorage.getItem('sovereign_sub_token');

    if (!hasToken) {
      window.location.href = PAYPAL_URL;
    } else {
      window.location.href = '/arena';
    }
  };

  return (
    <div onClick={handleEdgeIntercept} className={`inline-block cursor-pointer ${className}`}>
      {children}
    </div>
  );
};
