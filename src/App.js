import React from 'react';
import './App.css';
import jsondata from './data.json'
import FilterableProductTable from './components/FilterableProductTable';

function App() {
  return (
    <div className="App">
       <h3>ironStore Search</h3>
      <FilterableProductTable products={ jsondata.data } />
    </div>
  );
}

export default App;
