import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = React.lazy(() => import('./Home'));
const Details = React.lazy(() => import('./Details'));

const Catalogue = () => {
  return (
    <div>
      <h1>Shop</h1>
      <Switch>
        <Route exact path="/shop" component={Home} />
        <Route exact path="/shop/product/:productId" component={Details} />
      </Switch>
    </div>
  );
};

export default Catalogue;
