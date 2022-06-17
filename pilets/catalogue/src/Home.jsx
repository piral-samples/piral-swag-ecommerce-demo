import * as React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Product from './Product';
import black1 from './imgs/black1.jpeg';
import black2 from './imgs/black2.jpeg';
import white from './imgs/white.jpeg';

const catalogueData = [
  {
    id: 123,
    productName: 'Black no.1 T-Shirt',
    image: black1,
    cost: '$3.99',
  },
  {
    id: 234,
    productName: 'Black no.2 T-Shirt',
    image: black2,
    cost: '$4.99',
  },
  {
    id: 456,
    productName: 'White T-Shirt',
    image: white,
    cost: '$5.99',
  },
];

const generateClassName = createGenerateClassName({
  seed: 'catalogue',
});

const Home = () => {
  let { path } = useRouteMatch();

  return (
    <StylesProvider generateClassName={generateClassName}>
      <div>
        {catalogueData.map((item) => (
          <Product key={item.id} data={item} url={`${path}/product/${item.id}`} />
        ))}
      </div>
    </StylesProvider>
  );
};

export default Home;
