import React from 'react';
import './App.css';

import Table from './Table/Table';

function App() {
  let tableObj = [
    { 
      id: 1,
      header: 'C-001',
      value: 'Intra Urban',
      check: true,
      children: [
        {
          id: 12,
          header: 'C-001',
          value: 'Intra Urban',
          check: false,
          children: [
            {
              id: 13,
              header: 'C-001',
              value: 'Intra Urban',
              check: true,
              children: []
            },
            {
              id: 23,
              header: 'C-001',
              value: 'Intra Urban',
              check: true,
              children: []
            },
            {
              id: 33,
              header: 'C-001',
              value: 'Intra Urban',
              check: true,
              children: []
            }
          ]   
        }
      ]
    },
    {
      id: 2,
      header: 'C-001',
      value: 'Intra Urban',
      check: true,
      children: []
    },
    {
      id: 3,
      header: 'C-001',
      value: 'Intra Urban',
      check: true,
      children: []
    }
  ];
  
  return (
    <div className="App">
      <Table data={tableObj}></Table>
    </div>
  );
}

export default App;
