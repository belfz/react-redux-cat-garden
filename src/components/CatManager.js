import React from 'react';
import { connect } from 'react-redux';
import { addCat } from '../actions/actions';

let CatManager = ({dispatch}) => {
  let input;
  return (
    <div>
      <input type="text" ref={node => input = node} />
      <button onClick={() => {
          dispatch(addCat(input.value));
          input.value = '';
        }
      }>Add a cat</button>
    </div>
  );
};

CatManager = connect()(CatManager);

export default CatManager;
