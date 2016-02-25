import { combineReducers } from 'redux';

const catReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CAT':
      return [
          ...state,
          {
            id: action.id,
            name: action.name,
            adopted: false
          }
      ];
    case 'ADOPT_CAT':
      return state.map(c => {
        if (c.id === action.id) {
          c.adopted = true;
        }
        return c;
      });
    default:
      return state;
  }
};

const garden = combineReducers({
  catReducer
});

export default garden;
