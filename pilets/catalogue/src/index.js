import * as React from 'react';
import NavLink from './NavLink';

const Catalogue = React.lazy(() => import('./Catalogue'));

export function setup(app) {
  app.registerPage('/shop', Catalogue);

  app.registerPage('/shop/product/:productId', Catalogue);

  app.registerExtension('nav-items', NavLink);
}
