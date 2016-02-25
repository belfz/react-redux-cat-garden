import React from 'react';
import { connect } from 'react-redux';

let AdoptedCatsList = ({cats}) => {
  let list = cats.map(c => {
    return (
        <div key={c.id}>
          <p>{c.name}</p>
        </div>
    );
  });

  return (
      <div className="catlist">
        <h4>adopted cats:</h4>
        {list}
      </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cats: state.catReducer.filter(c => c.adopted === true)
  };
};

AdoptedCatsList = connect(
    mapStateToProps
)(AdoptedCatsList);

export default AdoptedCatsList;
