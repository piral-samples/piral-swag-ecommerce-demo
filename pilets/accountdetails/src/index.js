import { lazy } from 'react';

const AccountDetails = lazy(() => import('./AccountDetails'));

export function setup(app) {
  app.registerExtension('account-details', AccountDetails);
}
