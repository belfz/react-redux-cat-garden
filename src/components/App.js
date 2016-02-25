import React from 'react';
import CatManager from './CatManager';
import AvailableCatsList from './AvailableCatsList';
import AdoptedCatsList from './AdoptedCatsList';

const App = () => (
    <div>
      <CatManager />
      <div className="lists">
        <AvailableCatsList />
        <AdoptedCatsList />
      </div>
    </div>
);

export default App;
