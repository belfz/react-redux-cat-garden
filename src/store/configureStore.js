import { createStore } from 'redux';
import garden from '../reducers/garden';

export default function configureStore(initialState) {
  const store = createStore(garden, initialState,
      window.devToolsExtension ? window.devToolsExtension() : undefined
  );
  return store;
}
