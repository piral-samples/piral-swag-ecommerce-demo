import * as React from 'react';
import NavLink from './NavLink';

const MyAccount = React.lazy(() => import('./MyAccount'));

export function setup(app) {
  app.registerPage('/myaccount', MyAccount);

  app.registerExtension('nav-items', NavLink);
}
