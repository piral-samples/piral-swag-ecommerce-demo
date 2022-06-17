import { lazy } from 'react';

const PaymentDetails = lazy(() => import('./PaymentDetails'));

export function setup(app) {
  app.registerExtension('payment-details', PaymentDetails);
}
