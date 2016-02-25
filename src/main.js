import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { addCat } from './actions/actions';
import configureStore from './store/configureStore';
import App from './components/App';

let store = configureStore();

['Belfegor', 'Yog-Cokot', 'Mehcat', 'Yutzi', 'Mr Fluffy', 'Little Paws']
  .forEach(cat => store.dispatch(addCat(cat)));

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
);
