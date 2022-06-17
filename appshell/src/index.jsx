import * as React from 'react';
import { render } from 'react-dom';
import { Piral, createInstance } from 'piral-core';
import Main from './Main';

const instance = createInstance({
  state: {
    components: {
      Layout: Main,
    },
  },
  requestPilets() {
    return fetch('./pilets.json').then(res => res.json());
  },
});

render(<Piral instance={instance} />, document.querySelector('#root'));
